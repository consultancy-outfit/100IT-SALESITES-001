import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Cloud, Shield, Code, Database, Headphones, Smartphone, Lock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    icon: Headphones,
    overview: 'Comprehensive, proactive IT management for your entire infrastructure. We act as your outsourced IT department.',
    target: 'SMEs with 10-200 employees needing reliable day-to-day support.',
    process: ['Initial Audit', 'Onboarding & Setup', '24/7 Monitoring', 'Quarterly Reviews'],
    benefits: ['Reduced downtime', 'Predictable costs', 'Expert access'],
    price: 'From £35 per user/month'
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security & Compliance',
    icon: Shield,
    overview: 'Robust protection against modern threats, ensuring your business meets UK GDPR and Cyber Essentials standards.',
    target: 'Businesses handling sensitive data or regulated industries.',
    process: ['Vulnerability Scan', 'Security Implementation', 'Staff Training', 'Ongoing Monitoring'],
    benefits: ['Data protection', 'Regulatory compliance', 'Brand reputation safety'],
    price: 'From £500 per audit'
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Migration & Hosting',
    icon: Cloud,
    overview: 'Seamless migration to Azure, AWS, or Google Cloud. Modernize your workflow with scalable cloud solutions.',
    target: 'Companies looking to reduce hardware costs and enable remote work.',
    process: ['Cloud Readiness Assessment', 'Migration Planning', 'Execution', 'Optimization'],
    benefits: ['Scalability', 'Remote accessibility', 'Cost efficiency'],
    price: 'Project based, from £1,500'
  },
  {
    id: 'software-dev',
    title: 'Bespoke Software Development',
    icon: Code,
    overview: 'Custom software tailored to your unique business processes, from internal tools to customer-facing apps.',
    target: 'Organizations with specific operational needs off-the-shelf software cannot meet.',
    process: ['Requirements Gathering', 'Agile Development', 'Testing & QA', 'Deployment'],
    benefits: ['Competitive advantage', 'Operational efficiency', 'Full ownership'],
    price: 'From £5,000 per project'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & BI',
    icon: Database,
    overview: 'Turn your raw data into actionable insights using Power BI and advanced analytics tools.',
    target: 'Data-rich companies wanting to make evidence-based decisions.',
    process: ['Data Mapping', 'Warehouse Setup', 'Dashboard Creation', 'Training'],
    benefits: ['Better decision making', 'Trend identification', 'Performance tracking'],
    price: 'From £800 per month'
  },
  {
    id: 'voip',
    title: 'VoIP & Unified Comms',
    icon: Smartphone,
    overview: 'Modernize your telephony with flexible, internet-based communication systems integrated with Teams/Slack.',
    target: 'Businesses with remote teams or high call volumes.',
    process: ['Network Assessment', 'Number Porting', 'System Config', 'Handset Rollout'],
    benefits: ['Lower call costs', 'Work from anywhere', 'Better collaboration'],
    price: 'From £12 per user/month'
  }
];

export default function Services() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Core Services
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Expertly crafted IT solutions designed to drive efficiency, security, and growth for UK businesses.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-start`}
            >
              {/* Visual Side */}
              <div className="w-full lg:w-1/2">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative overflow-hidden group hover:border-teal-200 transition-colors">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <service.icon size={200} />
                  </div>
                  <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {service.overview}
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-wider block mb-1">Starting From</span>
                    <span className="text-2xl font-bold text-teal-600">{service.price}</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 pt-4">
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-teal-500" />
                    Ideal For
                  </h3>
                  <p className="text-slate-600">{service.target}</p>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Our Process</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.process.map((step, i) => (
                      <div key={i} className="flex items-center text-sm text-slate-600 bg-white p-3 rounded border border-slate-200">
                        <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">
                          {i + 1}
                        </span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <Link to="/contact" className="text-teal-600 font-medium hover:text-teal-800 inline-flex items-center">
                    Enquire about this service <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not sure what you need?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Our consultants can perform a free initial audit of your current infrastructure to identify gaps and opportunities.
          </p>
          <Link to="/contact" className="inline-block bg-teal-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-700 transition-colors">
            Book Free Audit
          </Link>
        </div>
      </div>
    </div>
  );
}
