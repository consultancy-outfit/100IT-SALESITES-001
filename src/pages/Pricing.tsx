import React from 'react';
import { motion } from 'motion/react';
import { PRICING_PLANS } from '../constants';
import { Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl mb-6">Transparent Pricing</h1>
          <p className="text-xl text-slate-600">
            Simple, scalable pricing tiers designed to grow with your business. No hidden fees, just expert IT support.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-3xl border ${
                  plan.popular 
                    ? 'border-accent shadow-2xl scale-105 z-10 bg-white' 
                    : 'border-slate-100 bg-slate-50/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl mb-2">{plan.name}</h3>
                  <p className="text-slate-500 text-sm mb-6">Ideal for {plan.idealFor}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-display font-bold text-primary">£{plan.price}</span>
                    <span className="text-slate-500 ml-2">/month</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{plan.vat}</p>
                </div>

                <div className="mb-8">
                  <p className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-4">Support Level</p>
                  <p className="text-primary font-medium">{plan.support}</p>
                </div>

                <div className="space-y-4 mb-10">
                  <p className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-4">What's Included</p>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${
                    plan.popular
                      ? 'bg-accent text-white hover:bg-sky-600 shadow-lg shadow-accent/20'
                      : 'bg-white border border-slate-200 text-primary hover:bg-slate-50'
                  }`}
                >
                  Choose {plan.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* VAT Note */}
          <div className="mt-16 p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start space-x-4 max-w-3xl mx-auto">
            <Info className="text-accent w-6 h-6 shrink-0" />
            <p className="text-sm text-slate-500">
              <strong>Please Note:</strong> All prices are subject to VAT at the prevailing UK rate. Custom enterprise contracts are available for organisations with more than 50 users or complex multi-site requirements.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { q: "Is there a minimum contract term?", a: "Our standard managed services typically have a 12-month initial term, though we offer flexible monthly options for specific services." },
              { q: "How quickly can you onboard our team?", a: "Onboarding usually takes 5-10 business days depending on the complexity of your current infrastructure." },
              { q: "Do you provide hardware as part of the plans?", a: "Hardware can be leased or purchased separately. Our Professional and Enterprise plans include hardware lifecycle management." },
              { q: "What happens if we grow mid-contract?", a: "Our plans are designed to be scalable. You can add or remove users at any time with a simple pro-rata adjustment." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-primary mb-3">{faq.q}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
