import React from 'react';
import { motion } from 'motion/react';
import { PRICING_PLANS } from '../constants';
import { Check, Info, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="bg-white pb-24">
      {/* Header */}
      <section className="bg-indigo-600 py-24 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Transparent Pricing</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Simple, predictable monthly costs with no hidden fees. All plans are billed in GBP (£).
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, idx) => (
            <div 
              key={plan.name}
              className={`relative bg-white rounded-3xl p-8 shadow-xl border transition-all duration-300 ${
                plan.isPopular ? 'border-indigo-600 scale-105 z-10' : 'border-slate-100'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-slate-900">£{plan.price}</span>
                  <span className="text-slate-500 ml-2">/ month</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">* Prices exclude VAT at 20%</p>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-indigo-600 shrink-0" />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-100 mb-10">
                <div className="flex items-center space-x-2 mb-2">
                  <Info className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Support Level</span>
                </div>
                <p className="text-sm text-slate-700 font-medium">{plan.supportLevel}</p>
                
                <div className="flex items-center space-x-2 mt-4 mb-2">
                  <HelpCircle className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ideal For</span>
                </div>
                <p className="text-sm text-slate-700 font-medium">{plan.idealFor}</p>
              </div>

              <Link
                to="/contact"
                className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${
                  plan.isPopular 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200' 
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                Choose {plan.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ / Info */}
      <section className="max-w-4xl mx-auto px-4 mt-24">
        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Is there a minimum contract term?</h4>
              <p className="text-slate-600">Our standard managed service contracts are for 12 months, though we offer flexible monthly rolling terms for specific consultancy projects.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Are prices inclusive of VAT?</h4>
              <p className="text-slate-600">No, all prices listed are exclusive of VAT, which will be added to your invoice at the standard UK rate (currently 20%).</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Can I upgrade my plan later?</h4>
              <p className="text-slate-600">Absolutely. You can scale your support level up or down as your business needs change. Upgrades take effect immediately.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
