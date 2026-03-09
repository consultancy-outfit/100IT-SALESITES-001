import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck } from "lucide-react";

const COMPANY_DETAILS = {
  name: "Fradel Lodge",
  address: "1 Highfield, Love Lane, Kings Langley, United Kingdom, WD4 9JT",
  crn: "17048754",
  phone: "0208 088 5683",
  email: "info@fradellodge.co.uk",
  hours: "Mon - Fri: 09:00 - 18:00",
};

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-stone-50">
      {/* Header */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-stone-900 mb-8">
              Let's <span className="text-violet-600">Connect</span>
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              Have a question or ready to start your project? Our team of
              experts is here to help you navigate your technology journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-stone-900 mb-8">
                  Contact Information
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-1">
                        Registered Office
                      </h4>
                      <p className="text-lg text-stone-800 font-medium">
                        {COMPANY_DETAILS.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-1">
                        Phone Number
                      </h4>
                      <p className="text-lg text-stone-800 font-medium">
                        {COMPANY_DETAILS.phone}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-1">
                        Official Email
                      </h4>
                      <p className="text-lg text-stone-800 font-medium">
                        {COMPANY_DETAILS.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-1">
                        Business Hours
                      </h4>
                      <p className="text-lg text-stone-800 font-medium">
                        {COMPANY_DETAILS.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-stone-900 rounded-3xl text-white">
                <h3 className="text-xl font-bold mb-4">Company Details</h3>
                <div className="space-y-2 text-sm text-stone-400">
                  <p>Company Name: {COMPANY_DETAILS.name}</p>
                  <p>CRN: {COMPANY_DETAILS.crn}</p>
                  <p>Registered in England & Wales</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-3xl bg-stone-200 overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center bg-stone-200 text-stone-400 font-bold uppercase tracking-widest text-xs">
                  Interactive Map Placeholder
                </div>
                <img
                  src="https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?auto=format&fit=crop&q=80&w=800"
                  alt="Map Location"
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 lg:p-16 rounded-[3rem] shadow-xl border border-stone-100">
              <h2 className="text-3xl font-bold text-stone-900 mb-8">
                Send a Message
              </h2>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center text-violet-600">
                    <ShieldCheck size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900">
                    Message Sent!
                  </h3>
                  <p className="text-stone-600">
                    Thank you for reaching out. One of our experts will be in
                    touch within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-violet-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-stone-400">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-stone-400">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all"
                        placeholder="john@company.co.uk"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-400">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all"
                      placeholder="Your Company Ltd"
                      value={formState.company}
                      onChange={(e) =>
                        setFormState({ ...formState, company: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-400">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all resize-none"
                      placeholder="How can we help you?"
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex items-start space-x-3">
                    <input
                      required
                      type="checkbox"
                      id="consent"
                      className="mt-1 w-4 h-4 text-violet-600 border-stone-300 rounded focus:ring-violet-500"
                      checked={formState.consent}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          consent: e.target.checked,
                        })
                      }
                    />
                    <label
                      htmlFor="consent"
                      className="text-sm text-stone-500 leading-relaxed"
                    >
                      I consent to Fradel Lodge processing my personal data in
                      accordance with the{" "}
                      <a
                        href="/privacy"
                        className="text-violet-600 hover:underline"
                      >
                        Privacy Policy
                      </a>
                      .
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-stone-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-stone-800 transition-all flex items-center justify-center group"
                  >
                    Send Message
                    <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
