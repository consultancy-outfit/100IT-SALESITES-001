import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">
              Get in <span className="text-brand-500">Touch</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Ready to upgrade your IT? Contact our UK-based team today for a free consultation or technical audit.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">Contact Details</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email Us</div>
                      <a href="mailto:info@centenaryclose.co.uk" className="text-slate-700 font-medium hover:text-brand-600 transition-colors">
                        info@centenaryclose.co.uk
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Call Us</div>
                      <div className="text-slate-700 font-medium">Not Available</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Registered Office</div>
                      <div className="text-slate-700 font-medium">Not Available</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">Business Hours</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 shrink-0">
                      <Clock size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-600">Monday - Friday</span>
                        <span className="text-slate-900 font-bold">09:00 - 17:30</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-600">Saturday</span>
                        <span className="text-slate-900 font-bold">Emergency Only</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Sunday</span>
                        <span className="text-slate-900 font-bold">Closed</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-4 italic">* 24/7 Support available for Enterprise clients.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">Message Sent!</h3>
                    <p className="text-slate-600 mb-8 max-w-md mx-auto">
                      Thank you for contacting Centenary Close. One of our IT specialists will be in touch within the next 2 business hours.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-brand-600 font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Full Name</label>
                          <input 
                            required
                            type="text" 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-white"
                            placeholder="John Smith"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Work Email</label>
                          <input 
                            required
                            type="email" 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-white"
                            placeholder="john@company.co.uk"
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Company Name</label>
                          <input 
                            required
                            type="text" 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-white"
                            placeholder="Acme Ltd"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Phone Number</label>
                          <input 
                            type="tel" 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-white"
                            placeholder="01234 567 890"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">How can we help?</label>
                        <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-white">
                          <option>Managed IT Support</option>
                          <option>Cyber Security Audit</option>
                          <option>Cloud Migration</option>
                          <option>IT Consultancy</option>
                          <option>Other Enquiry</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Message</label>
                        <textarea 
                          required
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-white resize-none"
                          placeholder="Tell us about your IT requirements..."
                        />
                      </div>
                      <div className="flex items-start gap-3">
                        <input required type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
                        <span className="text-xs text-slate-500 leading-relaxed">
                          I consent to Centenary Close processing my personal data in accordance with the <a href="/privacy" className="text-brand-600 underline">Privacy Policy</a>. We will only use your details to respond to your enquiry.
                        </span>
                      </div>
                      <button 
                        type="submit"
                        className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20 flex items-center justify-center gap-2"
                      >
                        Send Message <Send size={18} />
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
      <section className="h-[400px] bg-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
          <div className="text-center">
            <MapPin size={48} className="text-slate-300 mx-auto mb-4" />
            <p className="text-slate-400 font-bold uppercase tracking-widest">Interactive Map Placeholder</p>
            <p className="text-slate-400 text-sm">Centenary Close - Serving the United Kingdom</p>
          </div>
        </div>
      </section>
    </div>
  );
}
