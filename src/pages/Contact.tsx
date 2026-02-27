import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            Get in <span className="text-brand-600">Touch</span>
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Have a question or ready to start your IT transformation? Our London-based team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Registered Office</h4>
                    <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-brand-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                    <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-brand-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                    <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-brand-600 hover:underline">{COMPANY_DETAILS.email}</a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="text-brand-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                    <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-slate-100 rounded-3xl border border-slate-200 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-400">
                <MapPin size={48} className="mb-4 opacity-20" />
                <p className="text-sm font-medium">Interactive Map Placeholder</p>
                <p className="text-xs opacity-60">City Road, London</p>
              </div>
              <img 
                src="https://picsum.photos/seed/map/800/450?grayscale" 
                alt="Map" 
                className="w-full h-full object-cover opacity-30"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-100">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-slate-600">Thank you for contacting House of St Martin. A member of our team will be in touch within one business day.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-brand-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      placeholder="john@company.co.uk"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Company Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="Sterling Assets Ltd"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all">
                    <option>Managed IT Support</option>
                    <option>Cybersecurity Audit</option>
                    <option>Cloud Migration</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Message</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <div className="flex items-start space-x-3">
                  <input required type="checkbox" className="mt-1 w-4 h-4 text-brand-600 border-slate-300 rounded focus:ring-brand-500" />
                  <p className="text-xs text-slate-500 leading-relaxed">
                    I consent to House of St Martin processing my personal data in accordance with the <a href="/privacy" className="text-brand-600 hover:underline">Privacy Policy</a>.
                  </p>
                </div>

                <button 
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-600 text-white font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-100"
                >
                  Send Message
                  <Send size={18} className="ml-2" />
                </button>
                
                <div className="flex items-center justify-center space-x-2 text-[10px] text-slate-400 uppercase tracking-widest">
                  <ShieldCheck size={12} />
                  <span>Secure & GDPR Compliant</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
