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
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-display font-extrabold text-slate-900 mb-6"
          >
            Get in <span className="text-brand-600">Touch</span>
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Have a question or ready to start your digital transformation? 
            Our UK-based team is here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">Contact Details</h2>
              <div className="space-y-6">
                <div className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">Registered Office</div>
                    <div className="text-slate-600 text-sm leading-relaxed">{COMPANY_DETAILS.address}</div>
                  </div>
                </div>
                
                <div className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">Phone Number</div>
                    <div className="text-slate-600 text-sm">{COMPANY_DETAILS.phone}</div>
                  </div>
                </div>

                <div className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">Email Address</div>
                    <div className="text-slate-600 text-sm">{COMPANY_DETAILS.email}</div>
                  </div>
                </div>

                <div className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">Business Hours</div>
                    <div className="text-slate-600 text-sm">{COMPANY_DETAILS.hours}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-display font-bold mb-4">Support Portal</h3>
                <p className="text-slate-400 text-sm mb-6">Existing clients can log tickets directly via our 24/7 support portal for faster response.</p>
                <a href="#" className="inline-flex items-center gap-2 text-brand-400 font-bold hover:text-brand-300 transition-colors">
                  Access Portal <Send className="w-4 h-4" />
                </a>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/20 blur-3xl rounded-full" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-xl">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">Message Sent!</h3>
                  <p className="text-slate-600 mb-8">Thank you for contacting South Central IT. One of our experts will be in touch within 2 business hours.</p>
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
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-50 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Company Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Acme Ltd"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-50 outline-none transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Work Email</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@company.co.uk"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-50 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="07123 456789"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-50 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Service Required</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-50 outline-none transition-all bg-white">
                      <option>Managed IT Support</option>
                      <option>Cybersecurity Audit</option>
                      <option>Cloud Migration</option>
                      <option>IT Consultancy</option>
                      <option>Other Enquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Your Message</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="How can we help your business today?"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-50 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3">
                    <input required type="checkbox" className="mt-1 w-4 h-4 rounded text-brand-600 focus:ring-brand-500" />
                    <span className="text-xs text-slate-500 leading-relaxed">
                      I consent to South Central IT processing my data in accordance with their Privacy Policy. We will never share your details with third parties for marketing purposes.
                    </span>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-lg shadow-brand-100 flex items-center justify-center gap-2"
                  >
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        
        {/* Map Placeholder */}
        <div className="mt-24 aspect-[21/9] bg-slate-100 rounded-[3rem] overflow-hidden border border-slate-200 relative">
          <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-400">
            <MapPin className="w-12 h-12 mb-4 opacity-20" />
            <span className="font-bold uppercase tracking-widest text-xs">Interactive Map Placeholder</span>
            <span className="text-xs mt-2">Southampton Science Park, SO16</span>
          </div>
          <img 
            src="https://picsum.photos/seed/map/1600/600?grayscale" 
            alt="Map Location" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
}
