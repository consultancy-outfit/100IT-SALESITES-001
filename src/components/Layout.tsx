import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { COMPANY_DETAILS, NAVIGATION_LINKS, LEGAL_LINKS } from '../constants';
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
            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-display font-bold text-xl">HG</span>
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-slate-900">
              Howse<span className="text-brand-600">Garden</span>
            </span>
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
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">HG</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Howse<span className="text-brand-600">Garden</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Leading UK IT services provider delivering innovative technology solutions to help businesses thrive in a digital-first world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-brand-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              {LEGAL_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-brand-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
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

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
            <p className="mt-1 opacity-60">Company Registration Number: {COMPANY_DETAILS.crn} | Registered in England & Wales</p>
          </div>
          <div className="flex items-center space-x-6">
            <span>VAT Registration: GB 928 3746 55</span>
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
