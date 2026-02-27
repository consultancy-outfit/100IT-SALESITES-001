import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-indigo-600 rounded-lg group-hover:bg-indigo-700 transition-colors">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-zinc-900 tracking-tight">
                SLS <span className="text-indigo-600">Uxbridge</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-indigo-600",
                  location.pathname === link.href ? "text-indigo-600" : "text-zinc-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-sm hover:shadow-md"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-zinc-500 hover:bg-zinc-100 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-4 text-base font-medium rounded-md",
                    location.pathname === link.href
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-5 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Cpu className="w-8 h-8 text-indigo-500" />
              <span className="text-2xl font-bold text-white tracking-tight">
                Supported Living Services Uxbridge
              </span>
            </Link>
            <p className="max-w-md text-zinc-400 leading-relaxed">
              Leading the way in British IT excellence. We provide bespoke technology solutions 
              designed to empower businesses across the United Kingdom with secure, scalable, 
              and innovative infrastructure.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-indigo-400 transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-xs">Company Details</h4>
              <div className="space-y-2 text-sm">
                <p><span className="text-zinc-500">Company Name:</span> Supported Living Services Uxbridge</p>
                <p><span className="text-zinc-500">Registered Office Address (UK):</span> not available</p>
                <p><span className="text-zinc-500">Company Registration Number (CRN):</span> not available</p>
                <p><span className="text-zinc-500">UK Phone Number:</span> not available</p>
                <p><span className="text-zinc-500">Official Business Email:</span> not available</p>
              </div>
            </div>
            <div className="md:text-right">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Supported Living Services Uxbridge. All rights reserved.
              </p>
              <p className="text-xs mt-2 text-zinc-600">
                Registered in England and Wales. VAT registered where applicable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
