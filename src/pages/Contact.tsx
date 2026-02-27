import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-20 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-zinc-900 mb-8 tracking-tight"
            >
              Get in <span className="text-indigo-600">Touch</span>
            </motion.h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Have a question or ready to start your digital transformation? Our London-based team is here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div>
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-100 p-12 rounded-3xl text-center"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-zinc-900 mb-4">Message Sent!</h2>
                  <p className="text-zinc-600">Thank you for reaching out. One of our IT specialists will be in touch within 2 business hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-indigo-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-900 uppercase tracking-widest">Full Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="John Smith" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-900 uppercase tracking-widest">Email Address</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="john@company.co.uk" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-900 uppercase tracking-widest">Phone Number</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="+44 7000 000000" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-900 uppercase tracking-widest">Company Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="Your Business Ltd" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-900 uppercase tracking-widest">Service of Interest</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-white">
                      <option>Managed IT Support</option>
                      <option>Cybersecurity</option>
                      <option>Cloud Solutions</option>
                      <option>IT Consulting</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-900 uppercase tracking-widest">Your Message</label>
                    <textarea required rows={5} className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us about your IT requirements..."></textarea>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input required type="checkbox" id="privacy" className="mt-1 w-4 h-4 text-indigo-600 rounded border-zinc-300 focus:ring-indigo-500" />
                    <label htmlFor="privacy" className="text-sm text-zinc-500">
                      I consent to Oaklands Respite processing my data in accordance with the <a href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a>.
                    </label>
                  </div>
                  <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center">
                    Send Message <Send className="ml-2 w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-12">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                    <Phone size={20} />
                  </div>
                  <h4 className="font-bold text-zinc-900">Call Us</h4>
                  <p className="text-zinc-600 text-sm">{COMPANY_DETAILS.phone}</p>
                </div>
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                    <Mail size={20} />
                  </div>
                  <h4 className="font-bold text-zinc-900">Email Us</h4>
                  <p className="text-zinc-600 text-sm">{COMPANY_DETAILS.email}</p>
                </div>
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                    <MapPin size={20} />
                  </div>
                  <h4 className="font-bold text-zinc-900">Visit Us</h4>
                  <p className="text-zinc-600 text-sm leading-relaxed">{COMPANY_DETAILS.address}</p>
                </div>
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                    <Clock size={20} />
                  </div>
                  <h4 className="font-bold text-zinc-900">Business Hours</h4>
                  <p className="text-zinc-600 text-sm">{COMPANY_DETAILS.hours}</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-3xl bg-zinc-100 border border-zinc-200 overflow-hidden relative group">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-400 p-8 text-center">
                  <MapPin size={48} className="mb-4 opacity-20" />
                  <p className="font-medium">Interactive Map Placeholder</p>
                  <p className="text-xs mt-2">Our office is located in the heart of London's tech district.</p>
                </div>
                <div className="absolute inset-0 bg-indigo-600/5 group-hover:bg-transparent transition-colors" />
              </div>

              <div className="p-6 bg-zinc-900 rounded-2xl text-white flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-indigo-400">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Secure Communication</h4>
                  <p className="text-xs text-zinc-400">All messages are encrypted and handled in compliance with GDPR.</p>
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
