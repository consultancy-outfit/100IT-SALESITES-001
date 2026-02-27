import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Contact Our Team</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Have a question about our services or need a custom quote? We're here to help you navigate your IT challenges.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-100 p-12 rounded-3xl text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Message Sent!</h2>
                  <p className="text-slate-600 mb-8">Thank you for reaching out. One of our IT consultants will be in touch within 2 business hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-indigo-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                        placeholder="john@company.co.uk"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                      placeholder="Your Business Ltd"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Service Required</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white">
                      <option>Managed IT Support</option>
                      <option>Cybersecurity Audit</option>
                      <option>Cloud Migration</option>
                      <option>IT Consultancy</option>
                      <option>Other Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Message</label>
                    <textarea 
                      rows={5} 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input type="checkbox" required className="mt-1 w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500" />
                    <p className="text-xs text-slate-500">
                      I consent to William and Patrica Venton Centre processing my data in accordance with their Privacy Policy.
                    </p>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center shadow-lg shadow-indigo-100"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Info Column */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-50 p-3 rounded-xl">
                      <MapPin className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Registered Office</p>
                      <p className="text-slate-600">{COMPANY_DETAILS.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-50 p-3 rounded-xl">
                      <Phone className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Phone Number</p>
                      <p className="text-slate-600">{COMPANY_DETAILS.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-50 p-3 rounded-xl">
                      <Mail className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Email Address</p>
                      <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-indigo-600 hover:underline">{COMPANY_DETAILS.email}</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-50 p-3 rounded-xl">
                      <Clock className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Business Hours</p>
                      <p className="text-slate-600">{COMPANY_DETAILS.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-slate-100 rounded-3xl h-64 flex items-center justify-center border border-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[url('https://picsum.photos/seed/map/800/600')] bg-cover bg-center" />
                <div className="relative z-10 text-center p-6">
                  <MapPin className="w-10 h-10 text-indigo-600 mx-auto mb-2" />
                  <p className="font-bold text-slate-900">Northampton, UK</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Location Map</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
