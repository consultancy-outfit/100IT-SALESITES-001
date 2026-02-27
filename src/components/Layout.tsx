import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_DETAILS, ROUTES } from '../constants';
import { Menu, X, Cpu, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: ROUTES.HOME },
    { name: 'Services', path: ROUTES.SERVICES },
    { name: 'About Us', path: ROUTES.ABOUT },
    { name: 'Pricing', path: ROUTES.PRICING },
    { name: 'Contact', path: ROUTES.CONTACT },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Cpu className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-zinc-900 tracking-tight">Supremacy<span className="text-indigo-600">Care</span></span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
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
            <Link
              to={ROUTES.CONTACT}
              className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-600 hover:text-zinc-900 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              <Link
                to={ROUTES.CONTACT}
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-indigo-600 text-white px-3 py-4 rounded-lg text-base font-medium"
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
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-zinc-900 tracking-tight">Supremacy<span className="text-indigo-600">Care</span></span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Leading the way in British IT excellence. Providing bespoke technology solutions for modern enterprises across Hampshire and the UK.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-400 hover:text-indigo-600 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-400 hover:text-indigo-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-400 hover:text-indigo-600 transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-zinc-900 font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to={ROUTES.SERVICES} className="text-zinc-500 hover:text-indigo-600 text-sm transition-colors">Our Services</Link></li>
              <li><Link to={ROUTES.ABOUT} className="text-zinc-500 hover:text-indigo-600 text-sm transition-colors">About Us</Link></li>
              <li><Link to={ROUTES.PRICING} className="text-zinc-500 hover:text-indigo-600 text-sm transition-colors">Pricing Plans</Link></li>
              <li><Link to={ROUTES.CONTACT} className="text-zinc-500 hover:text-indigo-600 text-sm transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-zinc-900 font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link to={ROUTES.TERMS} className="text-zinc-500 hover:text-indigo-600 text-sm transition-colors">Terms & Conditions</Link></li>
              <li><Link to={ROUTES.PRIVACY} className="text-zinc-500 hover:text-indigo-600 text-sm transition-colors">Privacy Policy</Link></li>
              <li><span className="text-zinc-500 text-sm">GDPR Compliance</span></li>
              <li><span className="text-zinc-500 text-sm">Cyber Essentials</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-zinc-900 font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span className="text-zinc-500 text-sm">{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-indigo-600 shrink-0" />
                <span className="text-zinc-500 text-sm">{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-indigo-600 shrink-0" />
                <span className="text-zinc-500 text-sm">{COMPANY_DETAILS.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-zinc-400 text-xs text-center md:text-left space-y-1">
            <p>&copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
            <p>Registered Office Address (UK): {COMPANY_DETAILS.address}</p>
            <p>Company Registration Number (CRN): {COMPANY_DETAILS.crn}</p>
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-zinc-400 text-xs">VAT: {COMPANY_DETAILS.vat}</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-zinc-500 text-xs font-medium">Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
