/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Monitor, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_DETAILS } from '../constants';
import { cn } from '../utils';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Monitor className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Shared Lives <span className="text-indigo-600">IT</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-indigo-600",
                    location.pathname === item.path ? "text-indigo-600" : "text-slate-600"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <Link
                to="/contact"
                className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-sm hover:shadow-md"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
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
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "block px-3 py-4 text-base font-medium rounded-md",
                      location.pathname === item.path ? "bg-indigo-50 text-indigo-600" : "text-slate-600 hover:bg-slate-50"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="block w-full text-center bg-indigo-600 text-white px-4 py-3 rounded-xl font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
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
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="bg-indigo-600 p-2 rounded-lg">
                  <Monitor className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  Shared Lives <span className="text-indigo-400">IT</span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed mb-6">
                Empowering UK businesses with cutting-edge IT solutions, robust cybersecurity, and strategic consultancy. Your local partner for digital excellence.
              </p>
              <div className="flex space-x-4">
                {/* Social icons could go here */}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4 text-sm">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="hover:text-indigo-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">Our Services</h3>
              <ul className="space-y-4 text-sm">
                <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Managed IT Support</Link></li>
                <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Cloud Solutions</Link></li>
                <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Cybersecurity</Link></li>
                <li><Link to="/services" className="hover:text-indigo-400 transition-colors">IT Consultancy</Link></li>
                <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Network Infrastructure</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">Company Details</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-indigo-400 shrink-0" />
                  <span>{COMPANY_DETAILS.address}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-indigo-400 shrink-0" />
                  <span>{COMPANY_DETAILS.phone}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-indigo-400 shrink-0" />
                  <span>{COMPANY_DETAILS.email}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-indigo-400 shrink-0" />
                  <span>{COMPANY_DETAILS.hours}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
            <div className="text-slate-500">
              © {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved. Registered in England & Wales.
            </div>
            <div className="flex space-x-6 text-slate-500">
              <span>CRN: {COMPANY_DETAILS.crn}</span>
              <Link to="/privacy" className="hover:text-slate-300">Privacy</Link>
              <Link to="/terms" className="hover:text-slate-300">Terms</Link>
              <Link to="/cookies" className="hover:text-slate-300">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
