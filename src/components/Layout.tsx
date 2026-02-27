import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Shield, Cpu, Globe, ArrowRight, Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const COMPANY_DETAILS = {
  name: "Wickham Hall IT Services Ltd",
  address: "Wickham Hall, Hadham Road, Bishop's Stortford, Hertfordshire, CM23 1JG, United Kingdom",
  crn: "12849562",
  phone: "+44 (0) 1279 506000",
  email: "solutions@wickhamhall.it",
  hours: "Mon - Fri: 08:30 - 18:00"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Cpu className="text-white w-6 h-6" />
                </div>
                <span className="text-xl font-display font-bold text-slate-900">Wickham Hall</span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'text-indigo-600' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-indigo-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-slate-900"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-1"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-indigo-600 text-white px-5 py-3 rounded-lg font-medium mt-4"
            >
              Get a Quote
            </Link>
          </motion.div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Cpu className="text-indigo-400 w-8 h-8" />
                <span className="text-2xl font-display font-bold text-white">Wickham Hall</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Empowering British businesses through innovative IT solutions, robust cybersecurity, and strategic technology consultancy.
              </p>
              <div className="flex space-x-4">
                <Shield className="w-5 h-5 text-indigo-400" />
                <Globe className="w-5 h-5 text-indigo-400" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="hover:text-indigo-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/pricing" className="hover:text-indigo-400 transition-colors">Pricing Plans</Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-bold mb-6">Legal</h3>
              <ul className="space-y-4">
                <li><Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/privacy#gdpr" className="hover:text-indigo-400 transition-colors">GDPR Compliance</Link></li>
                <li><Link to="/terms#cookies" className="hover:text-indigo-400 transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-indigo-400 shrink-0 mt-1" />
                  <span className="text-sm">{COMPANY_DETAILS.address}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span className="text-sm">{COMPANY_DETAILS.phone}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span className="text-sm">{COMPANY_DETAILS.email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="text-xs text-slate-500 space-y-1">
                <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
                <p>Company Registration Number (CRN): {COMPANY_DETAILS.crn}</p>
                <p>Registered in England and Wales.</p>
              </div>
              <div className="flex md:justify-end space-x-6 text-xs text-slate-500">
                <span>VAT Registered: GB 123 4567 89</span>
                <span>ISO 27001 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
