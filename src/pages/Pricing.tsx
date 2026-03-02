import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../constants';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-24 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6"
          >
            Transparent Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Simple, predictable monthly plans designed to scale with your business. No hidden fees, just expert support.
          </motion.p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan) => (
              <div 
                key={plan.id}
                className={`relative flex flex-col p-8 rounded-[2.5rem] border ${
                  plan.isPopular 
                    ? 'bg-gray-900 text-white border-gray-900 shadow-2xl scale-105 z-10' 
                    : 'bg-white text-gray-900 border-gray-100 shadow-sm'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm ${plan.isPopular ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.idealFor}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-black">£{plan.price}</span>
                    <span className={`ml-2 text-sm ${plan.isPopular ? 'text-gray-400' : 'text-gray-500'}`}>/ month</span>
                  </div>
                  <p className="text-xs mt-2 opacity-60">* Prices exclude VAT at 20%</p>
                </div>

                <div className="flex-1 space-y-4 mb-10">
                  <p className="font-bold text-sm uppercase tracking-wider opacity-60">What's Included</p>
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Check className={`h-5 w-5 mr-3 shrink-0 ${plan.isPopular ? 'text-indigo-400' : 'text-indigo-600'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`mt-6 p-4 rounded-2xl ${plan.isPopular ? 'bg-white/5' : 'bg-gray-50'}`}>
                    <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-60">Support Level</p>
                    <p className="text-sm font-medium">{plan.support}</p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-2xl font-bold text-center transition-all ${
                    plan.isPopular 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/20' 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          {/* VAT Clarification */}
          <div className="mt-20 p-8 rounded-3xl bg-indigo-50 border border-indigo-100 flex flex-col md:flex-row items-center gap-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
              <Info className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="font-bold text-gray-900 mb-1">VAT & Billing Information</h4>
              <p className="text-sm text-gray-600">
                All prices listed are subject to VAT at the prevailing UK rate (currently 20%). Billing is processed monthly in advance via Direct Debit. Custom enterprise quotes are available for organisations with complex multi-site requirements.
              </p>
            </div>
            <Link to="/contact" className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-xl border border-indigo-100 hover:bg-indigo-50 transition-all whitespace-nowrap">
              Billing FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">Not sure which plan is right?</h2>
          <p className="text-xl text-gray-400 mb-12">
            Our consultants can perform a free IT audit to help you determine the best level of support for your current infrastructure and future growth plans.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-10 py-5 bg-indigo-600 text-white rounded-full text-xl font-bold hover:bg-indigo-700 transition-all shadow-2xl"
          >
            Book a Free Audit
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
