import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
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
      <section className="bg-stone-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6"
            >
              Let's <span className="text-orange-500">Connect</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-stone-400 leading-relaxed"
            >
              Have a question or ready to start your IT transformation? Our UK-based team is here to help.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-stone-100 space-y-8">
              <h2 className="text-2xl font-bold text-stone-900">Contact Details</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-stone-900 font-bold">{COMPANY_DETAILS.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-stone-900 font-bold">{COMPANY_DETAILS.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Office</p>
                    <p className="text-stone-900 font-bold leading-relaxed">{COMPANY_DETAILS.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Hours</p>
                    <p className="text-stone-900 font-bold">{COMPANY_DETAILS.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-stone-200 rounded-[2.5rem] h-64 overflow-hidden relative group">
              <img
                src="https://picsum.photos/seed/london-map/600/400"
                alt="Map Placeholder"
                className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2">
                  <MapPin className="text-orange-600" size={16} />
                  <span className="text-xs font-bold text-stone-900">View on Google Maps</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-stone-100">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 space-y-6"
                >
                  <div className="w-20 h-20 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-3xl font-bold text-stone-900">Message Received!</h2>
                  <p className="text-stone-600 max-w-sm mx-auto">
                    Thank you for reaching out. One of our UK-based IT specialists will contact you within 2 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-orange-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-stone-900 uppercase tracking-widest">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Smith"
                        className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-stone-900 uppercase tracking-widest">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="john@company.co.uk"
                        className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-stone-900 uppercase tracking-widest">Company Name</label>
                      <input
                        required
                        type="text"
                        placeholder="Your Business Ltd"
                        className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-stone-900 uppercase tracking-widest">Service Required</label>
                      <select className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all appearance-none">
                        <option>Managed IT Support</option>
                        <option>Cybersecurity</option>
                        <option>Cloud Migration</option>
                        <option>IT Strategy</option>
                        <option>Other / General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-stone-900 uppercase tracking-widest">Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your IT challenges..."
                      className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      required
                      type="checkbox"
                      className="mt-1 w-4 h-4 text-orange-600 border-stone-300 rounded focus:ring-orange-500"
                    />
                    <p className="text-xs text-stone-500 leading-relaxed">
                      I consent to Greater Manchester Ltd processing my data in accordance with their Privacy Policy. We will only use your details to respond to your enquiry.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-stone-900 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center hover:bg-orange-600 transition-all group"
                  >
                    Send Message
                    <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
