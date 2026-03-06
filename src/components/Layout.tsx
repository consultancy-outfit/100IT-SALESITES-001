import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Linkedin, Twitter, Facebook } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import Icon from '../icon';

interface LayoutProps {
  children: React.ReactNode;
}

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About Us', path: '/about' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Contact', path: '/contact' },
];

export default function Layout({ children }: LayoutProps) {
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

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      {/* Header */}
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled 
            ? "bg-white/90 backdrop-blur-md py-3 border-slate-200 shadow-sm" 
            : "bg-transparent py-5 border-transparent"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
          <div className="h-8 flex items-center justify-center">
                  <Icon className="h-10 w-auto" />
                </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-indigo-600",
                  location.pathname === link.path ? "text-indigo-600" : "text-slate-600"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-indigo-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-2xl font-bold transition-colors",
                    location.pathname === link.path ? "text-indigo-600" : "text-slate-900"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="bg-indigo-600 text-white px-6 py-4 rounded-xl text-center font-bold text-lg"
              >
                Get a Quote
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
      <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="h-8 flex items-center justify-center">
                  <Icon className="h-12 w-auto" />
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Leading UK IT services provider delivering innovative technology solutions, robust cybersecurity, and managed support to businesses across the nation.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-slate-900 rounded-full hover:text-indigo-400 transition-colors"><Linkedin size={18} /></a>
                <a href="#" className="p-2 bg-slate-900 rounded-full hover:text-indigo-400 transition-colors"><Twitter size={18} /></a>
                <a href="#" className="p-2 bg-slate-900 rounded-full hover:text-indigo-400 transition-colors"><Facebook size={18} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-indigo-400 transition-colors flex items-center gap-2">
                      <ChevronRight size={14} /> {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/terms" className="hover:text-indigo-400 transition-colors flex items-center gap-2">
                    <ChevronRight size={14} /> Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-indigo-400 transition-colors flex items-center gap-2">
                    <ChevronRight size={14} /> Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-white mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin size={18} className="text-indigo-500 shrink-0" />
                  <span>{COMPANY_DETAILS.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="text-indigo-500 shrink-0" />
                  <span>{COMPANY_DETAILS.phone}</span>
                </li>
                <li className="flex gap-3">
                  <Mail size={18} className="text-indigo-500 shrink-0" />
                  <span>{COMPANY_DETAILS.email}</span>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-white mb-6">Company Details</h4>
              <div className="space-y-4 text-sm text-slate-400">
                <p>Company Name: <span className="text-slate-200">{COMPANY_DETAILS.name}</span></p>
                <p>CRN: <span className="text-slate-200">{COMPANY_DETAILS.crn}</span></p>
                <p>Registered in England & Wales</p>
                <div className="pt-4">
                  <p className="text-xs italic">Expert IT support for the modern British enterprise.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/terms" className="hover:text-slate-300">Terms</Link>
              <Link to="/privacy" className="hover:text-slate-300">Privacy</Link>
              <Link to="/cookies" className="hover:text-slate-300">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
