import React from "react";
import { motion } from "motion/react";
import { Check, ArrowRight, Zap, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { PRICING_PLANS } from "../constants";

const Pricing = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="py-24 lg:py-32 bg-brand-surface border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-brand-primary mb-8">
              Transparent <span className="text-brand-accent">Pricing</span>
            </h1>
            <p className="text-xl text-brand-primary/80 max-w-2xl mx-auto leading-relaxed">
              Predictable monthly costs with no hidden fees. All plans are
              billed in GBP and are subject to VAT at the prevailing rate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-10 rounded-[2.5rem] border ${
                  plan.popular
                    ? "border-brand-accent bg-white shadow-2xl shadow-brand-accent/20"
                    : "border-brand-primary/20 bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-accent text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Star className="w-4 h-4 fill-white" />
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-brand-primary mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-brand-primary/70 text-sm">
                    {plan.idealFor}
                  </p>
                </div>

                <div className="space-y-6 mb-10">
                  <div>
                    <h4 className="text-xs font-bold text-brand-primary/60 uppercase tracking-widest mb-4">
                      Support Level
                    </h4>
                    <div className="flex items-center gap-2 text-brand-primary font-medium">
                      <Zap className="w-4 h-4 text-brand-accent" />
                      {plan.support}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-primary/60 uppercase tracking-widest mb-4">
                      Included Features
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-sm text-brand-primary/80"
                        >
                          <Check className="w-5 h-5 text-brand-accent shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-2xl font-bold text-center transition-all flex items-center justify-center gap-2 group ${
                    plan.popular
                      ? "bg-brand-accent text-white hover:bg-brand-accent-hover shadow-lg shadow-brand-accent/20"
                      : "bg-brand-primary text-white hover:bg-brand-accent"
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Info */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white border border-brand-primary/20 flex items-center justify-center shrink-0 shadow-sm">
                <Shield className="w-6 h-6 text-brand-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-primary mb-2">
                  No Long-Term Lock-in
                </h3>
                <p className="text-brand-primary/80 text-sm leading-relaxed">
                  We believe in earning your business every month. Our standard
                  contracts are flexible, allowing you to scale up or down as
                  needed.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white border border-brand-primary/20 flex items-center justify-center shrink-0 shadow-sm">
                <Zap className="w-6 h-6 text-brand-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Quote */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-primary rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need a bespoke enterprise plan?
              </h2>
              <p className="text-white text-lg">
                For organisations with over 100 users or complex multi-site
                requirements, we offer tailored pricing structures.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-10 py-5 bg-brand-accent text-white rounded-full font-bold text-lg hover:bg-brand-accent-hover transition-all shadow-xl shadow-brand-accent/20 whitespace-nowrap"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
