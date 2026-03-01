import React, { useState } from 'react';
import { SectionHeading, Button, Card, COMPANY_DETAILS } from './Shared';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32">
      <section className="section-padding">
        <SectionHeading 
          centered 
          title="Get in Touch" 
          subtitle="Have a question or ready to start your IT transformation? Our UK-based team is here to help."
        />

        <div className="grid lg:grid-cols-2 gap-16 mt-12">
          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-12 rounded-3xl text-center">
                <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                <p className="text-slate-600 text-lg mb-8">
                  Thank you for reaching out. One of our senior consultants will be in touch within 2 business hours.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Smith" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Work Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@company.co.uk" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+44 7000 000000" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Company Name</label>
                    <input 
                      type="text" 
                      placeholder="Acme Ltd" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Service of Interest</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all bg-white">
                    <option>Managed IT Support</option>
                    <option>Cybersecurity</option>
                    <option>Cloud Migration</option>
                    <option>IT Consultancy</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Your Message</label>
                  <textarea 
                    required
                    rows={5} 
                    placeholder="Tell us about your IT requirements..." 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                  ></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input required type="checkbox" className="mt-1 w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500" />
                  <p className="text-sm text-slate-500">
                    I consent to Badminton Gardens processing my personal data in accordance with the Privacy Policy.
                  </p>
                </div>
                <Button className="w-full py-4 text-lg">
                  Send Message <Send size={20} />
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Phone</p>
                    <p className="text-slate-600">0121 405 2129</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Email</p>
                    <p className="text-slate-600">Info@attainingindependence.co.uk</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Registered Office</p>
                    <p className="text-slate-600">15 Queens Road, Donnington, Telford, England, TF2 8DB</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Business Hours</p>
                    <p className="text-slate-600">{COMPANY_DETAILS.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Location</h3>
              <div className="w-full h-64 bg-slate-200 rounded-3xl overflow-hidden relative">
                <img 
                  src="https://picsum.photos/seed/london-map/800/400" 
                  alt="Map Placeholder" 
                  className="w-full h-full object-cover grayscale opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">15 Queens Road, Donnington, Telford, England, TF2 8DB</p>
                      <p className="text-xs text-slate-500">London, EC1V 2NX</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
