import { Link } from 'react-router-dom';
import { Cpu, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-white/10 p-2 rounded-lg">
                <Cpu className="h-6 w-6 text-brand-accent" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">Daisy Haye</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Leading the way in British IT excellence. Providing robust, secure, and scalable technology solutions for modern enterprises across the United Kingdom.
            </p>
            <div className="flex items-center space-x-2 text-brand-accent">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-wider">GDPR Compliant</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Managed IT Support</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Cybersecurity Solutions</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Network Architecture</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">IT Consultancy</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-accent transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/terms" className="hover:text-brand-accent transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-brand-accent shrink-0" />
                <span>info@fradellodge.co.uk</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-accent shrink-0" />
                <span>info@daisyhaye.co.uk</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-brand-accent shrink-0" />
                <span>+0208 088 5683</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs">
          <div className="space-y-1 text-center md:text-left">
            <p>&copy; {currentYear} Daisy Haye. All rights reserved.</p>
            <p className="opacity-60">Company Name: Daisy Haye | Registered Office: info@daisyhaye.co.uk</p>
            <p className="opacity-60">CRN: Not available | VAT: Prices exclude VAT unless stated.</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
