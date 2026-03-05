import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Managed IT',
    message: '',
    consent: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-20 pb-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900">Get in Touch</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Have a question or ready to start your digital transformation? Our team is here to help you navigate your IT challenges.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">Contact Details</h2>
                <p className="text-slate-600">
                  Reach out to us via any of the channels below. Our team typically responds to all enquiries within one business hour.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Registered Office</h4>
                    <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.address}</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                    <p className="text-slate-600">{COMPANY_DETAILS.phone}</p>
                    <p className="text-xs text-slate-400 mt-1">Available during business hours</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                    <p className="text-slate-600">{COMPANY_DETAILS.email}</p>
                    <p className="text-xs text-slate-400 mt-1">General & Support Enquiries</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                    <p className="text-slate-600">{COMPANY_DETAILS.hours}</p>
                    <p className="text-xs text-slate-400 mt-1">Closed on Bank Holidays</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-slate-900 rounded-3xl text-white space-y-4">
                <h4 className="text-xl font-bold">Company Registration</h4>
                <div className="space-y-2 text-slate-400 text-sm">
                  <p>Company Name: {COMPANY_DETAILS.name}</p>
                  <p>CRN: {COMPANY_DETAILS.crn}</p>
                  <p>Registered in England & Wales</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
                
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900">Message Sent!</h4>
                    <p className="text-slate-600">Thank you for reaching out. One of our experts will be in touch shortly.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-indigo-600 font-bold hover:underline pt-4"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Full Name</label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                          placeholder="John Doe"
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Email Address</label>
                        <input 
                          type="email" 
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                          placeholder="john@company.co.uk"
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Phone Number</label>
                        <input 
                          type="tel" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                          placeholder="07123 456789"
                          value={formState.phone}
                          onChange={(e) => setFormState({...formState, phone: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Interested Service</label>
                        <select 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all bg-white"
                          value={formState.service}
                          onChange={(e) => setFormState({...formState, service: e.target.value})}
                        >
                          <option>Managed IT Support</option>
                          <option>Cybersecurity</option>
                          <option>Cloud Infrastructure</option>
                          <option>Network Design</option>
                          <option>Consultancy</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Message</label>
                      <textarea 
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all resize-none"
                        placeholder="Tell us about your requirements..."
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input 
                        type="checkbox" 
                        required
                        id="consent"
                        className="mt-1 w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
                        checked={formState.consent}
                        onChange={(e) => setFormState({...formState, consent: e.target.checked})}
                      />
                      <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed">
                        I consent to {COMPANY_DETAILS.name} collecting my data for the purpose of responding to this enquiry. View our <a href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a> for more details.
                      </label>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 group"
                    >
                      Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>

                    <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-4">
                      <ShieldCheck size={14} />
                      Secure & Confidential Communication
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
