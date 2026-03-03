import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to transform your IT? Our Manchester team is ready to help.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">Contact Information</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="bg-indigo-50 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Head Office</h3>
                  <p className="text-slate-600">Visiting Angels Manchester West</p>
                  <p className="text-slate-600">Registered Office Address (UK): N/A</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-50 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Phone</h3>
                  <p className="text-slate-600">UK Phone Number: N/A</p>
                  <p className="text-sm text-slate-500 mt-1">Mon-Fri, 9am - 5:30pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-50 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email</h3>
                  <p className="text-slate-600">Official Business Email: N/A</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-100 rounded-2xl h-64 w-full flex items-center justify-center border border-slate-200">
              <div className="text-slate-400 flex flex-col items-center">
                <MapPin className="h-10 w-10 mb-2" />
                <span>Map Integration Placeholder</span>
                <span className="text-xs">Manchester, UK</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" placeholder="Smith" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" placeholder="john@company.co.uk" />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                <input type="text" id="company" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" placeholder="Acme Ltd" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" placeholder="How can we help you?"></textarea>
              </div>

              <div className="flex items-start">
                <input id="privacy" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded mt-1" />
                <label htmlFor="privacy" className="ml-2 block text-sm text-slate-600">
                  I agree to the <a href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a> and consent to having Visiting Angels Manchester West store my submitted information to respond to my enquiry.
                </label>
              </div>

              <button type="submit" className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-bold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/25">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
