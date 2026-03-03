import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Transparent Pricing</h1>
          <p className="text-xl text-slate-600">
            Simple, predictable monthly pricing for your IT support. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
            <div className="text-sm text-slate-500 mb-6">Essential support for small teams</div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">£35</span>
              <span className="text-slate-500">/user/mo</span>
            </div>
            <p className="text-xs text-slate-400 mb-8">+ VAT. Billed monthly.</p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {['Remote Helpdesk (9am-5pm)', 'Basic Antivirus', 'Patch Management', 'Microsoft 365 Support', 'Quarterly Reports'].map((feature) => (
                <li key={feature} className="flex items-start text-sm text-slate-700">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <Link to="/contact" className="w-full block text-center py-3 px-4 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors">
              Choose Starter
            </Link>
          </div>

          {/* Growth Plan */}
          <div className="bg-slate-900 rounded-2xl shadow-xl border border-slate-800 p-8 flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
              MOST POPULAR
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
            <div className="text-sm text-slate-400 mb-6">Full protection for growing firms</div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">£55</span>
              <span className="text-slate-400">/user/mo</span>
            </div>
            <p className="text-xs text-slate-500 mb-8">+ VAT. Billed monthly.</p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {['Unlimited Remote Support', 'Advanced Endpoint Security', '24/7 Monitoring', 'Cloud Backup (1TB)', 'Priority SLA', 'On-site Support (Discounted)'].map((feature) => (
                <li key={feature} className="flex items-start text-sm text-slate-300">
                  <Check className="h-5 w-5 text-indigo-400 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <Link to="/contact" className="w-full block text-center py-3 px-4 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/25">
              Choose Growth
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise</h3>
            <div className="text-sm text-slate-500 mb-6">Strategic partnership & compliance</div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">£85</span>
              <span className="text-slate-500">/user/mo</span>
            </div>
            <p className="text-xs text-slate-400 mb-8">+ VAT. Billed monthly.</p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {['Everything in Growth', 'Dedicated Account Manager', 'Quarterly Strategy Reviews', 'Cyber Essentials Certification', 'Unlimited On-site Support', 'Disaster Recovery Planning'].map((feature) => (
                <li key={feature} className="flex items-start text-sm text-slate-700">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <Link to="/contact" className="w-full block text-center py-3 px-4 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>

        <div className="mt-16 text-center text-slate-500 text-sm">
          <p>All prices exclude VAT at the prevailing rate. Minimum contract term of 12 months applies.</p>
          <p className="mt-2">Need a custom project quote? <Link to="/contact" className="text-indigo-600 underline">Contact us</Link>.</p>
        </div>
      </div>
    </div>
  );
}
