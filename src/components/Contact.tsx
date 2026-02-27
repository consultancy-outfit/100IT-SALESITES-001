import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export const Contact = () => {
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    company: '',
    message: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry. Our team will be in touch shortly.');
    setFormState({ name: '', email: '', company: '', message: '', consent: false });
  };

  return (
    <div className="pt-20">
      <section className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Have a question or ready to start your digital transformation? We're here to help.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-slate-600 mb-12 leading-relaxed">
              Fill out the form and our technical team will review your requirements and get back to you within one business day.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                    placeholder="John Smith"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Business Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                    placeholder="john@company.co.uk"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Company Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                  placeholder="Your Company Ltd"
                  value={formState.company}
                  onChange={e => setFormState({...formState, company: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">How can we help?</label>
                <textarea 
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your IT requirements..."
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>
              
              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="consent" 
                  required
                  className="mt-1 w-4 h-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                  checked={formState.consent}
                  onChange={e => setFormState({...formState, consent: e.target.checked})}
                />
                <label htmlFor="consent" className="text-sm text-slate-500 leading-relaxed">
                  I consent to Bruntsfield House storing my data for the purpose of responding to this enquiry in accordance with the <a href="/privacy" className="text-brand-600 hover:underline">Privacy Policy</a>.
                </label>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-800 transition-all shadow-lg shadow-brand-900/20"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Company Information</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-600 border border-slate-100 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Registered Office</p>
                    <p className="text-slate-700">{COMPANY_DETAILS.address}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-600 border border-slate-100 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone Number</p>
                    <p className="text-slate-700">{COMPANY_DETAILS.phone}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-600 border border-slate-100 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Address</p>
                    <p className="text-slate-700">{COMPANY_DETAILS.email}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-600 border border-slate-100 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Business Hours</p>
                    <p className="text-slate-700">{COMPANY_DETAILS.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold mb-4">Our Location</h3>
              <div className="aspect-video bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400 overflow-hidden relative">
                <img 
                  src="https://picsum.photos/seed/edinburgh/800/450" 
                  alt="Edinburgh Map Placeholder" 
                  className="w-full h-full object-cover opacity-50 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-600 rounded-full flex items-center justify-center text-white">
                      <MapPin size={16} />
                    </div>
                    <span className="text-sm font-bold text-slate-900">Bruntsfield House HQ</span>
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
