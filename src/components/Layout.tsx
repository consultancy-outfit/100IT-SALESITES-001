import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { COMPANY_DETAILS, NAV_LINKS } from '../constants';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white transition-transform group-hover:scale-110">
                <Cpu size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                ECL <span className="text-indigo-600">IT</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                    location.pathname === link.path ? 'text-indigo-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95"
              >
                Get Started
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden rounded-lg p-2 text-slate-600 hover:bg-slate-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-100 bg-white"
            >
              <div className="space-y-1 px-4 py-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-slate-50 pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-6">
              <Link to="/" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-indigo-600 text-white">
                  <Cpu size={18} />
                </div>
                <span className="text-lg font-bold tracking-tight text-slate-900">
                  ECL <span className="text-indigo-600">IT</span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-slate-500">
                Empowering UK businesses through innovative IT solutions and strategic digital transformation. Regaining independence through technology.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Github size={20} /></a>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900">Quick Links</h3>
              <ul className="space-y-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/terms" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900">Contact Details</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-slate-500">
                  <MapPin size={18} className="shrink-0 text-indigo-600" />
                  <span>{COMPANY_DETAILS.address}</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-500">
                  <Phone size={18} className="shrink-0 text-indigo-600" />
                  <span>{COMPANY_DETAILS.phone}</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-500">
                  <Mail size={18} className="shrink-0 text-indigo-600" />
                  <span className="break-all">{COMPANY_DETAILS.email}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900">Company Info</h3>
              <div className="space-y-4 text-sm text-slate-500">
                <p><strong>Company Name:</strong><br />{COMPANY_DETAILS.name}</p>
                <p><strong>Registration Number (CRN):</strong><br />{COMPANY_DETAILS.crn}</p>
                <p><strong>VAT Number:</strong><br />{COMPANY_DETAILS.vat}</p>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-slate-200 pt-8 text-center">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved. Registered in England & Wales.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
