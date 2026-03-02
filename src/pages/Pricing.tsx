import { motion } from 'motion/react';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Essential Support",
    price: "£450",
    period: "per month",
    description: "Ideal for small businesses needing reliable reactive support and basic security.",
    features: [
      "Mon-Fri, 9am-5pm Helpdesk",
      "Remote Desktop Support",
      "Basic Antivirus & Firewall",
      "Weekly Cloud Backups",
      "4-Hour Response SLA",
      "Microsoft 365 Management"
    ],
    support: "Standard Business Hours",
    idealFor: "Small teams (up to 10 users)",
    cta: "Get Started",
    popular: false
  },
  {
    name: "Professional Managed",
    price: "£950",
    period: "per month",
    description: "Our most popular plan for growing businesses requiring proactive management.",
    features: [
      "24/7 Proactive Monitoring",
      "Priority Helpdesk Support",
      "Advanced Cyber Security Suite",
      "Daily Off-site Backups",
      "1-Hour Response SLA",
      "Quarterly IT Strategy Reviews",
      "On-site Support Included"
    ],
    support: "Extended Hours (8am-8pm)",
    idealFor: "Growing SMEs (10-50 users)",
    cta: "Go Professional",
    popular: true
  },
  {
    name: "Enterprise Solutions",
    price: "Custom",
    period: "bespoke pricing",
    description: "Tailored infrastructure and security for large organisations with complex needs.",
    features: [
      "Dedicated Account Manager",
      "24/7/365 Emergency Support",
      "Full Compliance Management",
      "Disaster Recovery as a Service",
      "Unlimited On-site Support",
      "Monthly Security Audits",
      "Custom Cloud Architecture"
    ],
    support: "24/7/365 Dedicated",
    idealFor: "Large Enterprises (50+ users)",
    cta: "Contact Sales",
    popular: false
  }
];

const faqs = [
  {
    q: "Is VAT included in the pricing?",
    a: "No, all prices listed are exclusive of VAT, which will be charged at the prevailing UK rate (currently 20%)."
  },
  {
    q: "Are there any hidden setup fees?",
    a: "We believe in transparency. For our Essential and Professional plans, there is a one-time onboarding fee equivalent to one month's service. Enterprise plans feature bespoke setup costs based on complexity."
  },
  {
    q: "Can I change my plan later?",
    a: "Absolutely. We understand that business needs change. You can upgrade or downgrade your plan with 30 days' notice."
  },
  {
    q: "Do you offer discounts for non-profits?",
    a: "Yes, we are proud to support UK charities and non-profit organisations with discounted rates on all our managed services. Please contact us for details."
  }
];

export default function Pricing() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Choose the level of IT support that fits your business. No hidden costs, just expert service.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col p-10 rounded-[2.5rem] border ${
                  plan.popular 
                    ? 'border-brand-600 shadow-2xl shadow-brand-100 z-10 bg-white' 
                    : 'border-slate-100 shadow-sm bg-slate-50/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-600 text-white text-sm font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-slate-500 text-sm">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="ml-2 text-slate-500 text-sm">{plan.period}</span>
                  </div>
                  <div className="mt-2 text-xs text-slate-400 font-medium italic">*Excluding VAT</div>
                </div>

                <div className="flex-grow space-y-4 mb-10">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">What's Included</div>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <Check size={18} className="text-brand-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-slate-100 space-y-4 mb-10">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Support Level:</span>
                    <span className="font-semibold text-slate-900">{plan.support}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Ideal For:</span>
                    <span className="font-semibold text-slate-900">{plan.idealFor}</span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-2xl font-bold text-center transition-all ${
                    plan.popular
                      ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-200'
                      : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto grid gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h4 className="text-lg font-bold mb-4 flex items-center">
                  <HelpCircle size={20} className="text-brand-600 mr-3" />
                  {faq.q}
                </h4>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Bespoke Solution?</h2>
              <p className="text-slate-400 text-lg">
                If your requirements don't fit into our standard tiers, we can design a custom package specifically for your organisation's unique challenges.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-10 py-4 bg-brand-600 text-white rounded-full font-bold text-lg hover:bg-brand-700 transition-all whitespace-nowrap flex items-center"
            >
              Request a Custom Quote <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
