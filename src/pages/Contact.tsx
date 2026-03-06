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
    <div className="pb-24">
      {/* Header */}
      <section className="py-24 lg:py-32 bg-brand-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(51,204,51,0.15),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold tracking-tight mb-8"
            >
              Let's Start a <span className="text-brand-accent">Conversation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/70 leading-relaxed"
            >
              Whether you have a specific project in mind or just need some expert advice, our UK-based team is here to help.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-brand-primary/20 shadow-xl shadow-brand-primary/5"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-10 h-10 text-brand-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-brand-primary mb-4">Message Sent!</h2>
                  <p className="text-brand-primary/80 mb-8">
                    Thank you for reaching out. One of our IT specialists will be in touch within 2 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-brand-accent font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-primary">Full Name</label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-brand-primary/20 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-primary">Work Email</label>
                      <input
                        required
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-brand-primary/20 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                        placeholder="john@company.co.uk"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-primary">Company Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-brand-primary/20 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                      placeholder="Acme Ltd"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-primary">Service Required</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-brand-primary/20 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all bg-white">
                      <option>Managed IT Support</option>
                      <option>Cloud Infrastructure</option>
                      <option>Cyber Security</option>
                      <option>IT Consultancy</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-primary">Message</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-brand-primary/20 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <div className="flex items-start gap-3">
                    <input required type="checkbox" className="mt-1.5 rounded border-brand-primary/30 text-brand-accent focus:ring-brand-accent" />
                    <p className="text-xs text-brand-primary/70 leading-relaxed">
                      I consent to Penstone Farm processing my data in accordance with the <a href="/privacy" className="text-brand-accent hover:underline">Privacy Policy</a>. We will never share your details with third parties.
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-accent text-white rounded-xl font-bold hover:bg-brand-accent-hover transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-accent/20"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-8">Contact Details</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-surface flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-primary mb-1">Registered Office</h3>
                      <p className="text-brand-primary/80 text-sm leading-relaxed">{COMPANY_DETAILS.address}</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-surface flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-primary mb-1">Phone Number</h3>
                      <p className="text-brand-primary/80 text-sm">{COMPANY_DETAILS.phone}</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-surface flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-primary mb-1">Email Address</h3>
                      <p className="text-brand-primary/80 text-sm">{COMPANY_DETAILS.email}</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-surface flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-primary mb-1">Business Hours</h3>
                      <p className="text-brand-primary/80 text-sm">{COMPANY_DETAILS.hours}</p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="p-8 rounded-3xl bg-brand-primary text-white">
                <h3 className="font-bold mb-4">Company Information</h3>
                <div className="space-y-2 text-sm text-white/70">
                  <p>Company Name: {COMPANY_DETAILS.name} IT Services Ltd</p>
                  <p>Registration Number: {COMPANY_DETAILS.crn}</p>
                  <p>Registered in England & Wales</p>
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
