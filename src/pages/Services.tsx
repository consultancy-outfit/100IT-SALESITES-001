import React from 'react';
import { motion } from 'motion/react';
import { Shield, Cloud, Server, Lock, Headset, Code2, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Managed IT Support',
    overview: 'Comprehensive 24/7 monitoring and support for your entire IT estate.',
    target: 'Small to Medium Enterprises (SMEs) looking for a reliable outsourced IT department.',
    process: ['Audit', 'Onboarding', '24/7 Monitoring', 'Proactive Maintenance'],
    benefits: ['Reduced downtime', 'Predictable costs', 'Expert UK-based helpdesk'],
    price: '£450',
    icon: Headset,
  },
  {
    title: 'Cybersecurity Solutions',
    overview: 'Advanced threat protection, vulnerability assessments, and employee training.',
    target: 'Businesses handling sensitive data or requiring Cyber Essentials certification.',
    process: ['Risk Assessment', 'Strategy Design', 'Implementation', 'Continuous Security'],
    benefits: ['Peace of mind', 'GDPR compliance', 'Protection against ransomware'],
    price: '£750',
    icon: Shield,
  },
  {
    title: 'Cloud Infrastructure',
    overview: 'Seamless migration and management of Azure, AWS, and private cloud environments.',
    target: 'Companies looking to modernise their infrastructure and enable remote work.',
    process: ['Cloud Readiness Assessment', 'Migration Planning', 'Execution', 'Optimisation'],
    benefits: ['Scalability', 'Cost efficiency', 'Enhanced collaboration'],
    price: '£1,200',
    icon: Cloud,
  },
  {
    title: 'Business Continuity',
    overview: 'Robust backup and disaster recovery solutions to ensure your data is always safe.',
    target: 'Organisations that cannot afford any data loss or extended downtime.',
    process: ['Backup Audit', 'Recovery Strategy', 'Automated Backups', 'Regular Testing'],
    benefits: ['Data integrity', 'Fast recovery', 'Business resilience'],
    price: '£300',
    icon: Database,
  },
  {
    title: 'Network Infrastructure',
    overview: 'Design and installation of high-performance wired and wireless networks.',
    target: 'New office fit-outs or businesses experiencing slow connectivity.',
    process: ['Site Survey', 'Network Design', 'Installation', 'Performance Tuning'],
    benefits: ['High-speed connectivity', 'Secure Wi-Fi', 'Future-proof hardware'],
    price: '£950',
    icon: Server,
  },
  {
    title: 'Custom Software Development',
    overview: 'Bespoke applications and automation tools built to your specific requirements.',
    target: 'Businesses needing unique solutions that off-the-shelf software cannot provide.',
    process: ['Requirements Gathering', 'Prototyping', 'Development', 'Deployment'],
    benefits: ['Competitive advantage', 'Increased efficiency', 'Full ownership'],
    price: '£2,500',
    icon: Code2,
  },
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-zinc-900 sm:text-5xl mb-6">Our IT Services</h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              We provide a comprehensive suite of IT solutions designed to meet the unique challenges 
              of the UK business landscape. From startups to established enterprises, we have the 
              expertise to drive your digital success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col bg-white rounded-3xl border border-zinc-200 overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="p-8 lg:p-10 flex-grow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-zinc-900">{service.title}</h2>
                  </div>
                  
                  <p className="text-zinc-600 mb-8 text-lg">{service.overview}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-3">Ideal For</h3>
                      <p className="text-zinc-600">{service.target}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-3">Our Process</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.process.map((step) => (
                          <span key={step} className="px-3 py-1 bg-zinc-100 text-zinc-600 text-sm rounded-full">
                            {step}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-3">Key Benefits</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2 text-zinc-600">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 lg:p-10 bg-zinc-50 border-t border-zinc-200 flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div>
                    <p className="text-sm text-zinc-500 font-medium">Starting from</p>
                    <p className="text-3xl font-bold text-zinc-900">{service.price}<span className="text-sm font-normal text-zinc-500"> / month</span></p>
                  </div>
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-full bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all"
                  >
                    Enquire Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-zinc-400 mb-10">
            Every business is unique. We can build a bespoke IT package that fits your specific 
            requirements and budget.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all"
          >
            Request a Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
