import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-zinc-50 py-24 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6"
          >
            Let's Start a <span className="text-emerald-600">Conversation</span>
          </motion.h1>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            Have a question or ready to upgrade your IT? Our UK-based team is here to help.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-zinc-100 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-zinc-900 mb-8">Send us a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-700">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-700">Company Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      placeholder="Acme Ltd"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700">Business Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="john@company.co.uk"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700">Service Interested In</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white">
                    <option>Managed IT Support</option>
                    <option>Cloud Solutions</option>
                    <option>Cyber Security</option>
                    <option>IT Consultancy</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700">Your Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <div className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1 h-4 w-4 text-emerald-600 border-zinc-300 rounded focus:ring-emerald-500" required />
                  <p className="text-xs text-zinc-500">
                    I consent to Sterling Standard IT collecting my data for the purpose of responding to this enquiry in accordance with the Privacy Policy.
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900">Email Us</p>
                      <p className="text-zinc-600">sterlingstandardcaregroupliverpool.co.uk</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900">Call Us</p>
                      <p className="text-zinc-600">Not Available</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900">Registered Office</p>
                      <p className="text-zinc-600">Not Available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-6">Business Hours</h2>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-zinc-600" />
                  </div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
                    <span className="text-zinc-500">Mon - Fri</span>
                    <span className="text-zinc-900 font-semibold">09:00 - 17:30</span>
                    <span className="text-zinc-500">Saturday</span>
                    <span className="text-zinc-900 font-semibold">Closed</span>
                    <span className="text-zinc-500">Sunday</span>
                    <span className="text-zinc-900 font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-[2rem] bg-zinc-100 border border-zinc-200 overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-medium">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    Interactive Map Placeholder
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000"
                  alt="Map Location"
                  className="w-full h-full object-cover opacity-30 grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
