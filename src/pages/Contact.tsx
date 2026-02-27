import React from "react";
import { motion } from "framer-motion";
import { COMPANY_DETAILS } from "../constants";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen"
    >
      {/* Header */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Get in Touch</h1>
          <p className="mt-6 text-xl text-slate-400 max-w-3xl mx-auto">
            Have a question or ready to start your IT transformation? We're here to help.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <p className="text-lg text-slate-600 mb-10">
                  Reach out to us via any of the channels below. Our team typically responds within 4 business hours.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Phone</p>
                      <p className="text-slate-600">{COMPANY_DETAILS.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Email</p>
                      <p className="text-slate-600">{COMPANY_DETAILS.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Office Address</p>
                      <p className="text-slate-600">{COMPANY_DETAILS.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Business Hours</p>
                      <p className="text-slate-600">{COMPANY_DETAILS.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-slate-100 rounded-3xl h-64 flex items-center justify-center border border-slate-200 overflow-hidden relative">
                <img 
                  src="https://picsum.photos/seed/map/800/400?blur=2" 
                  alt="Map Placeholder" 
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="relative z-10 text-center p-6">
                  <MapPin size={48} className="text-indigo-600 mx-auto mb-4" />
                  <p className="font-bold text-slate-900">Serving Luton, Dunstable & Bedfordshire</p>
                  <p className="text-sm text-slate-600">On-site support available within 30 miles</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                  <p className="text-slate-600">
                    Thank you for reaching out. One of our IT specialists will be in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-indigo-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-slate-700">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-bold text-slate-700">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your Business Ltd"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-bold text-slate-700">Service Required</label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option>Managed IT Support</option>
                      <option>Cybersecurity</option>
                      <option>Cloud Migration</option>
                      <option>IT Consultancy</option>
                      <option>Backup & Recovery</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-700">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="mt-1 w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
                    />
                    <label htmlFor="consent" className="text-sm text-slate-600 leading-relaxed">
                      I consent to Team24 processing my data in accordance with the <a href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a>.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center"
                  >
                    Send Message <Send size={18} className="ml-2" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
