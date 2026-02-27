import React from 'react';
import { motion } from 'motion/react';
import { Check, X, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Essential Support',
    price: '499',
    description: 'Perfect for small UK businesses needing reliable day-to-day IT assistance.',
    idealFor: 'Startups & Small Offices (1-10 users)',
    support: 'Business Hours (9-6)',
    features: [
      'Remote Helpdesk Support',
      'Antivirus & Threat Protection',
      'Cloud Backup (500GB)',
      'Patch Management',
      'Email Security',
      'Monthly Health Reports',
    ],
    notIncluded: [
      'On-site Support',
      '24/7 Monitoring',
      'Strategic Consulting',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional Managed',
    price: '950',
    description: 'Our most popular plan, offering comprehensive management and proactive security.',
    idealFor: 'Growing SMEs (11-50 users)',
    support: '24/7 Critical Monitoring',
    features: [
      'Everything in Essential',
      'Unlimited Remote & On-site Support',
      'Advanced Cybersecurity Suite',
      'Cloud Backup (2TB)',
      'Mobile Device Management',
      'Quarterly Strategy Meetings',
      'Network Management',
    ],
    notIncluded: [
      'Dedicated SOC Analyst',
    ],
    cta: 'Choose Professional',
    popular: true,
  },
  {
    name: 'Enterprise Elite',
    price: '2,400',
    description: 'Full-scale IT department outsourcing with advanced security and strategic oversight.',
    idealFor: 'Large Enterprises (50+ users)',
    support: '24/7/365 Priority Support',
    features: [
      'Everything in Professional',
      'Dedicated IT Account Manager',
      'Full SOC/SIEM Monitoring',
      'Unlimited Cloud Storage',
      'Disaster Recovery Planning',
      'vCTO Advisory Services',
      'Compliance Auditing (GDPR/Cyber Essentials)',
    ],
    notIncluded: [],
    cta: 'Contact Sales',
    popular: false,
  }
];

const Pricing = () => {
  return (
    <div className="bg-zinc-50 min-h-screen pb-32">
      {/* Header */}
      <section className="bg-white pt-24 pb-20 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6 tracking-tight"
          >
            Transparent <span className="text-indigo-600">Pricing</span>
          </motion.h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            No hidden fees. No complex contracts. Just world-class IT support tailored for your business scale.
          </p>
          <div className="mt-8 inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium border border-indigo-100">
            <Info size={16} className="mr-2" />
            All prices exclude VAT at the standard UK rate (20%).
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 shadow-sm border ${
                  plan.popular ? 'border-indigo-600 ring-4 ring-indigo-50' : 'border-zinc-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">{plan.name}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6">{plan.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-zinc-900">£{plan.price}</span>
                    <span className="text-zinc-400 ml-2">/month</span>
                  </div>
                </div>

                <div className="space-y-6 mb-10">
                  <div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">Ideal For</p>
                    <p className="text-sm font-semibold text-zinc-700">{plan.idealFor}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">Support Level</p>
                    <p className="text-sm font-semibold text-zinc-700">{plan.support}</p>
                  </div>
                  
                  <div className="pt-6 border-t border-zinc-100">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Features Included</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-zinc-600">
                          <Check size={16} className="text-emerald-500 mr-3 mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {plan.notIncluded.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-zinc-300">
                          <X size={16} className="text-zinc-300 mr-3 mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${
                    plan.popular 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200' 
                      : 'bg-zinc-900 text-white hover:bg-zinc-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ/Notes */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-zinc-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-8 text-left">
          <div>
            <h4 className="font-bold text-zinc-900 mb-2">Is there a minimum contract term?</h4>
            <p className="text-zinc-600 text-sm">Most of our plans are on a 12-month rolling basis, but we offer flexible month-to-month options for an additional 15% surcharge.</p>
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 mb-2">Can we upgrade or downgrade later?</h4>
            <p className="text-zinc-600 text-sm">Absolutely. We understand business needs change. You can adjust your plan with 30 days' notice.</p>
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 mb-2">Do you offer discounts for non-profits?</h4>
            <p className="text-zinc-600 text-sm">Yes, we offer a 20% discount for UK registered charities on all our managed service plans.</p>
          </div>
        </div>
        
        <div className="mt-16 p-8 bg-white rounded-2xl border border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-xl font-bold text-zinc-900">Need something bigger?</h3>
            <p className="text-zinc-500 text-sm">Custom solutions for 100+ users and complex multi-site operations.</p>
          </div>
          <Link to="/contact" className="bg-indigo-50 text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-indigo-100 transition-colors flex items-center">
            Talk to Enterprise Sales <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
