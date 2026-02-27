import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Pricing = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Transparent Pricing for <span className="text-emerald-600">Every Business.</span></h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            No hidden fees. No complicated contracts. Just straightforward IT support that scales with your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-3xl border ${
                plan.popular ? 'border-emerald-500 shadow-xl shadow-emerald-100' : 'border-black/5'
              } flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-zinc-500 mb-6">{plan.ideal}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-zinc-900">£{plan.price}</span>
                  <span className="text-zinc-500">/month</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">What's Included</div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-zinc-600">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-black/5">
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Support Level</div>
                  <p className="text-sm font-medium text-zinc-900">{plan.support}</p>
                </div>
              </div>

              <Link
                to="/contact"
                className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                  plan.popular
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                    : 'bg-zinc-900 text-white hover:bg-zinc-800'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* VAT Note */}
        <div className="bg-zinc-50 p-6 rounded-2xl border border-black/5 flex items-center gap-4 max-w-2xl mx-auto mb-32">
          <Info className="w-6 h-6 text-zinc-400 shrink-0" />
          <p className="text-sm text-zinc-500">
            All prices are subject to VAT at the prevailing UK rate (currently 20%). Custom enterprise plans are available for organisations with 100+ users.
          </p>
        </div>

        {/* FAQ Preview */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQ</h2>
          <div className="space-y-8">
            <div>
              <h4 className="font-bold mb-2">Are there any setup fees?</h4>
              <p className="text-zinc-600">We typically waive setup fees for contracts of 12 months or longer. For month-to-month rolling contracts, a small onboarding fee may apply.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Can I change plans later?</h4>
              <p className="text-zinc-600">Absolutely. You can upgrade your plan at any time. Downgrades are processed at the end of your current billing cycle.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Do you offer discounts for charities?</h4>
              <p className="text-zinc-600">Yes, we offer a 15% discount on all service plans for registered UK charities and non-profit organisations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
