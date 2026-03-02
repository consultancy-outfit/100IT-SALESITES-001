import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: 'Essential Support',
    id: 'tier-essential',
    price: '£450',
    description: 'Perfect for small offices needing reliable day-to-day IT assistance.',
    features: [
      'Mon-Fri, 9am-5pm Support',
      'Remote Helpdesk',
      'Basic Cybersecurity Pack',
      'Daily Cloud Backups',
      '15-Min Response Guarantee',
      'Monthly Health Reports',
    ],
    support: 'Business Hours',
    ideal: 'SMEs with 5-15 users',
    cta: 'Start with Essential',
    featured: false,
  },
  {
    name: 'Professional Managed',
    id: 'tier-professional',
    price: '£850',
    description: 'Our most popular plan for growing businesses requiring proactive care.',
    features: [
      '24/7 Critical Monitoring',
      'Unlimited Remote Support',
      'Advanced Threat Protection',
      'Microsoft 365 Management',
      'On-site Support Included',
      'Quarterly Strategy Reviews',
      'vCTO Advisory Services',
    ],
    support: 'Priority 24/7',
    ideal: 'Growing firms with 15-50 users',
    cta: 'Upgrade to Professional',
    featured: true,
  },
  {
    name: 'Enterprise Secure',
    id: 'tier-enterprise',
    price: '£1,500',
    description: 'Comprehensive IT and security for large-scale operations.',
    features: [
      'Full 24/7 Helpdesk Access',
      'Managed SIEM/SOC Services',
      'Compliance Management (GDPR/ISO)',
      'Dedicated Account Manager',
      'Disaster Recovery Planning',
      'Unlimited On-site Visits',
      'Full Hardware Lifecycle Management',
    ],
    support: 'Dedicated 24/7',
    ideal: 'Large organisations with 50+ users',
    cta: 'Contact for Enterprise',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-600 uppercase tracking-wide">Pricing Plans</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Transparent Pricing for Every Business Stage
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-600">
          Choose the plan that fits your current needs. All prices are subject to VAT at the prevailing rate.
        </p>
        
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`flex flex-col justify-between rounded-3xl p-8 ring-1 transition-all duration-300 ${
                tier.featured 
                  ? 'bg-slate-900 ring-slate-900 shadow-2xl scale-105 z-10' 
                  : 'bg-white ring-slate-200 hover:ring-brand-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={`text-lg font-semibold leading-8 ${tier.featured ? 'text-brand-400' : 'text-slate-900'}`}
                  >
                    {tier.name}
                  </h3>
                  {tier.featured && (
                    <span className="rounded-full bg-brand-500/10 px-2.5 py-1 text-xs font-semibold leading-5 text-brand-400">
                      Most Popular
                    </span>
                  )}
                </div>
                <p className={`mt-4 text-sm leading-6 ${tier.featured ? 'text-slate-300' : 'text-slate-600'}`}>
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className={`text-4xl font-bold tracking-tight ${tier.featured ? 'text-white' : 'text-slate-900'}`}>
                    {tier.price}
                  </span>
                  <span className={`text-sm font-semibold leading-6 ${tier.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                    /month
                  </span>
                </p>
                <ul
                  role="list"
                  className={`mt-8 space-y-3 text-sm leading-6 ${tier.featured ? 'text-slate-300' : 'text-slate-600'}`}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className={`h-6 w-5 flex-none ${tier.featured ? 'text-brand-400' : 'text-brand-600'}`} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-200/10">
                <div className="mb-6">
                  <div className={`text-xs font-bold uppercase tracking-wider ${tier.featured ? 'text-slate-400' : 'text-slate-500'}`}>Support Level</div>
                  <div className={`mt-1 text-sm font-semibold ${tier.featured ? 'text-white' : 'text-slate-900'}`}>{tier.support}</div>
                </div>
                <div className="mb-8">
                  <div className={`text-xs font-bold uppercase tracking-wider ${tier.featured ? 'text-slate-400' : 'text-slate-500'}`}>Ideal For</div>
                  <div className={`mt-1 text-sm font-semibold ${tier.featured ? 'text-white' : 'text-slate-900'}`}>{tier.ideal}</div>
                </div>
                <Link
                  to="/contact"
                  aria-describedby={tier.id}
                  className={`block rounded-full px-3 py-2 text-center text-sm font-semibold leading-6 shadow-sm transition-all ${
                    tier.featured
                      ? 'bg-brand-500 text-white hover:bg-brand-400 focus-visible:outline-brand-500'
                      : 'bg-brand-600 text-white hover:bg-brand-500 focus-visible:outline-brand-600'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-2xl bg-slate-50 p-8 text-center">
          <p className="text-sm text-slate-600">
            Need a custom solution? We offer bespoke pricing for unique project requirements. 
            <Link to="/contact" className="ml-1 font-semibold text-brand-600 hover:text-brand-500">
              Get a custom quote &rarr;
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
