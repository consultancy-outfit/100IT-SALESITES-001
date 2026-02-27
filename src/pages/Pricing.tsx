import React from 'react';
import { motion } from 'motion/react';
import { Check, X, Zap, Shield, Building, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Essential',
    price: '249',
    description: 'Perfect for small startups and micro-businesses needing reliable IT support.',
    icon: Rocket,
    idealFor: 'Startups & Small Teams (1-5 users)',
    support: 'Business Hours (9am - 5pm)',
    features: [
      'Basic Helpdesk Support',
      'Antivirus & Malware Protection',
      'Weekly System Backups',
      'Remote Troubleshooting',
      'Software Updates & Patching',
    ],
    notIncluded: [
      '24/7 Monitoring',
      'On-site Support',
      'Advanced Cybersecurity',
      'Cloud Infrastructure Management',
    ],
    highlight: false,
  },
  {
    name: 'Professional',
    price: '599',
    description: 'Comprehensive IT management for growing businesses that require proactive support.',
    icon: Zap,
    idealFor: 'Growing SMEs (6-25 users)',
    support: 'Extended Hours (8am - 8pm)',
    features: [
      'Priority Helpdesk Support',
      'Advanced Threat Protection',
      'Daily Off-site Backups',
      'Quarterly IT Strategy Reviews',
      'Network Monitoring & Security',
      'Managed Cloud Services',
    ],
    notIncluded: [
      'Dedicated Account Manager',
      'Unlimited On-site Support',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '1,299',
    description: 'Full-scale IT partnership with advanced security and dedicated resource allocation.',
    icon: Shield,
    idealFor: 'Established Enterprises (25+ users)',
    support: '24/7/365 Critical Support',
    features: [
      'Unlimited Helpdesk Support',
      'Full Security Operations Center (SOC)',
      'Real-time Data Replication',
      'Dedicated Account Manager',
      'Unlimited On-site Support',
      'Custom Software Maintenance',
      'Disaster Recovery Planning',
    ],
    notIncluded: [],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-navy-900 mb-6">Transparent Pricing</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose a plan that fits your business needs. All prices are in GBP and exclude VAT.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative bg-white rounded-3xl border ${
                plan.highlight 
                  ? 'border-brand-500 shadow-2xl scale-105 z-10' 
                  : 'border-slate-200 shadow-sm'
              } p-8 flex flex-col h-full`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  plan.highlight ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-600'
                }`}>
                  <plan.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-navy-900">£{plan.price}</span>
                  <span className="text-slate-500 font-medium">/month</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-wider">*Excluding VAT</p>
              </div>

              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Ideal For</p>
                  <p className="text-sm font-semibold text-navy-900">{plan.idealFor}</p>
                </div>
                
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Support Level</p>
                  <p className="text-sm font-semibold text-navy-900">{plan.support}</p>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">What's Included</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                    {plan.notIncluded.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-slate-400">
                        <X className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <Link 
                  to="/contact" 
                  className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${
                    plan.highlight 
                      ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg' 
                      : 'bg-navy-900 text-white hover:bg-navy-950'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ / Info */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-200">
          <h2 className="text-2xl font-display font-bold text-navy-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-navy-900 mb-2">Is there a minimum contract term?</h4>
              <p className="text-slate-600 text-sm">Most of our plans are on a 12-month rolling contract, but we offer flexible monthly options for startups on our Essential plan.</p>
            </div>
            <div>
              <h4 className="font-bold text-navy-900 mb-2">How do you handle VAT?</h4>
              <p className="text-slate-600 text-sm">All prices listed are exclusive of VAT. A valid VAT invoice will be provided monthly at the standard UK rate of 20%.</p>
            </div>
            <div>
              <h4 className="font-bold text-navy-900 mb-2">Can we upgrade or downgrade our plan?</h4>
              <p className="text-slate-600 text-sm">Yes, you can upgrade your plan at any time. Downgrades are processed at the end of your current billing cycle.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
