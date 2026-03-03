import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_DETAILS } from '../constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-brand-primary p-2 rounded-lg group-hover:bg-brand-accent transition-colors">
            <Cpu className="w-6 h-6 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">
            Worksop <span className="text-brand-accent">IT</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-brand-accent ${location.pathname === link.path ? 'text-brand-accent' : 'text-slate-600'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="bg-brand-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-brand-primary/10">
            Get Started
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-700 hover:text-brand-accent"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-brand-primary text-white text-center py-3 rounded-xl font-bold"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-brand-accent p-2 rounded-lg">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Worksop <span className="text-brand-accent">IT</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Empowering UK care providers and businesses through innovative IT infrastructure, security, and managed services.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-brand-accent transition-colors cursor-pointer">
                  <div className="w-4 h-4 bg-slate-600 rounded-sm" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">IT Services</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-accent transition-colors">Pricing Plans</Link></li>
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Our Mission</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <span className="break-all">{COMPANY_DETAILS.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Stay updated with the latest IT security trends in the UK.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-brand-accent" />
              <button className="bg-brand-accent text-white p-2 rounded-lg hover:bg-sky-500 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 text-sm text-slate-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-2">
              <p>&copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <p>CRN: {COMPANY_DETAILS.crn}</p>
                <p>VAT: {COMPANY_DETAILS.vatNumber}</p>
              </div>
            </div>
            <div className="flex md:justify-end gap-6">
              <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
