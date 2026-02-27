import { motion } from "motion/react";
import { COMPANY_DETAILS } from "../constants";
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-primary text-white py-24">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl mb-8">Get in Touch</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Have a question or ready to start your digital transformation? Our UK-based team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100"
            >
              {submitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-4">Message Sent!</h2>
                  <p className="text-slate-600">Thank you for reaching out. A member of our team will be in touch within 2 business hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-accent font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Smith"
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="john@company.co.uk"
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Subject</label>
                    <select className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all">
                      <option>Managed IT Support</option>
                      <option>Cyber Security Audit</option>
                      <option>Cloud Migration</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="How can we help your business?"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                    ></textarea>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <input required type="checkbox" className="mt-1 w-4 h-4 text-accent rounded focus:ring-accent" />
                    <p className="text-sm text-slate-500">
                      I consent to Westcliff on Sea processing my data in accordance with the <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>.
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-5 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
                  >
                    Send Message <Send size={20} />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-accent shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Phone</h4>
                      <p className="text-slate-600">{COMPANY_DETAILS.phone}</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-accent shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Email</h4>
                      <p className="text-slate-600">{COMPANY_DETAILS.email}</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-accent shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Office</h4>
                      <p className="text-slate-600">{COMPANY_DETAILS.address}</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-accent shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Business Hours</h4>
                      <p className="text-slate-600">{COMPANY_DETAILS.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-3xl bg-slate-200 overflow-hidden relative border border-slate-200">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold">
                  Interactive Map Placeholder
                </div>
                <img
                  src="https://picsum.photos/seed/map/800/450?blur=2"
                  alt="Map Location"
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100 flex gap-6">
                <ShieldCheck size={32} className="text-emerald-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-emerald-900 mb-2">Secure Communication</h4>
                  <p className="text-emerald-700 text-sm">
                    Your information is encrypted and handled with the highest level of confidentiality. We never share your details with third parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
