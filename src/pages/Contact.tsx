import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-50 py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Have a project in mind or need technical support? Our London-based team is ready to help you navigate your IT challenges.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Form */}
            <div className="lg:w-3/5">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-100 p-12 rounded-3xl text-center"
                >
                  <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-white w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-bold text-green-900 mb-4">Message Sent Successfully!</h2>
                  <p className="text-green-700 mb-8">
                    Thank you for reaching out. One of our IT consultants will be in touch with you within 2 business hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-green-700 font-bold hover:underline"
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
                        placeholder="John Doe"
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Business Email</label>
                      <input 
                        required 
                        type="email" 
                        placeholder="john@company.co.uk"
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+44 0000 000000"
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Service Required</label>
                      <select className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all bg-white">
                        <option>Managed IT Support</option>
                        <option>Cloud Solutions</option>
                        <option>Cyber Security</option>
                        <option>IT Consultancy</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Your Message</label>
                    <textarea 
                      required 
                      rows={5} 
                      placeholder="Tell us about your requirements..."
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input required type="checkbox" className="mt-1.5 h-4 w-4 rounded border-gray-300 text-brand-accent focus:ring-brand-accent" />
                    <p className="text-sm text-slate-500 leading-relaxed">
                      I consent to Servoca London processing my data in accordance with the <a href="/privacy" className="text-brand-accent hover:underline">Privacy Policy</a>.
                    </p>
                  </div>
                  <button type="submit" className="btn-primary w-full py-5 text-lg">
                    Send Message <Send className="ml-2 w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:w-2/5 space-y-12">
              <div>
                <h3 className="text-xl font-bold mb-6">Company Details</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <MapPin className="text-brand-accent w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Registered Office</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{COMPANY_DETAILS.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <Phone className="text-brand-accent w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Phone Number</p>
                      <p className="text-slate-600 text-sm">{COMPANY_DETAILS.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <Mail className="text-brand-accent w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Email Address</p>
                      <p className="text-slate-600 text-sm">{COMPANY_DETAILS.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <Clock className="text-brand-accent w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Business Hours</p>
                      <p className="text-slate-600 text-sm">{COMPANY_DETAILS.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-slate-100 rounded-3xl aspect-video flex items-center justify-center border border-slate-200 overflow-hidden relative group">
                <img 
                  src="https://picsum.photos/seed/london-map/800/600?grayscale" 
                  alt="Map Location" 
                  className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3">
                    <div className="bg-brand-accent w-3 h-3 rounded-full animate-ping" />
                    <span className="font-bold text-slate-900">EC3V 4AB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
