import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Laptop, Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_DETAILS } from '../constants';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Laptop className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-display font-bold text-primary hidden sm:block">
              Support Health Care
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  location.pathname === link.href ? "text-accent" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-lg font-medium text-slate-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block w-full text-center bg-primary text-white py-3 rounded-xl font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Laptop className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-display font-bold text-primary">
                Support Health Care
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Leading IT services provider in Middlesbrough, delivering enterprise-grade technology solutions for healthcare and corporate sectors across the UK.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-slate-400 hover:text-accent cursor-pointer" />
              <Twitter className="w-5 h-5 text-slate-400 hover:text-accent cursor-pointer" />
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-accent cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-sm text-slate-500 hover:text-accent">Services</Link></li>
              <li><Link to="/about" className="text-sm text-slate-500 hover:text-accent">About Us</Link></li>
              <li><Link to="/pricing" className="text-sm text-slate-500 hover:text-accent">Pricing</Link></li>
              <li><Link to="/contact" className="text-sm text-slate-500 hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/terms" className="text-sm text-slate-500 hover:text-accent">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-sm text-slate-500 hover:text-accent">Privacy Policy</Link></li>
              <li><Link to="/privacy" className="text-sm text-slate-500 hover:text-accent">GDPR Compliance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary mb-6">Company Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-slate-500">
                  {COMPANY_DETAILS.name}<br />
                  {COMPANY_DETAILS.address}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-slate-500">{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-slate-500">{COMPANY_DETAILS.email}</span>
              </li>
              <li className="pt-2">
                <p className="text-xs text-slate-400">CRN: {COMPANY_DETAILS.crn}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-slate-400">
            © {currentYear} {COMPANY_DETAILS.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Registered in England & Wales.
          </p>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
