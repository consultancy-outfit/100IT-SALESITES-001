import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, Mail, Phone, MapPin, ChevronRight, Linkedin, Twitter, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const COMPANY_DETAILS = {
  name: 'Jackson Gardens',
  address: '####',
  crn: '####',
  phone: '####',
  email: 'info@jacksongardens.co.uk',
  hours: '####',
};

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'
        )}
      >
        <div className="container-custom flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-500/20 group-hover:scale-110 transition-transform">
              <Cpu size={24} />
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-slate-900">
              Jackson<span className="text-brand-600">Gardens</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-brand-600',
                  location.pathname === link.path ? 'text-brand-600' : 'text-slate-600'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/25 active:scale-95"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-brand-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden pt-24 px-4 bg-white"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-2xl font-display font-semibold transition-colors',
                    location.pathname === link.path ? 'text-brand-600' : 'text-slate-900'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-brand-600 text-white px-6 py-4 rounded-2xl text-center font-semibold text-lg shadow-lg shadow-brand-500/25"
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand & Info */}
            <div className="space-y-6">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white">
                  <Cpu size={20} />
                </div>
                <span className="text-xl font-display font-bold tracking-tight text-white">
                  Jackson<span className="text-brand-400">Gardens</span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-slate-400">
                Empowering British businesses with world-class IT solutions. From cloud infrastructure to cybersecurity, we are your trusted technology partner in the UK.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all">
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-brand-400 transition-colors flex items-center gap-2 group">
                      <ChevronRight size={14} className="text-brand-600 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin size={18} className="text-brand-500 shrink-0" />
                  <span>{COMPANY_DETAILS.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="text-brand-500 shrink-0" />
                  <span>{COMPANY_DETAILS.phone}</span>
                </li>
                <li className="flex gap-3">
                  <Mail size={18} className="text-brand-500 shrink-0" />
                  <span>{COMPANY_DETAILS.email}</span>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link to="/terms" className="hover:text-brand-400 transition-colors">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-brand-400 transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/gdpr" className="hover:text-brand-400 transition-colors">GDPR Compliance</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
              <div className="text-center md:text-left space-y-1">
                <p>&copy; {new Date().getFullYear()} {COMPANY_DETAILS.name} IT Services. All rights reserved.</p>
                <p>Company Registration Number (CRN): {COMPANY_DETAILS.crn} | Registered in England & Wales</p>
              </div>
              <div className="flex gap-6">
                <span>VAT Registered: GB 123 4567 89</span>
                <span>Secure Payments in GBP (£)</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
