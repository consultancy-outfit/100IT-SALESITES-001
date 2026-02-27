import React from 'react';
import { Check, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: 'Essential Support',
    price: 499,
    idealFor: 'Small businesses with up to 10 users',
    features: [
      'Mon-Fri 9am-6pm Helpdesk',
      'Remote Support Only',
      'Antivirus & Endpoint Security',
      'Basic Patch Management',
      'Monthly Health Reports',
      'Email Security Filtering'
    ],
    support: 'Next Business Day Response',
    highlight: false
  },
  {
    name: 'Professional Managed',
    price: 999,
    idealFor: 'Growing SMEs with 10-50 users',
    features: [
      '24/7 Critical Support',
      'Remote & On-site Support',
      'Advanced Threat Protection',
      'Full Cloud Management',
      'Managed Backup & Recovery',
      'Dedicated Account Manager',
      'Quarterly Strategy Reviews'
    ],
    support: '1 Hour Response Time',
    highlight: true
  },
  {
    name: 'Enterprise Strategic',
    price: 2499,
    idealFor: 'Large organisations with complex needs',
    features: [
      'Priority 24/7/365 Support',
      'Unlimited On-site Visits',
      'Full SOC Monitoring',
      'vCTO Advisory Services',
      'Compliance & Audit Support',
      'Custom Disaster Recovery',
      'Infrastructure Modernisation'
    ],
    support: '15 Minute Priority Response',
    highlight: false
  }
];

export const Pricing = () => {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">Transparent Pricing</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            No hidden fees. No complex contracts. Just reliable IT support tailored to your business scale.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`relative p-8 rounded-3xl border ${
                  tier.highlight
                    ? 'border-brand-600 shadow-2xl shadow-brand-100 bg-white scale-105 z-10'
                    : 'border-slate-200 bg-slate-50'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                  <p className="text-sm text-slate-500 mb-6">{tier.idealFor}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-display font-bold text-slate-900">£{tier.price}</span>
                    <span className="text-slate-500 ml-2">/month</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">All prices exclude VAT at 20%.</p>
                </div>
                
                <div className="space-y-4 mb-10">
                  <div className="text-sm font-bold text-slate-900 uppercase tracking-wider">Features</div>
                  <ul className="space-y-3">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-600">
                        <Check className="text-emerald-500 shrink-0" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-6 border-t border-slate-200 mb-10">
                  <div className="text-xs font-bold text-slate-400 uppercase mb-2">Support Level</div>
                  <div className="text-sm font-semibold text-slate-900">{tier.support}</div>
                </div>
                
                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-full font-bold text-center transition-all flex items-center justify-center gap-2 ${
                    tier.highlight
                      ? 'bg-brand-600 text-white hover:bg-brand-700'
                      : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Choose Plan <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VAT Note */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 flex items-start gap-4 bg-white p-6 rounded-2xl border border-slate-200">
          <Info className="text-brand-600 shrink-0" size={24} />
          <div className="text-sm text-slate-600">
            <p className="font-bold text-slate-900 mb-1">VAT & Billing Information</p>
            <p>
              All prices listed are subject to VAT at the standard UK rate (currently 20%). Billing is processed monthly in advance via Direct Debit. Minimum contract terms apply to all plans. For organisations with over 100 users, please contact us for a bespoke enterprise quote.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Is there a setup fee?', a: 'We charge a one-time onboarding fee equivalent to one month of service to cover the initial audit and security hardening.' },
              { q: 'Can I change plans later?', a: 'Yes, you can upgrade your plan at any time. Downgrades require 30 days notice after the initial contract term.' },
              { q: 'Do you offer multi-site discounts?', a: 'Absolutely. For businesses with multiple UK locations, we offer volume-based pricing. Contact us for details.' }
            ].map((faq, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl">
                <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-sm text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
