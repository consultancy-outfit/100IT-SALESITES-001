import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Get in Touch</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have a question or ready to start your IT transformation? Our Middlesbrough-based team is here to help.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-brand-100 p-3 rounded-xl text-brand-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Registered Office</div>
                    <p className="text-slate-600 text-sm">Unit 14, Tees Valley Business Park<br />Middlesbrough, TS2 1AD, UK</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-brand-100 p-3 rounded-xl text-brand-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Phone Number</div>
                    <p className="text-slate-600 text-sm">+44 (0) 1642 555 123</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-brand-100 p-3 rounded-xl text-brand-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Email Address</div>
                    <p className="text-slate-600 text-sm">info@teessidesupportedliving.co.uk</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-brand-100 p-3 rounded-xl text-brand-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Business Hours</div>
                    <p className="text-slate-600 text-sm">Mon - Fri: 08:30 - 17:30<br />24/7 Support for Managed Clients</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-slate-100 rounded-3xl border border-slate-200 flex items-center justify-center relative overflow-hidden">
              <div className="text-slate-400 text-sm font-medium flex flex-col items-center gap-2">
                <MapPin className="w-8 h-8 opacity-20" />
                Interactive Map Placeholder
              </div>
              <div className="absolute inset-0 bg-brand-600/5" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-slate-600 mb-8">Thank you for reaching out. One of our IT specialists will contact you within 24 business hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-brand-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Company Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20 outline-none transition-all"
                      placeholder="Care Provider Ltd"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input 
                    required
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20 outline-none transition-all"
                    placeholder="john@example.co.uk"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Service of Interest</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20 outline-none transition-all bg-white">
                    <option>Managed IT Support</option>
                    <option>Cybersecurity & GDPR</option>
                    <option>Cloud Migration</option>
                    <option>Infrastructure & Wi-Fi</option>
                    <option>Other / General Enquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Message</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your IT needs..."
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input required type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-brand-600 focus:ring-brand-600" />
                  <p className="text-xs text-slate-500 leading-relaxed">
                    I consent to Teesside Supported Living processing my data in accordance with their <Link to="/privacy" className="text-brand-600 hover:underline">Privacy Policy</Link>.
                  </p>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
