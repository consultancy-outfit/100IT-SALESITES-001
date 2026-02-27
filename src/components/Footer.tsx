import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Cpu } from 'lucide-react';
import { COMPANY_DETAILS, NAVIGATION } from '../constants';

export const Footer = () => {
  return (
    <footer className="bg-zinc-50 border-t border-black/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-zinc-900">{COMPANY_DETAILS.name}</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Empowering UK businesses through innovative IT solutions, proactive support, and strategic technology consultancy.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-sm text-zinc-500 hover:text-emerald-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/terms" className="text-sm text-zinc-500 hover:text-emerald-600 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-zinc-500 hover:text-emerald-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-zinc-500">
                <MapPin className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-500">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-500">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 mb-6">Company Info</h4>
            <div className="space-y-4 text-sm text-zinc-500">
              <p>CRN: {COMPANY_DETAILS.crn}</p>
              <p>Registered in England & Wales</p>
              <p>Hours: {COMPANY_DETAILS.hours}</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-400">
            © {new Date().getFullYear()} {COMPANY_DETAILS.name} IT Services. All rights reserved.
          </p>
          <p className="text-xs text-zinc-400">
            VAT Registration: GB 987 6543 21
          </p>
        </div>
      </div>
    </footer>
  );
};
