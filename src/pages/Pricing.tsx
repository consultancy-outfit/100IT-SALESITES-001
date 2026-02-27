import React from 'react';
import { motion } from 'motion/react';
import { Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: 'Essential Support',
    price: '450',
    description: 'Perfect for small offices needing reliable IT maintenance.',
    features: [
      'Remote Helpdesk Support',
      'Antivirus Management',
      'Patch Management',
      'Daily Cloud Backups',
      'Quarterly IT Review',
    ],
    support: 'Business Hours (9am - 5pm)',
    ideal: 'Startups & Small Teams',
    cta: 'Start Essential',
    popular: false,
  },
  {
    name: 'Professional Managed',
    price: '950',
    description: 'Comprehensive IT management for growing UK businesses.',
    features: [
      'Everything in Essential',
      'On-site Support Included',
      'Advanced Cybersecurity',
      'Microsoft 365 Management',
      'Monthly Strategy Meetings',
      'Mobile Device Management',
    ],
    support: 'Extended Hours (8am - 8pm)',
    ideal: 'Growing SMEs',
    cta: 'Go Professional',
    popular: true,
  },
  {
    name: 'Enterprise Plus',
    price: '2,500',
    description: 'Full-scale technology partnership for large organisations.',
    features: [
      'Everything in Professional',
      '24/7/365 Critical Support',
      'Dedicated Account Manager',
      'Cloud Infrastructure Management',
      'Compliance & Audit Support',
      'Disaster Recovery Planning',
    ],
    support: '24/7/365 Support',
    ideal: 'Large Enterprises',
    cta: 'Contact for Enterprise',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <div className="bg-zinc-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-zinc-900 sm:text-5xl mb-6">Transparent Pricing</h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs. No hidden fees, just professional IT support.
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-500 bg-white inline-flex px-4 py-2 rounded-full border border-zinc-200">
            <Info className="w-4 h-4 text-indigo-500" />
            All prices are subject to VAT at the prevailing UK rate.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-8 rounded-3xl bg-white border ${
                tier.popular ? 'border-indigo-600 shadow-xl scale-105 z-10' : 'border-zinc-200'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{tier.name}</h3>
                <p className="text-zinc-500 text-sm">{tier.description}</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-zinc-900">£{tier.price}</span>
                  <span className="text-zinc-500 ml-2">/ month</span>
                </div>
                <p className="text-xs text-zinc-400 mt-1">+ VAT</p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <p className="text-sm font-bold text-zinc-900 uppercase tracking-wider">What's Included</p>
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-zinc-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-8 border-t border-zinc-100 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Support Level:</span>
                  <span className="text-zinc-900 font-medium">{tier.support}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Ideal For:</span>
                  <span className="text-zinc-900 font-medium">{tier.ideal}</span>
                </div>
                
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-xl font-bold transition-all ${
                    tier.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200'
                      : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-3xl bg-indigo-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold mb-2">Custom Enterprise Solutions</h2>
            <p className="text-indigo-200">
              Need something more specific? We offer tailored contracts for large-scale 
              infrastructure, multi-site operations, and specialized compliance requirements.
            </p>
          </div>
          <Link
            to="/contact"
            className="whitespace-nowrap px-8 py-4 rounded-full bg-white text-indigo-900 font-bold hover:bg-indigo-50 transition-all"
          >
            Request Custom Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
