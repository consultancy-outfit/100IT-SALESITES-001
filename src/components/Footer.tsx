import { Link } from "react-router-dom";
import { COMPANY_DETAILS, NAV_LINKS } from "../constants";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "../assets/Vibrance_Outreach.svg";

export default function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-700 pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src={Logo}
                alt="Vibrance Outreach"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Empowering British businesses through innovative IT solutions and strategic technology consultancy.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-brand-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/terms" className="hover:text-brand-600 transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-brand-600 transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 shrink-0 text-brand-400" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0 text-brand-400" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0 text-brand-400" />
                <span>{COMPANY_DETAILS.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-6">Business Hours</h4>
            <p className="text-sm">{COMPANY_DETAILS.hours}</p>
            <div className="mt-6 p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-1">Company Info</p>
              <p className="text-xs text-slate-700">CRN: {COMPANY_DETAILS.crn}</p>
              <p className="text-xs text-slate-700">Registered in England & Wales</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-brand-600">Privacy</Link>
            <Link to="/terms" className="hover:text-brand-600">Terms</Link>
            <Link to="/cookies" className="hover:text-brand-600">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
