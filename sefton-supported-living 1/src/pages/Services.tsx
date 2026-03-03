import React from 'react';
import { motion } from 'motion/react';
import { Shield, Cloud, Server, Phone, Database, Briefcase, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Server,
    title: 'Managed IT Support',
    description: 'Comprehensive, proactive IT management for your entire infrastructure. We act as your outsourced IT department.',
    audience: 'SMEs with 10-200 employees needing reliable uptime.',
    process: ['Initial Audit', 'Onboarding & Documentation', '24/7 Monitoring', 'Unlimited Remote Support'],
    benefits: ['Predictable monthly costs', 'Reduced downtime', 'Expert guidance'],
    price: 'From £25 per user/month'
  },
  {
    icon: Shield,
    title: 'Cybersecurity & Compliance',
    description: 'Robust protection against modern threats, ensuring your business meets GDPR and Cyber Essentials standards.',
    audience: 'Regulated industries (Legal, Finance, Healthcare).',
    process: ['Vulnerability Assessment', 'Security Implementation', 'Staff Training', 'Continuous Monitoring'],
    benefits: ['Data protection', 'Regulatory compliance', 'Peace of mind'],
    price: 'From £150 per month'
  },
  {
    icon: Cloud,
    title: 'Cloud Migration & Hosting',
    description: 'Seamless transition to Microsoft Azure or AWS, enabling flexible remote work and scalable resources.',
    audience: 'Growing businesses needing flexibility and scalability.',
    process: ['Strategy Planning', 'Data Migration', 'Testing & Validation', 'Go-Live Support'],
    benefits: ['Work from anywhere', 'Scalable resources', 'Reduced hardware costs'],
    price: 'Project based from £1,500'
  },
  {
    icon: Briefcase,
    title: 'IT Consultancy & Strategy',
    description: 'Strategic technology planning to align your IT infrastructure with your long-term business goals.',
    audience: 'Directors and Boards seeking digital transformation.',
    process: ['Business Analysis', 'Roadmap Development', 'Vendor Selection', 'Implementation Oversight'],
    benefits: ['Clear technology roadmap', 'ROI focus', 'Competitive advantage'],
    price: 'Day rate from £650'
  },
  {
    icon: Phone,
    title: 'VoIP & Unified Comms',
    description: 'Modern cloud telephony solutions that integrate voice, video, and messaging for seamless collaboration.',
    audience: 'Remote and hybrid teams requiring flexible communication.',
    process: ['Needs Assessment', 'Number Porting', 'System Configuration', 'Handset Deployment'],
    benefits: ['Cost savings vs ISDN', 'Advanced features', 'Mobile integration'],
    price: 'From £12 per user/month'
  },
  {
    icon: Database,
    title: 'Backup & Disaster Recovery',
    description: 'Fail-safe data protection strategies to ensure business continuity in the event of data loss or cyberattack.',
    audience: 'All businesses valuing data integrity.',
    process: ['Risk Assessment', 'Backup Configuration', 'Regular Testing', 'Recovery Planning'],
    benefits: ['Business continuity', 'Rapid recovery times', 'Data insurance'],
    price: 'From £50 per month'
  }
];

const Services = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Our Core Services</h1>
          <p className="text-xl text-slate-600">
            Tailored IT solutions designed to drive efficiency, security, and growth for UK businesses.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-slate-100 flex flex-col"
            >
              <div className="p-8 flex-grow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">{service.title}</h2>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">Ideal For:</h3>
                  <p className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    {service.audience}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">Our Process:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {service.process.map((step, i) => (
                      <div key={i} className="flex items-center text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">Key Benefits:</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-700">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 px-8 py-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 uppercase font-semibold">Starting From</p>
                  <p className="text-xl font-bold text-blue-600">{service.price}</p>
                </div>
                <Link 
                  to="/contact" 
                  className="px-6 py-2 bg-white text-blue-600 border border-blue-200 rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm"
                >
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
