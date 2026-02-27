import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Shield, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200 group-hover:scale-105 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none text-slate-900">Swanton Community Services</span>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Suffolk</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                    location.pathname === link.path ? 'text-indigo-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm"
              >
                Get Started
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-200 bg-white overflow-hidden"
            >
              <nav className="flex flex-col p-4 gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-lg text-sm font-medium ${
                      location.pathname === link.path
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white">
                <Globe className="w-6 h-6 text-indigo-400" />
                <span className="font-bold text-lg">Swanton Community Services Suffolk</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Empowering UK businesses with secure, scalable, and innovative IT solutions. Your trusted technology partner in Suffolk and beyond.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="hover:text-indigo-400 transition-colors">IT Services</Link></li>
                <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
                <li><Link to="/pricing" className="hover:text-indigo-400 transition-colors">Pricing Plans</Link></li>
                <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact Support</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/privacy" className="hover:text-indigo-400 transition-colors">GDPR Compliance</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                  <span>Registered Office Address (UK):<br />N/A</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>N/A</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>N/A</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Swanton Community Services Suffolk. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span>Company Registration Number: N/A</span>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Secure & GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
