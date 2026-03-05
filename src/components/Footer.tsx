import { Link } from 'react-router-dom';
import { Home, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-white mb-6">
              <Home className="h-8 w-8 text-emerald-500" />
              <span className="text-xl font-bold tracking-tight">Hertfordshire and Barnet Supported Living Service</span>
            </Link>
            <p className="text-zinc-400 max-w-sm mb-6">
              Supporting independence and quality of life across Hertfordshire and Barnet. 
              Person-centred care you can trust.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-500" />
                <span>UK Phone Number: Not Available</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-500" />
                <span>Official Business Email: Not Available</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-500 mt-1" />
                <span>Registered Office Address (UK): Not Available</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-emerald-400 transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link to="/terms" className="hover:text-emerald-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-emerald-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p>&copy; {currentYear} Hertfordshire and Barnet Supported Living Service. All rights reserved.</p>
            </div>
            <div className="md:text-right text-zinc-500">
              <p>Company Registration Number (CRN): 17048852</p>
              <p>Registered Office Address (UK): Not Available</p>
              <p>UK Phone Number: Not Available | Official Business Email: Not Available</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
