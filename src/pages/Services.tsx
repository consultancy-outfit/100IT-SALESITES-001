import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Cloud, 
  Code2, 
  Headphones, 
  Database, 
  Network, 
  Smartphone,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Threat Protection',
    icon: Shield,
    overview: 'Comprehensive security audits, threat detection, and response systems to protect your business from evolving digital threats.',
    target: 'SMEs and Large Enterprises handling sensitive data.',
    process: ['Initial Audit', 'Vulnerability Assessment', 'Implementation', '24/7 Monitoring'],
    benefits: ['Reduced Risk', 'GDPR Compliance', 'Peace of Mind'],
    price: '£499',
  },
  {
    id: 'cloud',
    title: 'Cloud Infrastructure & Migration',
    icon: Cloud,
    overview: 'Seamless migration to AWS, Azure, or Google Cloud with ongoing management and cost optimisation.',
    target: 'Businesses looking to modernize their legacy infrastructure.',
    process: ['Strategy Planning', 'Data Migration', 'Optimisation', 'Managed Support'],
    benefits: ['Scalability', 'Cost Efficiency', 'High Availability'],
    price: '£750',
  },
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    icon: Headphones,
    overview: 'End-to-end IT management including helpdesk support, hardware maintenance, and software updates.',
    target: 'Companies without a dedicated in-house IT department.',
    process: ['Onboarding', 'System Setup', 'Ongoing Support', 'Regular Reviews'],
    benefits: ['Predictable Costs', 'Expert Knowledge', 'Reduced Downtime'],
    price: '£250',
  },
  {
    id: 'software',
    title: 'Bespoke Software Development',
    icon: Code2,
    overview: 'Custom-built applications, APIs, and internal tools designed to solve your specific business challenges.',
    target: 'Enterprises requiring unique digital solutions.',
    process: ['Requirements Gathering', 'Design & Prototyping', 'Development', 'Deployment'],
    benefits: ['Tailored Fit', 'Competitive Edge', 'Full Ownership'],
    price: '£2,500',
  },
  {
    id: 'network',
    title: 'Network Design & Optimisation',
    icon: Network,
    overview: 'High-performance network architecture, Wi-Fi solutions, and secure remote access for distributed teams.',
    target: 'Offices and remote-first organisations.',
    process: ['Site Survey', 'Architecture Design', 'Installation', 'Testing'],
    benefits: ['Fast Connectivity', 'Secure Access', 'Reliable Performance'],
    price: '£600',
  },
  {
    id: 'data',
    title: 'Data Analytics & BI',
    icon: Database,
    overview: 'Transform your raw data into actionable insights with custom dashboards and business intelligence tools.',
    target: 'Data-driven businesses looking to optimize operations.',
    process: ['Data Collection', 'Cleaning & Processing', 'Visualisation', 'Insights Delivery'],
    benefits: ['Better Decisions', 'Identified Trends', 'Operational Efficiency'],
    price: '£1,200',
  },
];

export default function Services() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-navy-900 mb-6">Our IT Services</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to empower British businesses in the digital age.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 space-y-32">
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Visual Part */}
            <div className="flex-1 w-full">
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-brand-50 flex items-center justify-center p-12 overflow-hidden">
                  <service.icon className="w-full h-full text-brand-600 opacity-20 absolute -bottom-10 -right-10 rotate-12" />
                  <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl border border-brand-100">
                    <service.icon className="w-16 h-16 text-brand-600 mb-6" />
                    <h3 className="text-2xl font-bold text-navy-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{service.overview}</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-navy-900 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                  Starting from {service.price}
                </div>
              </div>
            </div>

            {/* Content Part */}
            <div className="flex-1 space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold text-navy-900 mb-4">{service.title}</h2>
                <div className="flex items-center gap-2 text-brand-600 font-semibold text-sm uppercase tracking-wider">
                  <span>Ideal for:</span>
                  <span className="text-slate-600 normal-case tracking-normal font-medium">{service.target}</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-navy-900 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-brand-600" />
                    The Process
                  </h4>
                  <ul className="space-y-2">
                    {service.process.map((step) => (
                      <li key={step} className="text-slate-600 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-navy-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="text-slate-600 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Enquire About This Service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-12 lg:p-20 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Every business is unique. We offer bespoke IT packages tailored to your specific goals and budget.
          </p>
          <Link to="/contact" className="btn-primary bg-brand-600 hover:bg-brand-700">
            Contact Our Experts
          </Link>
        </div>
      </section>
    </div>
  );
}
