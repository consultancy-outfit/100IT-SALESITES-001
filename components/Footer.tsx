import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, MonitorSmartphone, ChevronRight } from 'lucide-react';
import { Page } from '../types';
import { COMPANY } from '../constants';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <button 
              className="flex items-center space-x-2 mb-6 group focus:outline-none" 
              onClick={() => onNavigate('home')}
            >
              <div className="bg-emerald-500 p-2 rounded-lg">
                <MonitorSmartphone className="w-6 h-6 text-slate-900" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Thurrock<span className="text-emerald-400">Essex</span>
              </span>
            </button>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Professional IT services and managed solutions for businesses across Essex and London. We provide the technical foundation for your growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full text-slate-400 hover:bg-emerald-500 hover:text-slate-900 transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full text-slate-400 hover:bg-emerald-500 hover:text-slate-900 transition-all"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => onNavigate('home')} className="hover:text-emerald-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" /> Home</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-emerald-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" /> Services</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-emerald-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" /> About Us</button></li>
              <li><button onClick={() => onNavigate('pricing')} className="hover:text-emerald-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" /> Pricing</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-emerald-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" /> Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-emerald-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" /> Privacy Policy</button></li>
              <li><button onClick={() => onNavigate('terms')} className="hover:text-emerald-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" /> Terms & Conditions</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-emerald-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" /> GDPR Compliance</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              {COMPANY.address && (
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-emerald-400 shrink-0" />
                  <span>{COMPANY.address}</span>
                </li>
              )}
              {COMPANY.phone && (
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-emerald-400 shrink-0" />
                  <span>{COMPANY.phone}</span>
                </li>
              )}
              {COMPANY.email && (
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-emerald-400 shrink-0" />
                  <span>{COMPANY.email}</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <div className="text-center md:text-left">
            <p className="mb-1 font-semibold text-slate-400">{COMPANY.name}</p>
            {COMPANY.crn && <p>Registered in England & Wales | CRN: {COMPANY.crn}</p>}
          </div>
          <p>© {new Date().getFullYear()} Thurrock Essex IT Solutions Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;