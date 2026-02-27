import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Monitor, Mail, Phone, MapPin, Shield, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_DETAILS } from '../constants';
import { cn } from '../lib/utils';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white group-hover:bg-brand-accent transition-colors">
              <Monitor size={24} />
            </div>
            <span className="text-xl font-bold tracking-tighter">
              ROSEWOOD<span className="text-brand-accent">LODGE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-accent",
                  location.pathname === link.path ? "text-brand-accent" : "text-brand-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-brand-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-accent transition-all hover:shadow-lg"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-brand-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "text-lg font-medium py-2",
                      location.pathname === link.path ? "text-brand-accent" : "text-brand-primary"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link 
                  to="/contact" 
                  className="bg-brand-primary text-white px-5 py-3 rounded-xl text-center font-semibold"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-primary text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-accent rounded flex items-center justify-center text-white">
                  <Monitor size={18} />
                </div>
                <span className="text-lg font-bold tracking-tighter">
                  ROSEWOOD<span className="text-brand-accent">LODGE</span>
                </span>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed">
                Premium IT services for UK businesses. We provide the technology and support you need to thrive in a digital-first world.
              </p>
              <div className="flex items-center gap-2 text-brand-accent">
                <Shield size={16} />
                <span className="text-xs font-semibold uppercase tracking-wider">GDPR Compliant</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-slate-400 hover:text-brand-accent transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-6">Our Services</h4>
              <ul className="space-y-4">
                <li><Link to="/services" className="text-slate-400 hover:text-brand-accent transition-colors text-sm">Managed IT Support</Link></li>
                <li><Link to="/services" className="text-slate-400 hover:text-brand-accent transition-colors text-sm">Cloud Solutions</Link></li>
                <li><Link to="/services" className="text-slate-400 hover:text-brand-accent transition-colors text-sm">Cyber Security</Link></li>
                <li><Link to="/services" className="text-slate-400 hover:text-brand-accent transition-colors text-sm">IT Consultancy</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-6">Company Details</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm text-slate-400">
                  <MapPin size={18} className="text-brand-accent shrink-0" />
                  <span>{COMPANY_DETAILS.address}</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-400">
                  <Phone size={18} className="text-brand-accent shrink-0" />
                  <span>{COMPANY_DETAILS.phone}</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-400">
                  <Mail size={18} className="text-brand-accent shrink-0" />
                  <span>{COMPANY_DETAILS.email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xs text-slate-500 space-y-1">
              <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
              <p>Company Registration Number (CRN): {COMPANY_DETAILS.crn}</p>
            </div>
            <div className="flex gap-6">
              <Link to="/terms" className="text-xs text-slate-500 hover:text-white transition-colors">Terms & Conditions</Link>
              <Link to="/privacy" className="text-xs text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
