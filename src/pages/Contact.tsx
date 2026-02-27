import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-slate-900 text-white py-32 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">Get in <span className="text-indigo-600">Touch.</span></h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Have a question or ready to start your project? Our team is here to help you navigate your IT journey.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 space-y-10">
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Contact Details</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone</p>
                      <p className="font-semibold">0000</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
                      <p className="font-semibold">0000</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Office</p>
                      <p className="font-semibold">N/A</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-8 border-t border-slate-50">
                <h3 className="text-xl font-bold">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Monday - Friday</span>
                    <span className="font-semibold">09:00 - 17:30</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Saturday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
                <div className="p-4 bg-indigo-50 rounded-xl flex items-center gap-3">
                  <Clock className="w-5 h-5 text-indigo-600" />
                  <p className="text-xs text-indigo-900 font-medium">24/7 Support available for Managed Pro & Elite clients.</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-200 aspect-square rounded-[2.5rem] overflow-hidden relative group">
              <img src="https://picsum.photos/seed/map/600/600" className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" alt="Map" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white px-6 py-3 rounded-full shadow-xl flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span className="font-bold">Find Us in Newbury</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-xl border border-slate-100 h-full">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold">Message Sent!</h2>
                  <p className="text-slate-600 max-w-sm">Thank you for reaching out. One of our IT experts will be in touch within 2 business hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-indigo-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-10">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Send a Message</h2>
                    <p className="text-slate-600">Fill out the form below and we'll get back to you shortly.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Full Name</label>
                        <input
                          required
                          type="text"
                          placeholder="John Doe"
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Email Address</label>
                        <input
                          required
                          type="email"
                          placeholder="john@company.co.uk"
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="07123 456789"
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Service Required</label>
                        <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all appearance-none">
                          <option>Managed IT Support</option>
                          <option>Cybersecurity</option>
                          <option>Cloud Migration</option>
                          <option>Software Development</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Your Message</label>
                      <textarea
                        required
                        rows={5}
                        placeholder="How can we help your business?"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                      ></textarea>
                    </div>
                    <div className="flex items-start gap-3">
                      <input required type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                      <p className="text-xs text-slate-500 leading-relaxed">
                        I consent to Sylvian Care Newbury processing my personal data in accordance with their <a href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a> to respond to my enquiry.
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-5 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="bg-indigo-50 p-12 rounded-[3rem] border border-indigo-100 flex flex-col md:flex-row gap-12 items-center justify-between">
          <div className="flex gap-6 items-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
              <MessageSquare className="w-8 h-8 text-indigo-600" />
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold">Existing Client?</h3>
              <p className="text-slate-600">Access our support portal for faster ticket resolution.</p>
            </div>
          </div>
          <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all">
            Open Support Portal
          </button>
        </div>
      </section>
    </div>
  );
}
