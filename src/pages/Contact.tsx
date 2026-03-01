import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../components/Layout';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-20 md:py-32 text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl mb-6">Get in Touch with <br/><span className="text-brand-400">Our IT Experts</span></h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Whether you have a specific project in mind or just need some advice on your IT strategy, we're here to help.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-600/10 blur-[100px]"></div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100">
                <h2 className="text-3xl font-bold mb-8 text-slate-900">Send us a Message</h2>
                
                {formState === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Message Sent Successfully!</h3>
                    <p className="text-slate-600">Thank you for reaching out. One of our UK-based experts will get back to you within 24 business hours.</p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="text-brand-600 font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Smith" 
                          className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-50 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Work Email</label>
                        <input 
                          required
                          type="email" 
                          placeholder="john@company.co.uk" 
                          className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-50 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                        <input 
                          type="tel" 
                          placeholder="+44 7000 000000" 
                          className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-50 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Service Required</label>
                        <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-50 transition-all appearance-none">
                          <option>Managed IT Support</option>
                          <option>Cybersecurity</option>
                          <option>Cloud Migration</option>
                          <option>IT Consultancy</option>
                          <option>Other Enquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Your Message</label>
                      <textarea 
                        required
                        rows={5}
                        placeholder="How can we help your business?" 
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-50 transition-all"
                      ></textarea>
                    </div>

                    <div className="flex items-start gap-3">
                      <input 
                        required
                        type="checkbox" 
                        id="privacy" 
                        className="mt-1 w-5 h-5 rounded border-slate-300 text-brand-600 focus:ring-brand-500" 
                      />
                      <label htmlFor="privacy" className="text-sm text-slate-600 leading-relaxed">
                        I consent to Jackson Gardens processing my data in accordance with the <a href="/privacy" className="text-brand-600 hover:underline">Privacy Policy</a>. We will never share your details with third parties.
                      </label>
                    </div>

                    <button 
                      disabled={formState === 'submitting'}
                      type="submit" 
                      className="w-full bg-brand-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/25 flex items-center justify-center gap-3 disabled:opacity-70"
                    >
                      {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                      <Send size={20} />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-slate-900">Company Details</h2>
                <div className="space-y-6">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Registered Office</h4>
                      <p className="text-slate-600 leading-relaxed">133 Hazel Avenue, Guildford, England, GU1 1NU</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                      <p className="text-slate-600 leading-relaxed">0151 380 0831</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                      <p className="text-slate-600 leading-relaxed">info@jacksongardens.co.uk</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                      <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative rounded-[40px] overflow-hidden aspect-video bg-slate-100 border border-slate-200 group">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-8 text-center">
                  <MapPin size={48} className="mb-4 opacity-20 group-hover:scale-110 transition-transform" />
                  <p className="font-medium">Interactive Map Placeholder</p>
                  <p className="text-xs mt-2">Our office is located in the heart of London's Tech City.</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-200/50 to-transparent"></div>
              </div>

              {/* Emergency Support Box */}
              <div className="p-8 rounded-[32px] bg-emerald-50 border border-emerald-100 space-y-4">
                <div className="flex items-center gap-3 text-emerald-700 font-bold">
                  <AlertCircle size={20} /> Emergency Support
                </div>
                <p className="text-sm text-emerald-800 leading-relaxed">
                  Existing managed services clients can access 24/7 emergency support via their dedicated portal or priority phone line.
                </p>
                <a href="#" className="inline-block text-emerald-700 font-bold text-sm hover:underline">Client Portal Login &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
