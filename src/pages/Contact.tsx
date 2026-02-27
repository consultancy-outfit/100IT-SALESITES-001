import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="bg-zinc-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold text-zinc-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-zinc-600">
              Have a question or ready to start your IT transformation? Our team is here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-zinc-200 shadow-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-2">Message Sent!</h2>
                  <p className="text-zinc-600">Thank you for reaching out. We'll get back to you within 2 business hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-indigo-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-2">Full Name</label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-2">Email Address</label>
                      <input
                        required
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@company.co.uk"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                      placeholder="0121 000 0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">Service Interested In</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all">
                      <option>Managed IT Support</option>
                      <option>Cloud Solutions</option>
                      <option>Cyber Security</option>
                      <option>IT Consultancy</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <div className="flex items-start">
                    <input
                      required
                      type="checkbox"
                      className="mt-1 h-4 w-4 text-indigo-600 border-zinc-300 rounded focus:ring-indigo-500"
                    />
                    <label className="ml-3 text-sm text-zinc-600">
                      I consent to having this website store my submitted information so they can respond to my inquiry in accordance with the Privacy Policy.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-8">Company Details</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-50 p-3 rounded-lg text-indigo-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900">Registered Office</p>
                      <p className="text-zinc-600">{COMPANY_DETAILS.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-50 p-3 rounded-lg text-indigo-600">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900">Phone</p>
                      <p className="text-zinc-600">{COMPANY_DETAILS.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-50 p-3 rounded-lg text-indigo-600">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900">Email</p>
                      <p className="text-zinc-600">{COMPANY_DETAILS.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-50 p-3 rounded-lg text-indigo-600">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900">Business Hours</p>
                      <p className="text-zinc-600">{COMPANY_DETAILS.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-900 text-white">
                <h3 className="text-xl font-bold mb-4">Find Us</h3>
                <div className="aspect-video bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700">
                  <p className="text-zinc-500 text-sm">Map Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
