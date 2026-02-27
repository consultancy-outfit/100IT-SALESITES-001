import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Let's Start a <span className="text-brand-accent">Conversation</span>.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Whether you have a specific project in mind or just want to explore how we can help, our team is ready to assist.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-brand-accent/20 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
                <p className="text-slate-600">
                  Thank you for reaching out. One of our London-based engineers will be in touch within 2 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-brand-accent font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Business Email</label>
                    <input
                      required
                      type="email"
                      placeholder="john@company.co.uk"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+44 7000 000000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Service Interest</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all bg-white">
                      <option>Managed IT Support</option>
                      <option>Cybersecurity</option>
                      <option>Cloud Migration</option>
                      <option>Software Development</option>
                      <option>Other Enquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Your Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input required type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-brand-accent focus:ring-brand-accent" />
                  <p className="text-xs text-slate-500 leading-relaxed">
                    I consent to Monaveen processing my personal data in accordance with their Privacy Policy to handle this enquiry.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-secondary transition-all shadow-lg active:scale-[0.98]"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-between">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-accent/10 text-brand-accent rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Phone</div>
                      <div className="text-slate-600">+44 20 7946 0000</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-accent/10 text-brand-accent rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Email</div>
                      <div className="text-slate-600">info@monaveen.co.uk</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-accent/10 text-brand-accent rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Registered Office</div>
                      <div className="text-slate-600">124 City Road, London, EC1V 2NX, UK</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-brand-accent" />
                    <div className="flex justify-between w-full max-w-xs">
                      <span className="font-medium text-slate-700">Monday - Friday</span>
                      <span className="text-slate-600">09:00 - 17:30</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 opacity-50">
                    <Clock className="w-5 h-5 text-slate-400" />
                    <div className="flex justify-between w-full max-w-xs">
                      <span className="font-medium text-slate-700">Sat - Sun</span>
                      <span className="text-slate-600">Emergency Only</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 h-64 bg-slate-200 rounded-3xl overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-300/50">
                <MapPin className="w-12 h-12 text-slate-400 group-hover:scale-110 transition-transform" />
                <span className="absolute bottom-4 text-xs font-bold text-slate-500 uppercase tracking-widest">London, EC1V 2NX</span>
              </div>
              <img 
                src="https://picsum.photos/seed/map/600/400?blur=2" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
