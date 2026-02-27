import { motion } from "motion/react";
import { Check, Info, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Essential Support",
    price: "25",
    period: "per user / month",
    description: "Perfect for small teams needing reliable helpdesk support and basic security.",
    idealFor: "Startups & Small Offices (5-15 users)",
    features: [
      "Unlimited Remote Helpdesk",
      "9:00 - 18:00 Support Hours",
      "Antivirus & Malware Protection",
      "Patch Management",
      "Basic Asset Tracking",
      "Next Business Day Response"
    ],
    support: "Remote Only",
    cta: "Start Essential",
    highlight: false
  },
  {
    name: "Professional Managed",
    price: "45",
    period: "per user / month",
    description: "Our most popular plan, providing proactive management and enhanced security.",
    idealFor: "Growing SMEs (15-50 users)",
    features: [
      "Everything in Essential",
      "Proactive System Monitoring",
      "On-site Support Included",
      "Advanced Email Security",
      "Managed Cloud Backup",
      "Quarterly IT Strategy Reviews",
      "1-Hour Critical Response"
    ],
    support: "Remote & On-site",
    cta: "Go Professional",
    highlight: true
  },
  {
    name: "Enterprise Secure",
    price: "75",
    period: "per user / month",
    description: "Maximum security and dedicated strategic leadership for complex environments.",
    idealFor: "Established Businesses (50+ users)",
    features: [
      "Everything in Professional",
      "24/7 Critical Monitoring",
      "vCTO Strategic Guidance",
      "SIEM & Threat Detection",
      "Compliance Management",
      "Disaster Recovery Planning",
      "Dedicated Account Manager"
    ],
    support: "24/7 Priority Support",
    cta: "Contact for Enterprise",
    highlight: false
  }
];

export default function Pricing() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-display font-bold text-slate-900 mb-6"
          >
            Transparent Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            Simple, per-user pricing with no hidden fees. All plans are billed monthly with no long-term lock-in.
          </motion.p>
          <div className="mt-8 inline-flex items-center bg-blue-50 text-brand-accent px-4 py-2 rounded-full text-sm font-bold">
            <Info size={16} className="mr-2" />
            All prices exclude VAT at the prevailing rate.
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-[3rem] p-10 flex flex-col h-full transition-all duration-300 ${
                plan.highlight 
                  ? "bg-brand-primary text-white shadow-2xl scale-105 z-10" 
                  : "bg-white text-slate-900 border border-slate-100 shadow-sm hover:shadow-xl"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-display font-bold mb-2 ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline space-x-1">
                  <span className="text-5xl font-display font-bold">£{plan.price}</span>
                  <span className={`text-sm font-medium ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <div className={`mb-8 p-4 rounded-2xl ${plan.highlight ? "bg-white/5" : "bg-slate-50"}`}>
                <div className="text-xs font-bold uppercase tracking-wider mb-1 opacity-60">Ideal For</div>
                <div className="text-sm font-semibold">{plan.idealFor}</div>
              </div>

              <div className="flex-grow">
                <div className="text-sm font-bold uppercase tracking-wider mb-6 opacity-60">What's Included</div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start text-sm">
                      <Check className={`w-5 h-5 mr-3 shrink-0 ${plan.highlight ? "text-brand-accent" : "text-green-500"}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-white/10">
                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider mb-1 opacity-60">Support Level</div>
                  <div className="text-sm font-semibold">{plan.support}</div>
                </div>
                <Link
                  to="/contact"
                  className={`block w-full text-center py-4 rounded-full font-bold transition-all ${
                    plan.highlight
                      ? "bg-brand-accent text-white hover:bg-blue-500 shadow-lg shadow-blue-900/20"
                      : "bg-brand-primary text-white hover:bg-slate-800"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ / Additional Info */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-[3rem] p-12 md:p-16">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">Pricing FAQs</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                q: "Are there any setup fees?",
                a: "For our Essential and Professional plans, we typically charge a one-time onboarding fee equivalent to one month's service to cover the initial audit and system setup."
              },
              {
                q: "Can we change plans later?",
                a: "Absolutely. You can upgrade or downgrade your plan at any time with 30 days' notice. We want our services to scale with your business."
              },
              {
                q: "Do you offer non-profit discounts?",
                a: "Yes, we are proud to support UK registered charities with a 15% discount on all our managed service plans."
              },
              {
                q: "What about hardware costs?",
                a: "Our plans cover the service and support. Hardware, software licenses (like Microsoft 365), and third-party cloud costs are billed separately at transparent rates."
              }
            ].map((faq, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Project CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Need a Custom Project?</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            From office moves to major cloud migrations, we provide fixed-price project quotes tailored to your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center text-brand-accent font-bold text-lg hover:underline"
          >
            Request a Custom Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
