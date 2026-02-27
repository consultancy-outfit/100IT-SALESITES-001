import { motion } from 'motion/react';
import { Shield, Cloud, Server, Phone, Database, Lock, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    icon: Server,
    description: 'Comprehensive, proactive IT management for UK businesses. We act as your outsourced IT department, ensuring maximum uptime and productivity.',
    audience: 'SMEs with 10-200 employees needing reliable day-to-day support.',
    process: ['Initial Audit', 'Onboarding & Documentation', '24/7 Monitoring', 'Quarterly Strategy Reviews'],
    benefits: ['Predictable monthly costs', 'Reduced downtime', 'Access to expert knowledge'],
    price: 'From £35 per user/month'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & GDPR',
    icon: Shield,
    description: 'Robust protection against modern threats. We help you achieve Cyber Essentials certification and ensure GDPR compliance.',
    audience: 'Businesses handling sensitive client data (Legal, Finance, Healthcare).',
    process: ['Vulnerability Assessment', 'Security Implementation', 'Staff Training', 'Regular Penetration Testing'],
    benefits: ['Data protection', 'Regulatory compliance', 'Reputation management'],
    price: 'From £500 per audit'
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Migration',
    icon: Cloud,
    description: 'Seamless migration to Microsoft Azure or AWS. Modernise your infrastructure for flexibility and remote work capabilities.',
    audience: 'Organisations looking to reduce on-premise hardware reliance.',
    process: ['Cloud Readiness Assessment', 'Migration Planning', 'Secure Transfer', 'Optimisation'],
    benefits: ['Scalability', 'Remote access', 'Cost efficiency'],
    price: 'Project based from £1,500'
  },
  {
    id: 'comms',
    title: 'VoIP & Unified Comms',
    icon: Phone,
    description: 'Modern telephony solutions that integrate with Teams and CRM systems. Enable your staff to work from anywhere.',
    audience: 'Distributed teams and customer-service focused businesses.',
    process: ['Usage Analysis', 'System Design', 'Number Porting', 'User Training'],
    benefits: ['Lower call costs', 'Better call quality', 'Flexibility'],
    price: 'From £12 per user/month'
  },
  {
    id: 'backup',
    title: 'Backup & Disaster Recovery',
    icon: Database,
    description: 'Bulletproof backup strategies ensuring business continuity. Recover your data in minutes, not days.',
    audience: 'Any business that cannot afford data loss.',
    process: ['Risk Analysis', 'Backup Strategy Design', 'Automated Implementation', 'Recovery Testing'],
    benefits: ['Business continuity', 'Peace of mind', 'Ransomware protection'],
    price: 'From £100 per month'
  },
  {
    id: 'consultancy',
    title: 'Strategic IT Consultancy',
    icon: Lock,
    description: 'Align your technology with your business goals. Virtual CIO services to guide your digital transformation.',
    audience: 'Growing companies needing strategic direction.',
    process: ['Business Goal Alignment', 'Technology Roadmap', 'Budget Planning', 'Vendor Management'],
    benefits: ['Strategic advantage', 'ROI focus', 'Future-proofing'],
    price: 'From £850 per day'
  }
];

export default function Services() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Core Services</h1>
          <p className="text-xl text-slate-600">
            Tailored IT solutions designed to drive efficiency and growth for UK enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="p-8 bg-slate-900 text-white flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-900/50">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-auto pt-6 border-t border-slate-700">
                    <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-1">Starting From</div>
                    <div className="text-2xl font-bold text-indigo-400">{service.price}</div>
                    <div className="text-xs text-slate-500 mt-1">+ VAT</div>
                  </div>
                </div>
                
                <div className="p-8 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                      Ideal For
                    </h4>
                    <p className="text-slate-600 text-sm mb-6">{service.audience}</p>
                    
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                      Our Process
                    </h4>
                    <div className="space-y-4 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                      {service.process.map((step, i) => (
                        <div key={i} className="relative flex items-center gap-4">
                          <div className="w-7 h-7 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center text-xs font-bold text-indigo-600 z-10">
                            {i + 1}
                          </div>
                          <span className="text-sm font-medium text-slate-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-indigo-200 group">
            Discuss Your Requirements
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
