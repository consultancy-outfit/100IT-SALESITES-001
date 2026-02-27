import { motion } from 'motion/react';
import { Shield, Cloud, Headphones, Code, Lock, Database, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Headphones,
    title: 'Managed IT Support',
    overview: '24/7 proactive monitoring and helpdesk support for your entire team.',
    target: 'SMEs looking for a dedicated off-site IT department.',
    process: ['Audit', 'Onboarding', '24/7 Monitoring', 'Monthly Reporting'],
    benefits: ['Reduced downtime', 'Predictable costs', 'Expert advice'],
    price: '£499',
  },
  {
    icon: Shield,
    title: 'Cybersecurity Solutions',
    overview: 'Advanced threat protection, firewall management, and employee training.',
    target: 'Businesses handling sensitive data or under regulatory scrutiny.',
    process: ['Vulnerability Scan', 'Strategy', 'Implementation', 'Training'],
    benefits: ['Data protection', 'GDPR compliance', 'Peace of mind'],
    price: '£799',
  },
  {
    icon: Cloud,
    title: 'Cloud Migration & Management',
    overview: 'Seamless transition to Azure, AWS, or Google Cloud with ongoing optimisation.',
    target: 'Companies moving away from legacy on-premise hardware.',
    process: ['Readiness Assessment', 'Migration Plan', 'Execution', 'Optimisation'],
    benefits: ['Scalability', 'Remote access', 'Cost efficiency'],
    price: '£1,200',
  },
  {
    icon: Lock,
    title: 'Disaster Recovery',
    overview: 'Robust backup solutions and business continuity planning.',
    target: 'Enterprises that cannot afford more than 1 hour of downtime.',
    process: ['Risk Analysis', 'Backup Setup', 'Testing', 'Recovery Drills'],
    benefits: ['Business continuity', 'Data redundancy', 'Risk mitigation'],
    price: '£350',
  },
  {
    icon: Database,
    title: 'Network Infrastructure',
    overview: 'Design and installation of high-speed, secure office networks.',
    target: 'New offices or companies upgrading their connectivity.',
    process: ['Site Survey', 'Design', 'Installation', 'Certification'],
    benefits: ['High speed', 'Secure access', 'Future-proofed'],
    price: '£1,500',
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    overview: 'Bespoke applications tailored to your unique business processes.',
    target: 'Organisations needing specific tools not available off-the-shelf.',
    process: ['Discovery', 'MVP Development', 'Scaling', 'Support'],
    benefits: ['Competitive edge', 'Process automation', 'Ownership'],
    price: '£5,000',
  },
];

export default function Services() {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-slate-900 text-white py-32 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Our IT Services
          </motion.h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Comprehensive technology solutions designed to empower British businesses in a digital-first world.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 -mt-16">
        <div className="grid gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 grid lg:grid-cols-3 gap-12 items-start"
            >
              <div className="space-y-6">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold">{service.title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed">{service.overview}</p>
                <div className="pt-4">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Starting from</p>
                  <p className="text-4xl font-bold text-indigo-600">{service.price}<span className="text-lg text-slate-400 font-normal"> / project</span></p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Search className="w-5 h-5 text-indigo-500" />
                    Target Audience
                  </h3>
                  <p className="text-slate-600">{service.target}</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-indigo-500" />
                    Our Process
                  </h3>
                  <ul className="space-y-3">
                    {service.process.map((step, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-600">
                        <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 text-xs flex items-center justify-center font-bold">{i + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 rounded-3xl p-8 space-y-6">
                <h3 className="font-bold text-slate-900">Key Benefits</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block w-full py-4 bg-indigo-600 text-white rounded-xl text-center font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                >
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl font-bold">Need a Custom Solution?</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Every business is unique. We offer bespoke IT consultancy to address your specific challenges and goals.</p>
            <Link
              to="/contact"
              className="inline-block px-10 py-5 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all"
            >
              Speak to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
