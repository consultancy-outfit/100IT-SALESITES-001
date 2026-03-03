import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div>
              <h1 className="text-5xl font-bold text-zinc-900 mb-8">Get in Touch</h1>
              <p className="text-xl text-zinc-600 mb-12 leading-relaxed">
                Have a technical challenge or need a quote? Our team is ready to help. Reach out via the form or use our direct contact details.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-indigo-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Registered Office</h4>
                    <p className="text-zinc-600">{COMPANY_DETAILS.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-indigo-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Phone</h4>
                    <p className="text-zinc-600">{COMPANY_DETAILS.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-indigo-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Email</h4>
                    <p className="text-zinc-600">{COMPANY_DETAILS.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-indigo-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Business Hours</h4>
                    <p className="text-zinc-600">{COMPANY_DETAILS.hours}</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 aspect-video bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200 relative group">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 group-hover:text-zinc-500 transition-colors">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-2 opacity-20" />
                    <p className="text-sm font-medium">Interactive Map Placeholder</p>
                    <p className="text-xs">Ormskirk, Lancashire</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-zinc-50 p-8 sm:p-12 rounded-[2.5rem] border border-zinc-200">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck className="text-emerald-600 w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-bold text-zinc-900 mb-4">Message Sent!</h2>
                  <p className="text-zinc-600 mb-8">
                    Thank you for reaching out. A member of our technical team will be in touch within one business hour.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-indigo-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Full Name</label>
                      <input
                        required
                        type="text"
                        className="w-full px-6 py-4 bg-white border border-zinc-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Company</label>
                      <input
                        required
                        type="text"
                        className="w-full px-6 py-4 bg-white border border-zinc-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                        placeholder="Acme Ltd"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Email Address</label>
                    <input
                      required
                      type="email"
                      className="w-full px-6 py-4 bg-white border border-zinc-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                      placeholder="john@example.co.uk"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Service Required</label>
                    <select className="w-full px-6 py-4 bg-white border border-zinc-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all appearance-none">
                      <option>Managed IT Support</option>
                      <option>Cybersecurity Audit</option>
                      <option>Cloud Migration</option>
                      <option>IT Consultancy</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Message</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-6 py-4 bg-white border border-zinc-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start gap-3 py-2">
                    <input required type="checkbox" className="mt-1 w-4 h-4 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500" />
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      I consent to West Lancs IT processing my personal data in accordance with their <a href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a> to respond to my enquiry.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-10 py-5 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
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
