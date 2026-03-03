import React from 'react';
import { motion } from 'motion/react';
import { Check, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingTiers = [
  {
    name: 'Essential',
    price: '35',
    description: 'Core IT support and security for small teams getting started.',
    features: [
      'Remote Helpdesk (9am-5pm)',
      'Basic Antivirus & Firewall',
      'Microsoft 365 Management',
      'Windows/Mac Patch Management',
      'Quarterly Health Check'
    ],
    supportLevel: 'Standard Response (4hr)',
    idealFor: 'Startups & Micro Businesses',
    highlight: false
  },
  {
    name: 'Professional',
    price: '65',
    description: 'Comprehensive management for growing businesses needing reliability.',
    features: [
      'Unlimited Remote Support (24/7)',
      'Advanced Endpoint Protection',
      'Email Security & Backup',
      'Cloud Server Monitoring',
      'Monthly Strategic Review',
      'On-site Support (Discounted)'
    ],
    supportLevel: 'Priority Response (1hr)',
    idealFor: 'Growing SMEs (10-50 users)',
    highlight: true
  },
  {
    name: 'Enterprise',
    price: '95',
    description: 'Full-service IT partnership with strategic leadership and advanced security.',
    features: [
      'Unlimited Remote & On-site Support',
      'Dedicated Account Manager',
      'Cyber Essentials Certification',
      'Disaster Recovery Planning',
      'vCIO (Virtual CIO) Service',
      'Annual Security Audit'
    ],
    supportLevel: 'Critical Response (15min)',
    idealFor: 'Established Firms (50+ users)',
    highlight: false
  }
];

export default function Pricing() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Transparent Pricing
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Simple, predictable monthly pricing per user. No hidden fees, no surprises.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden border ${tier.highlight ? 'border-teal-500 ring-2 ring-teal-500 ring-opacity-50 relative' : 'border-slate-200'}`}
            >
              {tier.highlight && (
                <div className="bg-teal-500 text-white text-xs font-bold uppercase tracking-wide py-1 text-center">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">{tier.name}</h3>
                <p className="text-slate-500 text-sm mt-2 mb-6">{tier.description}</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-slate-900">£{tier.price}</span>
                  <span className="text-slate-500 ml-2">/user/month</span>
                </div>
                <p className="text-xs text-slate-400 mb-6">* Prices exclude VAT</p>
                
                <Link 
                  to="/contact" 
                  className={`block w-full py-3 px-4 rounded-lg text-center font-bold transition-colors ${tier.highlight ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                >
                  Choose {tier.name}
                </Link>
              </div>
              <div className="bg-slate-50 p-8 border-t border-slate-100 h-full">
                <p className="font-bold text-slate-900 text-sm mb-4 uppercase tracking-wide">Key Features</p>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-slate-200">
                   <div className="flex items-center justify-between text-sm">
                     <span className="text-slate-500">Support Level:</span>
                     <span className="font-medium text-slate-900">{tier.supportLevel}</span>
                   </div>
                   <div className="flex items-center justify-between text-sm mt-2">
                     <span className="text-slate-500">Ideal For:</span>
                     <span className="font-medium text-slate-900">{tier.idealFor}</span>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ / Clarification */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Common Questions</h2>
          <div className="space-y-6">
            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 flex items-center"><HelpCircle className="w-5 h-5 mr-2 text-teal-500" /> Are there any setup fees?</h3>
              <p className="mt-2 text-slate-600">We typically charge a small onboarding fee equivalent to one month of service to cover the initial audit and system configuration.</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 flex items-center"><HelpCircle className="w-5 h-5 mr-2 text-teal-500" /> What is the contract length?</h3>
              <p className="mt-2 text-slate-600">Our standard contracts are 12 months, but we offer a 30-day rolling option for a slightly higher premium.</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 flex items-center"><HelpCircle className="w-5 h-5 mr-2 text-teal-500" /> Do you support custom projects?</h3>
              <p className="mt-2 text-slate-600">Absolutely. For one-off projects like office moves or server migrations, we provide a fixed-price quote separate from our monthly plans.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
