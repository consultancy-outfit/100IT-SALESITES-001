import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, ShieldCheck } from 'lucide-react';
import logo from '../assets/Monaveen.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Description */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Monaveen" className="h-20 w-auto object-contain" />
            </Link>
            <p className="text-sm leading-relaxed text-slate-500">
              Empowering British businesses through innovative IT solutions, robust cybersecurity, and scalable cloud infrastructure. Your trusted technology partner in the UK.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-brand-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-brand-accent transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="text-slate-600 hover:text-brand-accent transition-colors">IT Services</Link></li>
              <li><Link to="/about" className="text-slate-600 hover:text-brand-accent transition-colors">About Monaveen</Link></li>
              <li><Link to="/pricing" className="text-slate-600 hover:text-brand-accent transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-brand-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/terms" className="text-slate-600 hover:text-brand-accent transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-slate-600 hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-slate-900 font-semibold mb-6">Contact Details</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                <span>0170 640 7193</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <span>info@monaveen.co.uk</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                <span>20 Holmleigh Avenue, Dartford, England, DA1 5AS</span>
              </li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h3 className="text-slate-900 font-semibold mb-6">Compliance</h3>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 mb-2 text-brand-accent">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">GDPR Compliant</span>
              </div>
              <p className="text-xs text-slate-500">
                We take data protection seriously. Our systems and processes are fully compliant with UK GDPR and Data Protection Act 2018.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 text-xs text-slate-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p>© {currentYear} Monaveen IT Services Ltd. All rights reserved.</p>
              <p className="mt-1">Registered in England and Wales. Company No: 17051882</p>
            </div>
            <div className="md:text-right">
              <p>Registered Office: 20 Holmleigh Avenue, Dartford, England, DA1 5AS</p>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
