import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="pt-20 pb-16 bg-white border-b border-slate-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-600">
              Have a question about our services or need immediate IT assistance? Our team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
              {submitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
                  <p className="text-slate-600 mb-8">Thank you for reaching out. One of our IT specialists will contact you within 4 business hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-brand-accent font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                      <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" placeholder="John Smith" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                      <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" placeholder="john@company.co.uk" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                      <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" placeholder="01234 567890" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Company Name</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" placeholder="Worksop Care Ltd" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Service Interested In</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors">
                      <option>Managed IT Support</option>
                      <option>Cloud Solutions</option>
                      <option>Cyber Security</option>
                      <option>Network Infrastructure</option>
                      <option>Other / General Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Your Message</label>
                    <textarea required rows={5} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" placeholder="How can we help you?"></textarea>
                  </div>
                  <div className="flex items-start gap-3">
                    <input required type="checkbox" className="mt-1.5" id="privacy" />
                    <label htmlFor="privacy" className="text-sm text-slate-500">
                      I consent to having this website store my submitted information so they can respond to my inquiry in accordance with the <a href="/privacy" className="text-brand-accent hover:underline">Privacy Policy</a>.
                    </label>
                  </div>
                  <button type="submit" className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</p>
                      <p className="text-lg font-bold text-slate-900">{COMPANY_DETAILS.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
                      <p className="text-lg font-bold text-slate-900 break-all">{COMPANY_DETAILS.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Visit Us</p>
                      <p className="text-lg font-bold text-slate-900">{COMPANY_DETAILS.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Business Hours</p>
                      <p className="text-lg font-bold text-slate-900">{COMPANY_DETAILS.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Our Location</h3>
                <div className="w-full h-64 bg-slate-200 rounded-3xl overflow-hidden relative grayscale">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <MapPin className="w-10 h-10 text-brand-accent mx-auto mb-2" />
                      <p className="font-bold text-slate-600">Map Placeholder</p>
                      <p className="text-sm text-slate-500">Worksop, Nottinghamshire</p>
                    </div>
                  </div>
                  <img src="https://picsum.photos/seed/map/800/400?grayscale" alt="Map" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
