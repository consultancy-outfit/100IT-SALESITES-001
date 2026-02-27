import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Shield, Cpu, Globe, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const COMPANY_DETAILS = {
  name: "HCF The Springs",
  address: "The Springs Business Park, Unit 12, Leeds, LS15 8GB, United Kingdom",
  crn: "12345678",
  phone: "+44 (0) 113 456 7890",
  email: "info@hcfthesprings.co.uk",
  hours: "Mon - Fri: 09:00 - 17:30"
};

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 py-2 px-4 hidden md:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium tracking-wide uppercase">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Phone size={14} className="text-indigo-400" /> {COMPANY_DETAILS.phone}</span>
            <span className="flex items-center gap-2"><Mail size={14} className="text-indigo-400" /> {COMPANY_DETAILS.email}</span>
          </div>
          <div className="flex items-center gap-4">
            <span>UK Registered Company: {COMPANY_DETAILS.crn}</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200 group-hover:scale-105 transition-transform">
              <Cpu size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">HCF <span className="text-indigo-600">The Springs</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-indigo-600",
                  location.pathname === link.path ? "text-indigo-600" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-md active:scale-95"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-lg font-medium text-slate-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-center font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white">
                  <Cpu size={18} />
                </div>
                <span className="text-xl font-bold text-white">HCF <span className="text-indigo-400">The Springs</span></span>
              </Link>
              <p className="text-sm leading-relaxed text-slate-400">
                Empowering UK businesses with cutting-edge IT solutions, managed services, and strategic technology consulting.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer">
                  <Globe size={16} />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer">
                  <Shield size={16} />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Our Services</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Managed IT Support</Link></li>
                <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Cloud Infrastructure</Link></li>
                <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Cybersecurity Solutions</Link></li>
                <li><Link to="/services" className="hover:text-indigo-400 transition-colors">IT Consulting</Link></li>
                <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Disaster Recovery</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
                <li><Link to="/pricing" className="hover:text-indigo-400 transition-colors">Pricing Plans</Link></li>
                <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact Us</Link></li>
                <li><Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact Details</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin size={18} className="text-indigo-400 shrink-0" />
                  <span>{COMPANY_DETAILS.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="text-indigo-400 shrink-0" />
                  <span>{COMPANY_DETAILS.phone}</span>
                </li>
                <li className="flex gap-3">
                  <Mail size={18} className="text-indigo-400 shrink-0" />
                  <span>{COMPANY_DETAILS.email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500 uppercase tracking-widest">
            <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <span>CRN: {COMPANY_DETAILS.crn}</span>
              <span>VAT: GB 987 6543 21</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
