import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../components/Footer';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Contact Our Experts</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Have a question or need immediate support? We're here to help. 
              Reach out to our Manchester-based team today.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-100 p-12 rounded-3xl text-center">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-emerald-900 mb-4">Message Sent!</h2>
                  <p className="text-emerald-800">
                    Thank you for reaching out. One of our IT specialists will be in touch shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-emerald-700 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                      <input 
                        type="email" 
                        required 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@company.co.uk"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your Business Ltd"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Service Required</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all">
                      <option>Managed IT Support</option>
                      <option>Cybersecurity</option>
                      <option>Cloud Migration</option>
                      <option>Network Solutions</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea 
                      rows={5} 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" required className="mt-1 w-4 h-4 text-primary-600 border-slate-300 rounded focus:ring-primary-500" />
                    <label className="text-sm text-slate-500">
                      I consent to Greater Manchester Specialist Support Service processing my data in accordance with the <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a>.
                    </label>
                  </div>
                  <button type="submit" className="btn-primary w-full py-4 text-lg">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-display font-bold mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-50 p-3 rounded-xl">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Our Office</h4>
                      <p className="text-slate-600">{COMPANY_DETAILS.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-50 p-3 rounded-xl">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Phone</h4>
                      <p className="text-slate-600">{COMPANY_DETAILS.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-50 p-3 rounded-xl">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Email</h4>
                      <p className="text-slate-600 break-all">{COMPANY_DETAILS.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-50 p-3 rounded-xl">
                      <Clock className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Business Hours</h4>
                      <p className="text-slate-600">{COMPANY_DETAILS.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary-600" />
                  Support Status
                </h3>
                <div className="flex items-center gap-3 text-emerald-600 font-medium">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                  All Systems Operational
                </div>
                <p className="text-sm text-slate-500 mt-4">
                  Our support desk is currently active. Average response time for new enquiries is under 2 hours.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium text-center p-8">
                  Interactive Map Placeholder <br /> (Manchester City Centre)
                </div>
                <img 
                  src="https://picsum.photos/seed/manchester-map/800/450?grayscale" 
                  className="w-full h-full object-cover opacity-50" 
                  alt="Map Location"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
