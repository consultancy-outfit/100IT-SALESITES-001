import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Section, Card, Button } from '../components/UI';
import { COMPANY_DETAILS } from '../constants';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/5 blur-3xl rounded-full" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">Get In Touch</p>
            <h1 className="text-5xl md:text-6xl mb-8">Let's Discuss Your Next Project.</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Whether you have a specific technical challenge or just want to explore how we can help your business grow, we're here to listen.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: <Mail />, title: "Email Us", detail: COMPANY_DETAILS.email, sub: "We'll respond within 24 hours" },
                { icon: <Phone />, title: "Call Us", detail: COMPANY_DETAILS.phone, sub: "Available Mon-Fri" },
                { icon: <MapPin />, title: "Visit Us", detail: COMPANY_DETAILS.address, sub: "Registered Office" },
              ].map((item, i) => (
                <Card key={i} className="flex items-start gap-6 p-6">
                  <div className="p-3 bg-slate-50 text-brand-accent rounded-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-brand-primary font-medium">{item.detail}</p>
                    <p className="text-xs text-slate-400 mt-1">{item.sub}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="p-8 bg-brand-primary rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-4">Emergency Support</h4>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Existing clients with 24/7 support contracts should use the dedicated emergency hotline provided in their service agreement for immediate assistance.
              </p>
              <Button variant="secondary" className="w-full">Client Portal Login</Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Card className="p-10 h-full">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-slate-600 mb-8 max-w-sm">
                    Thank you for reaching out. One of our IT consultants will be in touch with you shortly.
                  </p>
                  <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@company.co.uk"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="0121 000 0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Service Interested In</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all bg-white">
                        <option>Managed IT Support</option>
                        <option>Cyber Security</option>
                        <option>Cloud Solutions</option>
                        <option>Healthcare IT</option>
                        <option>Other / General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Your Message</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Tell us about your requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3">
                    <input required type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-brand-accent focus:ring-brand-accent" />
                    <p className="text-xs text-slate-500 leading-relaxed">
                      I consent to {COMPANY_DETAILS.name} collecting my data for the purpose of responding to this enquiry. We value your privacy and will never share your details with third parties.
                    </p>
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    Send Message <Send size={18} />
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-slate-200 relative">
        <div className="absolute inset-0 flex items-center justify-center text-slate-400">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4 opacity-20" />
            <p className="font-medium">Interactive Map Placeholder</p>
            <p className="text-sm">Midlands, United Kingdom</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
