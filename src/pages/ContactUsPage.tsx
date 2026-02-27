import { COMPANY_DETAILS } from '../constants';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center">Get in Touch with Dasil Support Services</h1>
        <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">We're here to help your UK business thrive. Contact us today for expert IT support and solutions.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="john.smith@example.co.uk"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="IT Support Enquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about your IT needs..."
                ></textarea>
              </div>
              <div className="flex items-center">
                <input
                  id="privacyConsent"
                  name="privacyConsent"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="privacyConsent" className="ml-2 block text-sm text-gray-900">
                  I agree to the <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Company Details & Map */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">Our Details</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="text-blue-600 mr-3 flex-shrink-0" size={24} />
                <div>
                  <p className="text-gray-700 font-medium">Email Us:</p>
                  <a href={`mailto:${COMPANY_DETAILS.officialBusinessEmail}`} className="text-blue-600 hover:underline">{COMPANY_DETAILS.officialBusinessEmail}</a>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="text-blue-600 mr-3 flex-shrink-0" size={24} />
                <div>
                  <p className="text-gray-700 font-medium">Call Us:</p>
                  <p className="text-gray-800">{COMPANY_DETAILS.ukPhoneNumber}</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="text-blue-600 mr-3 flex-shrink-0" size={24} />
                <div>
                  <p className="text-gray-700 font-medium">Our Office:</p>
                  <p className="text-gray-800">{COMPANY_DETAILS.registeredOfficeAddress}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="text-blue-600 mr-3 flex-shrink-0" size={24} />
                <div>
                  <p className="text-gray-700 font-medium">Business Hours:</p>
                  <p className="text-gray-800">Monday - Friday: 9:00 AM - 5:00 PM (GMT)</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-200 rounded-md h-64 flex items-center justify-center text-gray-500">
              <p>Map Placeholder</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
