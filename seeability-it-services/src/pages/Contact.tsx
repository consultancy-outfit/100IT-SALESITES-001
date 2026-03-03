import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const COMPANY_DETAILS = {
  name: 'SeeAbility Oxfordshire South Support Service',
  address: 'N/A',
  phone: 'N/A',
  email: 'N/A',
};

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Get in Touch
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or need urgent support? Our UK-based team is ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="John Smith" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="john@company.co.uk" />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                <input type="text" id="company" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="Your Business Ltd" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                <select id="subject" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all">
                  <option>General Enquiry</option>
                  <option>Sales / Quote</option>
                  <option>Technical Support</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="privacy" type="checkbox" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-slate-300 rounded" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="privacy" className="font-medium text-slate-700">I agree to the Privacy Policy</label>
                  <p className="text-slate-500">We will only use your data to respond to your enquiry. We do not share data with third parties.</p>
                </div>
              </div>

              <button type="submit" className="w-full bg-teal-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-teal-700 transition-colors shadow-md">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start">
              <div className="bg-teal-100 p-3 rounded-lg text-teal-600 mr-4">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Our Office</h3>
                <p className="text-slate-600">{COMPANY_DETAILS.address}</p>
                <p className="text-sm text-slate-400 mt-2">Registered in England & Wales</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start">
              <div className="bg-teal-100 p-3 rounded-lg text-teal-600 mr-4">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                <p className="text-slate-600">{COMPANY_DETAILS.phone}</p>
                <p className="text-sm text-slate-400 mt-2">Mon-Fri, 9am - 5:30pm GMT</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start">
              <div className="bg-teal-100 p-3 rounded-lg text-teal-600 mr-4">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                <p className="text-slate-600">{COMPANY_DETAILS.email}</p>
                <p className="text-sm text-slate-400 mt-2">We aim to respond within 24 hours.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start">
              <div className="bg-teal-100 p-3 rounded-lg text-teal-600 mr-4">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Business Hours</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li className="flex justify-between w-48"><span>Monday - Friday:</span> <span>09:00 - 17:30</span></li>
                  <li className="flex justify-between w-48"><span>Saturday:</span> <span>Closed</span></li>
                  <li className="flex justify-between w-48"><span>Sunday:</span> <span>Closed</span></li>
                </ul>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-200 rounded-xl h-64 w-full flex items-center justify-center text-slate-500 font-medium border border-slate-300">
              Interactive Map Placeholder
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
