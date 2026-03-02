import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry. A member of our UK team will be in touch shortly.');
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-24 pb-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-extrabold mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Have a question or ready to start your digital transformation? Our UK-based team is here to help.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Registered Office</h4>
                      <p className="text-gray-600">{COMPANY_DETAILS.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Phone Number</h4>
                      <p className="text-gray-600">{COMPANY_DETAILS.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Email Address</h4>
                      <p className="text-gray-600">{COMPANY_DETAILS.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Business Hours</h4>
                      <p className="text-gray-600">{COMPANY_DETAILS.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-gray-100 rounded-[2.5rem] border-4 border-white shadow-xl flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <div className="text-center p-8">
                  <MapPin className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Interactive Map Placeholder</p>
                  <p className="text-sm text-gray-400">Leeds, United Kingdom</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 lg:p-12 rounded-[3rem] shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all outline-none"
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all outline-none"
                      placeholder="john@company.co.uk"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Subject</label>
                  <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all outline-none appearance-none">
                    <option>General Enquiry</option>
                    <option>Managed IT Support</option>
                    <option>Cybersecurity Audit</option>
                    <option>Cloud Migration</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Message</label>
                  <textarea 
                    required 
                    rows={5}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all outline-none resize-none"
                    placeholder="Tell us about your IT requirements..."
                  ></textarea>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                  <input type="checkbox" required className="mt-1 h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" />
                  <p className="text-xs text-gray-600 leading-relaxed">
                    I consent to St Anne's IT processing my personal data in accordance with the <a href="/privacy" className="text-indigo-600 font-bold hover:underline">Privacy Policy</a>. We will only use your details to respond to your enquiry.
                  </p>
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center space-x-2"
                >
                  <span>Send Enquiry</span>
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
            <ShieldCheck className="h-12 w-12" />
            <div className="text-2xl font-black tracking-tighter">ISO 27001</div>
            <div className="text-2xl font-black tracking-tighter">CYBER ESSENTIALS</div>
            <div className="text-2xl font-black tracking-tighter">MICROSOFT PARTNER</div>
            <div className="text-2xl font-black tracking-tighter">CROWN COMMERCIAL</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
