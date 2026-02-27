import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Server, Globe, Phone, Mail, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-slate-100 lg:border-none">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900 tracking-tight">
                  Tameside Supported Living
                </span>
              </Link>
            </div>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200",
                    isActive(link.href) 
                      ? "text-blue-600" 
                      : "text-slate-500 hover:text-slate-900"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:block ml-6">
              <Link
                to="/contact"
                className="inline-block bg-slate-900 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-slate-800 transition-colors"
              >
                Get Started
              </Link>
            </div>
            <div className="ml-10 space-x-4 lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-white p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open menu</span>
                {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="py-4 flex flex-col space-y-4 lg:hidden">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-base font-medium block px-4 py-2 rounded-md",
                    isActive(link.href)
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-900 hover:bg-slate-50"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-300" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 p-1.5 rounded-lg">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">
                  Tameside Supported Living
                </span>
              </div>
              <p className="text-sm text-slate-400 max-w-xs">
                Empowering UK businesses with robust, secure, and scalable IT solutions. Your technology partner for the digital age.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-100 tracking-wider uppercase">Services</h3>
              <ul className="mt-4 space-y-4">
                <li><Link to="/services" className="text-base hover:text-white">Managed IT</Link></li>
                <li><Link to="/services" className="text-base hover:text-white">Cyber Security</Link></li>
                <li><Link to="/services" className="text-base hover:text-white">Cloud Solutions</Link></li>
                <li><Link to="/services" className="text-base hover:text-white">Consultancy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-100 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><Link to="/privacy" className="text-base hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-base hover:text-white">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-800 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-100 mb-4">Company Details</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-start"><span className="font-medium text-slate-300 w-32 shrink-0">Company Name:</span> Tameside Supported Living</li>
                  <li className="flex items-start"><span className="font-medium text-slate-300 w-32 shrink-0">Registered Office:</span> N/A</li>
                  <li className="flex items-start"><span className="font-medium text-slate-300 w-32 shrink-0">Company Reg No:</span> N/A</li>
                  <li className="flex items-start"><span className="font-medium text-slate-300 w-32 shrink-0">Phone:</span> N/A</li>
                  <li className="flex items-start"><span className="font-medium text-slate-300 w-32 shrink-0">Email:</span> N/A</li>
                </ul>
              </div>
              <div className="md:text-right flex flex-col justify-end">
                <p className="text-base text-slate-400">
                  &copy; {new Date().getFullYear()} Tameside Supported Living. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
