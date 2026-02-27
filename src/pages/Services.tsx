import React from 'react';
import { motion } from 'motion/react';
import { Monitor, Shield, Cloud, Cpu, Database, Headphones, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Headphones className="text-brand-600" size={32} />,
    title: 'Managed IT Support',
    overview: 'Comprehensive 24/7 helpdesk and proactive maintenance for your entire IT estate.',
    target: 'SMEs and growing UK enterprises needing reliable day-to-day tech management.',
    process: ['Audit & Onboarding', 'Proactive Monitoring', 'Helpdesk Support', 'Quarterly Reviews'],
    benefits: ['Reduced Downtime', 'Predictable Monthly Costs', 'Expert Knowledge Access'],
    price: 499
  },
  {
    icon: <Shield className="text-brand-600" size={32} />,
    title: 'Cybersecurity Solutions',
    overview: 'Multi-layered defense strategies to protect your business from evolving digital threats.',
    target: 'Businesses handling sensitive data or operating in regulated UK sectors.',
    process: ['Vulnerability Assessment', 'Strategy Design', 'Implementation', 'Continuous Monitoring'],
    benefits: ['Risk Mitigation', 'Regulatory Compliance', 'Peace of Mind'],
    price: 750
  },
  {
    icon: <Cloud className="text-brand-600" size={32} />,
    title: 'Cloud Infrastructure',
    overview: 'Seamless migration and management of cloud environments (Azure, AWS, Google Cloud).',
    target: 'Companies looking to modernize infrastructure and enable remote work.',
    process: ['Readiness Assessment', 'Migration Planning', 'Execution', 'Optimization'],
    benefits: ['Scalability', 'Cost Efficiency', 'Enhanced Collaboration'],
    price: 1200
  },
  {
    icon: <Database className="text-brand-600" size={32} />,
    title: 'Disaster Recovery',
    overview: 'Robust backup and business continuity planning to ensure you never lose critical data.',
    target: 'Any business where data loss would result in significant financial impact.',
    process: ['Data Mapping', 'Backup Strategy', 'Recovery Testing', 'Real-time Sync'],
    benefits: ['Data Integrity', 'Rapid Recovery', 'Business Resilience'],
    price: 350
  },
  {
    icon: <Briefcase className="text-brand-600" size={32} />,
    title: 'IT Consultancy',
    overview: 'Strategic technology advice to align your IT roadmap with your business objectives.',
    target: 'Leadership teams planning for digital transformation or major scaling.',
    process: ['Discovery Session', 'Gap Analysis', 'Strategic Roadmap', 'Execution Support'],
    benefits: ['Strategic Alignment', 'Informed Decision Making', 'Future-Proofing'],
    price: 950
  },
  {
    icon: <Cpu className="text-brand-600" size={32} />,
    title: 'Network Infrastructure',
    overview: 'Design and implementation of high-performance, secure wired and wireless networks.',
    target: 'Offices and facilities requiring high-speed, reliable connectivity.',
    process: ['Site Survey', 'Network Design', 'Installation', 'Performance Tuning'],
    benefits: ['High Speed', 'Secure Connectivity', 'Reliable Coverage'],
    price: 1500
  }
];

export const Services = () => {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Our IT Services</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Tailored technology solutions designed to drive efficiency, security, and growth for UK businesses.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col lg:flex-row"
              >
                <div className="p-8 lg:p-12 lg:w-1/2">
                  <div className="mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-8">{service.overview}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Ideal For</h4>
                      <p className="text-slate-700">{service.target}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Our Process</h4>
                        <ul className="space-y-2">
                          {service.process.map((p, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                              <span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Key Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((b, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center items-center text-center border-t lg:border-t-0 lg:border-l border-slate-100">
                  <div className="mb-8">
                    <span className="text-slate-500 text-sm font-medium">Starting from</span>
                    <div className="text-5xl font-display font-bold text-slate-900 mt-1">
                      £{service.price}<span className="text-lg text-slate-400 font-normal">/mo</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-2">*Excluding VAT. Custom quotes available.</p>
                  </div>
                  <Link
                    to="/contact"
                    className="w-full max-w-xs py-4 bg-brand-600 text-white rounded-full font-bold hover:bg-brand-700 transition-all flex items-center justify-center gap-2"
                  >
                    Request a Proposal <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-slate-600 mb-10 text-lg">
            Every business is unique. We can combine our services into a bespoke package that perfectly matches your requirements and budget.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 border-2 border-brand-600 text-brand-600 rounded-full font-bold hover:bg-brand-50 transition-all"
          >
            Schedule a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
};
