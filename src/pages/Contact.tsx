import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const COMPANY_DETAILS = {
  name: "HCF The Springs",
  address: "15 Queens Road, Donnington, Telford, England, TF2 8DB",
  crn: "17048704"
  phone: "0197 730 5123",
  email: "info@hcfthesprings.co.uk",
  hours: "Monday - Friday: 09:00 - 17:30",
  support: "24/7 Emergency Support Available for Enterprise Clients"
};

export default function Contact() {
  const [formStatus, setFormStatus] = React.useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Have a question about our services or need a custom quote? Our UK-based team is ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Registered Office</h4>
                    <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.address}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                    <p className="text-slate-600">{COMPANY_DETAILS.phone}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                    <p className="text-slate-600">{COMPANY_DETAILS.email}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                    <p className="text-slate-600">{COMPANY_DETAILS.hours}</p>
                    <p className="text-xs font-bold text-indigo-600 mt-2 uppercase tracking-widest">{COMPANY_DETAILS.support}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-100 rounded-3xl aspect-video flex items-center justify-center border border-slate-200 overflow-hidden relative group">
              <img 
                src="https://picsum.photos/seed/map/800/450?blur=2" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" 
                alt="Map Placeholder"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10 text-center p-8">
                <MapPin size={48} className="text-slate-400 mx-auto mb-4" />
                <p className="text-slate-500 font-medium">Interactive Map Placeholder</p>
                <p className="text-xs text-slate-400 mt-2">Leeds, West Yorkshire</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-100">
              {formStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                  <p className="text-slate-600 text-lg">
                    Thank you for contacting HCF The Springs. One of our IT specialists will be in touch shortly.
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="mt-8 text-indigo-600 font-bold hover:underline"
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
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Full Name</label>
                        <input
                          required
                          type="text"
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                          placeholder="John Smith"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Email Address</label>
                        <input
                          required
                          type="email"
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                          placeholder="john@company.co.uk"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Phone Number</label>
                        <input
                          type="tel"
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                          placeholder="+44 0000 000000"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Company Name</label>
                        <input
                          type="text"
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                          placeholder="Acme Ltd"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Subject</label>
                      <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all">
                        <option>General Enquiry</option>
                        <option>Managed IT Support</option>
                        <option>Cybersecurity Audit</option>
                        <option>Cloud Migration</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Message</label>
                      <textarea
                        required
                        rows={5}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <div className="flex items-start gap-3">
                      <input required type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600" />
                      <p className="text-sm text-slate-500">
                        I consent to HCF The Springs processing my data in accordance with the <Link to="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</Link>.
                      </p>
                    </div>
                    <button
                      disabled={formStatus === 'submitting'}
                      type="submit"
                      className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                      <Send size={20} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
