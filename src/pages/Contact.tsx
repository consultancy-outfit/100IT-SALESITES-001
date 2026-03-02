import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = React.useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Have a technical challenge or need a reliable IT partner? Our North East based team is ready to help.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-10">Contact Details</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Registered Office</h4>
                    <p className="text-slate-600">Not Available<br />United Kingdom</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                    <p className="text-slate-600">Not Available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                    <p className="text-slate-600">Not Available</p>
                  </div>
                </div>

              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-3xl bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden relative group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000')] bg-cover opacity-30 grayscale group-hover:scale-105 transition-transform duration-700" />
                <div className="relative z-10 text-center p-8">
                  <MapPin size={48} className="text-brand-600 mx-auto mb-4" />
                  <p className="font-bold text-slate-900">Serving the North East & Beyond</p>
                  <p className="text-sm text-slate-600">Newcastle | Durham | Sunderland | Middlesbrough</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-100">
              <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
              
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                  <p className="text-slate-600">Thank you for reaching out. One of our IT specialists will get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="mt-8 text-brand-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Smith"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@company.co.uk"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="0191 123 4567"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Company Name</label>
                      <input 
                        type="text" 
                        placeholder="Acme Ltd"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Service Required</label>
                    <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all">
                      <option>Managed IT Support</option>
                      <option>Cyber Security Audit</option>
                      <option>Cloud Migration</option>
                      <option>Disaster Recovery</option>
                      <option>IT Consultancy</option>
                      <option>Other Enquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Your Message</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Tell us about your IT requirements..."
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <input 
                      required
                      type="checkbox" 
                      className="mt-1 w-4 h-4 text-brand-600 border-slate-300 rounded focus:ring-brand-500"
                    />
                    <p className="text-xs text-slate-500 leading-relaxed">
                      I consent to Shauna HealthCare Services Solutions North East processing my personal data in accordance with their <a href="/privacy" className="text-brand-600 hover:underline">Privacy Policy</a>. We will only use your details to respond to your enquiry.
                    </p>
                  </div>

                  <button 
                    disabled={formState === 'submitting'}
                    type="submit"
                    className="w-full py-5 bg-brand-600 text-white rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-lg shadow-brand-200 flex items-center justify-center disabled:opacity-50"
                  >
                    {formState === 'submitting' ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message <Send size={20} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Alert */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container-custom">
          <div className="flex items-center justify-center space-x-4 text-slate-600">
            <AlertCircle size={20} className="text-brand-600" />
            <p className="text-sm font-medium">Existing client with a critical issue? Please use your dedicated 24/7 emergency support line.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
