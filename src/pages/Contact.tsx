import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../constants';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, ShieldCheck, Check } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-5xl font-bold tracking-tight">Let's Talk Technology</h1>
            <p className="text-xl text-slate-400">
              Ready to optimize your IT infrastructure? Our London-based experts are here to help. Reach out for a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">Get in Touch</h2>
                <p className="text-slate-600 text-lg">
                  Whether you have a specific project in mind or just need general IT advice, we're always happy to chat.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Call Us</h3>
                  <p className="text-sm text-slate-600 mb-4">Speak directly with an engineer.</p>
                  <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-emerald-600 font-bold hover:underline">
                    {COMPANY_DETAILS.phone}
                  </a>
                </div>
                <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Email Us</h3>
                  <p className="text-sm text-slate-600 mb-4">We'll respond within 2 hours.</p>
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-emerald-600 font-bold hover:underline break-all">
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
                <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Visit Us</h3>
                  <p className="text-sm text-slate-600 mb-4">Our Central London HQ.</p>
                  <p className="text-slate-900 font-semibold text-sm">{COMPANY_DETAILS.address}</p>
                </div>
                <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Business Hours</h3>
                  <p className="text-sm text-slate-600 mb-4">Available for critical support 24/7.</p>
                  <p className="text-slate-900 font-semibold text-sm">{COMPANY_DETAILS.hours}</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative h-64 bg-slate-200 rounded-3xl overflow-hidden border border-slate-300">
                <div className="absolute inset-0 flex items-center justify-center text-slate-500 flex-col gap-2">
                  <MapPin className="w-8 h-8" />
                  <span className="font-bold">Interactive Map Placeholder</span>
                  <span className="text-xs">Central London, W1W</span>
                </div>
                <img 
                  src="https://picsum.photos/seed/london-map/1200/600?grayscale" 
                  alt="Map Location" 
                  className="w-full h-full object-cover opacity-30"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-200 shadow-xl">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                    <Check className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Message Received!</h3>
                  <p className="text-slate-600 text-lg">
                    Thank you for reaching out. One of our senior IT consultants will be in touch within the next 2 business hours.
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
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">Send a Message</h3>
                    <p className="text-sm text-slate-500">Fill out the form below and we'll get back to you shortly.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. John Smith"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Work Email</label>
                      <input 
                        required
                        type="email" 
                        placeholder="e.g. john@company.co.uk"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="e.g. 020 7123 4567"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Service Interested In</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white">
                        <option>Managed IT Support</option>
                        <option>Cloud Solutions</option>
                        <option>Cybersecurity</option>
                        <option>IT Consultancy</option>
                        <option>Healthcare Tech</option>
                        <option>Other / General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Your Message</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Tell us about your IT challenges..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3">
                    <input required type="checkbox" id="privacy" className="mt-1 w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500" />
                    <label htmlFor="privacy" className="text-xs text-slate-500 leading-relaxed">
                      I consent to Soma IT Solutions processing my personal data in accordance with their <a href="/privacy" className="text-emerald-600 hover:underline">Privacy Policy</a>. We will never share your details with third parties.
                    </label>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-100"
                  >
                    Send Message <Send className="w-5 h-5" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Your data is encrypted and secure.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
