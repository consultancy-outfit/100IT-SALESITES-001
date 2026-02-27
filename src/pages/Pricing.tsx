import React from 'react';
import { motion } from 'motion/react';
import { Check, Info } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: 'Foundation',
    price: '£250',
    features: [
      'Remote Helpdesk Support',
      'Basic Security Monitoring',
      'Cloud Backup (50GB)',
      'Monthly Health Report',
      '9am - 5pm Support'
    ],
    supportLevel: 'Standard (Next Business Day)',
    idealFor: 'Small startups and micro-businesses.'
  },
  {
    name: 'Professional',
    price: '£750',
    features: [
      'Everything in Foundation',
      'On-site Support Included',
      'Advanced Threat Protection',
      'Cloud Backup (500GB)',
      'Quarterly IT Strategy Review',
      'Priority Helpdesk Access'
    ],
    supportLevel: 'Priority (4-hour Response)',
    idealFor: 'Growing SMEs with 10-50 employees.',
    isPopular: true
  },
  {
    name: 'Enterprise',
    price: '£1,950',
    features: [
      'Everything in Professional',
      '24/7/365 Critical Support',
      'Full Managed Security (SOC)',
      'Unlimited Cloud Storage',
      'Dedicated Account Manager',
      'Annual Compliance Audit'
    ],
    supportLevel: 'Elite (1-hour Response)',
    idealFor: 'Large organisations and regulated firms.'
  }
];

export const Pricing: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-6">Transparent Pricing</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Simple, predictable pricing designed for UK businesses. No hidden fees, just expert IT support.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col p-8 rounded-3xl border ${
                  tier.isPopular 
                    ? 'border-indigo-600 shadow-2xl ring-1 ring-indigo-600' 
                    : 'border-slate-200 shadow-sm'
                } bg-white`}
              >
                {tier.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                    <span className="text-slate-500">/month</span>
                  </div>
                  <p className="mt-4 text-sm text-slate-500 leading-relaxed">{tier.idealFor}</p>
                </div>

                <div className="flex-grow">
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">What's Included</p>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-slate-600">
                        <Check size={18} className="text-emerald-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-8 border-t border-slate-100">
                  <div className="mb-6">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Support Level</p>
                    <p className="text-sm font-medium text-slate-900">{tier.supportLevel}</p>
                  </div>
                  <button
                    className={`w-full rounded-xl py-4 text-sm font-bold transition-all active:scale-95 ${
                      tier.isPopular
                        ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-200'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* VAT Note */}
          <div className="mt-16 flex items-center justify-center gap-2 text-slate-500 text-sm">
            <Info size={16} />
            <p>All prices are subject to VAT at the standard UK rate (20%). Custom enterprise quotes available on request.</p>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Pricing FAQs</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Are there any setup fees?</h3>
              <p className="text-slate-600">Most of our managed plans have a one-time onboarding fee equivalent to one month's subscription to cover initial system audits and setup.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Can I change plans later?</h3>
              <p className="text-slate-600">Yes, you can upgrade or downgrade your plan at any time with 30 days' notice. We want our services to scale with your business.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Do you offer discounts for non-profits?</h3>
              <p className="text-slate-600">Absolutely. We offer a 15% discount on all service plans for registered UK charities and non-profit organisations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
