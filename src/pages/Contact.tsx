import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Shield, CheckCircle2 } from 'lucide-react';
import React from 'react';

const COMPANY_DETAILS = {
  name: "Khalid Mehmood Khattak",
  brand: "Khattak IT Solutions",
  address: "160a Croydon Road, Caterham, England, CR3 6QE",
  crn: "17046244",
  phone: "0189 564 6130",
  email: "Info@mavyllodge.co.uk",
  hours: "Mon - Fri: 09:00 - 18:00"
};

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#4f46e5,transparent_50%)]"></div>
        </div>
        <div className="section-padding relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Get in <span className="text-indigo-400">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-xl max-w-2xl mx-auto"
          >
            Have a question or ready to start your IT journey? Our UK-based team is here to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding -mt-16 relative z-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-8">
              <h3 className="text-2xl font-bold text-slate-900">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-lg font-bold text-slate-900">{COMPANY_DETAILS.phone}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-lg font-bold text-slate-900 break-all">{COMPANY_DETAILS.email}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Visit Us</p>
                    <p className="text-sm font-bold text-slate-900 leading-relaxed">{COMPANY_DETAILS.address}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Business Hours</p>
                    <p className="text-sm font-bold text-slate-900">{COMPANY_DETAILS.hours}</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-wider mb-4">
                  <Shield size={18} />
                  <span>GDPR Compliant</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Your data is safe with us. We process your information in accordance with our Privacy Policy.
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-200 rounded-[2.5rem] h-64 flex items-center justify-center text-slate-400 border border-slate-300 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover opacity-50 grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/40 text-white p-6 text-center">
                <MapPin size={32} className="mb-2" />
                <p className="font-bold">Caterham, England</p>
                <p className="text-xs opacity-80">Caterham, Surrey, CR3 6QE</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-200 shadow-xl">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 space-y-6"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Message Sent!</h3>
                  <p className="text-slate-500 max-w-md mx-auto">
                    Thank you for reaching out. Our team will get back to you within 24 business hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-indigo-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="01234 567890" 
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Subject</label>
                      <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
                        <option>Managed IT Support</option>
                        <option>Cybersecurity Audit</option>
                        <option>Cloud Migration</option>
                        <option>Network Setup</option>
                        <option>Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Your Message</label>
                    <textarea 
                      required
                      rows={6} 
                      placeholder="How can we help you?" 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3">
                    <input 
                      required
                      type="checkbox" 
                      className="mt-1.5 w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" 
                    />
                    <p className="text-sm text-slate-500 leading-relaxed">
                      I consent to Khattak IT Solutions collecting my details through this form for the purpose of responding to my inquiry. I have read and agree to the <a href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a>.
                    </p>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-indigo-600 text-white py-5 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2"
                  >
                    Send Message <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Company Details Footer Section */}
      <section className="section-padding bg-white rounded-[3rem] my-24 mx-6 md:mx-12 border border-slate-200">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Registered Company Details</h2>
            <div className="space-y-4 text-slate-600">
              <p><span className="font-bold text-slate-900">Legal Name:</span> {COMPANY_DETAILS.name}</p>
              <p><span className="font-bold text-slate-900">Registered Office:</span> {COMPANY_DETAILS.address}</p>
              <p><span className="font-bold text-slate-900">Company Registration Number (CRN):</span> {COMPANY_DETAILS.crn}</p>
              <p><span className="font-bold text-slate-900">Official Business Email:</span> {COMPANY_DETAILS.email}</p>
            </div>
          </div>
          <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
            <h3 className="text-xl font-bold text-indigo-900 mb-4">Visit Us in Caterham</h3>
            <p className="text-indigo-700 text-sm leading-relaxed mb-6">
              Our registered office is located in the heart of Caterham, Surrey. While we primarily provide remote and on-site support across the UK, we are always happy to meet our clients in person.
            </p>
            <div className="flex items-center gap-2 text-indigo-900 font-bold">
              <MapPin size={20} />
              <span>Caterham, Surrey, CR3 6QE</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
