import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, Phone, Mail, MapPin, ChevronRight, Linkedin, Twitter, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_DETAILS } from '../constants';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">St Anne's IT</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  location.pathname === link.path ? 'text-indigo-600' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-indigo-600 text-white px-6 py-3 rounded-xl text-base font-semibold"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Cpu className="h-8 w-8 text-indigo-500" />
              <span className="text-2xl font-bold text-white tracking-tight">St Anne's IT</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Delivering world-class IT solutions to businesses across the UK. Professional, reliable, and forward-thinking technology partners.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-indigo-400 transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-6">Legal</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-indigo-400 transition-colors">Cookie Policy</Link></li>
              <li><Link to="/gdpr" className="hover:text-indigo-400 transition-colors">GDPR Compliance</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-indigo-500 shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-indigo-500 shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-indigo-500 shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Company Details Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-500">
            <div className="space-y-1">
              <p className="font-semibold text-gray-400 uppercase tracking-wider">Company Details</p>
              <p>Company Name: {COMPANY_DETAILS.name}</p>
              <p>Registered Office: {COMPANY_DETAILS.address}</p>
              <p>Company Registration Number (CRN): {COMPANY_DETAILS.crn}</p>
            </div>
            <div className="md:text-right flex flex-col justify-end">
              <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
              <p>VAT registered where applicable. All prices in GBP (£).</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
