import React from 'react';
import { motion } from 'motion/react';
import { Cloud, ShieldCheck, Laptop, Database, Terminal, Headphones, BarChart } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'cloud',
    title: 'Cloud Transformation',
    overview: 'Seamless migration and management of your business applications to AWS, Azure, or Google Cloud.',
    targetAudience: 'SMEs looking to reduce on-premise hardware costs and improve scalability.',
    process: ['Audit', 'Strategy', 'Migration', 'Optimisation'],
    benefits: ['Reduced IT overhead', '99.9% uptime', 'Global accessibility'],
    startingPrice: '£499/month',
    icon: 'Cloud'
  },
  {
    id: 'cyber',
    title: 'Cybersecurity & Compliance',
    overview: 'Enterprise-grade security monitoring, threat detection, and GDPR compliance auditing.',
    targetAudience: 'Regulated industries requiring high-level data protection.',
    process: ['Risk Assessment', 'Implementation', '24/7 Monitoring', 'Annual Audit'],
    benefits: ['Zero-trust security', 'Regulatory compliance', 'Peace of mind'],
    startingPrice: '£750/month',
    icon: 'ShieldCheck'
  },
  {
    id: 'managed',
    title: 'Managed IT Support',
    overview: 'Comprehensive 24/7 helpdesk support for your entire team, covering hardware and software.',
    targetAudience: 'Businesses without a dedicated in-house IT department.',
    process: ['Onboarding', 'Helpdesk Setup', 'Proactive Maintenance', 'Quarterly Reviews'],
    benefits: ['Predictable costs', 'Expert advice', 'Minimal downtime'],
    startingPrice: '£25/user/month',
    icon: 'Headphones'
  },
  {
    id: 'infrastructure',
    title: 'Network Infrastructure',
    overview: 'Design and installation of high-speed, secure office networks and Wi-Fi solutions.',
    targetAudience: 'New office setups or businesses upgrading their physical connectivity.',
    process: ['Site Survey', 'Network Design', 'Installation', 'Testing'],
    benefits: ['High-speed connectivity', 'Secure guest access', 'Future-proofed cabling'],
    startingPrice: '£1,200 (One-off)',
    icon: 'Database'
  },
  {
    id: 'disaster',
    title: 'Disaster Recovery',
    overview: 'Robust backup solutions and business continuity planning to protect against data loss.',
    targetAudience: 'Any business where data is critical to operations.',
    process: ['Data Mapping', 'Backup Schedule', 'Recovery Testing', 'Drills'],
    benefits: ['Instant recovery', 'Off-site storage', 'Business continuity'],
    startingPrice: '£199/month',
    icon: 'Terminal'
  },
  {
    id: 'digital',
    title: 'Digital Strategy',
    overview: 'Strategic consulting to align your technology roadmap with your business goals.',
    targetAudience: 'Leadership teams planning for growth or digital transformation.',
    process: ['Discovery', 'Gap Analysis', 'Roadmap Creation', 'Execution Support'],
    benefits: ['Strategic alignment', 'ROI focus', 'Competitive edge'],
    startingPrice: '£1,500/project',
    icon: 'BarChart'
  }
];

const IconMap: Record<string, React.ReactNode> = {
  Cloud: <Cloud size={32} />,
  ShieldCheck: <ShieldCheck size={32} />,
  Headphones: <Headphones size={32} />,
  Database: <Database size={32} />,
  Terminal: <Terminal size={32} />,
  BarChart: <BarChart size={32} />,
  Laptop: <Laptop size={32} />
};

export const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-6">Our IT Services</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to empower your business and ensure your digital independence.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg mb-8">
                    {IconMap[service.icon]}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-6">{service.overview}</p>
                  
                  <div className="mb-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Ideal For</p>
                    <p className="text-slate-600">{service.targetAudience}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">The Process</h3>
                      <ul className="space-y-2">
                        {service.process.map((step, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Key Benefits</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10 flex items-center gap-6">
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Starting From</p>
                      <p className="text-2xl font-extrabold text-indigo-600">{service.startingPrice}</p>
                    </div>
                    <button className="rounded-full bg-slate-900 px-8 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-colors">
                      Enquire Now
                    </button>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-3xl bg-indigo-600/5 blur-2xl"></div>
                    <img
                      src={`https://picsum.photos/seed/${service.id}/800/600`}
                      alt={service.title}
                      className="relative rounded-2xl shadow-xl border border-slate-100 object-cover w-full h-[400px]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            We understand that every business is unique. Our team can design a bespoke IT package that fits your specific requirements and budget.
          </p>
          <button className="rounded-full bg-indigo-600 px-10 py-4 text-lg font-bold text-white shadow-lg hover:bg-indigo-500 transition-all active:scale-95">
            Request a Bespoke Quote
          </button>
        </div>
      </section>
    </div>
  );
};
