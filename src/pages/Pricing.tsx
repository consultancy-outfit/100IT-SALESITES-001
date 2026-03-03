import React from 'react';
import { motion } from 'motion/react';
import { PRICING_PLANS } from '../constants';
import { Check, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="pt-20 pb-16 bg-white border-b border-slate-200">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-slate-600">
              No hidden fees. No long-term lock-ins. Just professional IT support tailored to your scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-white rounded-3xl p-10 border-2 transition-all hover:shadow-2xl ${plan.popular ? 'border-brand-accent shadow-xl scale-105 z-10' : 'border-slate-100'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-slate-500 text-sm font-medium">{plan.idealFor}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                    <span className="text-slate-500 font-medium">{plan.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{plan.vat}</p>
                </div>

                <div className="space-y-4 mb-10">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">What's Included</p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-slate-600">
                      <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-slate-100 mb-8">
                  <div className="flex items-center gap-2 text-slate-700 mb-2">
                    <Info className="w-4 h-4 text-brand-accent" />
                    <span className="text-sm font-bold">Support Level:</span>
                  </div>
                  <p className="text-sm text-slate-600">{plan.support}</p>
                </div>

                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-xl font-bold text-center block transition-all ${plan.popular ? 'bg-brand-accent text-white hover:bg-sky-500 shadow-lg shadow-brand-accent/20' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
                >
                  Choose {plan.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Pricing FAQ</h2>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold mb-2">Is there a minimum contract term?</h4>
                <p className="text-slate-600">We typically work on a 12-month rolling basis, but we offer flexible monthly terms for specific project-based work.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">What happens if we need on-site support?</h4>
                <p className="text-slate-600">Professional and Enterprise plans include on-site visits. For Essential plans, on-site support is available at a discounted hourly rate for contract clients.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Do you offer discounts for charities?</h4>
                <p className="text-slate-600">Yes! We provide a 15% discount on all managed service plans for registered UK charities and non-profit care organizations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-brand-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Not sure which plan is right?</h2>
          <p className="text-lg text-slate-400 mb-10">Our consultants can help you assess your current infrastructure and recommend the best fit.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 text-brand-accent font-bold text-lg hover:gap-4 transition-all">
            Request a Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
