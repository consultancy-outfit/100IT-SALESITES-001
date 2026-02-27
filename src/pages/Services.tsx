import React from 'react';
import { motion } from 'motion/react';
import { 
  Server, 
  ShieldAlert, 
  Cloud, 
  Headphones, 
  Code2, 
  Database,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Headphones className="w-10 h-10" />,
    title: "Managed IT Support",
    overview: "Comprehensive 24/7 helpdesk and proactive maintenance for your entire IT estate.",
    audience: "SMEs looking for a reliable outsourced IT department.",
    process: ["Audit & Onboarding", "Proactive Monitoring", "Unlimited Helpdesk Support", "Quarterly Reviews"],
    benefits: ["Reduced downtime", "Predictable monthly costs", "Access to expert engineers"],
    startingPrice: "£250/month"
  },
  {
    icon: <ShieldAlert className="w-10 h-10" />,
    title: "Cybersecurity Solutions",
    overview: "Multi-layered defense strategies including firewall management, EDR, and staff training.",
    audience: "Businesses handling sensitive client data or regulated industries.",
    process: ["Vulnerability Assessment", "Security Implementation", "Continuous Monitoring", "Incident Response"],
    benefits: ["Protection against ransomware", "GDPR compliance", "Business continuity"],
    startingPrice: "£450/month"
  },
  {
    icon: <Cloud className="w-10 h-10" />,
    title: "Cloud Services (M365 & Azure)",
    overview: "Seamless migration and management of cloud-based productivity and infrastructure.",
    audience: "Companies aiming for flexible, remote-first working environments.",
    process: ["Cloud Readiness Assessment", "Migration Planning", "Execution", "Ongoing Optimization"],
    benefits: ["Scalability", "Enhanced collaboration", "Reduced hardware costs"],
    startingPrice: "£150/month"
  },
  {
    icon: <Database className="w-10 h-10" />,
    title: "Backup & Disaster Recovery",
    overview: "Automated off-site backups and rapid recovery protocols to protect your business data.",
    audience: "Any business where data loss would be catastrophic.",
    process: ["Data Mapping", "Backup Configuration", "Regular Testing", "Recovery Drills"],
    benefits: ["Peace of mind", "Minimal RTO/RPO", "Resilience against hardware failure"],
    startingPrice: "£100/month"
  },
  {
    icon: <Server className="w-10 h-10" />,
    title: "Network Infrastructure",
    overview: "Design, installation, and management of high-performance wired and wireless networks.",
    audience: "Offices, warehouses, and multi-site organizations.",
    process: ["Site Survey", "Network Design", "Hardware Installation", "Performance Tuning"],
    benefits: ["Fast connectivity", "Secure guest access", "Future-proofed cabling"],
    startingPrice: "£750 (One-off project)"
  },
  {
    icon: <Code2 className="w-10 h-10" />,
    title: "IT Consultancy & Strategy",
    overview: "Expert guidance on technology roadmaps, budgeting, and digital transformation.",
    audience: "Growing businesses needing high-level technical leadership.",
    process: ["Business Goal Alignment", "Technology Gap Analysis", "Strategic Roadmap", "Implementation Oversight"],
    benefits: ["ROI-focused tech spend", "Competitive advantage", "Scalable growth"],
    startingPrice: "£1,200/day"
  }
];

const Services = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            Our IT <span className="text-brand-600">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Tailored technology solutions designed to drive efficiency, security, and growth for British businesses.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-20 h-20 bg-brand-50 rounded-3xl flex items-center justify-center text-brand-600 mb-8">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">{service.overview}</p>
                  
                  <div className="space-y-6 mb-10">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Ideal For</h4>
                      <p className="text-slate-700 font-medium">{service.audience}</p>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Process</h4>
                        <ul className="space-y-2">
                          {service.process.map((step, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Key Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Starting From</p>
                      <p className="text-2xl font-bold text-slate-900">{service.startingPrice}</p>
                    </div>
                    <Link to="/contact" className="bg-brand-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-700 transition-all">
                      Enquire Now
                    </Link>
                  </div>
                </div>
                
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src={`https://picsum.photos/seed/service-${index}/800/600`} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hidden md:block max-w-xs">
                    <p className="text-slate-600 text-sm italic">"The implementation was flawless and the ongoing support is second to none."</p>
                    <p className="text-brand-600 font-bold text-xs mt-4 uppercase tracking-wider">— UK Client Review</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">Need a Custom Solution?</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">We understand that every business is unique. Our consultants are ready to design a bespoke IT strategy for your specific needs.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-500 text-white px-10 py-5 rounded-full font-bold hover:bg-brand-600 transition-all text-lg">
            Book a Strategy Call <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
