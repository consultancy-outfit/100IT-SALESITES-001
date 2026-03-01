import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Monitor, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { COMPANY_DETAILS } from '../constants';

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
              <Monitor size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Fradel<span className="text-sky-600">Lodge</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex md:items-center md:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-sky-600",
                  location.pathname === item.path ? "text-sky-600" : "text-slate-600"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary py-2 px-4 text-sm">
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-100 bg-white"
          >
            <div className="space-y-1 px-4 pb-6 pt-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "block rounded-md px-3 py-4 text-base font-medium",
                    location.pathname === item.path ? "bg-slate-50 text-sky-600" : "text-slate-600"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="btn-primary w-full block text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-slate-900 text-white">
                <Monitor size={18} />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Fradel<span className="text-sky-600">Lodge</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              Premium IT services and managed solutions for businesses across the United Kingdom. Credible, professional, and secure.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-sm text-slate-600 hover:text-sky-600">Services</Link></li>
              <li><Link to="/about" className="text-sm text-slate-600 hover:text-sky-600">About Us</Link></li>
              <li><Link to="/pricing" className="text-sm text-slate-600 hover:text-sky-600">Pricing</Link></li>
              <li><Link to="/contact" className="text-sm text-slate-600 hover:text-sky-600">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-sm text-slate-600 hover:text-sky-600">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-sm text-slate-600 hover:text-sky-600">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>{COMPANY_DETAILS.phone}</li>
              <li>{COMPANY_DETAILS.email}</li>
              <li>{COMPANY_DETAILS.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="text-xs text-slate-500 space-y-1">
              <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name} IT Services. All rights reserved.</p>
              <p>Registered Office: {COMPANY_DETAILS.address}</p>
              <p>Company Registration Number (CRN): {COMPANY_DETAILS.crn}</p>
            </div>
            <div className="flex md:justify-end items-center gap-4 text-xs text-slate-500">
              <span>Made in the UK</span>
              <div className="h-4 w-6 bg-blue-800 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                   {/* Simplified Union Jack representation */}
                   <div className="absolute w-full h-1 bg-white rotate-45"></div>
                   <div className="absolute w-full h-1 bg-white -rotate-45"></div>
                   <div className="absolute w-full h-1 bg-white"></div>
                   <div className="absolute w-1 h-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
