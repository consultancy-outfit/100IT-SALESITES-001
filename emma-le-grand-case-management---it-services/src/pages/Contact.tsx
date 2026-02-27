import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck } from 'lucide-react';

const COMPANY_DETAILS = {
  name: "EMMA-LE-GRAND-CASE-MANAGEMENT",
  address: "124 City Road, London, EC1V 2NX, United Kingdom",
  phone: "+44 20 7946 0000",
  email: "info@emmalegrandcasemanagement.co.uk",
  hours: "Monday - Friday, 9:00 AM - 5:30 PM GMT"
};

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-brand-navy text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl mb-6"
          >
            Let's <span className="text-brand-emerald italic">Connect</span>
          </motion.h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Have a project in mind or need technical support? Our London-based team is here to help.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-slate-50 p-8 lg:p-12 rounded-3xl border border-slate-100"
            >
              {formState === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-brand-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="text-brand-emerald w-10 h-10" />
                  </div>
                  <h2 className="text-3xl mb-4">Message Sent!</h2>
                  <p className="text-slate-500">Thank you for reaching out. One of our IT consultants will contact you within 2 business hours.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="mt-8 btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-emerald focus:border-transparent outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                      <input 
                        required
                        type="email" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-emerald focus:border-transparent outline-none transition-all"
                        placeholder="john@company.co.uk"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-emerald focus:border-transparent outline-none transition-all"
                      placeholder="Sterling Legal Ltd"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Service of Interest</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-emerald focus:border-transparent outline-none transition-all bg-white">
                      <option>Managed IT Support</option>
                      <option>Cybersecurity Audit</option>
                      <option>Cloud Migration</option>
                      <option>Custom Software</option>
                      <option>Other Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Message</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-emerald focus:border-transparent outline-none transition-all"
                      placeholder="How can we help your business?"
                    ></textarea>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input required type="checkbox" className="mt-1 rounded border-slate-300 text-brand-emerald focus:ring-brand-emerald" />
                    <span className="text-xs text-slate-500 leading-relaxed">
                      I consent to Emma Le Grand Case Management processing my personal data for the purpose of responding to this enquiry in accordance with the <a href="/privacy" className="text-brand-navy underline">Privacy Policy</a>.
                    </span>
                  </div>
                  <button 
                    disabled={formState === 'submitting'}
                    type="submit" 
                    className="w-full btn-primary flex items-center justify-center py-4"
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl mb-8">Contact Details</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="text-brand-navy w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Registered Office</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{COMPANY_DETAILS.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="text-brand-navy w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Phone Number</h4>
                      <p className="text-slate-500 text-sm">{COMPANY_DETAILS.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="text-brand-navy w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Email Address</h4>
                      <p className="text-slate-500 text-sm">{COMPANY_DETAILS.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="text-brand-navy w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Business Hours</h4>
                      <p className="text-slate-500 text-sm">{COMPANY_DETAILS.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative rounded-3xl overflow-hidden aspect-video bg-slate-100 border border-slate-200 group">
                <img 
                  src="https://picsum.photos/seed/london-map/800/450" 
                  alt="Office Location" 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center space-x-3">
                    <div className="w-8 h-8 bg-brand-emerald rounded-full flex items-center justify-center">
                      <MapPin className="text-white w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm">Visit our London HQ</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-brand-emerald/5 rounded-2xl border border-brand-emerald/10 flex items-center space-x-4">
                <ShieldCheck className="text-brand-emerald w-8 h-8 shrink-0" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your security is our priority. All communications are encrypted and handled in strict accordance with UK GDPR regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
