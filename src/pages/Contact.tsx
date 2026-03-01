import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck } from "lucide-react";
import { COMPANY_DETAILS } from "../constants";

export function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Have a question or ready to start your project? Our UK-based team is here to help.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Our Office</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{COMPANY_DETAILS.address}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                  <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-slate-600 text-sm hover:text-indigo-600 transition-colors">
                    {COMPANY_DETAILS.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-slate-600 text-sm hover:text-indigo-600 transition-colors">
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{COMPANY_DETAILS.hours}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 p-4 rounded-3xl bg-slate-100 border border-slate-200 aspect-video flex flex-col items-center justify-center text-slate-400">
              <MapPin className="w-12 h-12 mb-4 opacity-20" />
              <span className="text-sm font-medium">Map Placeholder (Luton, LU1)</span>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all"
                  placeholder="john@company.co.uk"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900">Service Required</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all bg-white">
                  <option>Managed IT Support</option>
                  <option>Cybersecurity</option>
                  <option>Cloud Migration</option>
                  <option>IT Consultancy</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="consent" className="mt-1 w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed">
                  I consent to Aspire IT Solutions storing my data to contact me regarding my enquiry. See our <a href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a> for more details.
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4" />
                Your data is secure and protected under GDPR.
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
