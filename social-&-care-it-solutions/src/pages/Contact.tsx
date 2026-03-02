import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-zinc-900 mb-8 tracking-tight">
              Let's Secure Your <span className="text-indigo-600">Care Network</span>
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Have a question or ready to start your digital transformation? Our UK-based team is here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-8">Get in Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900">Registered Office</div>
                      <p className="text-zinc-600">#####</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900">Phone Support</div>
                      <p className="text-zinc-600">#####</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900">Email Enquiries</div>
                      <p className="text-zinc-600">#####</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900">Business Hours</div>
                      <p className="text-zinc-600">Mon - Fri: 09:00 - 17:30 (GMT)</p>
                      <p className="text-indigo-600 text-sm font-medium mt-1">24/7 Emergency Support for Clients</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-[2rem] bg-zinc-100 border border-zinc-200 overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-medium">
                  Interactive Map Placeholder
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                  alt="London Map" 
                  className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-zinc-50 rounded-[2.5rem] p-8 lg:p-12 border border-zinc-100">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <ShieldCheck className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4">Message Received</h3>
                    <p className="text-zinc-600">Thank you for contacting us. One of our IT specialists will be in touch within 24 hours.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-indigo-600 font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-zinc-700 ml-1">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Smith"
                          className="w-full px-6 py-4 rounded-2xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-zinc-700 ml-1">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="john@caregroup.co.uk"
                          className="w-full px-6 py-4 rounded-2xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-zinc-700 ml-1">Phone Number</label>
                        <input 
                          type="tel" 
                          placeholder="+44 7000 000000"
                          className="w-full px-6 py-4 rounded-2xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-zinc-700 ml-1">Organisation Type</label>
                        <select className="w-full px-6 py-4 rounded-2xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
                          <option>Care Home</option>
                          <option>Domiciliary Care</option>
                          <option>Private Clinic</option>
                          <option>Other Healthcare</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700 ml-1">How can we help?</label>
                      <textarea 
                        required
                        rows={5}
                        placeholder="Tell us about your IT challenges..."
                        className="w-full px-6 py-4 rounded-2xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                      ></textarea>
                    </div>
                    
                    <div className="flex items-start space-x-3 py-2">
                      <input 
                        required
                        type="checkbox" 
                        id="consent"
                        className="mt-1 w-5 h-5 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500" 
                      />
                      <label htmlFor="consent" className="text-sm text-zinc-500 leading-relaxed">
                        I consent to Social & Care Recruitment Agency processing my data in accordance with the <a href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a>.
                      </label>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-5 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center group"
                    >
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
