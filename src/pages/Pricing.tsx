import { motion } from 'motion/react';
import { Check, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Essential Support",
    price: "£495",
    period: "per month",
    description: "Perfect for small British businesses needing reliable IT foundations.",
    idealFor: "Startups & Small Offices (up to 10 users)",
    features: [
      "9am - 5:30pm Remote Support",
      "Next Business Day On-site",
      "Endpoint Security (Antivirus)",
      "Microsoft 365 Management",
      "Monthly Health Reports",
      "Basic Cloud Backup (100GB)"
    ],
    highlight: false,
    cta: "Start Essential"
  },
  {
    name: "Professional Managed",
    price: "£1,250",
    period: "per month",
    description: "Comprehensive IT management for growing organisations.",
    idealFor: "Mid-sized Firms (11-50 users)",
    features: [
      "24/7 Remote Monitoring",
      "4-Hour On-site Response",
      "Advanced Threat Protection",
      "Full Backup & Disaster Recovery",
      "Quarterly IT Strategy Reviews",
      "Unlimited Remote Support",
      "Mobile Device Management"
    ],
    highlight: true,
    cta: "Go Professional"
  },
  {
    name: "Enterprise Elite",
    price: "Custom",
    period: "bespoke pricing",
    description: "Full-scale technology partnership for complex enterprises.",
    idealFor: "Large Corporations & Multi-site Operations",
    features: [
      "Dedicated On-site Engineer",
      "15-Min Critical Response SLA",
      "Custom Software Development",
      "Full Compliance Auditing",
      "vCTO Advisory Services",
      "Global Infrastructure Support",
      "Bespoke Security Operations"
    ],
    highlight: false,
    cta: "Contact Sales"
  }
];

export default function Pricing() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl mb-6"
          >
            Transparent <span className="text-brand-emerald italic">Investment</span>
          </motion.h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Choose a plan that scales with your ambition. All prices are in GBP and exclude VAT at 20%.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-10 rounded-3xl border ${plan.highlight ? 'border-brand-navy bg-brand-navy text-white shadow-2xl scale-105 z-10' : 'border-slate-100 bg-white text-brand-navy'}`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-emerald text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-serif font-bold">{plan.price}</span>
                  <span className={`text-sm ml-2 ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.period}</span>
                </div>
                <p className={`text-sm mb-8 leading-relaxed ${plan.highlight ? 'text-slate-300' : 'text-slate-500'}`}>
                  {plan.description}
                </p>

                <div className={`mb-8 p-4 rounded-xl text-xs font-bold uppercase tracking-wider ${plan.highlight ? 'bg-white/10 text-brand-emerald' : 'bg-slate-50 text-slate-400'}`}>
                  Ideal for: {plan.idealFor}
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start space-x-3 text-sm">
                      <Check className={`shrink-0 w-5 h-5 ${plan.highlight ? 'text-brand-emerald' : 'text-brand-emerald'}`} />
                      <span className={plan.highlight ? 'text-slate-200' : 'text-slate-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact" 
                  className={`w-full flex items-center justify-center py-4 rounded-xl font-bold transition-all ${plan.highlight ? 'bg-brand-emerald text-white hover:bg-brand-emerald/90' : 'bg-brand-navy text-white hover:bg-brand-navy/90'}`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Info className="text-brand-navy w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold">Need a custom quote?</h4>
                <p className="text-sm text-slate-500">We offer bespoke pricing for non-profits and multi-year contracts.</p>
              </div>
            </div>
            <Link to="/contact" className="btn-secondary whitespace-nowrap">Request Custom Quote</Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8 text-left">
            {[
              { q: "Are there any hidden setup fees?", a: "No. All setup costs are clearly outlined in your initial proposal. We believe in total transparency." },
              { q: "Can we change plans later?", a: "Absolutely. You can upgrade or downgrade your plan with 30 days' notice as your business needs evolve." },
              { q: "Does the price include VAT?", a: "All prices shown exclude UK VAT, which will be added to your invoice at the prevailing rate (currently 20%)." }
            ].map((faq, i) => (
              <div key={i}>
                <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                <p className="text-slate-500 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
