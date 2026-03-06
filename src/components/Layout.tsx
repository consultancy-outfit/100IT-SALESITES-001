import { Link, Outlet, useLocation } from 'react-router-dom';
import { COMPANY_DETAILS } from '../constants';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import HighfieldsLogo from '../assets/HIGHFIELDS HOUSE.svg';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
      <header className="bg-white/90 backdrop-blur border-b border-amber-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-[180px] h-[40px] overflow-hidden flex items-center cursor-pointer">
                <img
                  src={HighfieldsLogo}
                  alt={`${COMPANY_DETAILS.name} logo`}
                  className="w-50 h-18 object-cover object-center"
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-amber-700 ${
                    location.pathname === link.path ? 'text-amber-700' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex">
              <Link
                to="/contact"
                className="bg-amber-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-amber-600 transition-colors shadow-sm"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'text-amber-800 bg-amber-50'
                      : 'text-slate-700 hover:text-amber-800 hover:bg-amber-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-amber-50 text-slate-700 py-12 border-t border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-[180px] h-[40px] overflow-hidden flex items-center">
                  <img
                    src={HighfieldsLogo}
                    alt={`${COMPANY_DETAILS.name} logo`}
                    className="w-50 h-18 object-cover object-center"
                  />
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                Delivering enterprise-grade IT solutions and managed services to businesses across the United Kingdom.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-amber-800 transition-colors">Home</Link></li>
                <li><Link to="/services" className="hover:text-amber-800 transition-colors">Services</Link></li>
                <li><Link to="/about" className="hover:text-amber-800 transition-colors">About Us</Link></li>
                <li><Link to="/pricing" className="hover:text-amber-800 transition-colors">Pricing</Link></li>
                <li><Link to="/contact" className="hover:text-amber-800 transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/terms" className="hover:text-amber-800 transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="hover:text-amber-800 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Company Details</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><strong className="text-slate-800">Company Name:</strong> {COMPANY_DETAILS.name}</li>
                <li><strong className="text-slate-800">Registered Office:</strong><br/>{COMPANY_DETAILS.address}</li>
                <li><strong className="text-slate-800">CRN:</strong> {COMPANY_DETAILS.crn}</li>
                <li><strong className="text-slate-800">Phone:</strong> {COMPANY_DETAILS.phone}</li>
                <li><strong className="text-slate-800">Email:</strong> <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-amber-800 transition-colors">{COMPANY_DETAILS.email}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-amber-100 text-sm text-center text-slate-500">
            &copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
