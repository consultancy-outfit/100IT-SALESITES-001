import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="relative bg-zinc-900 py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/160/1920/1080?blur=3" 
            alt="Contact Background" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-white uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight">Let's Talk Tech</h1>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Have a question about our services or need a bespoke quote? Our UK-based team is ready to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center shrink-0">
                      <Mail className="text-zinc-900 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 mb-1">Email Us</h4>
                      <p className="text-zinc-500">info@basildonsupportedlivingservice.co.uk</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center shrink-0">
                      <Phone className="text-zinc-900 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 mb-1">Call Us</h4>
                      <p className="text-zinc-500">0126 895 5147</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="text-zinc-900 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 mb-1">Visit Us</h4>
                      <p className="text-zinc-500">82 Reddicliff Close, Plymouth, England, PL9 9QJ</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center shrink-0">
                      <Clock className="text-zinc-900 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 mb-1">Business Hours</h4>
                      <p className="text-zinc-500">Monday - Friday: 09:00 - 17:30</p>
                      <p className="text-zinc-400 text-xs mt-1">24/7 Support available for Managed clients</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-200">
                  <h4 className="font-bold text-zinc-900 mb-4">Company Details</h4>
                  <div className="text-zinc-500 text-xs space-y-1">
                    <p>Basildon Supported Living Service</p>
                    <p>CRN: 17046350</p>
                    <p>Registered in England & Wales</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-zinc-900 p-10 md:p-12 rounded-[3rem] shadow-2xl text-white"
              >
                {submitted ? (
                  <div className="text-center py-20">
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
                      <Send className="text-white w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
                    <p className="text-zinc-400">Thank you for reaching out. One of our experts will be in touch within 24 hours.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-10 text-white font-bold border-b border-white pb-1"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Full Name</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-white transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Email Address</label>
                        <input 
                          required
                          type="email" 
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-white transition-colors"
                          placeholder="john@company.co.uk"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Company Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-white transition-colors"
                        placeholder="Your Business Ltd"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Service Interest</label>
                      <select className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-white transition-colors appearance-none">
                        <option>Managed IT Support</option>
                        <option>Cyber Security</option>
                        <option>Cloud Solutions</option>
                        <option>IT Consultancy</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Your Message</label>
                      <textarea 
                        required
                        rows={4}
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-white transition-colors resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <div className="flex items-start gap-3">
                      <input required type="checkbox" className="mt-1 accent-white" id="privacy" />
                      <label htmlFor="privacy" className="text-xs text-zinc-400 leading-relaxed">
                        I consent to Basildon IT processing my data in accordance with their <a href="/privacy" className="underline text-white">Privacy Policy</a>.
                      </label>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-white text-zinc-900 py-4 rounded-xl font-bold hover:bg-zinc-100 transition-all flex items-center justify-center gap-2"
                    >
                      Send Message <Send size={18} />
                    </button>
                  </form>
                )}
              </motion.div>
              
              {/* Map Placeholder */}
              <div className="mt-12 aspect-video bg-zinc-100 rounded-[2rem] border border-zinc-200 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 flex-col gap-2">
                  <MapPin size={32} />
                  <span className="text-xs font-bold uppercase tracking-widest">Basildon, Essex</span>
                </div>
                <img 
                  src="https://picsum.photos/seed/map/800/450?blur=2" 
                  alt="Map Location" 
                  className="w-full h-full object-cover opacity-30"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
