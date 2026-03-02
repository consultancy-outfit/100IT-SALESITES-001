import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Shield, CheckCircle, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const COMPANY_DETAILS = {
  name: "Fradel Lodge",
  address: "1 Highfield, Love Lane, Kings Langley, United Kingdom, WD4 9JT",
  crn: "17048754",
  phone: "0208 088 5683",
  email: "info@fradellodge.co.uk",
  hours: "Mon - Fri: 09:00 - 18:00"
};

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Layout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-emerald-700 transition-colors">
                FL
              </div>
              <span className="text-2xl font-bold tracking-tight text-stone-900">
                Fradel<span className="text-emerald-600">Lodge</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                    location.pathname === link.path ? 'text-emerald-600' : 'text-stone-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-stone-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-stone-800 transition-all active:scale-95"
              >
                Get Started
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-stone-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              className="md:hidden bg-white border-b border-stone-200 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-lg font-medium text-stone-900 hover:text-emerald-600"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="block w-full text-center bg-emerald-600 text-white py-3 rounded-xl font-semibold"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center text-white font-bold text-lg">
                  FL
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  Fradel<span className="text-emerald-600">Lodge</span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed">
                Empowering UK businesses with cutting-edge IT solutions, robust cybersecurity, and strategic technology consultancy.
              </p>
              <div className="flex space-x-4">
                {/* Social placeholders */}
                <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <Shield size={16} className="text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <CheckCircle size={16} className="text-white" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4 text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-emerald-500 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">Legal</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link to="/terms" className="hover:text-emerald-500 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-emerald-500 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="hover:text-emerald-500 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">Contact Details</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin size={18} className="text-emerald-500 shrink-0" />
                  <span>{COMPANY_DETAILS.address}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={18} className="text-emerald-500 shrink-0" />
                  <span>{COMPANY_DETAILS.phone}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={18} className="text-emerald-500 shrink-0" />
                  <span>{COMPANY_DETAILS.email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs uppercase tracking-widest">
            <div className="text-center md:text-left">
              <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
              <p className="mt-1">Company Registration Number (CRN): {COMPANY_DETAILS.crn}</p>
            </div>
            <div className="flex space-x-6">
              <span>GDPR Compliant</span>
              <span>UK Registered</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
