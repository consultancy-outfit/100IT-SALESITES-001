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
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tight text-zinc-900 mb-6">Contact Us</h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Have a question or ready to upgrade your IT? Our UK-based team is here to help. Reach out via the form or use our direct contact details.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div className="space-y-12">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-900 uppercase tracking-widest">Full Name</label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-900 uppercase tracking-widest">Email Address</label>
                      <input
                        required
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
                        placeholder="john@company.co.uk"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-900 uppercase tracking-widest">Company Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
                      placeholder="Your Business Ltd"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-900 uppercase tracking-widest">How can we help?</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all bg-white">
                      <option>Managed IT Support</option>
                      <option>Cybersecurity Audit</option>
                      <option>Cloud Migration</option>
                      <option>IT Consultancy</option>
                      <option>Other Enquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-900 uppercase tracking-widest">Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input required type="checkbox" className="mt-1 w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900" />
                    <label className="text-xs text-zinc-500 leading-relaxed">
                      I consent to Draycombe House processing my personal data in accordance with their Privacy Policy for the purpose of responding to my enquiry.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-zinc-900 text-white py-4 rounded-xl font-bold hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message <Send size={18} />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-zinc-50 p-12 rounded-3xl border border-zinc-100 text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center text-white mx-auto">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-3xl font-bold text-zinc-900">Message Sent!</h2>
                  <p className="text-zinc-600">
                    Thank you for reaching out. One of our IT specialists will be in touch within 2 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-zinc-900 font-bold underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-900">
                    <Phone size={24} />
                  </div>
                  <h3 className="font-bold text-zinc-900 uppercase tracking-widest text-xs">Call Us</h3>
                  <p className="text-zinc-600">{COMPANY_DETAILS.phone}</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-900">
                    <Mail size={24} />
                  </div>
                  <h3 className="font-bold text-zinc-900 uppercase tracking-widest text-xs">Email Us</h3>
                  <p className="text-zinc-600">{COMPANY_DETAILS.email}</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-900">
                    <MapPin size={24} />
                  </div>
                  <h3 className="font-bold text-zinc-900 uppercase tracking-widest text-xs">Visit Us</h3>
                  <p className="text-zinc-600 leading-relaxed">{COMPANY_DETAILS.address}</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-900">
                    <Clock size={24} />
                  </div>
                  <h3 className="font-bold text-zinc-900 uppercase tracking-widest text-xs">Business Hours</h3>
                  <p className="text-zinc-600">{COMPANY_DETAILS.hours}</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-zinc-100 rounded-3xl border border-zinc-200 relative overflow-hidden flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin size={32} className="mx-auto text-zinc-400" />
                  <p className="text-sm font-medium text-zinc-500">Interactive Map Placeholder</p>
                  <p className="text-xs text-zinc-400">London Tech Quarter, EC1A</p>
                </div>
                {/* Visual representation of a map */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-full h-px bg-zinc-900 rotate-45" />
                  <div className="absolute top-1/2 left-0 w-full h-px bg-zinc-900" />
                  <div className="absolute top-0 left-1/2 w-px h-full bg-zinc-900" />
                  <div className="absolute top-1/3 right-1/4 w-full h-px bg-zinc-900 -rotate-12" />
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
