import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck } from 'lucide-react';
import { Layout } from '../components/Layout';
import { COMPANY_DETAILS } from '../constants';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 bg-slate-900 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a question or ready to start your digital transformation? Our UK-based team is here to help.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <ShieldCheck className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                    <p className="text-slate-600 mb-8">
                      Thank you for contacting Community Short Breaks. One of our IT specialists will be in touch within 4 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-brand-accent font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Full Name</label>
                        <input
                          required
                          type="text"
                          placeholder="John Smith"
                          className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Work Email</label>
                        <input
                          required
                          type="email"
                          placeholder="john@company.co.uk"
                          className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Phone Number</label>
                        <input
                          required
                          type="tel"
                          placeholder="020 7946 0000"
                          className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Company Name</label>
                        <input
                          required
                          type="text"
                          placeholder="Acme Ltd"
                          className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">How can we help?</label>
                      <select className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all bg-white">
                        <option>Managed IT Support</option>
                        <option>Cybersecurity Audit</option>
                        <option>Cloud Migration</option>
                        <option>Strategic Consultancy</option>
                        <option>Other Enquiry</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Message</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your requirements..."
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                      ></textarea>
                    </div>
                    <div className="flex items-start gap-3">
                      <input required type="checkbox" className="mt-1.5 accent-brand-accent" />
                      <p className="text-xs text-slate-500 leading-relaxed">
                        I consent to Community Short Breaks processing my data in accordance with the <a href="/privacy" className="text-brand-accent hover:underline">Privacy Policy</a>. We will never share your details with third parties.
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-5 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-secondary transition-all flex items-center justify-center gap-2 shadow-lg"
                    >
                      Send Message <Send className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Registered Office</h4>
                      <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.address}</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Phone Support</h4>
                      <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.phone}</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Email Enquiries</h4>
                      <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.email}</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                      <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-slate-100 rounded-[2rem] border border-slate-200 overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                  <div className="text-center">
                    <MapPin className="w-10 h-10 mx-auto mb-2 opacity-20" />
                    Interactive Map Placeholder
                  </div>
                </div>
                <img
                  src="https://picsum.photos/seed/map/800/450?grayscale"
                  alt="Map Location"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
