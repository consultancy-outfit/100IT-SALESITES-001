import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export const COMPANY_DETAILS = {
  name: "Greater Manchester Specialist Support Service",
  address: "38 Eade Road, London, England, N4 1DH",
  crn: "17049309",
  phone: "0161 410 1860",
  email: "info@greatermanchesterltd.co.uk",
  hours: "Mon - Fri: 09:00 - 17:30",
};

export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <ShieldCheck className="w-8 h-8 text-primary-500" />
              <span className="font-display font-bold text-xl leading-tight">
                GM Specialist<br />Support
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering Greater Manchester businesses with world-class IT infrastructure, 
              proactive security, and strategic technology consulting.
            </p>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-primary-400 transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold mb-6">Legal</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/terms" className="hover:text-primary-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-primary-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold mb-6">Contact Details</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                <span className="break-all">{COMPANY_DETAILS.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
            <p className="mt-1 opacity-60">
              Registered in England & Wales. Company Registration Number: {COMPANY_DETAILS.crn}
            </p>
          </div>
          <div className="flex gap-6">
            <span className="opacity-60">GDPR Compliant</span>
            <span className="opacity-60">Cyber Essentials Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
