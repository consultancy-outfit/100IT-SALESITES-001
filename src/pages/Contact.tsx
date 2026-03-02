import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants/company';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Let's Discuss Your <span className="text-indigo-600">IT Strategy</span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Whether you're looking for a full managed service or a one-off project, our team of UK-based experts is ready to help.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Registered Office</h3>
                  <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Phone Number</h3>
                  <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Email Address</h3>
                  <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Business Hours</h3>
                  <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.hours}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-slate-100 rounded-3xl border border-slate-200 overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 group-hover:text-indigo-400 transition-colors">
                <MapPin className="w-12 h-12 opacity-20" />
                <span className="absolute bottom-4 text-xs font-bold uppercase tracking-widest">Map Placeholder (Sheffield, UK)</span>
              </div>
              <img 
                src="https://picsum.photos/seed/sheffield-map/800/400?blur=2" 
                alt="Map" 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 p-10 lg:p-16 rounded-3xl border border-slate-100 shadow-sm"
          >
            {formState === 'success' ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Thank you for reaching out. One of our IT consultants will be in touch within 24 business hours.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="text-indigo-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                      placeholder="john@company.co.uk"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                    placeholder="Your Business Ltd"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Service Required</label>
                  <select
                    id="service"
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                  >
                    <option>Managed IT Support</option>
                    <option>Cybersecurity Solutions</option>
                    <option>Cloud Infrastructure</option>
                    <option>IT Consultancy</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your IT challenges..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="mt-1 w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="consent" className="text-sm text-slate-600 leading-relaxed">
                    I consent to Siete Care Services processing my data in accordance with the <a href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a>.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full bg-indigo-600 text-white py-5 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {formState === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-slate-400 text-xs font-medium uppercase tracking-widest pt-4">
                  <ShieldCheck className="w-4 h-4" />
                  Your data is protected by GDPR
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
