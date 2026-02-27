import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Monitor, Shield, Cloud, Cpu, PhoneCall, Mail, MapPin, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';
import { cn } from '../constants';

export const Navbar = () => {
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
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                CG
              </div>
              <span className="text-xl font-display font-bold text-slate-900 hidden sm:block">
                City Gate House
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
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
              className="bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all shadow-md shadow-brand-200"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  location.pathname === link.path
                    ? "bg-brand-50 text-brand-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-brand-600"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-500 rounded flex items-center justify-center text-white font-bold">
                CG
              </div>
              <span className="text-xl font-display font-bold text-white">
                City Gate House
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering UK businesses with cutting-edge IT solutions. From cloud migration to cybersecurity, we are your trusted technology partner in the heart of London.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-brand-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">IT Services</Link></li>
              <li><Link to="/about" className="hover:text-brand-400 transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-400 transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="hover:text-brand-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Expertise</h4>
            <ul className="space-y-4 text-sm">
              <li>Managed IT Support</li>
              <li>Cloud Infrastructure</li>
              <li>Cybersecurity Solutions</li>
              <li>Disaster Recovery</li>
              <li>IT Consultancy</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-6">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-400 shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneCall size={18} className="text-brand-400 shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-400 shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-xs space-y-2">
              <p>&copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-500">
                <span>CRN: {COMPANY_DETAILS.crn}</span>
                <span>VAT: {COMPANY_DETAILS.vat}</span>
                <Link to="/terms" className="hover:text-slate-300">Terms & Conditions</Link>
                <Link to="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
              </div>
            </div>
            <div className="md:text-right">
              <p className="text-xs text-slate-500">
                Registered in England and Wales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
