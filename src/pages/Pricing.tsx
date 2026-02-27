import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: "Essential Support",
    price: "£250",
    period: "per month",
    features: [
      "Remote Helpdesk (9am - 5pm)",
      "Proactive Server Monitoring",
      "Endpoint Antivirus Management",
      "Microsoft 365 Administration",
      "Monthly Health Reports",
      "1 Hour On-site Support included"
    ],
    supportLevel: "Standard Business Hours",
    idealFor: "Small businesses with 5-15 users needing reliable baseline support.",
    vatIncluded: false,
    highlight: false
  },
  {
    name: "Business Premium",
    price: "£550",
    period: "per month",
    features: [
      "Priority Remote Support (8am - 6pm)",
      "Next-Day On-site Response",
      "Advanced Cybersecurity Suite",
      "Managed Cloud Backups (up to 1TB)",
      "Quarterly Strategic IT Reviews",
      "Unlimited On-site Support",
      "Mobile Device Management"
    ],
    supportLevel: "Priority Business Hours",
    idealFor: "Growing firms with 15-50 users requiring high availability and security.",
    vatIncluded: false,
    highlight: true
  },
  {
    name: "Enterprise Managed",
    price: "£1,250",
    period: "per month",
    features: [
      "24/7/365 Critical Support",
      "4-Hour On-site Response SLA",
      "Full Security Operations Center (SOC)",
      "Disaster Recovery as a Service",
      "Dedicated Account Manager",
      "Virtual CTO Services",
      "Compliance Auditing (GDPR/ISO)"
    ],
    supportLevel: "24/7 Critical Coverage",
    idealFor: "Large organizations or high-compliance sectors with 50+ users.",
    vatIncluded: false,
    highlight: false
  }
];

const Pricing = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            Transparent <span className="text-brand-600">Pricing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Choose a plan that fits your business scale. No hidden fees, just professional IT support you can count on.
          </motion.p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-[2.5rem] border ${
                  tier.highlight 
                    ? 'border-brand-500 bg-brand-50/50 shadow-xl shadow-brand-100' 
                    : 'border-slate-100 bg-white shadow-sm'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                  <p className="text-sm text-slate-500 mb-6">{tier.idealFor}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl lg:text-5xl font-bold text-slate-900">{tier.price}</span>
                    <span className="text-slate-500 font-medium">{tier.period}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-2">
                    {tier.vatIncluded ? 'Including VAT' : 'Excluding VAT'}
                  </p>
                </div>

                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-100">
                    <Info className="w-4 h-4 text-brand-500" />
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Support: {tier.supportLevel}</span>
                  </div>
                  <ul className="space-y-4">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                        <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-4 rounded-2xl font-bold transition-all ${
                    tier.highlight
                      ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-200'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Additional Info */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Pricing FAQ</h2>
            <p className="text-slate-600">Common questions about our billing and contracts.</p>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Are there any setup fees?",
                a: "For our Essential and Business Premium plans, we charge a one-time onboarding fee equivalent to one month's service to cover initial audits and system setup."
              },
              {
                q: "Do you offer custom pricing for larger teams?",
                a: "Yes. If you have more than 100 users or unique infrastructure requirements, please contact us for a bespoke enterprise quote."
              },
              {
                q: "What is the contract length?",
                a: "Our standard managed service contracts are 12 months. We also offer flexible rolling monthly contracts at a 15% premium."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-[3rem] p-12 lg:p-20 text-center text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8">Not sure which plan is right?</h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">Our consultants can perform a free IT audit to help you determine the best level of support for your business needs.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-500 text-white px-10 py-5 rounded-full font-bold hover:bg-brand-600 transition-all text-lg">
              Request Free Audit <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
