import { motion } from 'framer-motion';
import { Shield, Cloud, Monitor, Lock, Database, Headphones, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'managed-it',
    title: 'Managed IT Services',
    icon: Monitor,
    description: 'Comprehensive IT support and management for your entire infrastructure.',
    audience: 'SMEs looking to outsource their IT department.',
    steps: ['Initial Audit', 'Strategy Design', 'Implementation', '24/7 Monitoring'],
    benefits: ['Predictable costs', 'Reduced downtime', 'Expert support team'],
    price: 'From £500 / month',
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security & Compliance',
    icon: Shield,
    description: 'Advanced threat protection, penetration testing, and GDPR compliance audits.',
    audience: 'Businesses handling sensitive customer data.',
    steps: ['Vulnerability Assessment', 'Security Hardening', 'Staff Training', 'Ongoing Monitoring'],
    benefits: ['Data protection', 'Regulatory compliance', 'Peace of mind'],
    price: 'From £750 / audit',
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Migration & Hosting',
    icon: Cloud,
    description: 'Secure migration to Azure, AWS, or Google Cloud with ongoing management.',
    audience: 'Companies seeking scalability and remote work capabilities.',
    steps: ['Cloud Readiness Assessment', 'Migration Planning', 'Secure Transfer', 'Optimisation'],
    benefits: ['Scalability', 'Remote access', 'Cost efficiency'],
    price: 'From £250 / month',
  },
  {
    id: 'data-backup',
    title: 'Disaster Recovery & Backup',
    icon: Database,
    description: 'Robust data backup solutions ensuring business continuity in any event.',
    audience: 'All businesses requiring data resilience.',
    steps: ['Risk Analysis', 'Backup Strategy', 'Automated Implementation', 'Recovery Testing'],
    benefits: ['Business continuity', 'Data integrity', 'Quick recovery times'],
    price: 'From £100 / month',
  },
  {
    id: 'network-security',
    title: 'Network Infrastructure',
    icon: Lock,
    description: 'Design and installation of secure, high-speed wired and wireless networks.',
    audience: 'Offices, warehouses, and multi-site organisations.',
    steps: ['Site Survey', 'Network Design', 'Hardware Installation', 'Configuration'],
    benefits: ['High speed', 'Secure connections', 'Reliable coverage'],
    price: 'Project based',
  },
  {
    id: 'consultancy',
    title: 'IT Consultancy',
    icon: Headphones,
    description: 'Strategic technology advice to align IT with your business goals.',
    audience: 'Executives planning digital transformation.',
    steps: ['Discovery Workshop', 'Gap Analysis', 'Strategic Roadmap', 'Execution Support'],
    benefits: ['Strategic alignment', 'Future-proofing', 'ROI focus'],
    price: 'From £850 / day',
  },
];

export default function Services() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Our Core Services
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Tailored IT solutions designed to meet the unique challenges of UK businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-800">
                    {service.price}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">Ideal For</h4>
                  <p className="text-sm text-slate-500">{service.audience}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">Our Process</h4>
                    <ul className="space-y-2">
                      {service.steps.map((step, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-600">
                          <span className="mr-2 text-blue-500 font-bold">{i + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-600">
                          <Check className="h-4 w-4 text-emerald-500 mr-2 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 flex justify-between items-center">
                <span className="text-sm text-slate-500">Custom packages available</span>
                <Link to="/contact" className="text-blue-600 font-semibold hover:text-blue-700 text-sm flex items-center">
                  Enquire Now <span className="ml-1">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
