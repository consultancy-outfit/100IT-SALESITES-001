import React from 'react';
import { motion } from 'motion/react';
import { Check, X, Info, Zap, Shield, Globe, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Essential",
    icon: <Zap className="text-slate-400" />,
    price: "£25",
    period: "per user / month",
    description: "Perfect for small teams needing reliable reactive support and basic security.",
    idealFor: "Startups & Small Teams (1-10 users)",
    features: [
      { text: "Unlimited Remote Support", included: true },
      { text: "Mon-Fri 9am-5pm Helpdesk", included: true },
      { text: "Basic Endpoint Security", included: true },
      { text: "Patch Management", included: true },
      { text: "Microsoft 365 Management", included: true },
      { text: "Onsite Support", included: false },
      { text: "24/7 Emergency Support", included: false },
      { text: "vCIO Strategic Planning", included: false },
    ],
    cta: "Start with Essential",
    popular: false,
    color: "border-slate-200"
  },
  {
    name: "Professional",
    icon: <Shield className="text-brand-600" />,
    price: "£45",
    period: "per user / month",
    description: "Our most popular plan. Proactive management and advanced security for growing firms.",
    idealFor: "Growing Businesses (10-50 users)",
    features: [
      { text: "Unlimited Remote Support", included: true },
      { text: "Mon-Fri 9am-5pm Helpdesk", included: true },
      { text: "Advanced Threat Protection", included: true },
      { text: "Patch Management", included: true },
      { text: "Microsoft 365 Management", included: true },
      { text: "Onsite Support (Next Day)", included: true },
      { text: "24/7 Emergency Support", included: true },
      { text: "Quarterly IT Reviews", included: true },
    ],
    cta: "Go Professional",
    popular: true,
    color: "border-brand-500 ring-4 ring-brand-50"
  },
  {
    name: "Enterprise",
    icon: <Crown className="text-amber-500" />,
    price: "£75",
    period: "per user / month",
    description: "Full-spectrum IT management with dedicated strategic leadership and zero-trust security.",
    idealFor: "Established Enterprises (50+ users)",
    features: [
      { text: "Unlimited Remote & Onsite", included: true },
      { text: "24/7 Priority Helpdesk", included: true },
      { text: "Zero-Trust Security Suite", included: true },
      { text: "Full Compliance Auditing", included: true },
      { text: "Cloud Infrastructure Mgmt", included: true },
      { text: "Same-Day Onsite Support", included: true },
      { text: "Dedicated vCIO", included: true },
      { text: "Monthly Strategic Reviews", included: true },
    ],
    cta: "Get Enterprise",
    popular: false,
    color: "border-slate-200"
  }
];

export default function Pricing() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-50 py-20 md:py-32 border-b border-slate-200">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold">Transparent Pricing for <span className="text-brand-600">UK Businesses</span></h1>
            <p className="text-xl text-slate-600">
              No hidden fees, no complex contracts. Just reliable IT support billed in GBP (£) with clear VAT breakdowns.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-600 shadow-sm">
              <Info size={16} className="text-brand-600" /> All prices exclude VAT at 20%
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-8 rounded-[32px] bg-white border-2 flex flex-col ${plan.color}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-4">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="text-sm text-slate-500 mt-2 min-h-[40px]">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-500 font-medium text-sm">{plan.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 font-medium uppercase tracking-wider">Ideal for: {plan.idealFor}</p>
                </div>

                <div className="flex-grow space-y-4 mb-10">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">What's Included</h4>
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className={`flex items-start gap-3 text-sm ${feature.included ? 'text-slate-700' : 'text-slate-300'}`}>
                        {feature.included ? (
                          <Check size={18} className="text-brand-600 shrink-0" />
                        ) : (
                          <X size={18} className="text-slate-300 shrink-0" />
                        )}
                        <span className={feature.included ? '' : 'line-through'}>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to="/contact" 
                  className={`w-full py-4 rounded-2xl font-bold text-center transition-all ${
                    plan.popular 
                    ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-500/25' 
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

      {/* Bespoke Section */}
      <section className="section-padding bg-slate-900 text-white overflow-hidden relative">
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-bold uppercase tracking-widest">
                <Globe size={18} /> Custom Solutions
              </div>
              <h2 className="text-3xl md:text-5xl font-bold">Need a Bespoke IT Strategy?</h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                For larger organisations or those with complex regulatory requirements, we offer custom-tailored IT management and strategic consultancy.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Multi-site Management",
                  "Hybrid Cloud Architecture",
                  "ISO 27001 Readiness",
                  "Dedicated Support Teams",
                  "Global Infrastructure",
                  "Custom SLA Agreements"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <Check size={18} className="text-brand-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/20"
                >
                  Speak to a Consultant
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative p-8 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">Request a Custom Quote</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500 transition-colors" />
                    <input type="text" placeholder="Last Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500 transition-colors" />
                  </div>
                  <input type="email" placeholder="Work Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500 transition-colors" />
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-400 focus:outline-none focus:border-brand-500 transition-colors appearance-none">
                    <option>Number of Users</option>
                    <option>10 - 50</option>
                    <option>50 - 200</option>
                    <option>200+</option>
                  </select>
                  <textarea placeholder="Tell us about your requirements..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500 transition-colors"></textarea>
                  <button className="w-full bg-white text-slate-900 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all">Submit Request</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-600/5 blur-[120px] -z-10"></div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40">
            <div className="flex flex-col items-center gap-2">
              <Shield size={40} />
              <span className="text-xs font-bold uppercase tracking-widest">Cyber Essentials</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Globe size={40} />
              <span className="text-xs font-bold uppercase tracking-widest">ICO Registered</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Zap size={40} />
              <span className="text-xs font-bold uppercase tracking-widest">Microsoft Partner</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield size={40} />
              <span className="text-xs font-bold uppercase tracking-widest">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
