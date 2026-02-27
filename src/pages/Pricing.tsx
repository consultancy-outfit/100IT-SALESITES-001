import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Foundation",
    price: "£25",
    period: "per user/month",
    description: "Essential support for small teams needing reliable helpdesk assistance.",
    features: [
      "Unlimited Remote Support",
      "9:00 - 17:30 Helpdesk",
      "Antivirus & Patch Management",
      "Basic Microsoft 365 Support",
      "Next Business Day Response",
    ],
    notIncluded: [
      "On-site Support",
      "Advanced Cybersecurity",
      "Strategic IT Roadmap",
    ],
    idealFor: "Startups and small businesses with up to 10 employees.",
    support: "Remote Only",
  },
  {
    name: "Professional",
    price: "£45",
    period: "per user/month",
    description: "Our most popular plan, providing comprehensive managed services.",
    features: [
      "Everything in Foundation",
      "Inclusive On-site Support",
      "Advanced Threat Protection",
      "Cloud Backup Management",
      "4-Hour Response SLA",
      "Quarterly Strategy Reviews",
    ],
    notIncluded: [
      "24/7 Monitoring",
    ],
    idealFor: "Growing SMEs needing a proactive IT partner.",
    support: "Remote & On-site",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "£75",
    period: "per user/month",
    description: "High-performance IT management for demanding business environments.",
    features: [
      "Everything in Professional",
      "24/7 Critical Monitoring",
      "Dedicated Account Manager",
      "Cyber Essentials Certification",
      "1-Hour Critical Response",
      "Full IT Roadmap & Budgeting",
      "vCIO Services",
    ],
    idealFor: "Established firms requiring maximum uptime and security.",
    support: "Priority 24/7",
  },
];

export default function Pricing() {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Transparent, Value-Driven Pricing</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose a plan that fits your business needs. All prices are in GBP and exclude VAT.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div 
                key={i}
                className={`relative p-8 rounded-3xl border transition-all ${
                  plan.featured 
                    ? 'border-primary-600 shadow-2xl scale-105 z-10 bg-white' 
                    : 'border-slate-200 shadow-sm bg-slate-50'
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-slate-500 text-sm mb-6">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-500">{plan.period}</span>
                  </div>
                  <div className="mt-2 text-xs text-slate-400 italic">* Prices exclude VAT at 20%</div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="text-sm font-bold text-slate-900 uppercase tracking-wider">What's Included</div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                        <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {plan.notIncluded?.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-400">
                        <X className="w-5 h-5 text-slate-300 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-200 mb-8">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Ideal For</div>
                  <p className="text-sm text-slate-600">{plan.idealFor}</p>
                </div>

                <Link 
                  to="/contact" 
                  className={`w-full py-3 rounded-xl font-bold text-center block transition-colors ${
                    plan.featured 
                      ? 'bg-primary-600 text-white hover:bg-primary-700' 
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-200">
            <h2 className="text-3xl font-display font-bold mb-6 text-center">Need a Custom Solution?</h2>
            <p className="text-slate-600 text-center mb-10">
              For larger enterprises or specific project-based requirements, we offer bespoke pricing 
              models tailored to your unique infrastructure.
            </p>
            <div className="flex justify-center">
              <Link to="/contact" className="btn-secondary px-12">
                Request a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
