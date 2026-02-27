import { Link } from 'react-router-dom';
import { Monitor, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-zinc-900 p-1.5 rounded-md">
                <Monitor className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-zinc-900">KANMORE HOUSE</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Empowering UK businesses with cutting-edge IT infrastructure, cybersecurity, and managed services.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link to="/terms" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-6">Contact Details</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-zinc-400 shrink-0" />
                <span className="text-zinc-500 text-sm">0137 531 1275</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-zinc-400 shrink-0" />
                <span className="text-zinc-500 text-sm">info@kanmorehouse.co.uk</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-zinc-400 shrink-0" />
                <span className="text-zinc-500 text-sm">United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-zinc-400">
            <div className="text-center md:text-left space-y-1">
              <p>© {currentYear} Kanmore House. All rights reserved.</p>
              <p>Company Registration Number (CRN): 12345678</p>
              <p>Registered Office: United Kingdom</p>
            </div>
            <div className="flex space-x-6">
              <p>VAT Registered: GB 123 4567 89</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
