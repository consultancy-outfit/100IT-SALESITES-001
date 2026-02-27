import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-zinc-600 max-w-2xl">
            Have a question or ready to start your journey towards technical independence? 
            Our UK-based team is here to help.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div>
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-zinc-900 text-white p-12 rounded-[3rem] text-center"
                >
                  <div className="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
                  <p className="text-zinc-400 mb-8">
                    Thank you for reaching out. One of our experts will be in touch 
                    within one business day.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-white underline font-bold"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Email Address</label>
                      <input 
                        required
                        type="email" 
                        className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
                        placeholder="john@company.co.uk"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Company Name</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
                      placeholder="Your Business Ltd"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Service of Interest</label>
                    <select className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all appearance-none">
                      <option>Cybersecurity & Compliance</option>
                      <option>Cloud Infrastructure</option>
                      <option>Managed IT Support</option>
                      <option>Custom Software Development</option>
                      <option>IT Consultancy</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Your Message</label>
                    <textarea 
                      required
                      rows={5}
                      className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input required type="checkbox" className="mt-1 w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900" />
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      I consent to ATTAINING-INDEPENDENCE processing my personal data in accordance with the 
                      <a href="/privacy" className="underline ml-1">Privacy Policy</a>.
                    </p>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-5 bg-zinc-900 text-white rounded-full font-bold text-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Details */}
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-zinc-900" />
                  </div>
                  <h3 className="font-bold">Email Us</h3>
                  <p className="text-sm text-zinc-600">{COMPANY_DETAILS.email}</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-zinc-900" />
                  </div>
                  <h3 className="font-bold">Call Us</h3>
                  <p className="text-sm text-zinc-600">{COMPANY_DETAILS.phone}</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-zinc-900" />
                  </div>
                  <h3 className="font-bold">Visit Us</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{COMPANY_DETAILS.address}</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-zinc-900" />
                  </div>
                  <h3 className="font-bold">Business Hours</h3>
                  <p className="text-sm text-zinc-600">{COMPANY_DETAILS.hours}</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-zinc-100 rounded-[3rem] overflow-hidden relative border border-zinc-200">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 flex-col gap-2">
                  <MapPin className="w-10 h-10" />
                  <span className="font-bold uppercase tracking-widest text-xs">London Office Location</span>
                </div>
                <img 
                  src="https://picsum.photos/seed/london-map/1200/800?blur=2" 
                  className="w-full h-full object-cover opacity-30 grayscale" 
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

export default Contact;
