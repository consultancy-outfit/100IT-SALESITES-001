import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Cpu, ChevronRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
                <Cpu size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-stone-900 uppercase">
                Greater <span className="text-emerald-600">Manchester</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                    location.pathname === link.path ? 'text-emerald-600' : 'text-stone-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <Link
                to="/contact"
                className="bg-stone-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-stone-600"
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
              className="md:hidden bg-white border-b border-stone-200 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-lg font-medium text-stone-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="block w-full text-center bg-emerald-600 text-white py-3 rounded-xl font-medium"
                  onClick={() => setIsMenuOpen(false)}
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
      <footer className="bg-stone-900 text-stone-400 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
                  <Cpu size={20} />
                </div>
                <span className="text-lg font-bold tracking-tight text-white uppercase">
                  Greater <span className="text-emerald-600">Manchester</span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed">
                Empowering British businesses with cutting-edge IT solutions, robust cybersecurity, and strategic technology consultancy.
              </p>
              <div className="flex space-x-4">
                {/* Social placeholders */}
                <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-xs font-bold">in</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-xs font-bold">X</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-emerald-500 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link to="/terms" className="hover:text-emerald-500 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-emerald-500 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-emerald-500 transition-colors">
                    Service Level Agreement
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>{COMPANY_DETAILS.address}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={18} className="text-emerald-500 shrink-0" />
                  <span>{COMPANY_DETAILS.phone}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={18} className="text-emerald-500 shrink-0" />
                  <span>{COMPANY_DETAILS.email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-800 text-xs flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 text-center md:text-left">
              <span>&copy; {new Date().getFullYear()} {COMPANY_DETAILS.name} Ltd. All rights reserved.</span>
              <span>Company Registration Number: {COMPANY_DETAILS.crn}</span>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="hover:text-white">Cookies</Link>
              <Link to="/terms" className="hover:text-white">Security</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
