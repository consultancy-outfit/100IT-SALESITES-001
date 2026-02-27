import React from 'react';
import { motion } from 'motion/react';
import { Shield, Cloud, Monitor, Database, Lock, Globe, Headphones, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';

const services = [
  {
    id: 'cyber-security',
    title: 'Cyber Security & Compliance',
    icon: Shield,
    price: '£499',
    overview: 'Comprehensive protection for your digital assets, ensuring your business is resilient against modern threats and fully GDPR compliant.',
    target: 'SMEs and Enterprises handling sensitive client data.',
    process: ['Initial Audit', 'Vulnerability Assessment', 'Implementation', 'Continuous Monitoring'],
    benefits: ['Reduced Risk', 'Legal Compliance', 'Customer Trust'],
    color: 'bg-rose-50 text-rose-600'
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Migration & Strategy',
    icon: Cloud,
    price: '£850',
    overview: 'Seamlessly transition your infrastructure to the cloud. We specialise in Microsoft Azure and AWS deployments tailored for UK businesses.',
    target: 'Companies looking to reduce hardware costs and improve accessibility.',
    process: ['Readiness Assessment', 'Architecture Design', 'Data Migration', 'Optimisation'],
    benefits: ['Scalability', 'Cost Efficiency', 'Remote Access'],
    color: 'bg-indigo-50 text-indigo-600'
  },
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    icon: Headphones,
    price: '£35',
    priceSuffix: '/user/month',
    overview: 'Unlimited remote and on-site support from our Winchester-based team. We act as your internal IT department without the overhead.',
    target: 'Businesses with 10-200 employees needing reliable day-to-day support.',
    process: ['Onboarding', 'System Integration', '24/7 Monitoring', 'Monthly Reviews'],
    benefits: ['Predictable Costs', 'Expert Knowledge', 'Fast Response'],
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    id: 'it-consultancy',
    title: 'Strategic IT Consultancy',
    icon: Monitor,
    price: '£1,200',
    overview: 'High-level technology roadmap planning to align your IT infrastructure with your long-term business goals.',
    target: 'Leadership teams planning for digital transformation or expansion.',
    process: ['Discovery', 'Strategic Planning', 'Vendor Selection', 'Project Management'],
    benefits: ['Future-Proofing', 'ROI Focus', 'Competitive Edge'],
    color: 'bg-amber-50 text-amber-600'
  },
  {
    id: 'data-management',
    title: 'Data Management & Backup',
    icon: Database,
    price: '£150',
    priceSuffix: '/month',
    overview: 'Robust data storage and disaster recovery solutions to ensure your business continuity in any scenario.',
    target: 'Data-intensive businesses requiring high availability.',
    process: ['Data Mapping', 'Backup Setup', 'Encryption', 'Recovery Testing'],
    benefits: ['Peace of Mind', 'Data Integrity', 'Fast Recovery'],
    color: 'bg-blue-50 text-blue-600'
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    icon: Globe,
    price: '£2,500',
    overview: 'Design and installation of high-speed, secure wired and wireless networks for offices and remote sites.',
    target: 'New office fit-outs or businesses experiencing connectivity issues.',
    process: ['Site Survey', 'Network Design', 'Installation', 'Testing & Handover'],
    benefits: ['High Speed', 'Reliability', 'Secure Access'],
    color: 'bg-purple-50 text-purple-600'
  }
];

export const Services = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-zinc-900 tracking-tight mb-6"
          >
            Our IT Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-600 max-w-3xl mx-auto"
          >
            We provide a comprehensive suite of IT solutions designed to help British businesses thrive in a digital-first world.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 w-full">
                  <div className={`inline-flex p-4 rounded-2xl ${service.color} mb-8`}>
                    <service.icon className="w-10 h-10" />
                  </div>
                  <h2 className="text-4xl font-bold text-zinc-900 mb-6 tracking-tight">{service.title}</h2>
                  <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                    {service.overview}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                    <div>
                      <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4">Target Audience</h3>
                      <p className="text-zinc-600 text-sm leading-relaxed">{service.target}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4">Key Benefits</h3>
                      <ul className="space-y-2">
                        {service.benefits.map(benefit => (
                          <li key={benefit} className="flex items-center text-sm text-zinc-600">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                    <div>
                      <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Starting From</p>
                      <p className="text-3xl font-bold text-zinc-900">{service.price}<span className="text-sm font-medium text-zinc-500">{service.priceSuffix || ''}</span></p>
                      <p className="text-[10px] text-zinc-400 mt-1">*Excluding VAT</p>
                    </div>
                    <Link
                      to={ROUTES.CONTACT}
                      className="inline-flex items-center bg-zinc-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-zinc-800 transition-all text-sm"
                    >
                      Enquire Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <div className="bg-zinc-100 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-zinc-900 mb-8">Our Process</h3>
                      <div className="space-y-8">
                        {service.process.map((step, stepIdx) => (
                          <div key={step} className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full border border-zinc-200 flex items-center justify-center text-sm font-bold text-indigo-600 shadow-sm">
                              {stepIdx + 1}
                            </div>
                            <div>
                              <p className="font-semibold text-zinc-900">{step}</p>
                              <p className="text-sm text-zinc-500 mt-1">Standard procedure for {service.title.toLowerCase()}.</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 -mt-12 -mr-12 opacity-5">
                      <service.icon className="w-64 h-64" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 tracking-tight">Need a custom solution?</h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Our experts are ready to design a bespoke IT package that fits your unique business requirements perfectly.
          </p>
          <Link
            to={ROUTES.CONTACT}
            className="inline-flex items-center bg-indigo-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20"
          >
            Book a Free Audit
          </Link>
        </div>
      </section>
    </div>
  );
};
