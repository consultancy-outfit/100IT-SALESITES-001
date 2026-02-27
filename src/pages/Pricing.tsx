import { motion } from "motion/react";
import { PRICING_PLANS } from "../constants";
import { Check, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="py-24 text-center">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl mb-8">Simple, Transparent Pricing</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              No hidden fees. No long-term lock-ins. Just enterprise-grade IT support tailored to your business scale.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 bg-white px-4 py-2 rounded-full border border-slate-200">
              <HelpCircle size={16} />
              <span>All prices exclude VAT at the standard UK rate.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="pb-24">
        <div className="section-padding">
          <div className="grid lg:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan) => (
              <motion.div
                key={plan.name}
                whileHover={{ y: -10 }}
                className={`relative p-10 rounded-3xl bg-white border-2 transition-all ${
                  plan.popular ? "border-accent shadow-2xl scale-105 z-10" : "border-slate-100 shadow-xl"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                  <p className="text-slate-500 text-sm">{plan.ideal}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-primary">£{plan.price}</span>
                    <span className="text-slate-500 font-medium">{plan.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">{plan.vat}</p>
                </div>

                <div className="space-y-4 mb-10">
                  <p className="text-sm font-bold text-primary uppercase tracking-wider">Features Included:</p>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-slate-600">
                        <Check size={18} className="text-accent shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-slate-100">
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-sm font-medium text-slate-500">Support Level:</span>
                    <span className="text-sm font-bold text-primary">{plan.support}</span>
                  </div>
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${
                      plan.popular
                        ? "bg-accent text-white hover:bg-sky-600 shadow-lg shadow-accent/20"
                        : "bg-slate-100 text-primary hover:bg-slate-200"
                    }`}
                  >
                    Select Plan
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-white">
        <div className="section-padding max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-center mb-16">Common Questions</h2>
          <div className="space-y-8">
            {[
              {
                q: "Are there any setup fees?",
                a: "We typically charge a one-off onboarding fee equivalent to one month's service to cover the initial audit and system stabilization."
              },
              {
                q: "Can I change plans at any time?",
                a: "Yes, you can upgrade or downgrade your plan with 30 days' notice. We believe in flexibility as your business grows."
              },
              {
                q: "Do you offer discounts for non-profits?",
                a: "Absolutely. We offer a 20% discount on all monthly plans for registered UK charities."
              }
            ].map((faq, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                <h4 className="text-xl font-bold text-primary mb-4">{faq.q}</h4>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
