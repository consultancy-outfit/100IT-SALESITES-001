import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

const COMPANY_DETAILS = {
  name: "Sense supported living services Lincolnshire",
  address: "[Address To Be Confirmed]",
  phone: "[Phone To Be Confirmed]",
  email: "[Email To Be Confirmed]",
  hours: "Mon - Fri: 08:30 - 18:00"
};

const ContactUs = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Get in Touch with <span className="text-emerald-600">Our Experts</span>
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Whether you have a specific enquiry or just want to explore how we can help, we're here to listen.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-8">Contact Details</h3>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Registered Office</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{COMPANY_DETAILS.address}</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Phone Number</p>
                    <p className="text-sm text-slate-600">{COMPANY_DETAILS.phone}</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Email Address</p>
                    <p className="text-sm text-slate-600">{COMPANY_DETAILS.email}</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Business Hours</p>
                    <p className="text-sm text-slate-600">{COMPANY_DETAILS.hours}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-200 aspect-video rounded-3xl relative overflow-hidden flex items-center justify-center border border-slate-300">
              <div className="text-center p-6">
                <MapPin className="mx-auto mb-2 text-slate-400" size={32} />
                <p className="text-slate-500 font-medium">Interactive Map Placeholder</p>
                <p className="text-xs text-slate-400 mt-1">[Location To Be Confirmed]</p>
              </div>
              <div className="absolute inset-0 bg-emerald-600/5 pointer-events-none" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg border border-slate-100 h-full">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="text-emerald-600" size={40} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Received!</h2>
                  <p className="text-slate-600 max-w-md mx-auto mb-8">
                    Thank you for reaching out. One of our consultants will review your enquiry and get back to you within 24 business hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-emerald-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Work Email</label>
                        <input 
                          required
                          type="email" 
                          placeholder="john@company.co.uk"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 transition-all outline-none"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Phone Number</label>
                        <input 
                          type="tel" 
                          placeholder="+44 0000 000000"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Subject</label>
                        <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 transition-all outline-none bg-white">
                          <option>Managed IT Support</option>
                          <option>Cybersecurity Audit</option>
                          <option>Cloud Migration</option>
                          <option>General Enquiry</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Message</label>
                      <textarea 
                        required
                        rows={6}
                        placeholder="How can we help you today?"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 transition-all outline-none resize-none"
                      ></textarea>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <input 
                        required
                        type="checkbox" 
                        className="mt-1 w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-600"
                      />
                      <label className="text-xs text-slate-500 leading-relaxed">
                        I consent to Sense supported living services Lincolnshire processing my personal data in accordance with their <a href="/privacy" className="text-emerald-600 hover:underline">Privacy Policy</a>. I understand that my information will be used to respond to this enquiry and for professional communication purposes.
                      </label>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg flex items-center justify-center space-x-2"
                    >
                      <Send size={18} />
                      <span>Send Message</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-50 grayscale">
          <div className="flex items-center space-x-2">
            <ShieldCheck size={24} />
            <span className="font-bold">GDPR COMPLIANT</span>
          </div>
          <div className="flex items-center space-x-2">
            <ShieldCheck size={24} />
            <span className="font-bold">CYBER ESSENTIALS</span>
          </div>
          <div className="flex items-center space-x-2">
            <ShieldCheck size={24} />
            <span className="font-bold">ICO REGISTERED</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
