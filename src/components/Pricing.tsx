import { Check, Info } from 'lucide-react';
import { PRICING_PLANS } from '../constants';
import { Link } from 'react-router-dom';

export const Pricing = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-950 text-white py-24 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Transparent Pricing</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Choose a plan that fits your business needs. No hidden fees, just professional IT support.
          </p>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {PRICING_PLANS.map((plan, i) => (
              <div 
                key={i} 
                className={`relative bg-white rounded-3xl p-10 border ${
                  plan.isPopular ? 'border-brand-500 shadow-xl scale-105 z-10' : 'border-slate-200 shadow-sm'
                }`}
              >
                {plan.isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-slate-900">£{plan.price}</span>
                    <span className="text-slate-500">/month</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 italic">* Prices exclude VAT at 20%</p>
                </div>

                <div className="space-y-6 mb-10">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Ideal For</p>
                    <p className="text-sm text-slate-700 font-medium">{plan.idealFor}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Support Level</p>
                    <p className="text-sm text-slate-700 font-medium">{plan.supportLevel}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Features</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-slate-600">
                          <Check size={18} className="text-brand-500 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`block w-full py-4 rounded-xl text-center font-bold transition-all ${
                    plan.isPopular 
                      ? 'bg-brand-900 text-white hover:bg-brand-800 shadow-lg shadow-brand-900/20' 
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-brand-50 border border-brand-100 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto">
            <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 shrink-0">
              <Info size={24} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="font-bold text-brand-900 mb-1">Need a Bespoke Solution?</h4>
              <p className="text-sm text-brand-800">For larger organisations or specific project requirements, we offer custom pricing tailored to your exact needs. Contact us for a detailed proposal.</p>
            </div>
            <Link to="/contact" className="bg-brand-900 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-brand-800 shrink-0">
              Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
