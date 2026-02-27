import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Monitor, Shield, Cloud, Cpu, Phone } from 'lucide-react';
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
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center">
              <Cpu className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-zinc-900">BASILDON IT</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-zinc-900 ${
                  location.pathname === link.path ? 'text-zinc-900' : 'text-zinc-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-600 hover:text-zinc-900 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="md:hidden bg-white border-b border-zinc-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-zinc-900 text-white px-3 py-4 rounded-lg text-base font-medium"
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
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-zinc-900 rounded flex items-center justify-center">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-lg tracking-tight text-zinc-900">BASILDON IT</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Premium IT services for British businesses. We provide the infrastructure and security you need to scale with confidence.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-900 mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-zinc-500 hover:text-zinc-900 text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-zinc-500 hover:text-zinc-900 text-sm">Services</Link></li>
              <li><Link to="/pricing" className="text-zinc-500 hover:text-zinc-900 text-sm">Pricing</Link></li>
              <li><Link to="/contact" className="text-zinc-500 hover:text-zinc-900 text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 mb-6 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/terms" className="text-zinc-500 hover:text-zinc-900 text-sm">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-zinc-500 hover:text-zinc-900 text-sm">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 mb-6 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-zinc-400 mt-0.5" />
                <span className="text-zinc-500 text-sm">#####</span>
              </li>
              <li className="flex items-start space-x-3">
                <Monitor className="w-4 h-4 text-zinc-400 mt-0.5" />
                <span className="text-zinc-500 text-sm">info@basildonsupportedlivingservice.co.uk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-zinc-400 text-xs leading-relaxed">
              <p className="font-semibold text-zinc-600 mb-2">Company Details:</p>
              <p>Company Name: Basildon Supported Living Service</p>
              <p>Registered Office Address (UK): #####</p>
              <p>Company Registration Number (CRN): #####</p>
              <p>UK Phone Number: #####</p>
              <p>Official Business Email: info@basildonsupportedlivingservice.co.uk</p>
            </div>
            <div className="flex md:justify-end items-end">
              <p className="text-zinc-400 text-xs">
                &copy; {new Date().getFullYear()} Basildon Supported Living Service. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
