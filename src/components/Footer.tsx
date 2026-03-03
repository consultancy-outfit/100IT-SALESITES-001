import { Link } from 'react-router-dom';
import { Monitor, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-white mb-6">
              <Monitor className="h-8 w-8 text-indigo-500" />
              <span className="text-xl font-bold tracking-tight">Visiting Angels IT Solutions</span>
            </Link>
            <p className="text-zinc-400 max-w-sm mb-6">
              Empowering UK businesses with cutting-edge IT infrastructure, cybersecurity, and managed services. 
              Your trusted partner in digital transformation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-indigo-500" />
                <span>+44 161 823 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-indigo-500" />
                <span>solutions@visitingangels-it.co.uk</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-indigo-500 mt-1" />
                <span>123 Deansgate, Manchester, M3 2BY, United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-indigo-400 transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-indigo-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p>&copy; {currentYear} Visiting Angels IT Solutions. All rights reserved.</p>
              <p className="mt-2 text-zinc-500">
                Visiting Angels Manchester West is a trading name of VA Manchester West Ltd.
              </p>
            </div>
            <div className="md:text-right text-zinc-500">
              <p>Company Registration Number (CRN): 12948576</p>
              <p>Registered Office: 123 Deansgate, Manchester, M3 2BY</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
