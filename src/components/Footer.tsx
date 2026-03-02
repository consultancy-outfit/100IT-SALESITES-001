import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { COMPANY_DETAILS, NAVIGATION } from '../constants/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Siete<span className="text-indigo-400">Care</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering British businesses with world-class IT infrastructure, cybersecurity, and managed support services. Your trusted technology partner in the UK.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-indigo-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:text-indigo-400 transition-colors">{item.name}</Link>
                </li>
              ))}
              <li><Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Managed IT Support</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Cybersecurity Solutions</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">IT Consultancy</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Disaster Recovery</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-400 shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-indigo-400 shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-xs space-y-1">
              <p>&copy; {currentYear} {COMPANY_DETAILS.name}. All rights reserved.</p>
              <p>Company Registration Number (CRN): {COMPANY_DETAILS.crn}</p>
              <p>VAT Number: {COMPANY_DETAILS.vat}</p>
            </div>
            <div className="md:text-right text-xs text-slate-500">
              <p>Registered in England & Wales</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
