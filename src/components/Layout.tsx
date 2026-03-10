import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, Shield, ExternalLink } from 'lucide-react';
import { Logo } from './assets';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const COMPANY_DETAILS = {
  name: "Mavyl Lodge",
  brand: "Mavyl Lodge",
  address: "160a Croydon Road, Caterham, England, CR3 6QE",
  crn: "17046244",
  phone: "0189 564 6130",
  email: "Info@mavyllodge.co.uk",
  hours: "Mon - Fri: 09:00 - 18:00"
};

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 glass">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img src={Logo} alt="Mavyl Lodge" className="h-14 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-indigo-600",
                  location.pathname === link.path ? "text-indigo-600" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="p-6 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "text-lg font-medium",
                      location.pathname === link.path ? "text-indigo-600" : "text-slate-600"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-center font-semibold"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={Logo} alt="Mavyl Lodge" className="h-14 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed">
              Empowering UK businesses with cutting-edge IT solutions, robust cybersecurity, and scalable cloud infrastructure. Your trusted partner in digital transformation.
            </p>
            <div className="flex gap-4">
              <Shield className="text-indigo-400" size={20} />
              <span className="text-xs uppercase tracking-widest font-semibold text-slate-500">GDPR Compliant</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-indigo-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li><Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <Phone size={18} className="text-indigo-400 shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-indigo-400 shrink-0" />
                <span className="break-all">{COMPANY_DETAILS.email}</span>
              </li>
              <li className="flex gap-3">
                <MapPin size={18} className="text-indigo-400 shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
            </ul>
          </div>

          {/* Company Details */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company Details</h4>
            <div className="space-y-4 text-xs leading-relaxed">
              <p><span className="text-slate-500 block">Legal Name:</span> {COMPANY_DETAILS.name}</p>
              <p><span className="text-slate-500 block">Registration Number:</span> {COMPANY_DETAILS.crn}</p>
              <p><span className="text-slate-500 block">Registered Office:</span> {COMPANY_DETAILS.address}</p>
              <p><span className="text-slate-500 block">Business Hours:</span> {COMPANY_DETAILS.hours}</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} {COMPANY_DETAILS.brand}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
