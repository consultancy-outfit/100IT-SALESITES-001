import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-brand-primary text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">
              Let's Start a <span className="text-brand-accent">Conversation</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Whether you have a specific project in mind or just want to explore how we can help your business, our team is ready to talk.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 -mt-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-bold mb-8">Contact Details</h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-accent shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold mb-1">Our Office</p>
                      <p className="text-slate-700 font-medium leading-relaxed">{COMPANY_DETAILS.address}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-accent shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold mb-1">Phone Number</p>
                      <p className="text-slate-700 font-medium">{COMPANY_DETAILS.phone}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-accent shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold mb-1">Email Address</p>
                      <p className="text-slate-700 font-medium">{COMPANY_DETAILS.email}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-accent shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold mb-1">Business Hours</p>
                      <p className="text-slate-700 font-medium">{COMPANY_DETAILS.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden relative group">
                <img 
                  src="https://picsum.photos/seed/map/600/400?blur=2" 
                  alt="Map Placeholder" 
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white px-6 py-3 rounded-full shadow-lg font-bold text-sm flex items-center gap-2">
                    <MapPin size={16} className="text-brand-accent" />
                    View on Google Maps
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 md:p-16 rounded-3xl border border-slate-200 shadow-sm">
                {formState === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent mx-auto mb-8">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                    <p className="text-slate-600 mb-8 max-w-md mx-auto">
                      Thank you for contacting Rosewood Lodge. One of our IT specialists will be in touch with you within 2 business hours.
                    </p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="text-brand-accent font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-3xl font-bold mb-8">Send us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Full Name</label>
                          <input 
                            required
                            type="text" 
                            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all"
                            placeholder="John Smith"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Email Address</label>
                          <input 
                            required
                            type="email" 
                            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all"
                            placeholder="john@company.co.uk"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Phone Number</label>
                          <input 
                            type="tel" 
                            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all"
                            placeholder="0118 950 1234"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Service Required</label>
                          <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all">
                            <option>Managed IT Support</option>
                            <option>Cloud Solutions</option>
                            <option>Cyber Security</option>
                            <option>IT Consultancy</option>
                            <option>Other Enquiry</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Your Message</label>
                        <textarea 
                          required
                          rows={5}
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all"
                          placeholder="How can we help your business?"
                        ></textarea>
                      </div>
                      <div className="flex items-start gap-3">
                        <input required type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-brand-accent focus:ring-brand-accent" />
                        <p className="text-xs text-slate-500 leading-relaxed">
                          I consent to Rosewood Lodge IT Services Ltd collecting and storing my data for the purpose of responding to this enquiry in accordance with the <a href="/privacy" className="text-brand-accent hover:underline">Privacy Policy</a>.
                        </p>
                      </div>
                      <button 
                        disabled={formState === 'submitting'}
                        className="w-full bg-brand-primary text-white py-5 rounded-xl font-bold text-lg hover:bg-brand-accent transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                      >
                        {formState === 'submitting' ? 'Sending...' : (
                          <>Send Message <Send size={20} /></>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
