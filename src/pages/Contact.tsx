import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,theme(colors.indigo.500/0.1),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8">
              Let's Start a <span className="text-indigo-400">Conversation.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Have a question about our services or need a custom IT strategy? Our Winchester-based team is here to help you navigate your technology journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 tracking-tight mb-8">Get in Touch</h2>
              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-indigo-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-1">Our Office</h3>
                    <p className="text-zinc-600 leading-relaxed">{COMPANY_DETAILS.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-emerald-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-1">Phone</h3>
                    <p className="text-zinc-600 leading-relaxed">{COMPANY_DETAILS.phone}</p>
                    <p className="text-sm text-zinc-400 mt-1">Available during business hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-amber-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-1">Email</h3>
                    <p className="text-zinc-600 leading-relaxed">{COMPANY_DETAILS.email}</p>
                    <p className="text-sm text-zinc-400 mt-1">We aim to respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="text-purple-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-1">Business Hours</h3>
                    <p className="text-zinc-600 leading-relaxed">{COMPANY_DETAILS.hours}</p>
                    <p className="text-sm text-zinc-400 mt-1">Closed on UK Bank Holidays</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 rounded-3xl overflow-hidden h-64 bg-zinc-100 border border-zinc-200 relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-10 h-10 text-zinc-300 mx-auto mb-2 group-hover:text-indigo-400 transition-colors" />
                    <p className="text-sm font-medium text-zinc-400">Interactive Map Loading...</p>
                  </div>
                </div>
                <img 
                  src="https://picsum.photos/seed/map/800/400?grayscale" 
                  alt="Map Placeholder" 
                  className="w-full h-full object-cover opacity-30"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-zinc-50 rounded-3xl p-8 lg:p-12 border border-zinc-200">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-emerald-600 w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-zinc-900 mb-4">Message Sent!</h3>
                  <p className="text-zinc-600 mb-8">Thank you for reaching out. One of our IT experts will be in touch with you shortly.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="flex items-center space-x-3 mb-8">
                    <MessageSquare className="text-indigo-600 w-6 h-6" />
                    <h2 className="text-2xl font-bold text-zinc-900">Send us a Message</h2>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Full Name</label>
                        <input
                          required
                          type="text"
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Email Address</label>
                        <input
                          required
                          type="email"
                          placeholder="john@company.co.uk"
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="+44 0000 000000"
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Service Interested In</label>
                        <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-white">
                          <option>Managed IT Support</option>
                          <option>Cyber Security</option>
                          <option>Cloud Migration</option>
                          <option>IT Consultancy</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Your Message</label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us about your IT requirements..."
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-white resize-none"
                      ></textarea>
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        required
                        type="checkbox"
                        id="privacy"
                        className="mt-1 w-4 h-4 text-indigo-600 border-zinc-300 rounded focus:ring-indigo-500"
                      />
                      <label htmlFor="privacy" className="text-sm text-zinc-500 leading-relaxed">
                        I consent to Supremacy Care IT processing my personal data in accordance with the <a href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a>.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center space-x-2"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
