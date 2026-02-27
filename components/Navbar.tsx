import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, MonitorSmartphone } from 'lucide-react';
import { Page } from '../types';
import { COMPANY } from '../constants';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'About Us', page: 'about' },
    { label: 'Pricing', page: 'pricing' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button 
            className="flex items-center space-x-2 cursor-pointer group focus:outline-none" 
            onClick={() => onNavigate('home')}
          >
            <div className={`${scrolled ? 'bg-slate-900' : 'bg-white'} p-2 rounded-lg transition-transform group-hover:scale-110`}>
              <MonitorSmartphone className={`w-6 h-6 ${scrolled ? 'text-emerald-400' : 'text-slate-900'}`} />
            </div>
            <div className="flex flex-col items-start">
              <span className={`text-xl font-bold tracking-tight leading-none ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                Thurrock<span className="text-emerald-600">Essex</span>
              </span>
              <span className={`text-[10px] font-semibold uppercase tracking-widest ${scrolled ? 'text-slate-500' : 'text-slate-300'}`}>IT Solutions</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                  currentPage === link.page 
                    ? 'text-emerald-600' 
                    : scrolled ? 'text-slate-600' : 'text-white/80'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => onNavigate('signup')}
              className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all flex items-center group"
            >
              Free Audit
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-slate-900' : 'text-white'} p-2 focus:outline-none`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl p-6 animate-in slide-in-from-top duration-300">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg ${
                  currentPage === link.page ? 'bg-emerald-50 text-emerald-600' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('signup');
                setIsOpen(false);
              }}
              className="w-full mt-4 px-4 py-4 bg-slate-900 text-white font-semibold rounded-lg text-center"
            >
              Free Audit
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
