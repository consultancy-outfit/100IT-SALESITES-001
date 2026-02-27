import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRICING_PLANS } from '../constants';

export default function Pricing() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">Pricing</h2>
          <h1 className="text-5xl font-bold text-zinc-900 mb-6 tracking-tight">Transparent, Fixed-Fee Plans</h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            No hidden costs. No surprise invoices. Just reliable IT support tailored to your business size.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div 
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex flex-col p-10 rounded-[2.5rem] border ${i === 1 ? 'border-zinc-900 bg-zinc-900 text-white shadow-2xl relative' : 'border-zinc-200 bg-zinc-50 text-zinc-900'}`}
              >
                {i === 1 && (
                  <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className={`text-xl font-bold mb-2 ${i === 1 ? 'text-white' : 'text-zinc-900'}`}>{plan.name}</h3>
                  <p className={`text-sm ${i === 1 ? 'text-zinc-400' : 'text-zinc-500'}`}>{plan.idealFor}</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                    <span className={`ml-2 text-sm ${i === 1 ? 'text-zinc-400' : 'text-zinc-500'}`}>/ month</span>
                  </div>
                  <p className={`text-[10px] uppercase tracking-widest font-bold mt-2 ${i === 1 ? 'text-zinc-500' : 'text-zinc-400'}`}>{plan.vatInfo}</p>
                </div>
                
                <div className="flex-grow mb-10">
                  <h4 className={`text-xs font-bold uppercase tracking-widest mb-6 ${i === 1 ? 'text-zinc-500' : 'text-zinc-400'}`}>What's Included</h4>
                  <ul className="space-y-4">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <Check className={`h-5 w-5 mr-3 shrink-0 ${i === 1 ? 'text-emerald-400' : 'text-emerald-500'}`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`mt-8 pt-8 border-t ${i === 1 ? 'border-zinc-800' : 'border-zinc-200'}`}>
                    <div className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${i === 1 ? 'text-zinc-500' : 'text-zinc-400'}`}>Support Level</div>
                    <p className="text-sm font-medium">{plan.support}</p>
                  </div>
                </div>

                <Link 
                  to="/contact" 
                  className={`w-full py-4 rounded-full font-bold text-center transition-all ${i === 1 ? 'bg-white text-zinc-900 hover:bg-zinc-100' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Info Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-zinc-900">Frequently Asked Questions</h3>
          </div>
          <div className="space-y-8">
            {[
              { q: 'Are there any setup fees?', a: 'We typically charge a one-time onboarding fee to audit your existing systems and ensure everything is set up correctly. This varies based on the complexity of your infrastructure.' },
              { q: 'Can I change plans later?', a: 'Absolutely. Our services are designed to scale with your business. You can upgrade or downgrade your plan with 30 days\' notice.' },
              { q: 'Is VAT included in the prices?', a: 'No, all prices listed are exclusive of VAT, which will be added at the prevailing UK rate (currently 20%).' },
              { q: 'Do you offer custom enterprise pricing?', a: 'Yes. For organizations with more than 50 users or complex multi-site requirements, we provide bespoke quotes tailored to your specific needs.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-zinc-200">
                <h4 className="text-lg font-bold text-zinc-900 mb-3">{faq.q}</h4>
                <p className="text-zinc-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-100 rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-xl mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">Not sure which plan is right for you?</h2>
              <p className="text-zinc-600">Our experts can help you assess your current IT needs and recommend the most cost-effective solution for your business.</p>
            </div>
            <Link to="/contact" className="px-10 py-5 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all flex items-center">
              Request a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
