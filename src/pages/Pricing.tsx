import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight, ShieldCheck, Zap, Headphones, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const PRICING_PLANS = [
  {
    name: 'Essential Support',
    price: '£250',
    period: 'per month',
    description: 'Perfect for small UK businesses needing reliable reactive support.',
    idealFor: 'Small teams (up to 10 users)',
    features: [
      'Business Hours Support (9-5)',
      'Remote Desktop Assistance',
      'Basic Endpoint Protection',
      'Patch Management',
      'Monthly Health Reports',
    ],
    notIncluded: [
      '24/7 Monitoring',
      'On-site Support',
      'Advanced Cybersecurity',
      'Dedicated Account Manager',
    ],
    cta: 'Get Started',
    popular: false,
    icon: Headphones,
  },
  {
    name: 'Professional Managed',
    price: '£750',
    period: 'per month',
    description: 'Our most popular plan for growing British enterprises.',
    idealFor: 'Mid-sized businesses (10-50 users)',
    features: [
      '24/7 Proactive Monitoring',
      'Unlimited Remote Support',
      'Next-Gen Endpoint Security',
      'Cloud Backup & DR (1TB)',
      'Quarterly Strategy Reviews',
      'Priority Response Times',
    ],
    notIncluded: [
      'On-site Support (Inclusive)',
      'Full Security Operations Centre',
    ],
    cta: 'Choose Professional',
    popular: true,
    icon: Zap,
  },
  {
    name: 'Enterprise Elite',
    price: '£1,950',
    period: 'per month',
    description: 'Comprehensive IT management and security for large organizations.',
    idealFor: 'Large enterprises (50+ users)',
    features: [
      'Full 24/7/365 Support',
      'Inclusive On-site Support',
      'Advanced SOC Monitoring',
      'Managed Cloud Infrastructure',
      'Dedicated Account Manager',
      'Compliance & Audit Support',
      'Unlimited Cloud Backup',
    ],
    notIncluded: [],
    cta: 'Contact for Enterprise',
    popular: false,
    icon: ShieldCheck,
  },
];

export default function Pricing() {
  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Transparent Pricing for <span className="text-indigo-600">UK Businesses</span>
          </motion.h1>
          <p className="text-xl text-slate-600">
            Choose the plan that fits your business needs. No hidden fees, just world-class IT support.
          </p>
          <p className="mt-4 text-sm text-slate-500 font-medium">
            * All prices are subject to VAT at the prevailing rate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                plan.popular 
                  ? 'bg-white border-indigo-600 shadow-2xl scale-105 z-10' 
                  : 'bg-white border-slate-200 shadow-sm hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  plan.popular ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-600'
                }`}>
                  <plan.icon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h2>
                <p className="text-slate-500 text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 font-medium">{plan.period}</span>
                </div>
              </div>

              <div className="mb-8 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-2 mb-6 text-indigo-600 font-semibold text-sm uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  Ideal For: {plan.idealFor}
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-slate-400">
                      <XCircle className="w-5 h-5 text-slate-300 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-xl font-bold text-center block transition-all ${
                    plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote Section */}
        <div className="mt-24 bg-white rounded-3xl p-12 border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Need a Bespoke Package?</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              If your requirements don't fit into our standard tiers, we can build a custom service level agreement (SLA) that perfectly matches your operational needs and budget.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl whitespace-nowrap"
          >
            Request a Custom Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
