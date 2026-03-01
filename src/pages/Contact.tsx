import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-6xl mb-6">Let's Talk <span className="text-primary-600">Strategy</span></h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Whether you have a specific project in mind or just want to explore how we can help your business grow, our team is ready to listen.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50"
          >
            {formState === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-slate-600 mb-8">
                  Thank you for reaching out. One of our senior consultants will be in touch within 2 business hours.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="text-primary-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="John Smith"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="john@company.co.uk"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Company Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Acme Ltd"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="+44 7000 000000"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">How can we help?</label>
                  <select className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all appearance-none">
                    <option>Managed IT Support</option>
                    <option>Cybersecurity Audit</option>
                    <option>Cloud Migration</option>
                    <option>Digital Transformation</option>
                    <option>Other Enquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us a bit about your requirements..."
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-primary-50 rounded-xl border border-primary-100">
                  <input
                    required
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                  />
                  <p className="text-xs text-slate-600 leading-relaxed">
                    I consent to Cornwall-Place processing my data in accordance with their <a href="/privacy" className="text-primary-600 font-bold hover:underline">Privacy Policy</a>. We will never share your details with third parties.
                  </p>
                </div>

                <button
                  disabled={formState === 'submitting'}
                  type="submit"
                  className="w-full bg-primary-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-primary-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary-600/30 disabled:opacity-70"
                >
                  {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-primary-600 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</div>
                    <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-xl font-semibold text-slate-900 hover:text-primary-600 transition-colors">
                      {COMPANY_DETAILS.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-primary-600 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</div>
                    <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-xl font-semibold text-slate-900 hover:text-primary-600 transition-colors">
                      {COMPANY_DETAILS.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-primary-600 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Our Office</div>
                    <div className="text-xl font-semibold text-slate-900">
                      {COMPANY_DETAILS.address}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8">Business Hours</h3>
              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <Clock className="w-6 h-6 text-primary-600" />
                  <span className="font-bold text-slate-900">UK Standard Time (GMT/BST)</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between text-slate-600">
                    <span>Monday - Friday</span>
                    <span className="font-bold text-slate-900">09:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between text-slate-600">
                    <span>Saturday</span>
                    <span className="font-bold text-slate-900">Emergency Only</span>
                  </li>
                  <li className="flex justify-between text-slate-600">
                    <span>Sunday</span>
                    <span className="font-bold text-slate-900">Closed</span>
                  </li>
                </ul>
                <div className="mt-8 p-4 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-500">
                    Existing clients with 24/7 support plans can reach the emergency helpdesk via their dedicated priority line at any time.
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-slate-200 rounded-[2rem] overflow-hidden relative group">
              <img
                src="https://picsum.photos/seed/map/800/450"
                alt="Map Location"
                className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">Cornwall-Place HQ</div>
                    <div className="text-xs text-slate-500">London, EC1V</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
