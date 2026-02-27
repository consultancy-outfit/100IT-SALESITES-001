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
    <div className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">Get in Touch</h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Have a question or ready to upgrade your IT? Our Plymouth-based team is here to help.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-slate-900">Call Us</h3>
                <p className="text-slate-600">{COMPANY_DETAILS.phone}</p>
              </div>
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-slate-900">Email Us</h3>
                <p className="text-slate-600">{COMPANY_DETAILS.email}</p>
              </div>
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-slate-900">Visit Us</h3>
                <p className="text-slate-600">{COMPANY_DETAILS.address}</p>
              </div>
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-slate-900">Business Hours</h3>
                <p className="text-slate-600">{COMPANY_DETAILS.hours}</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200 h-64 bg-slate-100 flex items-center justify-center relative">
              <div className="text-center p-8">
                <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-500 font-medium">Interactive Map Placeholder</p>
                <p className="text-xs text-slate-400 mt-2">Plymouth, Devon, PL1 1AA</p>
              </div>
              <div className="absolute inset-0 bg-emerald-600/5"></div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xl shadow-slate-200/50">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                <div className="h-20 w-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Send className="h-10 w-10" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Message Sent!</h2>
                <p className="text-slate-600 max-w-sm">
                  Thank you for reaching out. One of our IT specialists will be in touch within 2 business hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-emerald-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input required type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" placeholder="John Smith" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Company Name</label>
                    <input required type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" placeholder="Acme Ltd" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input required type="email" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input required type="tel" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" placeholder="01752 123456" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">How can we help?</label>
                  <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all">
                    <option>Managed IT Support</option>
                    <option>Cloud Migration</option>
                    <option>Cyber Security Audit</option>
                    <option>IT Consultancy</option>
                    <option>Other Enquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea required rows={4} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" placeholder="Tell us about your IT challenges..."></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input required type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                  <p className="text-xs text-slate-500 leading-relaxed">
                    I consent to Hillside IT Solutions storing my data to process this enquiry in accordance with the <a href="/privacy" className="text-emerald-600 hover:underline">Privacy Policy</a>.
                  </p>
                </div>
                <button type="submit" className="w-full inline-flex h-14 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
