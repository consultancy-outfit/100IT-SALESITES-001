import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Linkedin, Twitter, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS, NAVIGATION } from '../../constants/config';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-accent p-1.5 rounded-lg">
                <Cpu className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Wigan IT</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering British businesses with cutting-edge IT infrastructure, 
              robust cybersecurity, and managed support services tailored for growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:text-accent transition-colors">{item.name}</Link>
                </li>
              ))}
              <li><Link to="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Expertise</h4>
            <ul className="space-y-4 text-sm">
              <li>Managed IT Support</li>
              <li>Cybersecurity Solutions</li>
              <li>Cloud Infrastructure</li>
              <li>IT Consultancy</li>
              <li>Business Continuity</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="space-y-2">
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Company Details</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-xs">
                <p><span className="text-slate-500">Name:</span> {COMPANY_DETAILS.name}</p>
                <p><span className="text-slate-500">CRN:</span> {COMPANY_DETAILS.crn}</p>
                <p className="sm:col-span-2"><span className="text-slate-500">Registered Office:</span> {COMPANY_DETAILS.address}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-lg border border-slate-700">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-300">GDPR Compliant</span>
              </div>
              <p className="text-xs text-slate-500">
                &copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
