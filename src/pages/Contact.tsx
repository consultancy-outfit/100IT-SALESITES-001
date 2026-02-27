import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ready to secure and scale your IT? Our UK-based experts are standing by to help.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-display font-bold mb-8">Contact Details</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Registered Office</h4>
                    <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                    <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                    <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                    <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.hours}</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 aspect-video bg-slate-100 rounded-3xl border border-slate-200 flex items-center justify-center overflow-hidden relative group">
                <div className="text-slate-400 font-medium flex flex-col items-center gap-4">
                  <MapPin size={48} className="text-slate-300" />
                  <span>Interactive Map Placeholder</span>
                </div>
                <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-xl">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">Message Sent!</h3>
                  <p className="text-slate-600 mb-8">
                    Thank you for contacting Swanton IT. One of our specialists will be in touch within 2 business hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn-outline"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-display font-bold mb-8">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                        <input 
                          required
                          type="text" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-secondary focus:ring-2 focus:ring-emerald-100 outline-none transition-all"
                          placeholder="John Smith"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Company Name</label>
                        <input 
                          required
                          type="text" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-secondary focus:ring-2 focus:ring-emerald-100 outline-none transition-all"
                          placeholder="Acme Ltd"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                        <input 
                          required
                          type="email" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-secondary focus:ring-2 focus:ring-emerald-100 outline-none transition-all"
                          placeholder="john@example.co.uk"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                        <input 
                          required
                          type="tel" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-secondary focus:ring-2 focus:ring-emerald-100 outline-none transition-all"
                          placeholder="020 7946 0000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Service of Interest</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-secondary focus:ring-2 focus:ring-emerald-100 outline-none transition-all bg-white">
                        <option>Managed IT Support</option>
                        <option>Cyber Security</option>
                        <option>Cloud Solutions</option>
                        <option>IT Strategy & Consulting</option>
                        <option>Network Infrastructure</option>
                        <option>Other / General Enquiry</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Your Message</label>
                      <textarea 
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-secondary focus:ring-2 focus:ring-emerald-100 outline-none transition-all resize-none"
                        placeholder="How can we help your business?"
                      ></textarea>
                    </div>

                    <div className="flex items-start gap-3">
                      <input required type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-brand-secondary focus:ring-brand-secondary" id="privacy-consent" />
                      <label htmlFor="privacy-consent" className="text-xs text-slate-500 leading-relaxed">
                        I consent to Swanton IT processing my personal data in accordance with their <a href="/privacy" className="text-brand-secondary hover:underline">Privacy Policy</a>. We will never share your details with third parties for marketing purposes.
                      </label>
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

export default Contact;
