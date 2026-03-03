import React from 'react';
import { motion } from 'motion/react';
import { Monitor, Shield, Cloud, Cpu, Network, Database, ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Monitor,
    title: "Managed IT Support",
    overview: "Comprehensive 24/7 monitoring and helpdesk support for your entire team.",
    target: "SMEs looking for a complete outsourced IT department.",
    process: ["Initial Audit", "Onboarding", "24/7 Monitoring", "Proactive Maintenance"],
    benefits: ["Reduced Downtime", "Predictable Costs", "Expert Help on Demand"],
    price: "From £25 per user/month"
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    overview: "Advanced threat protection, vulnerability assessments, and employee training.",
    target: "Businesses handling sensitive client data or under compliance requirements.",
    process: ["Risk Assessment", "Security Implementation", "Staff Training", "Continuous Auditing"],
    benefits: ["Data Protection", "Regulatory Compliance", "Peace of Mind"],
    price: "From £495 per audit"
  },
  {
    icon: Cloud,
    title: "Cloud Migration & Hosting",
    overview: "Seamless transition to Microsoft 365, Azure, or private cloud environments.",
    target: "Companies seeking remote work flexibility and scalable infrastructure.",
    process: ["Strategy Planning", "Data Migration", "System Integration", "Post-Migration Support"],
    benefits: ["Remote Access", "Scalability", "Cost Efficiency"],
    price: "From £150 per server"
  },
  {
    icon: Cpu,
    title: "IT Consultancy & Strategy",
    overview: "Strategic technology roadmaps aligned with your long-term business goals.",
    target: "Growing businesses needing high-level technical direction.",
    process: ["Business Analysis", "Gap Identification", "Roadmap Creation", "Implementation Oversight"],
    benefits: ["Strategic Alignment", "Future-Proofing", "ROI Optimisation"],
    price: "From £850 per project"
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    overview: "Design and installation of high-speed, secure wired and wireless networks.",
    target: "New office fit-outs or businesses experiencing connectivity issues.",
    process: ["Site Survey", "Network Design", "Hardware Installation", "Testing & Optimisation"],
    benefits: ["High Performance", "Reliable Connectivity", "Secure Access"],
    price: "From £1,200 per site"
  },
  {
    icon: Database,
    title: "Backup & Disaster Recovery",
    overview: "Robust data backup solutions with rapid recovery protocols.",
    target: "Any business where data loss would be catastrophic.",
    process: ["Data Mapping", "Backup Scheduling", "Recovery Testing", "Emergency Response Plan"],
    benefits: ["Business Continuity", "Data Integrity", "Risk Mitigation"],
    price: "From £45 per month"
  }
];

export const Services = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-zinc-950 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Our IT Services</h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              We provide a full spectrum of technology solutions designed to make your business more efficient, secure, and profitable.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-zinc-50 rounded-3xl p-8 sm:p-12 border border-zinc-200 hover:border-indigo-300 transition-all hover:shadow-xl hover:shadow-indigo-50"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-8">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-indigo-600 transition-colors">
                    <service.icon className="text-indigo-600 w-8 h-8 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4">{service.title}</h3>
                    <p className="text-zinc-600 mb-6 leading-relaxed">{service.overview}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-3">Target Audience</h4>
                        <p className="text-sm text-zinc-600">{service.target}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-3">Process</h4>
                          <ul className="space-y-2">
                            {service.process.map((step, idx) => (
                              <li key={idx} className="text-sm text-zinc-600 flex items-center">
                                <ChevronRight className="w-3 h-3 text-indigo-500 mr-2" />
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-3">Benefits</h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="text-sm text-zinc-600 flex items-center">
                                <Check className="w-3 h-3 text-emerald-500 mr-2" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-zinc-200 flex items-center justify-between">
                        <span className="text-lg font-bold text-indigo-600">{service.price}</span>
                        <Link to="/contact" className="text-sm font-bold text-zinc-900 hover:text-indigo-600 transition-colors flex items-center">
                          Enquire Now <ChevronRight className="ml-1 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-medium text-zinc-500 mb-8 uppercase tracking-[0.2em]">Our Technology Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
            {['Microsoft', 'Cisco', 'Dell', 'HP', 'Sophos', 'Veeam'].map((brand) => (
              <span key={brand} className="text-2xl font-bold text-zinc-900">{brand}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
