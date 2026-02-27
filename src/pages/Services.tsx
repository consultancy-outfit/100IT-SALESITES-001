import React from 'react';
import { motion } from 'motion/react';
import { 
  Headset, ShieldCheck, CloudLightning, Network, 
  Database, Lightbulb, PhoneCall, Check, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'managed-support',
    icon: <Headset className="w-8 h-8" />,
    title: 'Managed IT Support',
    price: '£25',
    priceSuffix: 'per user/month',
    overview: 'Comprehensive 24/7 proactive monitoring and helpdesk support for your entire team.',
    audience: 'SMEs looking for reliable, scalable IT support without the cost of an internal team.',
    benefits: [
      'Unlimited remote & onsite support',
      'Proactive system monitoring',
      'Patch management & updates',
      'Dedicated account manager'
    ],
    process: ['Audit', 'Onboarding', 'Monitoring', 'Optimization'],
    color: 'bg-blue-50 text-blue-600 border-blue-100'
  },
  {
    id: 'cybersecurity',
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Cybersecurity & Protection',
    price: '£450',
    priceSuffix: 'starting from',
    overview: 'Multi-layered security solutions to protect your business from evolving digital threats.',
    audience: 'Businesses handling sensitive data or requiring Cyber Essentials certification.',
    benefits: [
      'Endpoint detection & response',
      'Phishing simulation & training',
      'Vulnerability assessments',
      'Firewall & VPN management'
    ],
    process: ['Risk Assessment', 'Implementation', 'Training', 'Monitoring'],
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100'
  },
  {
    id: 'cloud-migration',
    icon: <CloudLightning className="w-8 h-8" />,
    title: 'Cloud Strategy & Migration',
    price: '£1,200',
    priceSuffix: 'per project',
    overview: 'Seamless transition to AWS, Azure, or Google Cloud with zero downtime.',
    audience: 'Companies looking to reduce hardware costs and improve remote accessibility.',
    benefits: [
      'Zero-downtime migration',
      'Cloud cost optimization',
      'Hybrid cloud solutions',
      'Scalable infrastructure'
    ],
    process: ['Planning', 'Architecture', 'Migration', 'Testing'],
    color: 'bg-brand-50 text-brand-600 border-brand-100'
  },
  {
    id: 'network-infra',
    icon: <Network className="w-8 h-8" />,
    title: 'Network Infrastructure',
    price: '£800',
    priceSuffix: 'starting from',
    overview: 'High-performance wired and wireless networking solutions for modern offices.',
    audience: 'New office fit-outs or businesses experiencing slow connectivity.',
    benefits: [
      'Structured cabling (Cat6/Fiber)',
      'Enterprise Wi-Fi 6 solutions',
      'SD-WAN implementation',
      'Network security audits'
    ],
    process: ['Site Survey', 'Design', 'Installation', 'Certification'],
    color: 'bg-purple-50 text-purple-600 border-purple-100'
  },
  {
    id: 'disaster-recovery',
    icon: <Database className="w-8 h-8" />,
    title: 'Business Continuity',
    price: '£150',
    priceSuffix: 'per month',
    overview: 'Robust backup and disaster recovery plans to ensure your business never stops.',
    audience: 'Any business where data loss or downtime would be catastrophic.',
    benefits: [
      'Automated offsite backups',
      'Rapid recovery (RTO/RPO)',
      'Disaster recovery testing',
      'Data encryption at rest'
    ],
    process: ['Impact Analysis', 'Strategy', 'Setup', 'Testing'],
    color: 'bg-amber-50 text-amber-600 border-amber-100'
  },
  {
    id: 'it-consultancy',
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'IT Strategy & vCIO',
    price: '£500',
    priceSuffix: 'per session',
    overview: 'Strategic technology planning to align your IT with your long-term business goals.',
    audience: 'Growing businesses needing high-level technical leadership.',
    benefits: [
      'Technology roadmapping',
      'Budget planning & ROI',
      'Compliance & auditing',
      'Vendor management'
    ],
    process: ['Discovery', 'Strategy', 'Execution', 'Review'],
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100'
  },
  {
    id: 'unified-comm',
    icon: <PhoneCall className="w-8 h-8" />,
    title: 'Unified Communications',
    price: '£12',
    priceSuffix: 'per user/month',
    overview: 'Modern VoIP and collaboration tools to keep your team connected anywhere.',
    audience: 'Remote or hybrid teams needing professional communication tools.',
    benefits: [
      'Cloud-based VoIP systems',
      'Microsoft Teams integration',
      'Video conferencing solutions',
      'Mobile app softphones'
    ],
    process: ['Evaluation', 'Provisioning', 'Training', 'Support'],
    color: 'bg-rose-50 text-rose-600 border-rose-100'
  }
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-20 md:py-32 text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl mb-6">Expert IT Services <br/><span className="text-brand-400">Tailored for the UK</span></h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              From day-to-day support to complex cloud migrations, we provide the technical expertise you need to thrive in the digital age.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-600/10 blur-[100px]"></div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={service.id}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Info */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border ${service.color}`}>
                      {service.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl">{service.title}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">{service.overview}</p>
                    
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Ideal For</h4>
                      <p className="text-slate-700 font-medium">{service.audience}</p>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-slate-900">{service.price}</span>
                      <span className="text-slate-500 font-medium">{service.priceSuffix}</span>
                    </div>
                    
                    <div className="pt-4">
                      <Link 
                        to="/contact" 
                        className="inline-flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-full font-bold hover:bg-brand-700 transition-all"
                      >
                        Enquire Now <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>

                  {/* Right: Details */}
                  <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h4 className="text-lg font-bold flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm">1</span>
                        Key Benefits
                      </h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600">
                            <Check size={18} className="text-emerald-500 mt-1 shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <h4 className="text-lg font-bold flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm">2</span>
                        Our Process
                      </h4>
                      <div className="relative pl-4 border-l-2 border-brand-100 space-y-6">
                        {service.process.map((step, i) => (
                          <div key={i} className="relative">
                            <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-white border-2 border-brand-600"></div>
                            <span className="font-semibold text-slate-900 block">{step}</span>
                            <span className="text-xs text-slate-500 uppercase">Phase 0{i+1}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {idx !== services.length - 1 && <div className="mt-16 border-b border-slate-100"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Trust Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know about our service delivery and UK operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "Do you offer 24/7 support?",
                a: "Yes, we provide 24/7/365 monitoring and emergency support for all our managed services clients, with guaranteed response times."
              },
              {
                q: "Are you GDPR compliant?",
                a: "Absolutely. As a UK-based company, we are fully registered with the ICO and follow strict data protection protocols for all client data."
              },
              {
                q: "Do we have to sign a long-term contract?",
                a: "We offer flexible terms. While most clients prefer annual agreements for better rates, we also offer rolling monthly contracts for certain services."
              },
              {
                q: "Can you support our remote workers?",
                a: "Yes, we specialise in hybrid work environments, providing secure VPNs, remote desktop solutions, and cloud-based collaboration tools."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h4 className="text-lg font-bold mb-4 text-slate-900">{faq.q}</h4>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-600 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Need a Custom Solution?</h2>
          <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">Our consultants are ready to design a bespoke IT strategy that fits your unique business requirements and budget.</p>
          <Link 
            to="/contact" 
            className="bg-white text-brand-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-50 transition-all shadow-xl shadow-black/10"
          >
            Request a Bespoke Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
