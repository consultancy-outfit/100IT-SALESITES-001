import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
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
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-8">Let's Talk <span className="text-brand-accent">Strategy</span>.</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Whether you have a specific project in mind or just want to explore how we can help, our team is ready to assist.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                      placeholder="John Smith"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Work Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                      placeholder="john@company.co.uk"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                    placeholder="Your Company Ltd"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">How can we help?</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your IT requirements..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  ></textarea>
                </div>
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="mt-1 h-4 w-4 text-brand-accent border-slate-300 rounded focus:ring-brand-accent"
                    checked={formState.consent}
                    onChange={(e) => setFormState({ ...formState, consent: e.target.checked })}
                  />
                  <label htmlFor="consent" className="text-sm text-slate-500">
                    I agree to the processing of my data in accordance with the <a href="/privacy" className="text-brand-primary underline">Privacy Policy</a>.
                  </label>
                </div>
                <button type="submit" className="btn-primary w-full py-4 text-lg space-x-2">
                  <span>Send Enquiry</span>
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Details</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-slate-100 p-3 rounded-xl">
                      <Mail className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Email</div>
                      <div className="text-slate-600">info@daisyhaye.co.uk</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-slate-100 p-3 rounded-xl">
                      <Phone className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Phone</div>
                      <div className="text-slate-600">Not available</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-slate-100 p-3 rounded-xl">
                      <MapPin className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Registered Office</div>
                      <div className="text-slate-600">info@daisyhaye.co.uk</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Monday - Friday</span>
                    <span className="font-medium text-slate-900">09:00 - 17:30</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Saturday</span>
                    <span className="font-medium text-slate-900">By Appointment</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Sunday</span>
                    <span className="font-medium text-slate-900">Closed</span>
                  </div>
                  <div className="pt-4 text-xs text-brand-accent font-bold uppercase tracking-widest">
                    24/7 Support available for Managed Clients
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 bg-slate-100 rounded-3xl overflow-hidden relative border border-slate-200">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col">
                  <MapPin className="h-10 w-10 mb-2 opacity-20" />
                  <span className="text-sm font-medium">Interactive Map Placeholder</span>
                </div>
                <img src="https://picsum.photos/seed/map/800/400?grayscale" alt="Map" className="w-full h-full object-cover opacity-30" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
