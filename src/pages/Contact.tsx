import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Have a question or ready to start your journey with us? Our team of UK-based experts is here to help.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Message Sent!</h2>
                  <p className="text-slate-600 mb-8">Thank you for contacting Howse Garden. One of our specialists will get back to you within 24 business hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-brand-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                      <input 
                        required
                        type="email" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                        placeholder="john@company.co.uk"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Company Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                      placeholder="Your Business Ltd"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Service Required</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-white">
                      <option>Managed IT Support</option>
                      <option>Cyber Security</option>
                      <option>Cloud Infrastructure</option>
                      <option>IT Consultancy</option>
                      <option>Other Enquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Message</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input required type="checkbox" className="mt-1 rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
                    <p className="text-xs text-slate-500">
                      I consent to Howse Garden processing my data in accordance with the <a href="/privacy" className="text-brand-600 hover:underline">Privacy Policy</a>.
                    </p>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/25 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                      <MapPin className="text-brand-600" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Registered Office</p>
                      <p className="text-slate-600">{COMPANY_DETAILS.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                      <Phone className="text-brand-600" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Phone Number</p>
                      <p className="text-slate-600">{COMPANY_DETAILS.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                      <Mail className="text-brand-600" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Email Address</p>
                      <p className="text-slate-600">{COMPANY_DETAILS.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                      <Clock className="text-brand-600" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Business Hours</p>
                      <p className="text-slate-600">{COMPANY_DETAILS.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-3xl overflow-hidden h-64 bg-slate-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                  <div className="text-center">
                    <MapPin size={48} className="mx-auto mb-2 opacity-20" />
                    <p>Interactive Map Placeholder</p>
                    <p className="text-xs">London, United Kingdom</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
