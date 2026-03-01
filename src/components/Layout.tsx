import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, MapPin, Shield, CheckCircle2, Linkedin, Twitter, Facebook } from 'lucide-react';

const COMPANY_DETAILS = {
  name: "Island Business Centre",
  address: "15 Queens Road, Donnington, Telford, England, TF2 8DB",
  crn: "17049338",
  phone: "0208 088 5943",
  email: "info@islandbusinesscentre.co.uk",
  hours: "Mon - Fri: 09:00 - 17:30"
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            I
          </div>
          <span className={`font-bold text-xl tracking-tight ${!isScrolled && location.pathname === '/' ? 'text-white' : 'text-slate-900'}`}>
            Island Business Centre
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                !isScrolled && location.pathname === '/' ? 'text-white/90' : 'text-slate-600'
              } ${location.pathname === link.path ? '!text-brand-600' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu className={!isScrolled && location.pathname === '/' ? 'text-white' : 'text-slate-900'} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-medium ${location.pathname === link.path ? 'text-brand-600' : 'text-slate-600'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-brand-600 text-white px-5 py-3 rounded-xl text-center font-semibold"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-500 rounded flex items-center justify-center text-white font-bold">I</div>
              <span className="text-white font-bold text-lg">Island Business Centre</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering British businesses with world-class IT infrastructure, cybersecurity, and managed services. Your trusted technology partner in the UK.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">GDPR Compliance</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Details</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <Phone size={18} className="text-brand-400 shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-brand-400 shrink-0" />
                <span className="break-all">{COMPANY_DETAILS.email}</span>
              </li>
              <li className="flex gap-3">
                <MapPin size={18} className="text-brand-400 shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex gap-3">
                <Shield size={18} className="text-brand-400 shrink-0" />
                <span>CRN: {COMPANY_DETAILS.crn}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs space-y-4">
          <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 opacity-60">
            <span>Registered Office: {COMPANY_DETAILS.address}</span>
            <span>Company Registration Number: {COMPANY_DETAILS.crn}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
