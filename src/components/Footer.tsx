import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Cpu, Linkedin, Twitter, Github } from 'lucide-react';
import { COMPANY_DETAILS, LEGAL, NAVIGATION } from '../constants';

export const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <Cpu className="text-zinc-900 w-5 h-5" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white uppercase">
                {COMPANY_DETAILS.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering British businesses with independent, cutting-edge IT solutions. 
              From infrastructure to cybersecurity, we are your trusted technology partner.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Navigation</h3>
            <ul className="space-y-4 text-sm">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-4 text-sm">
              {LEGAL.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company Details</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-zinc-500" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-zinc-500" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-zinc-500" />
                <span>{COMPANY_DETAILS.email}</span>
              </li>
              <li className="pt-2 border-t border-zinc-800 mt-4">
                <p className="text-xs text-zinc-500">CRN: {COMPANY_DETAILS.crn}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.
          </p>
          <p className="text-xs">
            Registered in England and Wales. VAT Registered.
          </p>
        </div>
      </div>
    </footer>
  );
};
