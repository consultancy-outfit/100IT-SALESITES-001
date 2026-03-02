import { motion } from 'framer-motion';
import { Shield, Cloud, Monitor, Database, Lock, Globe, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Managed IT Support",
    overview: "Comprehensive 24/7 IT monitoring and support for UK businesses, ensuring your systems are always up and running.",
    target: "Small to Medium Enterprises (SMEs)",
    process: ["Initial Audit", "System Setup", "24/7 Monitoring", "Proactive Maintenance", "On-demand Support"],
    benefits: ["Reduced Downtime", "Predictable Costs", "Expert Guidance", "Peace of Mind"],
    price: "£299",
    icon: <Monitor className="text-indigo-600" size={32} />
  },
  {
    title: "Cybersecurity Solutions",
    overview: "Advanced threat protection, security audits, and employee training to shield your business from digital threats.",
    target: "Data-sensitive Businesses & Fintech",
    process: ["Vulnerability Assessment", "Firewall Setup", "Endpoint Security", "Employee Training", "Incident Response"],
    benefits: ["GDPR Compliance", "Data Protection", "Threat Mitigation", "Risk Reduction"],
    price: "£499",
    icon: <Shield className="text-indigo-600" size={32} />
  },
  {
    title: "Cloud Migration & Hosting",
    overview: "Seamless transition to secure cloud environments like AWS, Azure, or Google Cloud, optimized for performance.",
    target: "Growing Startups & Remote Teams",
    process: ["Cloud Strategy", "Data Migration", "Environment Setup", "Performance Tuning", "Ongoing Management"],
    benefits: ["Scalability", "Remote Access", "Cost Efficiency", "Disaster Recovery"],
    price: "£399",
    icon: <Cloud className="text-indigo-600" size={32} />
  },
  {
    title: "Network Infrastructure",
    overview: "Design and implementation of robust, high-speed wired and wireless networks for modern office environments.",
    target: "Offices & Co-working Spaces",
    process: ["Site Survey", "Network Design", "Hardware Installation", "Security Configuration", "Testing"],
    benefits: ["High Speed", "Reliable Connectivity", "Secure Access", "Easy Management"],
    price: "£599",
    icon: <Globe className="text-indigo-600" size={32} />
  },
  {
    title: "Data Backup & Recovery",
    overview: "Automated, secure off-site backups and rapid recovery plans to ensure business continuity in any disaster.",
    target: "All UK Businesses",
    process: ["Backup Strategy", "Secure Storage Setup", "Automation", "Regular Testing", "Recovery Drills"],
    benefits: ["Zero Data Loss", "Fast Recovery", "Business Continuity", "Compliance"],
    price: "£199",
    icon: <Database className="text-indigo-600" size={32} />
  },
  {
    title: "IT Consultancy",
    overview: "Strategic technology planning to align your IT infrastructure with your long-term business goals.",
    target: "Business Owners & Directors",
    process: ["Goal Analysis", "Tech Roadmap", "Budget Planning", "Vendor Selection", "Implementation Oversight"],
    benefits: ["Strategic Alignment", "ROI Optimization", "Future-proofing", "Expert Insight"],
    price: "£799",
    icon: <Zap className="text-indigo-600" size={32} />
  }
];

export default function Services() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#4f46e5,transparent_50%)]"></div>
        </div>
        <div className="section-padding relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Our <span className="text-indigo-400">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-xl max-w-2xl mx-auto"
          >
            Tailored IT solutions designed to empower UK businesses with security, scalability, and efficiency.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding -mt-16 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 space-y-6">
                  <div className="p-5 bg-indigo-50 rounded-3xl w-fit group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Target: {service.target}</p>
                  </div>
                  <div className="pt-4">
                    <span className="text-sm text-slate-400">Starting from</span>
                    <div className="text-3xl font-bold text-slate-900">{service.price}<span className="text-sm font-normal text-slate-500">/mo</span></div>
                  </div>
                </div>

                <div className="md:w-2/3 space-y-8">
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {service.overview}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-slate-900">Process Steps</h4>
                      <ul className="space-y-3">
                        {service.process.map((step, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                            <ArrowRight size={14} className="text-indigo-400" />
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-slate-900">Key Benefits</h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle2 size={14} className="text-emerald-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all"
                  >
                    Get Started <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white space-y-8 relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Need a Custom Solution?</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every business is unique. We can design a bespoke IT package that fits your specific requirements and budget.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-indigo-600 text-white px-10 py-5 rounded-full font-bold hover:bg-indigo-700 transition-all"
          >
            Book a Free Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
