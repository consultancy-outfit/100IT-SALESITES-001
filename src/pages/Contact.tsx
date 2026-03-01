import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck } from 'lucide-react';

const COMPANY_DETAILS = {
  name: "Island Business Centre",
  address: "15 Queens Road, Donnington, Telford, England, TF2 8DB",
  phone: "0208 088 5943",
  email: "info@islandbusinesscentre.co.uk",
  hours: "Mon - Fri: 09:00 - 17:30"
};

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Managed IT Support',
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

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-24 pb-16">
      <section className="bg-slate-900 py-24 text-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            Have a question or ready to start your IT transformation? Our UK-based team is ready to help.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <motion.div {...fadeIn} className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-brand-600 shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Call Us</p>
                      <p className="font-bold text-slate-900">{COMPANY_DETAILS.phone}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-brand-600 shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email Us</p>
                      <p className="font-bold text-slate-900 break-all">{COMPANY_DETAILS.email}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-brand-600 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Visit Us</p>
                      <p className="font-bold text-slate-900 leading-tight">{COMPANY_DETAILS.address}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-brand-600 shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Business Hours</p>
                      <p className="font-bold text-slate-900">{COMPANY_DETAILS.hours}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="aspect-square rounded-3xl bg-slate-200 overflow-hidden relative border border-slate-100">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col gap-2">
                  <MapPin size={48} />
                  <span className="font-bold">Map View</span>
                  <span className="text-xs">Telford, England</span>
                </div>
                {/* In a real app, you'd embed a Google Map here */}
                <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=600" alt="Map" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div {...fadeIn} className="p-8 md:p-12 rounded-3xl bg-white border border-slate-100 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
                
                {isSubmitted ? (
                  <div className="py-20 text-center space-y-4">
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <ShieldCheck size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900">Message Sent!</h4>
                    <p className="text-slate-600">Thank you for contacting us. One of our experts will be in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Full Name</label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                          placeholder="John Smith"
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Email Address</label>
                        <input 
                          type="email" 
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                          placeholder="john@company.co.uk"
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Phone Number</label>
                        <input 
                          type="tel" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                          placeholder="07123 456789"
                          value={formState.phone}
                          onChange={(e) => setFormState({...formState, phone: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Company Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                          placeholder="Your Business Ltd"
                          value={formState.company}
                          onChange={(e) => setFormState({...formState, company: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Service Required</label>
                      <select 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all appearance-none bg-white"
                        value={formState.service}
                        onChange={(e) => setFormState({...formState, service: e.target.value})}
                      >
                        <option>Managed IT Support</option>
                        <option>Cybersecurity</option>
                        <option>Cloud Migration</option>
                        <option>IT Consultancy</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Your Message</label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all resize-none"
                        placeholder="How can we help you?"
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                      ></textarea>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <input 
                        type="checkbox" 
                        id="consent"
                        required
                        className="mt-1 w-4 h-4 text-brand-600 border-slate-300 rounded focus:ring-brand-500"
                        checked={formState.consent}
                        onChange={(e) => setFormState({...formState, consent: e.target.checked})}
                      />
                      <label htmlFor="consent" className="text-sm text-slate-600">
                        I consent to Island Business Centre processing my data in accordance with the <a href="/privacy" className="text-brand-600 hover:underline">Privacy Policy</a>.
                      </label>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-4 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-600/20"
                    >
                      Send Message <Send size={18} />
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
