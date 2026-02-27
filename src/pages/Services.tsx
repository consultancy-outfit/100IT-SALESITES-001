import { motion } from 'motion/react';
import { Shield, Cloud, Headphones, Database, Network, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'managed-it',
    icon: Headphones,
    title: 'Fully Managed IT Support',
    overview: 'Comprehensive, proactive IT support acting as your outsourced IT department. We handle everything from daily helpdesk queries to strategic IT planning.',
    audience: 'SMEs with 10-250 employees needing reliable, fixed-cost IT management.',
    process: ['Initial Audit', 'Onboarding & Documentation', 'Deployment of Monitoring Agents', 'Ongoing 24/7 Support & Maintenance'],
    benefits: ['Predictable monthly IT costs', 'Reduced downtime', 'Access to a broad range of technical expertise'],
    price: '£45 per user/month'
  },
  {
    id: 'cyber-security',
    icon: Shield,
    title: 'Cyber Security Solutions',
    overview: 'Enterprise-grade security frameworks designed to protect your business from evolving cyber threats, ensuring compliance with UK data protection laws.',
    audience: 'Businesses handling sensitive data or requiring Cyber Essentials certification.',
    process: ['Vulnerability Assessment', 'Implementation of Next-Gen Firewalls & EDR', 'Staff Security Training', 'Continuous Threat Monitoring'],
    benefits: ['Protection against ransomware and phishing', 'GDPR compliance support', 'Peace of mind'],
    price: '£850 per month'
  },
  {
    id: 'cloud-migration',
    icon: Cloud,
    title: 'Cloud Migration & Management',
    overview: 'Seamless transition of your on-premise infrastructure to secure, scalable cloud environments like Microsoft Azure or AWS.',
    audience: 'Companies looking to enable remote work, reduce hardware costs, and improve scalability.',
    process: ['Cloud Readiness Assessment', 'Architecture Design', 'Phased Migration', 'Post-Migration Optimisation'],
    benefits: ['Work from anywhere capability', 'Reduced capital expenditure on hardware', 'High availability and disaster recovery'],
    price: '£2,500 per project'
  },
  {
    id: 'data-backup',
    icon: Database,
    title: 'Business Continuity & Backup',
    overview: 'Robust data backup and disaster recovery solutions ensuring your business can quickly recover from hardware failure, human error, or cyber attacks.',
    audience: 'Any business where data loss would cause significant operational or financial damage.',
    process: ['Data Mapping', 'Implementation of Immutable Backups', 'Automated Daily Testing', 'Quarterly Disaster Recovery Drills'],
    benefits: ['Minimal data loss (RPO)', 'Rapid recovery times (RTO)', 'Protection against ransomware encryption'],
    price: '£150 per server/month'
  },
  {
    id: 'network-infrastructure',
    icon: Network,
    title: 'Network Infrastructure',
    overview: 'Design, installation, and management of high-performance wired and wireless networks for offices, warehouses, and multi-site organisations.',
    audience: 'Growing businesses experiencing connectivity issues or moving to new premises.',
    process: ['Site Survey', 'Capacity Planning', 'Hardware Installation (Switches, WAPs, Firewalls)', 'Network Segmentation & Optimisation'],
    benefits: ['Fast, reliable connectivity', 'Secure guest access', 'Scalable architecture for future growth'],
    price: '£1,200 per site'
  }
];

export default function Services() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-slate-900 mb-4"
          >
            Our Core IT Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            Tailored technology solutions designed to secure, streamline, and scale your UK business operations.
          </motion.p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Service Header / Icon Area */}
                <div className="lg:col-span-4 bg-slate-900 p-8 text-white flex flex-col justify-center">
                  <service.icon className="h-12 w-12 text-indigo-400 mb-6" />
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <div className="mt-auto pt-8">
                    <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-1">Starting From</div>
                    <div className="text-3xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-slate-400 mt-1">excl. VAT</div>
                  </div>
                </div>
                
                {/* Service Details */}
                <div className="lg:col-span-8 p-8 lg:p-10">
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Overview</h3>
                    <p className="text-slate-600 leading-relaxed">{service.overview}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">Target Audience</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{service.audience}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">Key Benefits</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start text-sm text-slate-600">
                            <span className="text-indigo-500 mr-2">•</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Our Process</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.process.map((step, i) => (
                        <div key={i} className="flex items-center">
                          <span className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-full border border-slate-200">
                            {i + 1}. {step}
                          </span>
                          {i < service.process.length - 1 && (
                            <ArrowRight className="h-4 w-4 text-slate-300 mx-1 hidden sm:block" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center bg-indigo-50 rounded-2xl p-10 border border-indigo-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Need a bespoke solution?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Every business is unique. If you have specific technical requirements or need a custom IT strategy, our consultants are ready to help.
          </p>
          <Link to="/contact" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
            Discuss Your Requirements
          </Link>
        </div>
      </div>
    </div>
  );
}
