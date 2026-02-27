import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../constants';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Let's Start a <span className="text-emerald-600">Conversation.</span></h1>
            <p className="text-xl text-zinc-600 mb-12 leading-relaxed">
              Whether you have a specific project in mind or just want to explore how we can help, our team is ready to listen.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Visit Our Office</h4>
                  <p className="text-zinc-500">{COMPANY_DETAILS.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Call Us</h4>
                  <p className="text-zinc-500">{COMPANY_DETAILS.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Email Us</h4>
                  <p className="text-zinc-500">{COMPANY_DETAILS.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Business Hours</h4>
                  <p className="text-zinc-500">{COMPANY_DETAILS.hours}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-zinc-100 rounded-3xl border border-black/5 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-medium">
                Map Placeholder (London EC1V)
              </div>
              <img
                src="https://picsum.photos/seed/map/800/400?grayscale"
                alt="Map"
                className="w-full h-full object-cover opacity-30"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 lg:p-12 rounded-3xl border border-black/5 shadow-xl shadow-zinc-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
                <p className="text-zinc-600 mb-8">
                  Thank you for reaching out. One of our IT consultants will be in touch within 2 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-emerald-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-zinc-700 mb-2">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-zinc-700 mb-2">Email Address</label>
                    <input
                      required
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      placeholder="john@company.co.uk"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-700 mb-2">Company Name</label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="Acme Ltd"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-700 mb-2">Service of Interest</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all appearance-none bg-white">
                    <option>Managed IT Support</option>
                    <option>Cloud Infrastructure</option>
                    <option>Cybersecurity</option>
                    <option>IT Consultancy</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-700 mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input required type="checkbox" className="mt-1 w-4 h-4 rounded border-zinc-300 text-emerald-600 focus:ring-emerald-500" />
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    I consent to Thurrock processing my data in accordance with the <a href="/privacy" className="text-emerald-600 hover:underline">Privacy Policy</a>. We will never share your details with third parties.
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full bg-zinc-900 text-white py-4 rounded-xl font-bold hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
