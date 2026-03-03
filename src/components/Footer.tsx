import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { COMPANY_DETAILS } from '@/src/constants';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 text-white">
              <Cpu className="h-8 w-8 text-indigo-500" />
              <span className="text-xl font-bold tracking-tight">Assure IT</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering British businesses with cutting-edge IT solutions, robust cybersecurity, and strategic cloud infrastructure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Managed IT Support</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Cloud Migration</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Network Setup</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">IT Consultancy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-indigo-500 shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-indigo-500 shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-indigo-500 shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-xs space-y-1">
              <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
              <p>Company Registration Number (CRN): {COMPANY_DETAILS.crn}</p>
              <p>Registered in England & Wales</p>
            </div>
            <div className="md:text-right text-xs text-zinc-500">
              <p>Designed for Excellence in British IT Services.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
