import { Check, X, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const tiers = [
  {
    name: 'Essential Support',
    price: '199',
    description: 'Perfect for small independent care homes or clinics.',
    ideal: 'Small Care Homes (1-15 beds)',
    features: [
      '24/7 UK-Based Helpdesk',
      'Remote System Monitoring',
      'Antivirus & Threat Protection',
      'Monthly Security Updates',
      'Basic Data Backup (Daily)',
      'Office 365 Management'
    ],
    notIncluded: [
      'On-site Emergency Support',
      'Strategic IT Consulting',
      'Advanced Cyber Security Audit'
    ],
    cta: 'Start with Essential',
    popular: false
  },
  {
    name: 'Professional Care',
    price: '499',
    description: 'Comprehensive IT management for growing care groups.',
    ideal: 'Medium Care Groups (15-50 beds)',
    features: [
      'Everything in Essential',
      'Priority Helpdesk Response',
      'On-site Support (Next Day)',
      'Advanced Cloud Backups',
      'DSPT Compliance Support',
      'Mobile Device Management',
      'Quarterly IT Strategy Reviews'
    ],
    notIncluded: [
      'Dedicated Account Manager',
      'Custom Software Integration'
    ],
    cta: 'Go Professional',
    popular: true
  },
  {
    name: 'Enterprise Health',
    price: '999',
    description: 'Full-scale digital partnership for large healthcare providers.',
    ideal: 'Large Care Groups & Private Hospitals',
    features: [
      'Everything in Professional',
      'Dedicated Account Manager',
      '4-Hour On-site Response',
      'Full Cyber Security SOC',
      'Digital Transformation Roadmap',
      'Custom API & App Support',
      'Unlimited Staff Training'
    ],
    notIncluded: [],
    cta: 'Contact for Enterprise',
    popular: false
  }
];

export default function Pricing() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-zinc-900 mb-8 tracking-tight">
            Transparent Pricing for <span className="text-indigo-600">Care Providers</span>
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Choose a plan that fits your organisation's size and complexity. All plans are billed monthly in GBP (£).
          </p>
          <div className="mt-8 inline-flex items-center px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-sm font-medium border border-amber-100">
            <Info className="w-4 h-4 mr-2" />
            All prices exclude VAT at the standard UK rate.
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 lg:p-10 rounded-[2.5rem] border ${
                  tier.popular 
                    ? 'border-indigo-600 shadow-2xl shadow-indigo-100 bg-white' 
                    : 'border-zinc-200 bg-zinc-50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">{tier.name}</h3>
                  <p className="text-zinc-500 text-sm mb-6">{tier.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-zinc-900">£{tier.price}</span>
                    <span className="text-zinc-400">/month</span>
                  </div>
                </div>

                <div className="mb-8 p-4 rounded-2xl bg-white border border-zinc-100">
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Ideal For</div>
                  <div className="text-sm font-semibold text-zinc-900">{tier.ideal}</div>
                </div>

                <div className="space-y-4 mb-10">
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">What's Included</div>
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-zinc-600">
                        <Check className="w-5 h-5 text-indigo-600 mr-3 shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {tier.notIncluded.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-zinc-400">
                        <X className="w-5 h-5 text-zinc-300 mr-3 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className={`block w-full py-4 rounded-full text-center font-bold transition-all ${
                    tier.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200'
                      : 'bg-zinc-900 text-white hover:bg-zinc-800'
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Info */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900">Pricing FAQs</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                q: 'Are there any setup fees?',
                a: 'For Essential and Professional plans, we charge a one-time onboarding fee of £250 to audit and secure your systems. Enterprise setup is quoted bespoke.'
              },
              {
                q: 'Can we change plans later?',
                a: 'Yes, you can upgrade or downgrade your plan at any time with 30 days notice. We want our services to grow with your organisation.'
              },
              {
                q: 'Do you offer discounts for charities?',
                a: 'Absolutely. Registered UK charities and non-profit care organisations are eligible for a 15% discount on all monthly service fees.'
              }
            ].map((faq, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-zinc-200">
                <h4 className="text-lg font-bold text-zinc-900 mb-3">{faq.q}</h4>
                <p className="text-zinc-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
