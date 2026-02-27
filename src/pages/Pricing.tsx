import { motion } from "motion/react";
import { Check, Shield, Zap, Star } from "lucide-react";
import { Link } from "react-router-dom";

const PLANS = [
  {
    name: "Essential Support",
    price: "199",
    description: "Perfect for small offices needing reliable reactive support.",
    features: [
      "Mon-Fri 9am-5pm Support",
      "4-Hour Response Time",
      "Remote Troubleshooting",
      "Basic Security Patching",
      "Monthly Health Report",
    ],
    support: "Email & Phone",
    ideal: "Startups & Small Teams",
    highlight: false,
  },
  {
    name: "Professional Managed",
    price: "499",
    description: "Comprehensive management for growing British businesses.",
    features: [
      "24/7 Proactive Monitoring",
      "1-Hour Response Time",
      "On-site Support Included",
      "Advanced Cyber Security",
      "Backup & Disaster Recovery",
      "Strategic IT Roadmap",
    ],
    support: "Dedicated Account Manager",
    ideal: "Established SMEs",
    highlight: true,
  },
  {
    name: "Enterprise Strategy",
    price: "999",
    description: "Full-scale technology partnership and strategic direction.",
    features: [
      "Unlimited 24/7 Support",
      "15-Min Response Time",
      "vCIO Strategic Consulting",
      "Full Compliance Audits",
      "Multi-site Management",
      "Custom Software Integration",
    ],
    support: "Elite Priority Support",
    ideal: "Large Enterprises",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <div className="pt-32 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Transparent <span className="text-emerald-600">Pricing</span>
          </h1>
          <p className="text-xl text-slate-600">
            Simple, predictable pricing tailored to your business needs. All prices are subject to VAT at the prevailing rate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white rounded-[2rem] p-8 shadow-sm border ${
                plan.highlight ? "border-emerald-500 ring-4 ring-emerald-50" : "border-slate-200"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
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
                  <span className="text-slate-500 font-medium">/month</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">+ VAT</p>
              </div>

              <div className="space-y-4 mb-10">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">What's Included</p>
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-100 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-slate-400" />
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Support Level</p>
                    <p className="text-sm font-medium text-slate-900">{plan.support}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-slate-400" />
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Ideal For</p>
                    <p className="text-sm font-medium text-slate-900">{plan.ideal}</p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className={`block w-full py-4 rounded-xl font-bold text-center transition-all ${
                  plan.highlight
                    ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-200"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                Choose {plan.name}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-white rounded-[2rem] border border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Need a Custom Solution?</h3>
            <p className="text-slate-600">
              We provide bespoke IT packages for unique business requirements, including multi-site infrastructure and specialized compliance needs.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-900 rounded-full font-bold hover:bg-slate-50 transition-all"
          >
            Request Custom Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
