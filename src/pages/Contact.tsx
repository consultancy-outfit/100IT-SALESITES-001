import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      <section className="py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-zinc-900 sm:text-5xl mb-6">Get in Touch</h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Have a question about our services or need immediate IT assistance? 
              Our UK-based team is ready to help your business thrive.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 rounded-3xl bg-emerald-50 border border-emerald-100 text-center"
                >
                  <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-emerald-900 mb-4">Message Sent!</h2>
                  <p className="text-emerald-700">
                    Thank you for reaching out. One of our IT specialists will contact you within 
                    the next 2 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-emerald-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-zinc-900 mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-zinc-900 mb-2">Business Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@company.co.uk"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-zinc-900 mb-2">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your Business Ltd"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-zinc-900 mb-2">Interested Service</label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option>Managed IT Support</option>
                      <option>Cybersecurity</option>
                      <option>Cloud Migration</option>
                      <option>Custom Software</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-zinc-900 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="consent" required className="mt-1.5 h-4 w-4 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500" />
                    <label htmlFor="consent" className="text-sm text-zinc-500">
                      I consent to Supported Living Services Uxbridge processing my data in accordance with the 
                      <a href="/privacy" className="text-indigo-600 hover:underline ml-1">Privacy Policy</a>.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900">Registered Office</p>
                      <p className="text-zinc-600">not available</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900">Phone</p>
                      <p className="text-zinc-600">not available</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900">Email</p>
                      <p className="text-zinc-600">not available</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900">Business Hours</p>
                      <p className="text-zinc-600">Monday - Friday: 09:00 - 17:30</p>
                      <p className="text-zinc-600">Weekend: Emergency Support Only</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-6">Location</h2>
                <div className="aspect-video rounded-3xl bg-zinc-100 border border-zinc-200 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <MapPin className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
                    <p className="text-zinc-400 font-medium italic">Map placeholder for Uxbridge area</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
