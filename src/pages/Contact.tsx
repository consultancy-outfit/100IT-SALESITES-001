import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-300">
              Have a question or ready to start your digital transformation? Our Middlesbrough-based team is here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-100 p-12 rounded-3xl text-center"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-emerald-600 w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-emerald-900 mb-4">Message Sent!</h2>
                  <p className="text-emerald-700">
                    Thank you for reaching out. One of our IT specialists will be in touch within 4 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-emerald-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
                  <h2 className="text-2xl mb-8">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Full Name</label>
                        <input
                          required
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Email Address</label>
                        <input
                          required
                          type="email"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                          placeholder="john@company.co.uk"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Service Required</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all">
                        <option>Managed IT Support</option>
                        <option>Cloud Solutions</option>
                        <option>Cyber Security</option>
                        <option>IT Consultancy</option>
                        <option>Other Enquiry</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Message</label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                        placeholder="How can we help your business?"
                      ></textarea>
                    </div>
                    <div className="flex items-start space-x-3">
                      <input required type="checkbox" className="mt-1 rounded text-accent focus:ring-accent" />
                      <p className="text-xs text-slate-500">
                        I consent to Support Health Care Middlesbrough processing my data in accordance with the Privacy Policy.
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center group"
                    >
                      Send Message
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="text-accent w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Registered Office</h4>
                      <p className="text-slate-500">{COMPANY_DETAILS.name}</p>
                      <p className="text-slate-500">{COMPANY_DETAILS.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="text-accent w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Phone</h4>
                      <p className="text-slate-500">{COMPANY_DETAILS.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="text-accent w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Email</h4>
                      <p className="text-slate-500">{COMPANY_DETAILS.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="text-accent w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Business Hours</h4>
                      <p className="text-slate-500">{COMPANY_DETAILS.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative h-64 bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-10 h-10 text-slate-300 mx-auto mb-4" />
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-widest">Map Placeholder</p>
                  <p className="text-xs text-slate-400 mt-2">Middlesbrough, North Yorkshire</p>
                </div>
                <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
