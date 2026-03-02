import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-24 pb-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">Contact Us</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Have a question or ready to start your digital transformation? Our UK-based team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Subject</label>
                  <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
                    <option>General Enquiry</option>
                    <option>Managed IT Support</option>
                    <option>Cloud Migration</option>
                    <option>Cyber Security</option>
                    <option>Strategic Consultancy</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                <div className="flex items-start gap-4 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500" required />
                  <p className="text-xs text-slate-600 leading-relaxed">
                    I consent to SENSE IT processing my personal data in accordance with the Privacy Policy. We take your privacy seriously and will only use your information to manage your enquiry.
                  </p>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-5 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
                >
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Get in touch</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 mb-6 shadow-sm">
                      <Phone size={24} />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Call Us</h4>
                    <p className="text-slate-600 text-sm">{COMPANY_DETAILS.phone}</p>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 mb-6 shadow-sm">
                      <Mail size={24} />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Email Us</h4>
                    <p className="text-slate-600 text-sm break-all">{COMPANY_DETAILS.email}</p>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 mb-6 shadow-sm">
                      <MapPin size={24} />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Visit Us</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{COMPANY_DETAILS.address}</p>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 mb-6 shadow-sm">
                      <Clock size={24} />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Business Hours</h4>
                    <p className="text-slate-600 text-sm">{COMPANY_DETAILS.hours}</p>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-slate-900 rounded-[2.5rem] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl" />
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <ShieldCheck className="text-indigo-400" />
                  Our Location
                </h4>
                <div className="aspect-video bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
                  <p className="text-slate-500 text-sm font-medium italic">Interactive Map Placeholder</p>
                </div>
                <div className="mt-8 space-y-2">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Registered Office</p>
                  <p className="text-sm text-slate-300">{COMPANY_DETAILS.name}</p>
                  <p className="text-sm text-slate-300">{COMPANY_DETAILS.address}</p>
                  <p className="text-xs text-slate-500 mt-4">CRN: {COMPANY_DETAILS.crn}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
