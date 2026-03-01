import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, HelpCircle } from 'lucide-react';
import { PRICING_PLANS } from '../constants';
import { Link } from 'react-router-dom';

export const Pricing = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Transparent Pricing</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Simple, predictable pricing plans designed to scale with your business. No hidden fees, just expert support.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 bg-white">
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
                    ? 'border-brand-600 shadow-2xl ring-4 ring-brand-50' 
                    : 'border-slate-200 shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-500 text-sm">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-slate-900">£{plan.price}</span>
                    <span className="text-slate-500 font-medium">{plan.period}</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-medium uppercase tracking-wider">{plan.vat}</div>
                </div>

                <div className="space-y-6 mb-10 flex-1">
                  <div className="space-y-4">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-widest">What's Included</div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                          <Check className="w-5 h-5 text-brand-600 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-100 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Support Level:</span>
                      <span className="font-semibold text-slate-900">{plan.support}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Ideal For:</span>
                      <span className="font-semibold text-slate-900">{plan.idealFor}</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                    plan.popular
                      ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-200'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison / Info */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-12 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center">
                  <Info className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Need a Custom Solution?</h2>
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We understand that every business is unique. If our standard plans don't quite fit your requirements, we can create a bespoke package tailored specifically to your infrastructure and growth plans.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                  <span className="text-sm text-slate-700">Multi-site infrastructure support</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                  <span className="text-sm text-slate-700">Specialised compliance requirements</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                  <span className="text-sm text-slate-700">Large-scale cloud migrations</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                  <span className="text-sm text-slate-700">Dedicated on-site engineering</span>
                </div>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 text-brand-600 font-bold hover:gap-3 transition-all">
                Speak to our Solutions Architect <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* FAQ Mini */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { q: "Is there a minimum contract term?", a: "Our standard managed services are on a 12-month rolling contract, but we also offer flexible monthly options for specific projects." },
                  { q: "Does the price include hardware?", a: "No, our pricing covers management and support. We can provide competitive quotes for hardware and software licensing separately." },
                  { q: "How quickly can you start?", a: "Onboarding typically takes 5-10 business days, including a full infrastructure audit and security baseline setup." },
                  { q: "Do you support Mac and Windows?", a: "Yes, we are experts in mixed environments and provide full support for both Windows and macOS ecosystems." },
                ].map((faq, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <HelpCircle className="w-4 h-4 text-brand-600" />
                      {faq.q}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);
