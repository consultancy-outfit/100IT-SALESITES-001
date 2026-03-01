import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-6">Get in Touch</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a question or ready to start your project? Our UK-based team is here to help.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="h-12 w-12 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</h4>
                    <p className="text-lg font-bold text-slate-900">0208 088 5683</{p>
                    <p className="text-sm text-slate-500">Available Mon-Fri, 9:00 - 17:30</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="h-12 w-12 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email</h4>
                    <p className="text-lg font-bold text-slate-900">info@fradellodge.co.uk</p>
                    <p className="text-sm text-slate-500">We aim to respond within 4 business hours.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="h-12 w-12 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Office</h4>
                    <p className="text-lg font-bold text-slate-900 leading-snug">
                     1 Highfield, Love Lane, Kings Langley, United Kingdom, WD4 9JT
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="h-12 w-12 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Business Hours</h4>
                    <p className="text-lg font-bold text-slate-900">{COMPANY_DETAILS.hours}</p>
                    <p className="text-sm text-slate-500">Excluding UK Bank Holidays</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 aspect-video bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col gap-2">
                  <MapPin size={48} className="opacity-20" />
                  <span className="text-sm font-medium">Interactive Map Placeholder</span>
                  <span className="text-xs">1 Highfield, Love Lane, Kings Langley, United Kingdom, WD4 9JT</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="h-20 w-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600 mb-8">
                    Thank you for reaching out. A member of our team will be in touch shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-sky-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Full Name</label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                          placeholder="John Smith"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Company Name</label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                          placeholder="Acme Ltd"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Email Address</label>
                        <input 
                          type="email" 
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                          placeholder="john@example.co.uk"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Phone Number</label>
                        <input 
                          type="tel" 
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                          placeholder="020 7946 0000"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">How can we help?</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all">
                        <option>Managed IT Support</option>
                        <option>Cybersecurity Audit</option>
                        <option>Cloud Migration</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Message</label>
                      <textarea 
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500" />
                      <p className="text-xs text-slate-500 leading-relaxed">
                        I consent to Fradel Lodge processing my personal data in accordance with their Privacy Policy to respond to my enquiry.
                      </p>
                    </div>
                    <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                      Send Message <Send size={18} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
