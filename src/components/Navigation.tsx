import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_DETAILS } from '../constants';
import { Logo } from '../assets';

export const Header = () => {
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
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt={COMPANY_DETAILS.name} className="h-20 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  location.pathname === link.path ? 'text-indigo-600' : 'text-zinc-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-zinc-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all shadow-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-600 p-2">
              {isOpen ? <X /> : <Menu />}
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
            className="md:hidden bg-white border-b border-zinc-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-zinc-600 hover:text-indigo-600 hover:bg-zinc-50 rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-20 pb-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img
                src={Logo}
                alt={COMPANY_DETAILS.name}
                className="h-20 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering British businesses with world-class IT infrastructure, cybersecurity, and strategic technology consulting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Managed IT Support</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Cybersecurity Solutions</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">IT Consulting</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Business Continuity</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-indigo-500 shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-indigo-500 shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-indigo-500 shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs space-y-2 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
            <p>Registered in England and Wales. Company No: {COMPANY_DETAILS.crn}</p>
          </div>
          <div className="flex space-x-6 text-xs">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
