import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Monitor, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_DETAILS } from '../constants';
import { cn } from '../utils';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white group-hover:bg-indigo-700 transition-colors">
                <ShieldCheck size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                  SENSE
                </span>
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-tighter">
                  Supported Living Services
                </span>
              </div>
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
                className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-sm hover:shadow-md active:scale-95"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-600"
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
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-lg font-medium text-slate-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="block w-full bg-indigo-600 text-white text-center py-3 rounded-lg font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-500 rounded flex items-center justify-center text-white">
                  <ShieldCheck size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-tight text-white leading-none">
                    SENSE
                  </span>
                  <span className="text-[8px] font-bold text-indigo-400 uppercase tracking-tighter">
                    Supported Living Services
                  </span>
                </div>
              </Link>
              <p className="text-sm leading-relaxed text-slate-400">
                Specialized IT infrastructure and software solutions for the care sector across the West Midlands. Credible, reliable, and human-centric.
              </p>
              <div className="flex items-center gap-2 text-indigo-400">
                <ShieldCheck size={16} />
                <span className="text-xs font-semibold uppercase tracking-wider">GDPR Compliant</span>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-indigo-400 shrink-0" />
                  <span>{COMPANY_DETAILS.phone}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-indigo-400 shrink-0" />
                  <span className="break-all">{COMPANY_DETAILS.email}</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-indigo-400 shrink-0" />
                  <span>{COMPANY_DETAILS.address}</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Business Hours</h4>
              <p className="text-sm text-slate-400 mb-4">{COMPANY_DETAILS.hours}</p>
              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <p className="text-xs text-slate-500 uppercase font-bold mb-1">Emergency Support</p>
                <p className="text-sm text-white font-medium">24/7 Support for Pro & Enterprise Clients</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Company Details</p>
                <p className="text-sm font-medium text-white">{COMPANY_DETAILS.name}</p>
                <p className="text-xs text-slate-400">Registered Office: {COMPANY_DETAILS.address}</p>
                <p className="text-xs text-slate-400">Registered in England & Wales | CRN: {COMPANY_DETAILS.crn}</p>
              </div>
              <div className="md:text-right">
                <p className="text-xs text-slate-500">
                  &copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
