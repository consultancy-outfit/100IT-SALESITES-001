import { motion } from 'motion/react';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: 'Essential Support',
    price: '£299',
    description: 'Perfect for small teams needing reliable IT assistance.',
    features: [
      'Remote Helpdesk Support',
      'Mon-Fri 9am-5pm',
      'Antivirus Management',
      'Cloud Backup (50GB)',
      'Quarterly IT Review',
    ],
    support: 'Business Hours',
    ideal: 'Startups & Small Offices',
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Managed Pro',
    price: '£599',
    description: 'Comprehensive IT management for growing businesses.',
    features: [
      'Everything in Essential',
      'On-site Support Included',
      '24/7 Server Monitoring',
      'Cybersecurity Suite',
      'Cloud Backup (500GB)',
      'Monthly Strategy Call',
    ],
    support: 'Priority 24/7',
    ideal: 'Medium-sized Enterprises',
    cta: 'Most Popular',
    popular: true,
  },
  {
    name: 'Enterprise Elite',
    price: '£1,299',
    description: 'Full-scale technology partnership for large organisations.',
    features: [
      'Everything in Pro',
      'Dedicated Account Manager',
      'Full Infrastructure Management',
      'Advanced Threat Hunting',
      'Unlimited Cloud Storage',
      'Weekly Compliance Audits',
    ],
    support: 'Dedicated VIP Support',
    ideal: 'Large Corporations',
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="py-32 px-6 text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">Simple, Transparent <span className="text-indigo-600">Pricing.</span></h1>
        <p className="text-slate-600 text-xl max-w-2xl mx-auto">
          Choose the plan that fits your business needs. All prices are in GBP and exclude VAT at 20%.
        </p>
      </section>

      {/* Tiers */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
        {tiers.map((tier, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`relative p-10 rounded-[2.5rem] border ${
              tier.popular ? 'border-indigo-600 bg-white shadow-2xl scale-105 z-10' : 'border-slate-100 bg-white shadow-sm'
            } flex flex-col`}
          >
            {tier.popular && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                Most Popular
              </div>
            )}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-slate-400 font-medium">/month</span>
              </div>
              <p className="text-slate-500 mt-4 text-sm">{tier.description}</p>
            </div>

            <div className="space-y-4 mb-10 flex-grow">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">What's included</p>
              {tier.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-indigo-600" />
                  </div>
                  <span className="text-slate-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-slate-50 space-y-6">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-slate-400 font-bold uppercase mb-1">Support</p>
                  <p className="font-semibold">{tier.support}</p>
                </div>
                <div>
                  <p className="text-slate-400 font-bold uppercase mb-1">Ideal For</p>
                  <p className="font-semibold">{tier.ideal}</p>
                </div>
              </div>
              <Link
                to="/contact"
                className={`block w-full py-4 rounded-xl text-center font-bold transition-all ${
                  tier.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200' : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* FAQ Placeholder */}
      <section className="max-w-3xl mx-auto py-32 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-6">
          {[
            { q: 'Are there any hidden setup fees?', a: 'No, our pricing is transparent. Some complex migrations may require a one-off project fee, which will be agreed upon upfront.' },
            { q: 'Can I change my plan later?', a: 'Absolutely. You can upgrade or downgrade your plan at any time with 30 days notice.' },
            { q: 'Does pricing include VAT?', a: 'All prices shown exclude UK VAT at the standard rate of 20%.' },
          ].map((faq, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-2">
              <h4 className="font-bold flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-indigo-500" />
                {faq.q}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Quote */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-indigo-50 p-12 rounded-[3rem] flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Need a bespoke plan?</h3>
            <p className="text-slate-600">We offer custom packages for unique requirements.</p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-indigo-600 border border-indigo-200 rounded-full font-bold hover:bg-indigo-600 hover:text-white transition-all flex items-center gap-2"
          >
            Request a Custom Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
