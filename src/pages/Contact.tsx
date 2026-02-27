import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send, Check } from "lucide-react";
import { COMPANY_DETAILS } from "../constants";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Let's Start a <span className="text-emerald-600">Conversation</span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Whether you have a specific project in mind or just want to explore how we can help, our team is ready to assist.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Registered Office</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.hours}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-slate-100 rounded-3xl border border-slate-200 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                Google Maps Integration Placeholder
              </div>
              <img
                src="https://picsum.photos/seed/map/800/400?grayscale"
                alt="Map"
                className="w-full h-full object-cover opacity-30"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 h-fit">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                <p className="text-slate-600 mb-8">
                  Thank you for reaching out. One of our IT specialists will contact you within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-emerald-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-50 outline-none transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Company Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-50 outline-none transition-all"
                      placeholder="Acme Ltd"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Work Email</label>
                  <input
                    required
                    type="email"
                    className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-50 outline-none transition-all"
                    placeholder="john@company.co.uk"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Service Required</label>
                  <select className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-50 outline-none transition-all">
                    <option>Managed IT Support</option>
                    <option>Cyber Security</option>
                    <option>Cloud Migration</option>
                    <option>IT Consultancy</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-50 outline-none transition-all"
                    placeholder="How can we help you?"
                  />
                </div>
                <div className="flex items-start gap-3 py-2">
                  <input required type="checkbox" className="mt-1 accent-emerald-600" id="consent" />
                  <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed">
                    I consent to Vibrance Outreach processing my data in accordance with their Privacy Policy for the purpose of responding to this enquiry.
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
