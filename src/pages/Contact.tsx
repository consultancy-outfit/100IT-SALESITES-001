import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '@/src/constants';

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8">Let's Talk Technology</h1>
              <p className="text-lg text-zinc-600 mb-12 leading-relaxed">
                Whether you have a specific project in mind or just want to explore how we can improve your IT infrastructure, our team is ready to help.
              </p>

              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-1">Registered Office</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">{COMPANY_DETAILS.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-1">Phone Number</h3>
                    <p className="text-zinc-600 text-sm">{COMPANY_DETAILS.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-1">Email Address</h3>
                    <p className="text-zinc-600 text-sm">{COMPANY_DETAILS.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-1">Business Hours</h3>
                    <p className="text-zinc-600 text-sm">{COMPANY_DETAILS.hours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
                <div className="flex items-center space-x-4 mb-4">
                  <ShieldCheck className="h-8 w-8 text-emerald-600" />
                  <h3 className="text-xl font-bold text-zinc-900">GDPR Compliant</h3>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Your data is safe with us. We process your information in accordance with our Privacy Policy and the latest UK data protection regulations.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-indigo-100 border border-zinc-100">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="h-10 w-10 text-emerald-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-zinc-900 mb-4">Message Sent!</h2>
                  <p className="text-zinc-600">Thank you for reaching out. One of our IT specialists will be in touch within 24 hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-indigo-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700 ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Smith"
                        className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700 ml-1">Company Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Acme Ltd"
                        className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.co.uk"
                      className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 ml-1">Service Required</label>
                    <select className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all">
                      <option>Managed IT Support</option>
                      <option>Cybersecurity Audit</option>
                      <option>Cloud Migration</option>
                      <option>Network Infrastructure</option>
                      <option>IT Consultancy</option>
                      <option>Other / General Enquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 ml-1">Your Message</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="How can we help your business?"
                      className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all resize-none"
                    />
                  </div>
                  <div className="flex items-start space-x-3 py-2">
                    <input 
                      required
                      type="checkbox" 
                      className="mt-1 h-4 w-4 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label className="text-xs text-zinc-500 leading-relaxed">
                      I consent to Assure IT storing my data to contact me regarding this enquiry. I have read and agree to the <a href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a>.
                    </label>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-zinc-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-zinc-400 mx-auto mb-4" />
            <p className="text-zinc-500 font-medium">Interactive Map Placeholder</p>
            <p className="text-zinc-400 text-sm">Luton, England</p>
          </div>
        </div>
        {/* In a real app, you'd embed a Google Map here */}
      </section>
    </div>
  );
}
