import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck } from 'lucide-react';
import { Section, Button } from './components/Layout';
import { COMPANY_DETAILS } from './constants';

const ContactUs = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <Section className="bg-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-600 mb-12">
              Have a question or ready to start your IT transformation? Our UK-based team is here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-indigo-600 shrink-0 border border-slate-100">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Visit Us</h4>
                  <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-indigo-600 shrink-0 border border-slate-100">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-indigo-600 shrink-0 border border-slate-100">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-indigo-600 shrink-0 border border-slate-100">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.hours}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-indigo-600 rounded-3xl text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Urgent Support?</h3>
                <p className="text-indigo-100 mb-6">Existing clients can access our 24/7 emergency support line via their dedicated portal.</p>
                <Button variant="outline" className="bg-white text-indigo-600 border-none">Client Portal Login</Button>
              </div>
              <ShieldCheck className="absolute -bottom-10 -right-10 w-48 h-48 text-white/10" />
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h2>
                <p className="text-slate-600">Thank you for contacting SureCare. A member of our team will be in touch within 2 business hours.</p>
                <Button variant="secondary" className="mt-8 mx-auto" onClick={() => setSubmitted(false)}>Send Another Message</Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Company Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                      placeholder="Acme Ltd"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input
                      required
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                      placeholder="john@company.co.uk"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input
                      required
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                      placeholder="+44 7700 900000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">How can we help?</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all">
                    <option>Managed IT Support</option>
                    <option>Cybersecurity Audit</option>
                    <option>Cloud Migration</option>
                    <option>Network Infrastructure</option>
                    <option>Other Enquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input required type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500" />
                  <span className="text-xs text-slate-500 leading-relaxed">
                    I consent to SureCare processing my data in accordance with their Privacy Policy. We will only use your details to respond to your enquiry.
                  </span>
                </div>

                <Button type="submit" className="w-full py-5">
                  Send Message <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* Map Placeholder */}
      <div className="w-full h-[400px] bg-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 opacity-20" />
            Interactive Map Placeholder<br />
            <span className="text-xs">{COMPANY_DETAILS.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
