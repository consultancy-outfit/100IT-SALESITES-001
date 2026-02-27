import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: 'Essential',
    price: '250',
    description: 'Basic support for small teams and startups.',
    features: [
      'Remote Helpdesk (9am-5pm)',
      'Basic Antivirus Protection',
      'Microsoft 365 Management',
      'Patch Management',
      'Monthly Health Report'
    ],
    support: 'Standard Response (4hrs)',
    idealFor: 'Small businesses (1-10 users)',
  },
  {
    name: 'Professional',
    price: '500',
    description: 'Comprehensive managed services for growing businesses.',
    features: [
      'Unlimited Remote Support',
      'Advanced Endpoint Security',
      'Cloud Backup (1TB)',
      'Network Monitoring',
      'Quarterly Strategy Review',
      'Priority Response (1hr)'
    ],
    support: 'Priority Response',
    idealFor: 'Growing SMEs (10-50 users)',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '1,200',
    description: 'Full-scale IT partnership for established organisations.',
    features: [
      '24/7 Support Coverage',
      'Dedicated Account Manager',
      'On-site Support Days',
      'Disaster Recovery Planning',
      'Cyber Security Audits',
      'Compliance Management'
    ],
    support: 'Immediate Response',
    idealFor: 'Large organisations (50+ users)',
  },
];

export default function Pricing() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Transparent Pricing
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Simple, predictable monthly pricing plans designed to scale with your business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative flex flex-col bg-white rounded-2xl shadow-lg border ${tier.highlighted ? 'border-blue-500 ring-2 ring-blue-500 ring-opacity-50' : 'border-slate-200'} p-8`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 right-0 -mt-4 mr-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
                <p className="text-sm text-slate-500 mt-2">{tier.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">£{tier.price}</span>
                <span className="text-slate-500 font-medium">/month</span>
                <p className="text-xs text-slate-400 mt-1">+ VAT</p>
              </div>
              
              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mr-3" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-100 pt-6 mt-auto">
                <div className="mb-4">
                    <span className="block text-xs font-semibold text-slate-900 uppercase tracking-wide">Ideal For</span>
                    <span className="text-sm text-slate-600">{tier.idealFor}</span>
                </div>
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
                    tier.highlighted 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  Choose Plan
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm">
                All prices exclude VAT. Minimum 12-month contract applies. 
                <Link to="/contact" className="text-blue-600 hover:underline ml-1">Contact us</Link> for custom enterprise quotes.
            </p>
        </div>
      </div>
    </div>
  );
}
