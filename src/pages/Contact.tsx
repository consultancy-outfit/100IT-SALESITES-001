import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants/config';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Let's <span className="text-accent">Connect</span>
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have a question or ready to start your IT transformation? 
            Our Wigan-based team is here to help.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Get in Touch</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Registered Office</h4>
                      <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Phone Number</h4>
                      <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.phone}</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Email Address</h4>
                      <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.email}</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Business Hours</h4>
                      <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-slate-100 rounded-[2rem] h-64 flex items-center justify-center border-2 border-dashed border-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/map/800/400')] bg-cover grayscale" />
                <div className="relative z-10 text-center">
                  <MapPin className="h-10 w-10 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Wigan, UK Location</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 p-10 md:p-12 rounded-[3rem] border border-slate-100">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="bg-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Message Sent!</h3>
                  <p className="text-slate-600 mb-8">
                    Thank you for reaching out. One of our IT specialists will be in touch 
                    within the next 24 business hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-accent font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Company Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Acme Ltd"
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@company.co.uk"
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Service Required</label>
                    <select className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all appearance-none bg-white">
                      <option>Managed IT Support</option>
                      <option>Cybersecurity Audit</option>
                      <option>Cloud Migration</option>
                      <option>IT Consultancy</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Your Message</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="How can we help your business?"
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3">
                    <input 
                      required
                      type="checkbox" 
                      id="consent"
                      className="mt-1.5 h-4 w-4 rounded border-slate-300 text-accent focus:ring-accent"
                    />
                    <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed">
                      I consent to Wigan Supported Living processing my personal data in accordance 
                      with the Privacy Policy to respond to my enquiry.
                    </label>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-primary text-white py-5 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/10"
                  >
                    Send Message <Send className="h-5 w-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Company Details Footer Section */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Company Name</p>
              <p className="text-sm font-bold text-primary">{COMPANY_DETAILS.name}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Registration No.</p>
              <p className="text-sm font-bold text-primary">CRN: {COMPANY_DETAILS.crn}</p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Registered Address</p>
              <p className="text-sm font-bold text-primary">{COMPANY_DETAILS.address}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
