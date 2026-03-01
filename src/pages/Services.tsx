import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Cloud, 
  Cpu, 
  Headset, 
  Code2, 
  Database, 
  Network,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    icon: Headset,
    overview: 'Comprehensive 24/7 IT management for your entire business infrastructure.',
    targetAudience: 'SMEs and growing enterprises looking for a dedicated IT department without the overhead.',
    process: [
      'Initial Infrastructure Audit',
      'Strategic Roadmap Development',
      '24/7 Monitoring & Maintenance',
      'Unlimited Remote & On-site Support',
    ],
    benefits: [
      'Predictable monthly costs',
      'Reduced downtime',
      'Expert advice on tap',
      'Proactive issue resolution',
    ],
    startingPrice: '£450/month',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    icon: ShieldCheck,
    overview: 'Advanced threat protection, vulnerability assessments, and employee training.',
    targetAudience: 'Businesses handling sensitive data or operating in regulated industries like finance and legal.',
    process: [
      'Security Risk Assessment',
      'Firewall & Endpoint Protection',
      'Dark Web Monitoring',
      'Staff Security Awareness Training',
    ],
    benefits: [
      'GDPR compliance assurance',
      'Protection against ransomware',
      'Enhanced client trust',
      'Business continuity protection',
    ],
    startingPrice: '£299/month',
  },
  {
    id: 'cloud-services',
    title: 'Cloud Infrastructure',
    icon: Cloud,
    overview: 'Seamless migration and management of cloud environments (Azure, AWS, Private Cloud).',
    targetAudience: 'Companies looking to increase flexibility, remote work capabilities, and scalability.',
    process: [
      'Cloud Readiness Assessment',
      'Migration Strategy Planning',
      'Secure Data Transfer',
      'Ongoing Cloud Optimisation',
    ],
    benefits: [
      'Work from anywhere',
      'Infinite scalability',
      'Reduced hardware costs',
      'Automated backups',
    ],
    startingPrice: '£150/month',
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    icon: Cpu,
    overview: 'Modernising legacy systems and implementing automation to drive efficiency.',
    targetAudience: 'Established businesses needing to update old processes and embrace modern technology.',
    process: [
      'Workflow Analysis',
      'Technology Stack Evaluation',
      'Implementation & Integration',
      'User Adoption Training',
    ],
    benefits: [
      'Increased productivity',
      'Better data insights',
      'Competitive advantage',
      'Future-proofed operations',
    ],
    startingPrice: '£2,500/project',
  },
  {
    id: 'it-consultancy',
    title: 'Strategic IT Consultancy',
    icon: Network,
    overview: 'Expert CIO-level guidance to align your IT strategy with your business goals.',
    targetAudience: 'Leadership teams needing high-level technical direction for major business decisions.',
    process: [
      'Business Goal Alignment',
      'Budget Planning & Optimisation',
      'Vendor Management',
      'Disaster Recovery Planning',
    ],
    benefits: [
      'Clear ROI on IT spend',
      'Reduced technical debt',
      'Risk mitigation',
      'Informed decision making',
    ],
    startingPrice: '£1,200/day',
  },
];

export default function Services() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-6xl mb-6">Our IT Services</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We offer a full suite of IT solutions designed to empower British businesses. From day-to-day support to long-term strategic planning, we've got you covered.
            </p>
          </motion.div>
        </div>

        <div className="space-y-24">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-12 items-start ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="lg:w-1/2">
                <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-primary-600/20">
                  <service.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl mb-6">{service.title}</h2>
                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  {service.overview}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Ideal For</h4>
                  <p className="text-slate-600">{service.targetAudience}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Our Process</h4>
                    <ul className="space-y-3">
                      {service.process.map((step, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Key Benefits</h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div>
                    <span className="text-sm text-slate-500 block mb-1">Starting from</span>
                    <span className="text-2xl font-display font-bold text-slate-900">{service.startingPrice}</span>
                  </div>
                  <Link
                    to="/contact"
                    className="bg-primary-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-700 transition-all flex items-center gap-2"
                  >
                    Enquire Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Visual Placeholder */}
              <div className="lg:w-1/2 w-full aspect-video bg-slate-100 rounded-[2.5rem] overflow-hidden relative group">
                <img
                  src={`https://picsum.photos/seed/${service.id}/800/600`}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                  <p className="text-white text-lg font-medium">
                    Delivering excellence in {service.title.toLowerCase()} for clients across the UK.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
