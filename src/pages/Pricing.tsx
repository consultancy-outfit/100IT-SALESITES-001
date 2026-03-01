import { motion } from "motion/react";
import { Check, Info } from "lucide-react";
import { PRICING_PLANS } from "../constants";

export function Pricing() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Transparent Pricing</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Choose the plan that fits your business needs. No hidden fees, just reliable IT support.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-10 rounded-[2.5rem] border ${
                plan.popular 
                  ? "bg-slate-900 text-white border-slate-800 shadow-2xl scale-105 z-10" 
                  : "bg-white text-slate-900 border-slate-100 shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? "text-indigo-400" : "text-indigo-600"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight">£{plan.price}</span>
                  <span className={`text-sm ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>/ month</span>
                </div>
                <p className={`text-xs mt-2 font-medium ${plan.popular ? "text-slate-500" : "text-slate-400"}`}>
                  {plan.vat}
                </p>
              </div>

              <div className="space-y-6 mb-10">
                <div>
                  <h4 className={`text-xs font-bold uppercase tracking-widest mb-4 ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>
                    What's Included
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm">
                        <Check className={`w-4 h-4 ${plan.popular ? "text-indigo-400" : "text-indigo-600"}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`pt-6 border-t ${plan.popular ? "border-slate-800" : "border-slate-100"}`}>
                  <div className="flex items-center gap-2 text-sm font-bold mb-1">
                    <Info className="w-4 h-4 opacity-50" />
                    Support Level
                  </div>
                  <p className={`text-sm ${plan.popular ? "text-slate-400" : "text-slate-600"}`}>{plan.support}</p>
                </div>
                <div>
                  <div className="text-sm font-bold mb-1">Ideal For</div>
                  <p className={`text-sm ${plan.popular ? "text-slate-400" : "text-slate-600"}`}>{plan.ideal}</p>
                </div>
              </div>

              <button
                className={`w-full py-4 rounded-2xl font-bold transition-all active:scale-95 ${
                  plan.popular
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Need a Custom Solution?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            For larger organizations or specific project requirements, we offer bespoke pricing and service level agreements.
          </p>
          <button className="px-10 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-full hover:bg-slate-50 transition-all active:scale-95">
            Request a Custom Quote
          </button>
        </div>
      </div>
    </div>
  );
}
