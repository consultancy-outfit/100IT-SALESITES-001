import React from 'react';
import { motion } from 'motion/react';
import { Check, Info } from 'lucide-react';
import { Section, Button } from './components/Layout';

const plans = [
  {
    name: "Essential Support",
    price: "25",
    period: "per user / month",
    desc: "Perfect for small teams needing reliable helpdesk support.",
    ideal: "Micro-businesses (1-10 staff)",
    features: [
      "9am - 5:30pm UK Helpdesk",
      "Remote Support Only",
      "Basic Endpoint Security",
      "Microsoft 365 Management",
      "Monthly Health Reports"
    ],
    support: "Next Business Day SLA",
    highlight: false
  },
  {
    name: "Professional Managed",
    price: "45",
    period: "per user / month",
    desc: "Our most popular plan for growing UK businesses.",
    ideal: "Established SMEs (10-50 staff)",
    features: [
      "24/7 Proactive Monitoring",
      "Unlimited Remote & On-site Support",
      "Advanced Cyber Security Suite",
      "Cloud Backup Management",
      "Quarterly Strategic Reviews",
      "Priority Helpdesk Access"
    ],
    support: "4-Hour Response SLA",
    highlight: true
  },
  {
    name: "Enterprise Elite",
    price: "75",
    period: "per user / month",
    desc: "Comprehensive IT management with a focus on security and strategy.",
    ideal: "Larger Organisations (50+ staff)",
    features: [
      "Dedicated IT Manager",
      "Full Security Operations (SOC)",
      "Disaster Recovery Planning",
      "Unlimited On-site Support",
      "Strategic IT Roadmap",
      "Compliance Auditing (GDPR/ISO)"
    ],
    support: "1-Hour Critical SLA",
    highlight: false
  }
];

const Pricing = () => {
  return (
    <div className="pt-20">
      <Section className="bg-slate-50 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">Simple, Transparent Pricing</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          No hidden fees. No long-term lock-ins. Just professional IT services tailored to your business size.
        </p>
        <div className="mt-8 inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg text-sm font-medium">
          <Info className="w-4 h-4" />
          <span>All prices exclude VAT at the standard UK rate.</span>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                plan.highlight 
                  ? 'border-indigo-600 shadow-2xl ring-4 ring-indigo-50' 
                  : 'border-slate-200 hover:border-indigo-200 transition-colors'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-500 mb-6">{plan.desc}</p>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-bold text-slate-900">£{plan.price}</span>
                  <span className="text-slate-500 text-sm">{plan.period}</span>
                </div>
              </div>

              <div className="mb-8 p-4 bg-slate-50 rounded-xl">
                <div className="text-xs font-bold text-slate-400 uppercase mb-1">Ideal For</div>
                <div className="text-sm font-semibold text-slate-700">{plan.ideal}</div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-slate-600">
                    <Check className="w-5 h-5 text-indigo-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-slate-100 mb-8">
                <div className="text-xs font-bold text-slate-400 uppercase mb-1">Support Level</div>
                <div className="text-sm font-semibold text-slate-700">{plan.support}</div>
              </div>

              <Button 
                variant={plan.highlight ? 'primary' : 'secondary'} 
                className="w-full"
              >
                Choose {plan.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-xl border border-slate-100 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need a Custom Solution?</h2>
          <p className="text-slate-600 mb-10">
            For organisations with complex requirements, multi-site operations, or specific compliance needs, we offer bespoke enterprise agreements.
          </p>
          <Button variant="secondary" className="mx-auto">
            Speak to a Strategic Consultant
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Pricing;
