import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { COMPANY_DETAILS, NAVIGATION_LINKS, LEGAL_LINKS } from '../constants';
import HowseGardenLogo from '../assets/Howse_Garden.svg';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={HowseGardenLogo}
              alt={`${COMPANY_DETAILS.name} logo`}
              className="h-22 w-auto"
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-600",
                  location.pathname === link.path ? "text-brand-600" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brand-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-lg font-medium text-slate-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block w-full bg-brand-600 text-white text-center px-6 py-3 rounded-xl font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
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
    <footer className="bg-white text-slate-600 pt-20 pb-10 border-t border-brand-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
          
                <img
                  src={HowseGardenLogo}
                  alt={`${COMPANY_DETAILS.name} logo`}
                  className="h-22 w-auto"
                  loading="lazy"
                  decoding="async"
                />
           
            </Link>
            <p className="text-sm leading-relaxed ">
              Leading UK IT services provider delivering innovative technology solutions to help businesses thrive in a digital-first world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-brand-700 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-brand-700 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-brand-700 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              {LEGAL_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-brand-700 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-500 shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-500 shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-500 shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
            <p className="mt-1 opacity-60">Company Registration Number: {COMPANY_DETAILS.crn} | Registered in England & Wales</p>
          </div>
          <div className="flex items-center space-x-6">
            <span>GDPR Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};
