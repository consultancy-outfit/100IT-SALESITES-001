import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Shield 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_DETAILS, Page, Button } from './components/Shared';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { PricingPage } from './components/PricingPage';
import { ContactPage } from './components/ContactPage';
import { LegalPage } from './components/LegalPage';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [page]);

  const navLinks: { label: string; id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'About Us', id: 'about' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setPage('home')}
          >
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg">
              <Shield size={24} />
            </div>
            <span className={`text-2xl font-display font-bold tracking-tight ${
              scrolled || page !== 'home' ? 'text-slate-900' : 'text-white'
            }`}>
              Badminton <span className="text-emerald-500">Gardens</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setPage(link.id)}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${
                  page === link.id 
                    ? 'text-emerald-500' 
                    : (scrolled || page !== 'home' ? 'text-slate-600' : 'text-white/80')
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button 
              variant={scrolled || page !== 'home' ? 'primary' : 'secondary'} 
              className="py-2 px-5 text-sm"
              onClick={() => setPage('contact')}
            >
              Get Support
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 rounded-lg ${
              scrolled || page !== 'home' ? 'text-slate-900' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => setPage(link.id)}
                    className={`text-xl font-semibold text-left ${
                      page === link.id ? 'text-emerald-600' : 'text-slate-900'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <Button className="w-full" onClick={() => setPage('contact')}>
                  Get Support
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {page === 'home' && <HomePage setPage={setPage} />}
            {page === 'services' && <ServicesPage />}
            {page === 'about' && <AboutPage />}
            {page === 'pricing' && <PricingPage />}
            {page === 'contact' && <ContactPage />}
            {page === 'terms' && <LegalPage type="terms" />}
            {page === 'privacy' && <LegalPage type="privacy" />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
                  <Shield size={20} />
                </div>
                <span className="text-xl font-display font-bold tracking-tight">
                  Badminton <span className="text-emerald-500">Gardens</span>
                </span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8">
                Premium IT services for the modern UK enterprise. We provide the technical foundations that allow your business to thrive in a digital-first world.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                {navLinks.map(link => (
                  <li key={link.id}>
                    <button onClick={() => setPage(link.id)} className="hover:text-emerald-500 transition-colors">
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-4 text-slate-400">
                <li>
                  <button onClick={() => setPage('terms')} className="hover:text-emerald-500 transition-colors">
                    Terms and Conditions
                  </button>
                </li>
                <li>
                  <button onClick={() => setPage('privacy')} className="hover:text-emerald-500 transition-colors">
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h4 className="font-bold text-emerald-500 uppercase tracking-widest text-xs">Company Details</h4>
                <div className="grid gap-2 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-emerald-500" />
                    <span><strong>Registered Office:</strong> {COMPANY_DETAILS.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield size={14} className="text-emerald-500" />
                    <span><strong>Company Registration Number (CRN):</strong> {COMPANY_DETAILS.crn}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-emerald-500" />
                    <span><strong>UK Phone:</strong> {COMPANY_DETAILS.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-emerald-500" />
                    <span><strong>Email:</strong> {COMPANY_DETAILS.email}</span>
                  </div>
                </div>
              </div>
              <div className="md:text-right text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} {COMPANY_DETAILS.name} IT Services. All rights reserved.</p>
                <p className="mt-1">Built with excellence in the United Kingdom.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
