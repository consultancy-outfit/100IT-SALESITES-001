import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Cpu, Mail, Phone, MapPin, ShieldCheck, Linkedin, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';

const COMPANY_DETAILS = {
  name: "EMMA-LE-GRAND-CASE-MANAGEMENT",
  address: "124 City Road, London, EC1V 2NX, United Kingdom",
  crn: "12345678",
  phone: "+44 20 7946 0000",
  email: "info@emmalegrandcasemanagement.co.uk"
};

export default function Layout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center">
                <Cpu className="text-white w-6 h-6" />
              </div>
              <span className="font-serif font-bold text-xl tracking-tighter hidden sm:block">
                EMMA LE GRAND
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/pricing">Pricing</NavLink>
              <Link to="/contact" className="btn-primary py-2 px-5 text-sm">
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-2"
          >
            <MobileNavLink to="/">Home</MobileNavLink>
            <MobileNavLink to="/services">Services</MobileNavLink>
            <MobileNavLink to="/about">About Us</MobileNavLink>
            <MobileNavLink to="/pricing">Pricing</MobileNavLink>
            <MobileNavLink to="/contact">Contact Us</MobileNavLink>
          </motion.div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <Cpu className="text-brand-navy w-6 h-6" />
                <span className="font-serif font-bold text-lg tracking-tighter">
                  EMMA LE GRAND
                </span>
              </Link>
              <p className="text-slate-500 text-sm leading-relaxed">
                Leading UK IT services provider delivering bespoke managed solutions and case management technology for modern enterprises.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-slate-400 hover:text-brand-navy transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-brand-navy transition-colors"><Twitter size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/services" className="text-slate-600 hover:text-brand-navy">Our Services</Link></li>
                <li><Link to="/about" className="text-slate-600 hover:text-brand-navy">About the Company</Link></li>
                <li><Link to="/pricing" className="text-slate-600 hover:text-brand-navy">Pricing Plans</Link></li>
                <li><Link to="/contact" className="text-slate-600 hover:text-brand-navy">Contact Support</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Legal</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/terms" className="text-slate-600 hover:text-brand-navy">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="text-slate-600 hover:text-brand-navy">Privacy Policy</Link></li>
                <li><Link to="/privacy#gdpr" className="text-slate-600 hover:text-brand-navy">GDPR Compliance</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin size={18} className="text-brand-emerald shrink-0" />
                  <span className="text-slate-600">{COMPANY_DETAILS.address}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={18} className="text-brand-emerald shrink-0" />
                  <span className="text-slate-600">{COMPANY_DETAILS.phone}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={18} className="text-brand-emerald shrink-0" />
                  <span className="text-slate-600">{COMPANY_DETAILS.email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="font-semibold text-slate-500 mb-1">{COMPANY_DETAILS.name}</p>
              <p>Registered in England & Wales | CRN: {COMPANY_DETAILS.crn}</p>
              <p>© {new Date().getFullYear()} Emma Le Grand Case Management. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck size={16} className="text-brand-emerald" />
              <span>GDPR Compliant & Cyber Essentials Certified</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ to, children }: { to: string; children: ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link 
      to={to} 
      className={`text-sm font-medium transition-colors hover:text-brand-emerald ${isActive ? 'text-brand-emerald' : 'text-slate-600'}`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children }: { to: string; children: ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link 
      to={to} 
      className={`block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-slate-50 text-brand-emerald' : 'text-slate-600 hover:bg-slate-50'}`}
    >
      {children}
    </Link>
  );
}
