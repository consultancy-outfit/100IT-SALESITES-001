import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-slate-50 py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Contact Us</h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            Have a question or ready to start your IT transformation? Our team is here to help.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-brand-emerald" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Phone</h4>
                    <p className="text-slate-600">{COMPANY_DETAILS.phone}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-brand-emerald" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email</h4>
                    <p className="text-slate-600">{COMPANY_DETAILS.email}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-emerald" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Office</h4>
                    <p className="text-slate-600">{COMPANY_DETAILS.address}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="text-brand-emerald" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Business Hours</h4>
                    <p className="text-slate-600">{COMPANY_DETAILS.hours}</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 aspect-video bg-slate-100 rounded-3xl overflow-hidden relative group">
                <img 
                  src="https://picsum.photos/seed/map/800/450" 
                  alt="Map Placeholder" 
                  className="w-full h-full object-cover opacity-50 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white px-6 py-3 rounded-full shadow-lg font-medium text-brand-navy">
                    Wirral, United Kingdom
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-brand-emerald/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="text-brand-emerald w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-4">Message Sent!</h3>
                  <p className="text-slate-600">Thank you for reaching out. One of our IT specialists will be in touch within 24 business hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-brand-navy font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-emerald focus:ring-2 focus:ring-brand-emerald/20 outline-none transition-all" placeholder="John Smith" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-emerald focus:ring-2 focus:ring-brand-emerald/20 outline-none transition-all" placeholder="john@company.co.uk" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-emerald focus:ring-2 focus:ring-brand-emerald/20 outline-none transition-all" placeholder="Your Business Ltd" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Service of Interest</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-emerald focus:ring-2 focus:ring-brand-emerald/20 outline-none transition-all bg-white">
                      <option>Managed IT Support</option>
                      <option>Cloud Transformation</option>
                      <option>Cyber Security</option>
                      <option>IT Consultancy</option>
                      <option>Other / General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Message</label>
                    <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-emerald focus:ring-2 focus:ring-brand-emerald/20 outline-none transition-all" placeholder="How can we help you?"></textarea>
                  </div>
                  <div className="flex items-start gap-3">
                    <input required type="checkbox" className="mt-1 w-4 h-4 text-brand-emerald border-slate-300 rounded focus:ring-brand-emerald" id="privacy" />
                    <label htmlFor="privacy" className="text-sm text-slate-500">
                      I consent to Croft House and Cottages processing my personal data in accordance with their Privacy Policy.
                    </label>
                  </div>
                  <button type="submit" className="btn-primary w-full py-4 text-lg">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
