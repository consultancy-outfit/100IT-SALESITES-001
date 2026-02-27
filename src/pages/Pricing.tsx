import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Foundation",
    price: "45",
    description: "Essential IT support for growing UK businesses.",
    ideal: "Small teams (5-15 users) needing reliable helpdesk support.",
    features: [
      "Unlimited Remote Support",
      "9am - 6pm Mon-Fri Coverage",
      "Antivirus & Malware Protection",
      "Microsoft 365 Management",
      "Monthly Health Reports",
      "4-Hour Response SLA"
    ],
    support: "Remote Helpdesk",
    popular: false
  },
  {
    name: "Professional",
    price: "75",
    description: "Comprehensive managed services for established firms.",
    ideal: "Mid-sized firms (15-50 users) requiring proactive management.",
    features: [
      "Everything in Foundation",
      "Proactive Device Monitoring",
      "Patch Management",
      "Advanced Email Security",
      "Quarterly vCTO Review",
      "2-Hour Response SLA",
      "On-site Support Included"
    ],
    support: "Remote + On-site",
    popular: true
  },
  {
    name: "Enterprise",
    price: "120",
    description: "Full-scale IT department as a service.",
    ideal: "Larger organisations (50+ users) with complex requirements.",
    features: [
      "Everything in Professional",
      "24/7 Monitoring & Critical Support",
      "Dedicated Account Manager",
      "Cyber Essentials Assistance",
      "Disaster Recovery Planning",
      "1-Hour Response SLA",
      "Strategic IT Roadmap"
    ],
    support: "24/7 Priority Support",
    popular: false
  }
];

export default function Pricing() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            Transparent <span className="text-brand-600">Pricing</span>
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Simple, per-user pricing with no hidden costs. All plans are billed monthly in GBP.
          </p>
          <div className="mt-6 inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium">
            <Info size={16} className="mr-2" />
            All prices exclude VAT at the prevailing rate.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-[2.5rem] border ${plan.popular ? 'border-brand-600 ring-4 ring-brand-50 bg-white' : 'border-slate-200 bg-white'} shadow-sm`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-display font-bold text-slate-900">£{plan.price}</span>
                  <span className="text-slate-500 ml-2">/ user / month</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">What's Included</p>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <Check size={18} className="text-brand-600 mr-3 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-100 space-y-6">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Ideal For</p>
                  <p className="text-sm text-slate-700">{plan.ideal}</p>
                </div>
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-full font-bold transition-all ${plan.popular ? 'bg-brand-600 text-white hover:bg-brand-700' : 'bg-slate-900 text-white hover:bg-black'}`}
                >
                  Get Started
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-[2.5rem] bg-brand-50 border border-brand-100 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            For large-scale infrastructure projects, complex migrations, or bespoke consultancy, we offer tailored quotes based on your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-brand-600 border border-brand-200 font-bold hover:bg-brand-100 transition-all"
          >
            Request a Custom Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
