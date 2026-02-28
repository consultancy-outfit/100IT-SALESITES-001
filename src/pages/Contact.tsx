import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';

const COMPANY_DETAILS = {
  name: "Wickham Hall IT Services Ltd",
  address: "15 Queens Road, Donnington, Telford, England, TF2 8DB",
  crn: "17049007",
  phone: "0194 256 5146",
  email: "info@wickhamhall.co.uk",
  hours: "Monday - Friday: 08:30 - 18:00"
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white">
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
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
            Have a question or ready to start your project? Our UK-based experts are here to help.
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
              className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm"
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Business Email</label>
                    <input
                      required
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                      placeholder="john.smith@company.co.uk"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                      placeholder="+44 (0) 7700 900000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Service Required</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-white">
                      <option>Managed IT Support</option>
                      <option>Cybersecurity</option>
                      <option>Cloud Infrastructure</option>
                      <option>IT Consultancy</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Message</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input required type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded border-slate-300" id="consent" />
                    <label htmlFor="consent" className="text-sm text-slate-500">
                      I consent to Wickham Hall processing my data in accordance with the <a href="/privacy" className="text-indigo-600 underline">Privacy Policy</a>.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-green-600 w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Message Sent!</h2>
                  <p className="text-slate-600 mb-8">
                    Thank you for reaching out. One of our UK-based specialists will be in touch within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-indigo-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </motion.div>

            {/* Contact Info & Map */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Contact Details</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="text-indigo-600 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Registered Office</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{COMPANY_DETAILS.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="text-indigo-600 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Phone Number</h4>
                      <p className="text-slate-600 text-sm">{COMPANY_DETAILS.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="text-indigo-600 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Email Address</h4>
                      <p className="text-slate-600 text-sm">{COMPANY_DETAILS.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="text-indigo-600 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Business Hours</h4>
                      <p className="text-slate-600 text-sm">{COMPANY_DETAILS.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative h-80 bg-slate-100 rounded-[2.5rem] overflow-hidden border border-slate-200">
                <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-400">
                  <MapPin className="w-12 h-12 mb-4 opacity-20" />
                  <p className="font-medium">Interactive Map Placeholder</p>
                  <p className="text-xs">Wickham Hall, Hadham Road, CM23 1JG</p>
                </div>
                {/* In a real app, you'd embed Google Maps here */}
                <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-sm text-xs font-bold text-slate-500 border border-slate-100">
                  View on Google Maps
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
