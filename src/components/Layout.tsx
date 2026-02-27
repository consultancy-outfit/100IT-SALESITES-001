import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-brand-600" />
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Walfinch<span className="text-brand-600">Eastbourne</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                  location.pathname === link.path ? 'text-brand-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all shadow-sm hover:shadow-md"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
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
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-slate-600 hover:text-brand-600"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-brand-600 text-white px-5 py-3 rounded-xl text-sm font-semibold"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <Shield className="w-8 h-8 text-brand-400" />
              <span className="text-xl font-bold tracking-tight">
                Walfinch<span className="text-brand-400">Eastbourne</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Premium IT services and managed support for businesses across East Sussex and the UK. Empowering your growth through secure, scalable technology.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-brand-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-brand-400 transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-400 transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-brand-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/terms" className="hover:text-brand-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/gdpr" className="hover:text-brand-400 transition-colors">GDPR Compliance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Details</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col">
                <span className="text-slate-500 uppercase text-[10px] font-bold tracking-wider mb-1">Address</span>
                <span>#####</span>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-500 uppercase text-[10px] font-bold tracking-wider mb-1">Phone</span>
                <span>#####</span>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-500 uppercase text-[10px] font-bold tracking-wider mb-1">CRN</span>
                <span>#####</span>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-500 uppercase text-[10px] font-bold tracking-wider mb-1">Email</span>
                <span>info@walfincheastbourne.co.uk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px] text-slate-500">
            <div className="space-y-1">
              <p>© {currentYear} Walfinch Eastbourne. All rights reserved.</p>
              <p>Walfinch Eastbourne is a trading name of Walfinch IT Solutions Ltd.</p>
            </div>
            <div className="md:text-right space-y-1">
              <p>Registered Office: Unit 4, Eastbourne Business Park, Eastbourne, BN23 6PW</p>
              <p>Company Registration Number: 12345678 | Registered in England & Wales</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
