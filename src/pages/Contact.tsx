import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-brand-600 uppercase tracking-wide">Contact Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Let's Start a Conversation
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Have a question or ready to upgrade your IT? Our team is here to help.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Get in Touch</h3>
              <p className="mt-4 text-slate-600">
                Reach out via any of the channels below. We aim to respond to all enquiries within 2 business hours.
              </p>
            </div>

            <dl className="space-y-8">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <MapPin className="h-7 w-6 text-brand-600" aria-hidden="true" />
                </dt>
                <dd className="text-slate-600">
                  <strong className="text-slate-900 block mb-1">Registered Office</strong>
                  15 Queens Road, Donnington,<br />
                  Telford, England, TF2 8DB
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <Phone className="h-7 w-6 text-brand-600" aria-hidden="true" />
                </dt>
                <dd>
                  <strong className="text-slate-900 block mb-1">Phone Number</strong>
                  <a className="hover:text-brand-600 text-slate-600" href="tel:01214052129">
                    0121 405 2129
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <Mail className="h-7 w-6 text-brand-600" aria-hidden="true" />
                </dt>
                <dd>
                  <strong className="text-slate-900 block mb-1">Official Email</strong>
                  <a className="hover:text-brand-600 text-slate-600" href="mailto:Info@attainingindependence.co.uk">
                    Info@attainingindependence.co.uk
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Hours</span>
                  <Clock className="h-7 w-6 text-brand-600" aria-hidden="true" />
                </dt>
                <dd className="text-slate-600">
                  <strong className="text-slate-900 block mb-1">Business Hours</strong>
                  Monday – Friday: 09:00 – 17:30<br />
                  Saturday – Sunday: Closed (Emergency Support Only)
                </dd>
              </div>
            </dl>

            {/* Map Placeholder */}
            <div className="aspect-video w-full bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200 overflow-hidden relative group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000')] bg-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
              <div className="relative z-10 text-center p-6">
                <MapPin className="h-10 w-10 text-brand-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-slate-900 uppercase tracking-widest">Telford, Shropshire</p>
                <p className="text-xs text-slate-500 mt-1">Visit our headquarters</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="bg-brand-100 p-4 rounded-full mb-6">
                  <CheckCircle2 className="h-12 w-12 text-brand-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                <p className="mt-4 text-slate-600 max-w-xs">
                  Thank you for reaching out. One of our IT specialists will contact you shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-brand-600 font-semibold hover:text-brand-500"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-slate-900">
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        required
                        className="block w-full rounded-xl border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-slate-900">
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        required
                        className="block w-full rounded-xl border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold leading-6 text-slate-900">
                    Company
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      className="block w-full rounded-xl border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-xl border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-slate-900">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      className="block w-full rounded-xl border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <div className="flex h-6 items-center">
                    <input
                      id="privacy-consent"
                      name="privacy-consent"
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-600"
                    />
                  </div>
                  <label htmlFor="privacy-consent" className="text-sm leading-6 text-slate-600">
                    I agree to the processing of my data in accordance with the{' '}
                    <a href="/privacy" className="font-semibold text-brand-600">
                      privacy&nbsp;policy
                    </a>
                    .
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-brand-600 px-8 py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-all flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
