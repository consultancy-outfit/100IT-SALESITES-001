import React from 'react';
import { motion } from 'motion/react';
import { Check, HelpCircle, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Essential Support',
    price: '£45',
    period: 'per user / month',
    description: 'Perfect for small teams needing reliable reactive support and basic security.',
    idealFor: 'Startups & Micro-businesses (1-10 users)',
    features: [
      'Unlimited Remote Support',
      '9am - 5pm Helpdesk Access',
      'Basic Endpoint Protection',
      'Microsoft 365 Management',
      'Monthly Health Reports',
      'Next Business Day Response',
    ],
    support: 'Standard Business Hours',
    cta: 'Start with Essential',
    highlight: false,
  },
  {
    name: 'Professional Managed',
    price: '£85',
    period: 'per user / month',
    description: 'Our most popular plan. Proactive management and advanced security for growing firms.',
    idealFor: 'Growing SMEs (10-50 users)',
    features: [
      'Everything in Essential',
      '24/7 Proactive Monitoring',
      'Advanced Threat Protection',
      'Cloud Backup Management',
      'Quarterly Strategy Reviews',
      '1-Hour Priority Response',
      'On-site Support Included',
    ],
    support: '24/7 Critical Monitoring',
    cta: 'Go Professional',
    highlight: true,
  },
  {
    name: 'Enterprise Strategic',
    price: '£145',
    period: 'per user / month',
    description: 'Full-scale IT partnership with strategic CIO-level guidance and maximum security.',
    idealFor: 'Established Enterprises (50+ users)',
    features: [
      'Everything in Professional',
      'Dedicated Account Manager',
      'Virtual CIO Consultancy',
      'Disaster Recovery Planning',
      'Compliance & Audit Support',
      'Cyber Essentials Certification',
      'Custom API Integrations',
    ],
    support: 'Priority 24/7 Support',
    cta: 'Contact for Enterprise',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl mb-6">Transparent <span className="text-primary-600">Pricing</span></h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Simple, predictable pricing tailored to your business size and needs. All plans are billed monthly with no long-term lock-ins.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-500 text-sm font-medium">
              <HelpCircle className="w-4 h-4" />
              All prices are subject to VAT at the prevailing rate.
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex flex-col p-8 rounded-[2.5rem] border ${
                plan.highlight 
                  ? 'bg-slate-900 text-white border-primary-500 shadow-2xl shadow-primary-600/20 scale-105 z-10' 
                  : 'bg-white text-slate-900 border-slate-100 shadow-sm'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                  <Zap className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                <p className={`text-sm ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-display font-bold">{plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.period}</span>
                </div>
                <div className={`mt-2 text-xs font-semibold uppercase tracking-wider ${plan.highlight ? 'text-primary-400' : 'text-primary-600'}`}>
                  Excluding VAT
                </div>
              </div>

              <div className={`mb-8 p-4 rounded-2xl ${plan.highlight ? 'bg-white/5' : 'bg-slate-50'}`}>
                <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>Ideal For</div>
                <div className="font-semibold">{plan.idealFor}</div>
              </div>

              <div className="flex-grow mb-10">
                <div className={`text-xs font-bold uppercase tracking-widest mb-6 ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>Features Included</div>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`mt-1 p-0.5 rounded-full ${plan.highlight ? 'bg-primary-500/20 text-primary-400' : 'bg-primary-50 text-primary-600'}`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className={`text-sm ${plan.highlight ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`mb-8 pt-6 border-t ${plan.highlight ? 'border-white/10' : 'border-slate-100'}`}>
                <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>Support Level</div>
                <div className="font-semibold">{plan.support}</div>
              </div>

              <Link
                to="/contact"
                className={`w-full py-4 rounded-2xl font-bold text-center transition-all flex items-center justify-center gap-2 ${
                  plan.highlight
                    ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/30'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FAQ Preview */}
        <div className="mt-32 bg-slate-50 rounded-[3rem] p-12 md:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-slate-600 mb-8">
                Have more questions about our pricing or services? Our team is here to help you find the right fit for your business.
              </p>
              <Link to="/contact" className="text-primary-600 font-bold flex items-center gap-2 hover:underline">
                Speak to an advisor <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold mb-3">Is there a minimum contract term?</h4>
                <p className="text-slate-600">No, we believe in earning your business every month. All our standard managed service plans are on a rolling 30-day basis.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3">Can we mix and match plans?</h4>
                <p className="text-slate-600">Absolutely. We understand that different departments have different needs. You can assign different plans to different users as required.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3">What happens if we grow mid-month?</h4>
                <p className="text-slate-600">Our billing is dynamic. We'll simply pro-rata any new users added during the month on your next invoice.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
