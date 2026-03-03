import React from 'react';
import { motion } from 'motion/react';
import { Cloud, ShieldCheck, Cpu, Network, Database, Headphones, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';

const services = [
  {
    icon: Cloud,
    title: 'Managed Cloud Services',
    overview: 'Comprehensive cloud infrastructure management for Azure, AWS, and Private Cloud environments.',
    target: 'SMEs and Enterprises looking to scale without the overhead of internal IT teams.',
    process: ['Audit', 'Migration Strategy', 'Deployment', '24/7 Monitoring'],
    benefits: ['Reduced hardware costs', 'Scalability', 'Enhanced disaster recovery'],
    price: '£499',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity Solutions',
    overview: 'Multi-layered defense systems including EDR, SIEM, and regular penetration testing.',
    target: 'Businesses handling sensitive data or requiring high-level compliance.',
    process: ['Vulnerability Scan', 'Threat Modeling', 'Implementation', 'Staff Training'],
    benefits: ['Peace of mind', 'Regulatory compliance', 'Reduced risk of data breach'],
    price: '£750',
  },
  {
    icon: Network,
    title: 'Network Infrastructure',
    overview: 'Design and implementation of high-performance wired and wireless networks.',
    target: 'Multi-site offices and manufacturing facilities requiring robust connectivity.',
    process: ['Site Survey', 'Network Design', 'Installation', 'Optimization'],
    benefits: ['Zero dead zones', 'High-speed throughput', 'Secure guest access'],
    price: '£1,200',
  },
  {
    icon: Database,
    title: 'Data Management & Backup',
    overview: 'Automated off-site backups and structured data management strategies.',
    target: 'Data-heavy organizations requiring strict RPO/RTO targets.',
    process: ['Data Mapping', 'Backup Configuration', 'Testing', 'Verification'],
    benefits: ['Rapid recovery', 'Data integrity', 'Historical versioning'],
    price: '£299',
  },
  {
    icon: Headphones,
    title: 'IT Support & Helpdesk',
    overview: 'Unlimited remote and on-site support from our UK-based engineering team.',
    target: 'Any business requiring reliable, day-to-day technical assistance.',
    process: ['Ticket Submission', 'Triage', 'Resolution', 'Feedback'],
    benefits: ['Expert advice', 'Fast resolution', 'Reduced staff frustration'],
    price: '£25/user',
  },
  {
    icon: Code,
    title: 'Software Development',
    overview: 'Custom business applications and API integrations tailored to your workflow.',
    target: 'Companies needing bespoke tools to automate complex processes.',
    process: ['Discovery', 'Prototyping', 'Development', 'Maintenance'],
    benefits: ['Process automation', 'Competitive edge', 'Ownership of IP'],
    price: '£2,500',
  },
];

export default function Services() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tailored IT solutions designed to drive efficiency, security, and growth for British businesses.
          </p>
        </div>

        <div className="grid gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col lg:flex-row gap-12"
            >
              <div className="lg:w-1/3">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-200">
                  <service.icon className="text-white w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.overview}</p>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Starting From</div>
                  <div className="text-4xl font-bold text-indigo-600">{service.price}<span className="text-lg text-slate-400 font-normal">/mo</span></div>
                  <p className="text-xs text-slate-400 mt-2">*Excluding VAT. Subject to survey.</p>
                </div>
              </div>

              <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2" />
                    Target Audience
                  </h3>
                  <p className="text-slate-600 text-sm mb-8">{service.target}</p>

                  <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-center text-slate-600 text-sm">
                        <ShieldCheck className="w-4 h-4 text-emerald-500 mr-2" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2" />
                    Our Process
                  </h3>
                  <div className="space-y-4">
                    {service.process.map((step, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs font-bold mr-3 border border-indigo-100">
                          {i + 1}
                        </div>
                        <span className="text-slate-700 text-sm font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10">
                    <Link
                      to={ROUTES.CONTACT}
                      className="inline-flex items-center text-indigo-600 font-bold hover:translate-x-2 transition-transform"
                    >
                      Request a Quote
                      <motion.span className="ml-2">→</motion.span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
