import React from 'react';
import { motion } from 'motion/react';
import { Shield, Cloud, Headphones, Search, Database, Lock, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    id: 'managed-it',
    icon: <Headphones className="text-indigo-600" />,
    title: "Managed IT Support",
    overview: "Comprehensive 24/7 monitoring and helpdesk support for your entire team.",
    target: "SMEs with 10-250 employees looking for a reliable outsourced IT department.",
    process: ["Initial Audit", "Onboarding & Documentation", "24/7 Monitoring", "Proactive Maintenance", "Monthly Reporting"],
    benefits: ["Fixed monthly costs", "Unlimited remote support", "Reduced downtime", "Strategic IT advice"],
    price: "From £35 per user/month"
  },
  {
    id: 'cloud-solutions',
    icon: <Cloud className="text-indigo-600" />,
    title: "Cloud Infrastructure",
    overview: "Secure, scalable cloud migration and management using Azure and AWS.",
    target: "Businesses looking to modernize their legacy systems and enable remote work.",
    process: ["Readiness Assessment", "Migration Strategy", "Implementation", "Security Hardening", "Ongoing Optimization"],
    benefits: ["Work from anywhere", "Enhanced scalability", "Lower hardware costs", "Built-in redundancy"],
    price: "From £499 per project"
  },
  {
    id: 'cybersecurity',
    icon: <Shield className="text-indigo-600" />,
    title: "Cybersecurity Solutions",
    overview: "Multi-layered protection against evolving digital threats and ransomware.",
    target: "Companies handling sensitive data or operating in regulated UK sectors.",
    process: ["Vulnerability Scan", "Security Roadmap", "Implementation of Controls", "Staff Training", "Continuous Monitoring"],
    benefits: ["Peace of mind", "GDPR compliance", "Reduced risk of breach", "Cyber Essentials certification support"],
    price: "From £150 per month"
  },
  {
    id: 'it-consulting',
    icon: <Search className="text-indigo-600" />,
    title: "Strategic IT Consulting",
    overview: "Expert guidance to align your technology with your long-term business goals.",
    target: "Leadership teams needing high-level technical direction without a full-time CTO.",
    process: ["Business Goal Alignment", "Infrastructure Review", "Gap Analysis", "Strategic Roadmap", "Execution Oversight"],
    benefits: ["Better ROI on tech spend", "Future-proofed systems", "Competitive advantage", "Risk mitigation"],
    price: "From £850 per day"
  },
  {
    id: 'disaster-recovery',
    icon: <Database className="text-indigo-600" />,
    title: "Disaster Recovery & Backup",
    overview: "Robust data protection strategies to ensure business continuity in any crisis.",
    target: "Any business where data loss or downtime would be catastrophic.",
    process: ["Risk Assessment", "Backup Strategy Design", "Implementation", "Regular Testing", "Recovery Drills"],
    benefits: ["Rapid recovery times", "Data integrity assurance", "Compliance with UK regulations", "Minimal business disruption"],
    price: "From £95 per month"
  }
];

export default function Services() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-slate-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our IT Services</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Tailored technology solutions designed to drive efficiency, security, and growth for UK businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <div className="space-y-12">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden"
            >
              <div className="grid lg:grid-cols-12 gap-0">
                {/* Left Column: Overview */}
                <div className="lg:col-span-5 p-8 lg:p-12 bg-slate-50/50 border-r border-slate-100">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-slate-600 mb-8 text-lg leading-relaxed">{service.overview}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Target Audience</h4>
                    <p className="text-slate-700 font-medium">{service.target}</p>
                  </div>

                  <div className="p-6 bg-indigo-600 rounded-2xl text-white">
                    <p className="text-sm font-medium text-indigo-100 mb-1">Starting Price</p>
                    <p className="text-2xl font-bold">{service.price}</p>
                    <p className="text-[10px] text-indigo-200 mt-2 uppercase tracking-widest font-bold">Excluding VAT</p>
                  </div>
                </div>

                {/* Right Column: Details */}
                <div className="lg:col-span-7 p-8 lg:p-12">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Cpu size={20} className="text-indigo-600" /> Our Process
                      </h3>
                      <ul className="space-y-4">
                        {service.process.map((step, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-3">
                            <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {sIdx + 1}
                            </span>
                            <span className="text-slate-600">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <CheckCircle2 size={20} className="text-indigo-600" /> Key Benefits
                      </h3>
                      <ul className="space-y-4">
                        {service.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3">
                            <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" />
                            <span className="text-slate-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-12 pt-12 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <p className="text-slate-500 text-sm italic">
                      Interested in this service? Let's discuss your specific needs.
                    </p>
                    <Link
                      to="/contact"
                      className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2"
                    >
                      Enquire Now <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-white border border-slate-200 rounded-[40px] p-12 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Not sure what you need?</h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
            Our experts can provide a comprehensive IT audit to identify gaps in your current infrastructure and recommend the best path forward.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
          >
            Book a Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
