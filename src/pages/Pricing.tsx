import React from "react";
import { motion } from "framer-motion";
import { PRICING_PLANS } from "../constants";
import { Check, Info } from "lucide-react";
import { Link } from "react-router-dom";

export const Pricing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-slate-50 min-h-screen pb-24"
    >
      {/* Header */}
      <section className="bg-white py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Transparent Pricing</h1>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the plan that fits your business needs. No hidden fees, just reliable IT support.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-3xl shadow-sm border ${
                  plan.popular ? "border-indigo-600 ring-4 ring-indigo-50" : "border-slate-200"
                } p-8 flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-slate-500">{plan.idealFor}</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                    <span className="ml-2 text-slate-500 text-sm">{plan.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 italic">{plan.vat}</p>
                </div>
                <div className="flex-grow space-y-4 mb-8">
                  <p className="text-sm font-bold text-slate-900 uppercase tracking-wider">What's included:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start text-sm text-slate-600">
                        <Check size={18} className="text-indigo-600 mr-3 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-sm text-slate-600">
                      <span className="font-bold text-slate-900">Support Level:</span> {plan.support}
                    </p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className={`w-full py-4 px-6 rounded-xl text-center font-bold transition-all ${
                    plan.popular
                      ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ/Info */}
          <div className="mt-16 bg-indigo-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shrink-0 shadow-sm">
              <Info size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Need a custom solution?</h4>
              <p className="text-slate-600 leading-relaxed">
                If your requirements don't fit into our standard plans, we can create a bespoke package tailored specifically to your organisation's size, complexity, and goals. Contact us for a custom quote.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold border border-indigo-100 hover:bg-indigo-100 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
