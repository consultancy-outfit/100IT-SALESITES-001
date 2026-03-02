import { motion } from 'framer-motion';
import { Check, X, Shield, Zap, Users, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Essential Support",
    price: "£299",
    desc: "Perfect for small UK businesses needing reliable IT support.",
    ideal: "SMEs with 5-15 employees",
    features: [
      "Remote IT Support (Mon-Fri)",
      "24/7 System Monitoring",
      "Basic Cybersecurity Shield",
      "Managed Data Backups",
      "Cloud Email Management",
      "Monthly Health Reports"
    ],
    notIncluded: [
      "On-site Support",
      "Advanced Threat Detection",
      "Strategic IT Consultancy",
      "Dedicated Account Manager"
    ],
    support: "Standard Support (Next Business Day)",
    color: "bg-slate-50",
    border: "border-slate-200",
    button: "bg-slate-900 text-white hover:bg-slate-800"
  },
  {
    name: "Professional IT",
    price: "£599",
    desc: "Comprehensive IT management for growing enterprises.",
    ideal: "Growing firms with 15-50 employees",
    popular: true,
    features: [
      "Priority Remote Support (24/7)",
      "On-site Support (UK-wide)",
      "Advanced Cybersecurity Suite",
      "Disaster Recovery Planning",
      "Network Infrastructure Management",
      "Quarterly Strategy Reviews",
      "Dedicated Account Manager"
    ],
    notIncluded: [
      "Bespoke Software Development",
      "Full-time On-site Engineer"
    ],
    support: "Priority Support (4-hour Response)",
    color: "bg-indigo-50",
    border: "border-indigo-200",
    button: "bg-indigo-600 text-white hover:bg-indigo-700"
  },
  {
    name: "Enterprise Solutions",
    price: "£1,299",
    desc: "Bespoke technology infrastructure for large organizations.",
    ideal: "Large UK enterprises (50+ employees)",
    features: [
      "Unlimited 24/7 Support",
      "Global Network Management",
      "Enterprise-grade Security Ops",
      "Full Cloud Infrastructure Setup",
      "Strategic IT Roadmap Planning",
      "Compliance & GDPR Auditing",
      "Custom Software Integration",
      "24/7 Dedicated Support Line"
    ],
    notIncluded: [],
    support: "Premium Support (1-hour Response)",
    color: "bg-slate-900",
    border: "border-slate-800",
    button: "bg-white text-slate-900 hover:bg-slate-100",
    textColor: "text-white",
    descColor: "text-slate-400"
  }
];

export default function Pricing() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#4f46e5,transparent_50%)]"></div>
        </div>
        <div className="section-padding relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Transparent <span className="text-indigo-400">Pricing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-xl max-w-2xl mx-auto"
          >
            Choose a plan that fits your business needs. All prices are in GBP and exclude VAT.
          </motion.p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="section-padding -mt-16 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "rounded-[3rem] p-8 md:p-12 border shadow-xl flex flex-col h-full relative",
                plan.color,
                plan.border,
                plan.popular && "scale-105 z-10 shadow-indigo-200"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <Star size={14} />
                  <span>Most Popular</span>
                </div>
              )}

              <div className="mb-8">
                <h3 className={cn("text-2xl font-bold mb-2", plan.textColor || "text-slate-900")}>{plan.name}</h3>
                <p className={cn("text-sm mb-6", plan.descColor || "text-slate-500")}>{plan.desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className={cn("text-5xl font-bold", plan.textColor || "text-slate-900")}>{plan.price}</span>
                  <span className={cn("text-sm", plan.descColor || "text-slate-500")}>/mo + VAT</span>
                </div>
              </div>

              <div className="space-y-8 flex-grow">
                <div>
                  <h4 className={cn("text-xs font-bold uppercase tracking-widest mb-4", plan.textColor || "text-slate-900")}>What's Included</h4>
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                        <span className={cn("text-sm", plan.textColor || "text-slate-600")}>{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 opacity-40">
                        <X className="text-slate-400 shrink-0 mt-0.5" size={18} />
                        <span className={cn("text-sm", plan.textColor || "text-slate-600")}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={cn("pt-6 border-t", plan.textColor ? "border-white/10" : "border-slate-200")}>
                  <p className={cn("text-xs font-bold uppercase tracking-widest mb-2", plan.textColor || "text-slate-900")}>Support Level</p>
                  <p className={cn("text-sm", plan.textColor || "text-slate-600")}>{plan.support}</p>
                </div>

                <div className={cn("pt-4", plan.textColor ? "text-slate-400" : "text-slate-500")}>
                  <p className="text-xs italic">Ideal for: {plan.ideal}</p>
                </div>
              </div>

              <Link 
                to="/contact" 
                className={cn(
                  "mt-12 w-full py-5 rounded-full font-bold text-center transition-all shadow-lg",
                  plan.button
                )}
              >
                Select Plan
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-50 rounded-[3rem] my-24 mx-6 md:mx-12">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="text-slate-500">Everything you need to know about our pricing and services.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {[
            {
              q: "Are there any hidden costs?",
              a: "No. All our pricing is transparent. Any additional hardware or software costs will be discussed and approved by you beforehand."
            },
            {
              q: "Can I change my plan later?",
              a: "Absolutely. You can upgrade or downgrade your plan at any time to suit your business needs."
            },
            {
              q: "Do you offer custom packages?",
              a: "Yes. If our standard plans don't fit your requirements, we can design a bespoke solution for you."
            },
            {
              q: "Is VAT included in the prices?",
              a: "All prices shown exclude VAT, which will be added at the prevailing UK rate (currently 20%)."
            }
          ].map((faq, i) => (
            <div key={i} className="space-y-4">
              <h4 className="text-xl font-bold text-slate-900">{faq.q}</h4>
              <p className="text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Still Unsure?</h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Our experts are here to help you choose the right plan for your business. Book a free consultation today.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-10 py-5 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200"
        >
          Contact Our Team <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
