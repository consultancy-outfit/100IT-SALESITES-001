import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'motion/react';

const COMPANY_DETAILS = {
  name: 'SeeAbility Oxfordshire South Support Service',
  address: 'N/A',
  crn: 'N/A',
  phone: 'N/A',
  email: 'N/A',
};

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact Us', path: '/contact' },
  ];

  // Close menu on route change
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-slate-900 leading-tight tracking-tight">
                  SeeAbility
                </span>
                <span className="text-[10px] font-semibold text-teal-600 uppercase tracking-wider hidden sm:block">
                  Oxfordshire South Support Service
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={clsx(
                    'text-sm font-medium transition-colors duration-200 hover:text-teal-600',
                    location.pathname === link.path
                      ? 'text-teal-600'
                      : 'text-slate-600'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-slate-600 hover:text-teal-600 hover:bg-slate-100 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-200 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={clsx(
                      'block px-3 py-3 rounded-md text-base font-medium transition-colors',
                      location.pathname === link.path
                        ? 'text-teal-600 bg-teal-50'
                        : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
                    )}
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
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4">SeeAbility</h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Providing world-class IT solutions tailored for UK businesses. 
                Secure, reliable, and future-ready technology services.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="hover:text-teal-400 transition-colors">Our Services</Link></li>
                <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
                <li><Link to="/pricing" className="hover:text-teal-400 transition-colors">Pricing Plans</Link></li>
                <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact Support</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/terms" className="hover:text-teal-400 transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/privacy" className="hover:text-teal-400 transition-colors">Cookie Policy</Link></li>
                <li><Link to="/privacy" className="hover:text-teal-400 transition-colors">GDPR Compliance</Link></li>
              </ul>
            </div>

            {/* Contact Details (Required) */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Contact Details</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <MapPin size={16} className="mt-1 mr-2 text-teal-400 shrink-0" />
                  <span>{COMPANY_DETAILS.address}</span>
                </li>
                <li className="flex items-center">
                  <Phone size={16} className="mr-2 text-teal-400 shrink-0" />
                  <span>{COMPANY_DETAILS.phone}</span>
                </li>
                <li className="flex items-center">
                  <Mail size={16} className="mr-2 text-teal-400 shrink-0" />
                  <span>{COMPANY_DETAILS.email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 mt-8 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
              <p className="mt-1">Company Registration Number: {COMPANY_DETAILS.crn}</p>
            </div>
            <div className="flex space-x-6">
              <span>UK-Based Service</span>
              <span>ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
