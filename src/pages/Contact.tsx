/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck, Users } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';
import { cn } from '../utils';

export default function Contact() {
  const [formState, setFormState] = React.useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="pt-20 pb-32">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-8"
          >
            <Mail className="h-4 w-4" />
            <span>Get in Touch</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight"
          >
            Let's Start a <span className="text-indigo-600">Conversation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            Have a question or ready to transform your IT? Our team is here to help. Send us a message and we'll get back to you within 24 business hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Phone className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Call Us</h3>
                <p className="text-slate-600 font-medium">{COMPANY_DETAILS.phone}</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Email Us</h3>
                <p className="text-slate-600 font-medium">{COMPANY_DETAILS.email}</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Visit Us</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{COMPANY_DETAILS.address}</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Business Hours</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{COMPANY_DETAILS.hours}</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-96 bg-slate-200 rounded-[2.5rem] overflow-hidden shadow-inner flex items-center justify-center border border-slate-300">
              <div className="text-center p-8">
                <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-500 font-medium">Interactive Map Placeholder</p>
                <p className="text-xs text-slate-400 mt-2 uppercase tracking-widest">Northumberland, United Kingdom</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 md:p-16 rounded-[3rem] border border-slate-200 shadow-2xl relative">
            {formState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h2>
                <p className="text-lg text-slate-600 mb-10">
                  Thank you for reaching out. One of our IT experts will be in touch with you shortly.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-slate-700 uppercase tracking-widest">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="John Smith"
                        className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all outline-none bg-slate-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-slate-700 uppercase tracking-widest">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="john@company.co.uk"
                        className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all outline-none bg-slate-50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-bold text-slate-700 uppercase tracking-widest">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      placeholder="Your Business Ltd"
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all outline-none bg-slate-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-bold text-slate-700 uppercase tracking-widest">Service Required</label>
                    <select
                      id="service"
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all outline-none bg-slate-50 appearance-none"
                    >
                      <option value="">Select a service...</option>
                      <option value="managed-it">Managed IT Support</option>
                      <option value="cloud">Cloud Solutions</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="consultancy">IT Consultancy</option>
                      <option value="other">Other Enquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-700 uppercase tracking-widest">How can we help?</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Tell us about your IT challenges..."
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all outline-none bg-slate-50 resize-none"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start space-x-3 py-4">
                    <div className="flex items-center h-5">
                      <input
                        id="privacy"
                        type="checkbox"
                        required
                        className="w-5 h-5 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
                      />
                    </div>
                    <label htmlFor="privacy" className="text-sm text-slate-500 leading-relaxed">
                      I consent to {COMPANY_DETAILS.name} processing my data in accordance with the <a href="/privacy" className="text-indigo-600 font-semibold hover:underline">Privacy Policy</a>.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className={cn(
                      "w-full py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center space-x-3 shadow-xl",
                      formState === 'submitting' ? "bg-slate-400 cursor-not-allowed" : "bg-indigo-600 text-white hover:bg-indigo-700"
                    )}
                  >
                    {formState === 'submitting' ? (
                      <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
          <div className="flex items-center space-x-4">
            <ShieldCheck className="h-12 w-12 text-indigo-600" />
            <div>
              <div className="font-bold text-slate-900">GDPR Compliant</div>
              <div className="text-sm text-slate-500">Your data is safe with us</div>
            </div>
          </div>
          <div className="w-px h-12 bg-slate-200 hidden md:block" />
          <div className="flex items-center space-x-4">
            <CheckCircle2 className="h-12 w-12 text-indigo-600" />
            <div>
              <div className="font-bold text-slate-900">Cyber Essentials</div>
              <div className="text-sm text-slate-500">Certified security standards</div>
            </div>
          </div>
          <div className="w-px h-12 bg-slate-200 hidden md:block" />
          <div className="flex items-center space-x-4">
            <Users className="h-12 w-12 text-indigo-600" />
            <div>
              <div className="font-bold text-slate-900">UK Based Team</div>
              <div className="text-sm text-slate-500">Local expertise, global standards</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
