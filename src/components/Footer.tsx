import { Link } from 'react-router-dom';
import { Monitor, Mail, Phone, MapPin, Linkedin, Twitter, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Description */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-brand-accent p-1.5 rounded-lg">
                <Monitor className="w-6 h-6 text-slate-900" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">MONAVEEN</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering British businesses through innovative IT solutions, robust cybersecurity, and scalable cloud infrastructure. Your trusted technology partner in the UK.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-accent transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">IT Services</Link></li>
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Monaveen</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-accent transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/terms" className="hover:text-brand-accent transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Details</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                <span>+44 20 7946 0000</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <span>info@monaveen.co.uk</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                <span>124 City Road, London, EC1V 2NX, United Kingdom</span>
              </li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h3 className="text-white font-semibold mb-6">Compliance</h3>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
              <div className="flex items-center gap-2 mb-2 text-brand-accent">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">GDPR Compliant</span>
              </div>
              <p className="text-xs text-slate-400">
                We take data protection seriously. Our systems and processes are fully compliant with UK GDPR and Data Protection Act 2018.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p>© {currentYear} Monaveen IT Services Ltd. All rights reserved.</p>
              <p className="mt-1">Registered in England and Wales. Company No: 01234567</p>
            </div>
            <div className="md:text-right">
              <p>Registered Office: 124 City Road, London, EC1V 2NX</p>
              <p className="mt-1">VAT Registration: GB 123 4567 89</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
