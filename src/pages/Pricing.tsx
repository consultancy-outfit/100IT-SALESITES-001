import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRICING_PLANS } from '../constants';

const Pricing = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-white py-24">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Transparent Pricing</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Simple, scalable pricing plans designed to fit businesses of all sizes. No hidden fees, just expert support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="pb-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col p-8 rounded-3xl border ${
                  plan.popular 
                    ? 'border-brand-accent shadow-2xl shadow-blue-500/10 bg-white scale-105 z-10' 
                    : 'border-slate-200 bg-slate-50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-slate-500 mb-6">{plan.idealFor}</p>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-4xl font-bold">
                      {typeof plan.price === 'number' ? `£${plan.price}` : plan.price}
                    </span>
                    <span className="text-slate-500 text-sm">{plan.unit}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 flex items-center">
                    <Info className="w-3 h-3 mr-1" /> {plan.vatInfo}
                  </p>
                </div>

                <div className="flex-grow space-y-4 mb-10">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">What's Included</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-sm text-slate-600">
                        <Check className="w-5 h-5 text-green-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Support Level</p>
                    <p className="text-sm font-medium text-slate-700">{plan.supportLevel}</p>
                  </div>
                </div>

                <Link 
                  to="/contact" 
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                    plan.popular 
                      ? 'bg-brand-accent text-white hover:bg-blue-700' 
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {typeof plan.price === 'number' ? 'Get Started' : 'Contact Sales'}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Need a Bespoke Package?</h2>
              <p className="text-slate-400 text-lg">
                If your requirements don't fit into our standard tiers, we can create a custom service level agreement tailored specifically to your business needs and budget.
              </p>
            </div>
            <Link to="/contact" className="btn-primary py-4 px-10 text-lg whitespace-nowrap">
              Request Custom Quote <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
