import { motion } from 'motion/react';
import { Check, X, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Essential Support",
    price: "£25",
    period: "per user / month",
    desc: "Perfect for small teams needing reliable reactive support.",
    ideal: "Startups & Small Offices",
    features: [
      { text: "Remote Helpdesk Support", included: true },
      { text: "9:00 - 17:30 Coverage", included: true },
      { text: "Basic Endpoint Security", included: true },
      { text: "Cloud Backup (50GB)", included: true },
      { text: "Microsoft 365 Management", included: true },
      { text: "On-site Support", included: false },
      { text: "24/7 Monitoring", included: false },
      { text: "Strategic IT Roadmap", included: false },
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Professional Managed",
    price: "£55",
    period: "per user / month",
    desc: "Comprehensive IT management for growing businesses.",
    ideal: "Mid-sized UK Businesses",
    features: [
      { text: "Remote & On-site Support", included: true },
      { text: "Priority Helpdesk Access", included: true },
      { text: "Advanced Threat Protection", included: true },
      { text: "Cloud Backup (500GB)", included: true },
      { text: "Network Management", included: true },
      { text: "Quarterly IT Reviews", included: true },
      { text: "24/7 Server Monitoring", included: true },
      { text: "Strategic IT Roadmap", included: false },
    ],
    cta: "Choose Professional",
    popular: true
  },
  {
    name: "Enterprise Security",
    price: "£95",
    period: "per user / month",
    desc: "Maximum security and performance for demanding environments.",
    ideal: "Regulated & High-Growth Firms",
    features: [
      { text: "Unlimited On-site Support", included: true },
      { text: "24/7 Critical Response", included: true },
      { text: "Full SIEM/SOC Monitoring", included: true },
      { text: "Unlimited Cloud Backup", included: true },
      { text: "Disaster Recovery Planning", included: true },
      { text: "Dedicated Account Manager", included: true },
      { text: "Annual Security Audits", included: true },
      { text: "Strategic IT Roadmap", included: true },
    ],
    cta: "Go Enterprise",
    popular: false
  }
];

const Pricing = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Transparent Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Simple, predictable monthly plans designed to scale with your business. All prices are subject to VAT at the prevailing rate.
          </motion.p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div 
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col p-8 rounded-3xl border transition-all ${
                  plan.popular 
                    ? 'bg-white border-brand-500 shadow-2xl scale-105 z-10' 
                    : 'bg-white border-slate-100 shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-slate-500 mb-6">{plan.desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-500 text-sm font-medium">{plan.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 italic">Excluding VAT</p>
                </div>

                <div className="mb-8 p-4 bg-slate-50 rounded-xl">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Ideal For</p>
                  <p className="text-sm font-semibold text-slate-900">{plan.ideal}</p>
                </div>

                <div className="flex-grow space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <div key={i} className={`flex items-start gap-3 text-sm ${feature.included ? 'text-slate-700' : 'text-slate-400'}`}>
                      {feature.included ? (
                        <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                      ) : (
                        <X size={18} className="text-slate-300 shrink-0 mt-0.5" />
                      )}
                      {feature.text}
                    </div>
                  ))}
                </div>

                <Link 
                  to="/contact" 
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                    plan.popular 
                      ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/20' 
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

      {/* Custom Solutions */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="p-12 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
              <p className="text-slate-400">
                For larger enterprises or specific project-based requirements, we offer bespoke pricing models tailored to your unique infrastructure and security needs.
              </p>
            </div>
            <Link to="/contact" className="px-8 py-4 bg-brand-500 text-white rounded-full font-bold hover:bg-brand-400 transition-all flex items-center gap-2 shrink-0">
              Request Custom Quote <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "Is there a minimum contract length?", a: "Our standard managed services contracts are 12 months, but we also offer flexible monthly rolling options for certain services." },
              { q: "Do you charge for onboarding?", a: "Onboarding fees depend on the complexity of your current setup. We provide a full quote after our initial IT audit." },
              { q: "Can I upgrade my plan later?", a: "Absolutely. You can scale your support level up or down as your business requirements change." }
            ].map((faq, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <HelpCircle size={18} className="text-brand-500" />
                  {faq.q}
                </h4>
                <p className="text-slate-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
