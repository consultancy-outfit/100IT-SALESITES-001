import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export const ContactUs = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-20">
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Let's Talk Technology</h1>
            <p className="text-xl text-slate-400">
              Have a question or ready to start your digital transformation? Our London-based team is here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-100 p-12 rounded-3xl text-center">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                    <Send size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Message Sent!</h2>
                  <p className="text-slate-600">
                    Thank you for reaching out. One of our IT consultants will be in touch within 2 business hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-brand-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="Smith" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Business Email</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="john@company.co.uk" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Service Required</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all">
                      <option>Managed IT Support</option>
                      <option>Cybersecurity</option>
                      <option>Cloud Infrastructure</option>
                      <option>IT Consultancy</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="How can we help your business?"></textarea>
                  </div>
                  <div className="flex items-start gap-3">
                    <input required type="checkbox" id="privacy" className="mt-1" />
                    <label htmlFor="privacy" className="text-xs text-slate-500">
                      I consent to City Gate House processing my data in accordance with their <a href="/privacy" className="text-brand-600 hover:underline">Privacy Policy</a>. We will never share your details with third parties.
                    </label>
                  </div>
                  <button type="submit" className="w-full py-4 bg-brand-600 text-white rounded-full font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-200">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-50 text-brand-600 rounded-xl">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Registered Office</div>
                      <div className="text-slate-600">{COMPANY_DETAILS.address}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-50 text-brand-600 rounded-xl">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Phone Number</div>
                      <div className="text-slate-600">{COMPANY_DETAILS.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-50 text-brand-600 rounded-xl">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Email Address</div>
                      <div className="text-slate-600">{COMPANY_DETAILS.email}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-50 text-brand-600 rounded-xl">
                      <Clock size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Business Hours</div>
                      <div className="text-slate-600">{COMPANY_DETAILS.hours}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4">Find Us in London</h4>
                <div className="aspect-video bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400 overflow-hidden relative">
                  <img src="https://picsum.photos/seed/map/600/400?grayscale" alt="Map Placeholder" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white px-4 py-2 rounded-full shadow-lg text-xs font-bold text-slate-900 flex items-center gap-2">
                      <MapPin size={14} className="text-brand-600" /> EC2Y 5AS, London
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
