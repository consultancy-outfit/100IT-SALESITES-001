import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2,
  MessageSquare
} from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-navy-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have a question or ready to start your digital transformation? Our UK-based team is here to help.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
              <Mail className="w-6 h-6 text-brand-600" />
            </div>
            <h3 className="font-bold text-navy-900 mb-2">Email Us</h3>
            <p className="text-slate-500 text-sm mb-4">For general enquiries and support.</p>
            <a href="mailto:info@blessdayhouse.co.uk" className="text-brand-600 font-bold hover:underline">info@blessdayhouse.co.uk</a>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
              <Phone className="w-6 h-6 text-brand-600" />
            </div>
            <h3 className="font-bold text-navy-900 mb-2">Call Us</h3>
            <p className="text-slate-500 text-sm mb-4">Speak directly with our IT experts.</p>
            <p className="text-brand-600 font-bold">N/A</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-brand-600" />
            </div>
            <h3 className="font-bold text-navy-900 mb-2">Visit Us</h3>
            <p className="text-slate-500 text-sm mb-4">Our registered UK office.</p>
            <p className="text-brand-600 font-bold">N/A</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-200 shadow-sm">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-brand-600" />
                </div>
                <h2 className="text-3xl font-bold text-navy-900">Message Sent!</h2>
                <p className="text-slate-600">Thank you for reaching out. One of our experts will get back to you within 24 business hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900 uppercase tracking-wider">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900 uppercase tracking-wider">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@company.co.uk"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy-900 uppercase tracking-wider">Service of Interest</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-white">
                    <option>Cybersecurity</option>
                    <option>Cloud Infrastructure</option>
                    <option>Managed IT Support</option>
                    <option>Software Development</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy-900 uppercase tracking-wider">Message</label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="How can we help your business?"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                  ></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input required type="checkbox" className="mt-1 w-4 h-4 text-brand-600 rounded border-slate-300 focus:ring-brand-500" />
                  <label className="text-xs text-slate-500 leading-relaxed">
                    I consent to Blessday House processing my data in accordance with the <a href="/privacy" className="text-brand-600 hover:underline">Privacy Policy</a>. We will never share your details with third parties.
                  </label>
                </div>
                <button type="submit" className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-2">
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

          {/* Business Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-navy-900">Business Hours</h2>
              <div className="space-y-4">
                {[
                  { days: 'Monday - Friday', hours: '09:00 - 17:30' },
                  { days: 'Saturday', hours: 'Emergency Support Only' },
                  { days: 'Sunday', hours: 'Closed' },
                ].map((item) => (
                  <div key={item.days} className="flex justify-between items-center py-3 border-b border-slate-100">
                    <span className="font-medium text-slate-600">{item.days}</span>
                    <span className="font-bold text-navy-900">{item.hours}</span>
                  </div>
                ))}
              </div>
              <div className="bg-brand-50 p-6 rounded-2xl flex items-start gap-4">
                <Clock className="w-6 h-6 text-brand-600 shrink-0" />
                <p className="text-sm text-slate-600 leading-relaxed">
                  <span className="font-bold text-brand-700 block mb-1">24/7 Support for Enterprise Clients</span>
                  Clients on our Enterprise plan have access to our emergency support line 24 hours a day, 365 days a year.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-navy-900">Our Location</h2>
              <div className="aspect-video bg-slate-100 rounded-3xl border border-slate-200 overflow-hidden relative flex items-center justify-center">
                <MapPin className="w-12 h-12 text-slate-300" />
                <p className="absolute bottom-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Map Placeholder (London, UK)</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-navy-900">Blessday House Ltd</p>
                <p className="text-slate-600 text-sm">Registered in England & Wales</p>
                <p className="text-slate-600 text-sm">CRN: N/A</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
