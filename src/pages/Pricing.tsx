import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';

const plans = [
  {
    name: 'Essential Support',
    price: '25',
    period: 'per user/mo',
    desc: 'Perfect for small businesses needing reliable remote support.',
    features: [
      'Unlimited Remote Support',
      'Mon-Fri 9am-6pm Support',
      'Antivirus & Security Patching',
      'Basic Microsoft 365 Management',
      '4-Hour Response SLA',
    ],
    support: 'Remote Only',
    ideal: 'Startups & Micro-businesses',
    highlight: false,
  },
  {
    name: 'Professional Managed',
    price: '45',
    period: 'per user/mo',
    desc: 'Comprehensive IT management for growing UK firms.',
    features: [
      'Everything in Essential',
      'On-Site Support Included',
      '24/7 Server Monitoring',
      'Advanced Cybersecurity Suite',
      '1-Hour Response SLA',
      'Quarterly IT Strategy Reviews',
    ],
    support: 'Remote & On-Site',
    ideal: 'Growing SMEs (10-50 users)',
    highlight: true,
  },
  {
    name: 'Enterprise Secure',
    price: '85',
    period: 'per user/mo',
    desc: 'High-level security and infrastructure for complex environments.',
    features: [
      'Everything in Professional',
      'Dedicated Account Manager',
      'SIEM & SOC Monitoring',
      'Disaster Recovery as a Service',
      '15-Min Critical Response SLA',
      'Compliance & Audit Support',
    ],
    support: 'Priority 24/7/365',
    ideal: 'Large Firms & Regulated Industries',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            No hidden fees. All prices are in GBP and exclude VAT at the prevailing rate.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 border ${
                plan.highlight ? 'border-indigo-600 shadow-2xl scale-105 z-10' : 'border-slate-100 shadow-sm'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm">{plan.desc}</p>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-slate-900">£{plan.price}</span>
                  <span className="text-slate-500 ml-2">{plan.period}</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">+ VAT</div>
              </div>

              <div className="space-y-4 mb-10">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">What's Included</div>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-50 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Support Level:</span>
                  <span className="font-semibold text-slate-900">{plan.support}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Ideal For:</span>
                  <span className="font-semibold text-slate-900">{plan.ideal}</span>
                </div>
              </div>

              <Link
                to={ROUTES.CONTACT}
                className={`mt-10 w-full inline-flex items-center justify-center px-6 py-4 rounded-xl font-bold transition-all ${
                  plan.highlight
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                Choose Plan
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FAQ/Info Section */}
        <div className="max-w-3xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
          <div className="flex items-start space-x-4">
            <Info className="w-6 h-6 text-indigo-600 shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Custom Requirements?</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                If your business has unique needs, multi-site requirements, or requires specialized compliance support, we can build a bespoke package for you.
              </p>
              <Link to={ROUTES.CONTACT} className="text-indigo-600 font-bold hover:underline">
                Speak to an advisor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
