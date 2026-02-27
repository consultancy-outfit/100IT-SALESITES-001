import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, ChevronRight, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Get In Touch</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
            >
              Let's Start a <br /><span className="text-emerald-400 italic serif">Conversation.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed"
            >
              Whether you have a specific project in mind or just want to explore how we can help, our team is ready to listen.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Details</h3>
                
                <div className="space-y-8">
                  {COMPANY.phone && (
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mr-6 shrink-0">
                        <Phone className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</h4>
                        <p className="text-slate-900 font-bold text-lg">{COMPANY.phone}</p>
                      </div>
                    </div>
                  )}

                  {COMPANY.email && (
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-6 shrink-0">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</h4>
                        <p className="text-slate-900 font-bold text-lg">{COMPANY.email}</p>
                      </div>
                    </div>
                  )}

                  {COMPANY.address && (
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mr-6 shrink-0">
                        <MapPin className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Our Office</h4>
                        <p className="text-slate-900 font-medium leading-relaxed">{COMPANY.address}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mr-6 shrink-0">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Business Hours</h4>
                      <p className="text-slate-900 font-medium">{COMPANY.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 p-10 rounded-3xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full -mr-16 -mt-16"></div>
                <h3 className="text-xl font-bold mb-4 relative z-10">Emergency Support?</h3>
                <p className="text-slate-400 text-sm mb-8 relative z-10">Existing clients with Premium or Enterprise plans have access to our 24/7 emergency hotline.</p>
                <button className="flex items-center text-emerald-400 font-bold text-sm hover:text-emerald-300 transition-colors group">
                  Client Portal Login <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center mb-10">
                  <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center mr-4">
                    <MessageSquare className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Send a Message</h3>
                </div>

                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all" 
                        placeholder="John Smith" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all" 
                        placeholder="john@company.co.uk" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Company Name</label>
                      <input 
                        type="text" 
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all" 
                        placeholder="Your Business Ltd" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Subject</label>
                      <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all appearance-none cursor-pointer">
                        <option>General Enquiry</option>
                        <option>Managed IT Support</option>
                        <option>Cyber Security Audit</option>
                        <option>Cloud Migration</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Your Message</label>
                    <textarea 
                      rows={6} 
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all resize-none" 
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input type="checkbox" id="consent" className="w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 mr-3" />
                    <label htmlFor="consent" className="text-sm text-slate-500">
                      I agree to the processing of my data in accordance with the <button type="button" className="text-slate-900 font-bold hover:underline">Privacy Policy</button>.
                    </label>
                  </div>

                  <button className="w-full py-5 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center group text-lg">
                    Send Message
                    <Send className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {COMPANY.address && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-slate-100 rounded-3xl h-[500px] relative overflow-hidden flex items-center justify-center">
              {/* Placeholder for Google Map */}
              <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
              <div className="relative z-10 text-center p-12 bg-white/80 backdrop-blur-md rounded-3xl border border-white/20 max-w-md shadow-xl">
                <MapPin className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Visit Our Office</h3>
                <p className="text-slate-600 mb-8">{COMPANY.address}</p>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all"
                >
                  Get Directions <ChevronRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Contact;