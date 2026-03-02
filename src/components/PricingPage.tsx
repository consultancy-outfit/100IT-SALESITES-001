import React from 'react';
import { SectionHeading, Button, Card } from './Shared';
import { CheckCircle2, Zap, Shield, Crown } from 'lucide-react';

const plans = [
  {
    name: "Essential Support",
    icon: Zap,
    price: "45",
    period: "user / month",
    features: [
      "Mon-Fri 9am-6pm Support",
      "Remote Troubleshooting",
      "Basic Endpoint Security",
      "Office 365 Management",
      "Monthly Health Reports",
      "4 Hour Response SLA"
    ],
    support: "Standard Business Hours",
    ideal: "Small businesses needing reliable day-to-day IT support.",
    popular: false
  },
  {
    name: "Professional Managed",
    icon: Shield,
    price: "85",
    period: "user / month",
    features: [
      "24/7 Monitoring & Support",
      "Advanced Cybersecurity Suite",
      "Cloud Backup (50GB/user)",
      "Strategic IT Roadmap",
      "Priority On-site Support",
      "1 Hour Response SLA",
      "Quarterly Strategy Reviews"
    ],
    support: "24/7 Emergency Support",
    ideal: "Growing firms requiring high uptime and proactive security.",
    popular: true
  },
  {
    name: "Enterprise Strategic",
    icon: Crown,
    price: "150",
    period: "user / month",
    features: [
      "Dedicated Account Manager",
      "Full Virtual CTO Service",
      "Unlimited Cloud Storage",
      "Compliance Auditing (GDPR)",
      "Custom DR Planning",
      "15 Min Response SLA",
      "Monthly Executive Briefings"
    ],
    support: "Dedicated 24/7 Team",
    ideal: "Large organisations with complex, mission-critical infrastructure.",
    popular: false
  }
];

export const PricingPage = () => {
  return (
    <div className="pt-32">
      <section className="section-padding">
        <SectionHeading 
          centered 
          title="Transparent Pricing for UK Business" 
          subtitle="Simple, scalable plans designed to provide maximum value without hidden costs."
        />

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                plan.popular 
                  ? 'bg-slate-900 text-white border-emerald-500 shadow-2xl scale-105 z-10' 
                  : 'bg-white text-slate-900 border-slate-200 hover:border-emerald-500'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${plan.popular ? 'bg-emerald-500 text-white' : 'bg-emerald-50 text-emerald-600'}`}>
                  <plan.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">£{plan.price}</span>
                  <span className={plan.popular ? 'text-slate-400' : 'text-slate-500'}>/{plan.period}</span>
                </div>
                <p className={`text-sm mt-2 ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>* All prices exclude VAT at 20%</p>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                <p className={`font-semibold ${plan.popular ? 'text-emerald-400' : 'text-emerald-600'}`}>What's Included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-emerald-500 mt-1 flex-shrink-0" />
                      <span className={plan.popular ? 'text-slate-300' : 'text-slate-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`p-4 rounded-2xl mb-8 ${plan.popular ? 'bg-slate-800' : 'bg-slate-50'}`}>
                <p className="text-sm font-bold mb-1">Support Level:</p>
                <p className={`text-sm ${plan.popular ? 'text-slate-400' : 'text-slate-600'}`}>{plan.support}</p>
                <p className="text-sm font-bold mt-3 mb-1">Ideal For:</p>
                <p className={`text-sm ${plan.popular ? 'text-slate-400' : 'text-slate-600'}`}>{plan.ideal}</p>
              </div>

              <Button 
                variant={plan.popular ? 'primary' : 'outline'} 
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-slate-50 rounded-3xl p-10 border border-slate-200">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Need a Custom Solution?</h3>
              <p className="text-slate-600 mb-6">
                For larger enterprises or specific project requirements, we offer bespoke pricing models tailored to your exact needs. Whether it's a one-off migration or a multi-year strategic partnership, we've got you covered.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-700 font-medium">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  Volume discounts for 250+ users
                </li>
                <li className="flex items-center gap-2 text-slate-700 font-medium">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  Multi-site infrastructure projects
                </li>
                <li className="flex items-center gap-2 text-slate-700 font-medium">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  Specialist compliance consulting
                </li>
              </ul>
              <Button variant="secondary">Request a Custom Quote</Button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-4">VAT Clarification</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                As a UK-registered business, all services provided by Badminton Gardens are subject to Value Added Tax (VAT) at the standard rate of 20%. Our invoices will clearly display the net amount, VAT amount, and total gross amount in GBP. If your business is VAT-registered, you may be able to reclaim this tax.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-xs text-slate-400">
                  VAT Registration Number: GB 123 4567 89
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
