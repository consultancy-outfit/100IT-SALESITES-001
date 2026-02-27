import React, { useState } from 'react';
import { PRICING_PLANS } from '../constants';
import { Check, ArrowRight, HelpCircle, ShieldCheck, Zap, Users } from 'lucide-react';
import { Page } from '../types';
import { motion } from 'framer-motion';

interface PricingProps {
  onNavigate: (page: Page) => void;
}

const PricingPage: React.FC<PricingProps> = ({ onNavigate }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Transparent Pricing</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
          >
            Managed IT <br /><span className="text-emerald-400 italic serif">Investment.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto"
          >
            Predictable monthly costs with no hidden surprises. Choose the support level that fits your business goals.
          </motion.p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-center mb-16">
            <div className="bg-white p-1 rounded-2xl shadow-sm border border-slate-200 flex items-center">
              <button 
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${billingCycle === 'monthly' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${billingCycle === 'yearly' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Yearly <span className="text-emerald-500 ml-1">(-10%)</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white rounded-3xl p-10 border shadow-sm flex flex-col relative overflow-hidden ${
                  plan.recommended ? 'border-emerald-500 ring-4 ring-emerald-500/5 scale-105 z-10' : 'border-slate-100'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-emerald-500 text-slate-900 px-6 py-2 rounded-bl-2xl font-bold text-xs uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-400 text-sm ml-2">/ user / month</span>
                  </div>
                  <p className="text-slate-400 text-xs mt-2">Excluding VAT</p>
                </div>

                <div className="mb-10 p-4 bg-slate-50 rounded-2xl">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Ideal For</h4>
                  <p className="text-slate-700 text-sm font-medium">{plan.idealFor}</p>
                </div>

                <ul className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-600">
                      <Check className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => onNavigate('contact')}
                  className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center group ${
                    plan.recommended 
                      ? 'bg-emerald-500 text-slate-900 hover:bg-emerald-400' 
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Link */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-slate-500 flex items-center justify-center">
            <HelpCircle className="w-5 h-5 mr-2 text-emerald-500" />
            Not sure which plan is right? <button onClick={() => onNavigate('contact')} className="text-slate-900 font-bold ml-1 hover:underline">Request a custom quote</button>
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Why Choose Our Plans</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Enterprise-Grade Standards.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'No Long-Term Lock-in',
                description: 'We believe in our service. That\'s why we offer rolling monthly contracts for our Essential and Premium plans.',
                icon: <Zap className="w-8 h-8 text-emerald-600" />
              },
              {
                title: 'UK-Based Support',
                description: 'Our helpdesk is based right here in Essex. No overseas call centres, just local experts who know your business.',
                icon: <Users className="w-8 h-8 text-emerald-600" />
              },
              {
                title: 'Security First',
                description: 'Every plan includes baseline security monitoring. We don\'t treat cyber-safety as an optional extra.',
                icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />
              }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mx-auto mb-8">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              { q: 'Is there an onboarding fee?', a: 'Yes, we charge a one-time onboarding fee equivalent to one month\'s service to cover the initial audit and system alignment.' },
              { q: 'Can we mix and match plans?', a: 'Typically, all users in an organisation must be on the same plan to ensure consistent security and support standards.' },
              { q: 'What happens if we grow?', a: 'Our plans are designed to scale. You can add or remove users at any time, and your monthly bill will adjust automatically.' }
            ].map((faq, i) => (
              <div key={i} className="border-b border-slate-800 pb-8">
                <h4 className="text-lg font-bold mb-4 flex items-start">
                  <span className="text-emerald-400 mr-4">Q.</span>
                  {faq.q}
                </h4>
                <p className="text-slate-400 leading-relaxed pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;