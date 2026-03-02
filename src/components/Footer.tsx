import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Linkedin, Twitter, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-brand-600 p-2 rounded-lg">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                South Central <span className="text-brand-500">IT</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering British businesses with enterprise-grade IT solutions, managed services, and strategic technology consulting.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-500 transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-brand-500 transition-colors">IT Services</Link></li>
              <li><Link to="/about" className="hover:text-brand-500 transition-colors">About Our Team</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-500 transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="hover:text-brand-500 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-display font-semibold mb-6">Legal & Compliance</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/terms" className="hover:text-brand-500 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-500 transition-colors">GDPR Compliance</Link></li>
              <li><Link to="/terms" className="hover:text-brand-500 transition-colors">Service Level Agreement</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-display font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="text-xs text-slate-500 space-y-2 text-center lg:text-left">
              <p>&copy; {currentYear} {COMPANY_DETAILS.name}. All rights reserved.</p>
              <p>Registered in England & Wales. Company Registration Number: {COMPANY_DETAILS.crn}</p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>ISO 27001 Certified & GDPR Compliant</span>
              </div>
            </div>
            
            <div className="flex gap-6 grayscale opacity-50">
              {/* Mock Partner Logos */}
              <div className="text-xs font-bold border border-slate-700 px-2 py-1 rounded">MICROSOFT PARTNER</div>
              <div className="text-xs font-bold border border-slate-700 px-2 py-1 rounded">AWS ADVANCED</div>
              <div className="text-xs font-bold border border-slate-700 px-2 py-1 rounded">CYBER ESSENTIALS</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
