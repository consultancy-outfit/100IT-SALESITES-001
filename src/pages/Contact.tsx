import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-indigo-900 text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6 tracking-tight">Get in Touch</h1>
            <p className="text-xl text-indigo-100 leading-relaxed">
              Have a question or ready to start your IT transformation? Our team of experts is ready to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Details</h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</div>
                      <div className="text-lg font-semibold text-slate-900">{COMPANY_DETAILS.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email</div>
                      <div className="text-lg font-semibold text-slate-900 break-all">{COMPANY_DETAILS.email}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Office</div>
                      <div className="text-lg font-semibold text-slate-900">{COMPANY_DETAILS.address}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Hours</div>
                      <div className="text-lg font-semibold text-slate-900">{COMPANY_DETAILS.hours}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 p-8 rounded-[2rem] text-white">
                <h4 className="text-xl font-bold mb-4">Emergency Support?</h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Existing clients with 24/7 support contracts can access our emergency helpdesk via the dedicated portal or their account manager's direct line.
                </p>
                <a href="#" className="inline-flex items-center text-indigo-400 font-bold hover:underline">
                  Client Portal Login <Send size={16} className="ml-2" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-slate-100 relative overflow-hidden">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                    <p className="text-slate-600 text-lg mb-8">
                      Thank you for contacting Cumbria IT. One of our specialists will be in touch within 2 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-indigo-600 font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-3xl font-bold text-slate-900 mb-8">Send us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                          <input
                            required
                            type="text"
                            placeholder="John Smith"
                            className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                          <input
                            required
                            type="email"
                            placeholder="john@company.co.uk"
                            className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                          <input
                            type="tel"
                            placeholder="01234 567 890"
                            className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Service Interest</label>
                          <select className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all appearance-none">
                            <option>Managed IT Support</option>
                            <option>Cloud Solutions</option>
                            <option>Cyber Security</option>
                            <option>Network Infrastructure</option>
                            <option>Other Enquiry</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Your Message</label>
                        <textarea
                          required
                          rows={5}
                          placeholder="How can we help you?"
                          className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all resize-none"
                        ></textarea>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <input required type="checkbox" className="mt-1.5 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                        <p className="text-sm text-slate-500 leading-relaxed">
                          I consent to {COMPANY_DETAILS.name} storing my data to process my enquiry in accordance with the <a href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a>.
                        </p>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center"
                      >
                        Send Message <Send size={20} className="ml-3" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[500px] bg-slate-100 rounded-[3rem] overflow-hidden relative border border-slate-200 shadow-inner">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-indigo-600 mx-auto mb-4" />
                <p className="text-slate-500 font-medium">Interactive Map Placeholder</p>
                <p className="text-slate-400 text-sm">{COMPANY_DETAILS.address}</p>
              </div>
            </div>
            {/* In a real app, we'd embed a Google Map here */}
            <div className="absolute inset-0 bg-indigo-600/5 pointer-events-none" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
