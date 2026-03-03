import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">Let's Talk <span className="text-indigo-600 text-3xl lg:text-5xl block mt-2">Technology.</span></h1>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                Whether you have a specific project in mind or just need better support, our team is ready to help your business thrive.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                    <MapPin className="text-indigo-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Registered Office</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{COMPANY_DETAILS.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                    <Phone className="text-indigo-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                    <p className="text-slate-600 text-sm">{COMPANY_DETAILS.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                    <Mail className="text-indigo-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                    <p className="text-slate-600 text-sm">{COMPANY_DETAILS.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                    <Clock className="text-indigo-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                    <p className="text-slate-600 text-sm">{COMPANY_DETAILS.hours}</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 aspect-video rounded-3xl bg-slate-200 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                  Google Maps Placeholder
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                  alt="Map Location" 
                  className="w-full h-full object-cover opacity-30 grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-emerald-600 w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Message Sent!</h2>
                  <p className="text-slate-600">Thank you for reaching out. One of our experts will be in touch within 24 hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-indigo-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                        placeholder="john@company.co.uk"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                    <input 
                      type="text" 
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                      placeholder="Your Business Ltd"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Service of Interest</label>
                    <select className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all">
                      <option>Managed IT Support</option>
                      <option>Cyber Security</option>
                      <option>Cloud Solutions</option>
                      <option>IT Consultancy</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Message</label>
                    <textarea 
                      rows={5} 
                      required
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" required className="mt-1.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                    <span className="text-xs text-slate-500 leading-relaxed">
                      I consent to {COMPANY_DETAILS.name} storing my data to contact me regarding my enquiry. View our <a href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a>.
                    </span>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-indigo-600 text-white py-5 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-100"
                  >
                    Send Message <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
