import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { COMPANY_DETAILS, NAV_LINKS, LEGAL_LINKS } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                CORNWALL- <span className="text-primary-400">PLACE</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Empowering British businesses with world-class IT infrastructure, cybersecurity, and cloud solutions. Your local partner for global technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-primary-600 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-primary-600 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-primary-600 hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">Managed IT Support</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">Cybersecurity Solutions</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">IT Consultancy</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary-400 shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-primary-400 transition-colors">
                  {COMPANY_DETAILS.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary-400 shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-primary-400 transition-colors">
                  {COMPANY_DETAILS.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary-400 shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-800">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="text-sm text-slate-500 space-y-2">
              <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name} Limited. All rights reserved.</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <span>CRN: {COMPANY_DETAILS.crn}</span>
                <span>VAT: GB 987 6543 21</span>
                <span>Registered in England & Wales</span>
              </div>
            </div>
            <div className="flex gap-8 text-sm">
              {LEGAL_LINKS.map((link) => (
                <Link key={link.href} to={link.href} className="hover:text-primary-400 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
