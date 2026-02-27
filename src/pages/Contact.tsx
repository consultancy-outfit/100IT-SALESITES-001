import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_DETAILS } from '../types';

export const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-16">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h1 className="text-5xl font-bold text-zinc-900 mb-8">Get in Touch</h1>
                <p className="text-xl text-zinc-600 mb-12 leading-relaxed">
                  Have a question about our services or need immediate support? Our UK-based team is ready to assist you.
                </p>

                <div className="space-y-10">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-emerald-100 rounded-2xl">
                      <Phone className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 mb-1">Phone</h4>
                      <p className="text-zinc-600">{COMPANY_DETAILS.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-emerald-100 rounded-2xl">
                      <Mail className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 mb-1">Email</h4>
                      <p className="text-zinc-600">{COMPANY_DETAILS.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-emerald-100 rounded-2xl">
                      <MapPin className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 mb-1">Registered Office</h4>
                      <p className="text-zinc-600">{COMPANY_DETAILS.address}</p>
                      <p className="text-xs text-zinc-400 mt-2 uppercase tracking-widest">CRN: {COMPANY_DETAILS.crn}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-emerald-100 rounded-2xl">
                      <Clock className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 mb-1">Business Hours</h4>
                      <p className="text-zinc-600">{COMPANY_DETAILS.hours}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="bg-zinc-50 p-10 lg:p-16 rounded-[3rem] border border-zinc-200">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-zinc-900 mb-4">Message Sent!</h2>
                  <p className="text-zinc-600">Thank you for reaching out. One of our IT specialists will contact you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-emerald-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700 uppercase tracking-widest">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full px-6 py-4 bg-white border border-zinc-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700 uppercase tracking-widest">Email Address</label>
                      <input 
                        required
                        type="email" 
                        className="w-full px-6 py-4 bg-white border border-zinc-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                        placeholder="john@company.co.uk"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 uppercase tracking-widest">Subject</label>
                    <select className="w-full px-6 py-4 bg-white border border-zinc-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all">
                      <option>Managed IT Support</option>
                      <option>Cybersecurity Audit</option>
                      <option>Cloud Migration</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 uppercase tracking-widest">Message</label>
                    <textarea 
                      required
                      rows={5}
                      className="w-full px-6 py-4 bg-white border border-zinc-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                      placeholder="How can we help your business?"
                    ></textarea>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <input required type="checkbox" className="mt-1 w-4 h-4 text-emerald-600 rounded border-zinc-300 focus:ring-emerald-500" />
                    <label className="text-sm text-zinc-500">
                      I consent to Community Recovery processing my data in accordance with the <a href="/privacy" className="text-emerald-600 hover:underline">Privacy Policy</a>.
                    </label>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-zinc-900 text-white py-5 rounded-2xl font-bold hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
                  >
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-zinc-100 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-medium uppercase tracking-widest">
          Interactive Map Placeholder
        </div>
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      </section>
    </div>
  );
};
