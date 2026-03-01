import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Have a question or ready to start your IT transformation? Our UK-based team is here to help. Reach out via the form or use our direct contact details below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Message Sent Successfully!</h2>
                  <p className="text-slate-600 mb-8">Thank you for reaching out. One of our IT specialists will be in touch within 24 business hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-brand-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Work Email</label>
                      <input
                        required
                        type="email"
                        placeholder="john@company.co.uk"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="01234 567 890"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Subject</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all">
                        <option>Managed IT Support</option>
                        <option>Cloud Solutions</option>
                        <option>Cybersecurity</option>
                        <option>IT Consultancy</option>
                        <option>Other Enquiry</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="How can we help your business?"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <input required type="checkbox" id="privacy" className="mt-1 w-4 h-4 text-brand-600" />
                    <label htmlFor="privacy" className="text-sm text-slate-500">
                      I consent to Bridlington IT Solutions processing my data in accordance with the <a href="/privacy" className="text-brand-600 hover:underline">Privacy Policy</a>.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-600 text-white rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">Contact Details</h2>
                <p className="text-slate-600 leading-relaxed">
                  Prefer a direct conversation? Use the details below to reach our Kings Langley office.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Registered Office</h4>
                    <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.address}</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                    <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.phone}</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                    <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.email}</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center">
                    <Clock className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                    <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.hours}</p>
                    <p className="text-sm text-slate-400 mt-1">Excluding UK Bank Holidays</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full aspect-video bg-slate-100 rounded-3xl border border-slate-200 overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col gap-4">
                  <MapPin className="w-12 h-12 opacity-20" />
                  <span className="font-medium">Interactive Map Placeholder</span>
                </div>
                <img
                  src="https://picsum.photos/seed/map/800/450?blur=2"
                  alt="Map Location"
                  className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
