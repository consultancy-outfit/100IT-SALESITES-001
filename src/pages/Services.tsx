import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Cloud, 
  Server, 
  Headphones, 
  Monitor, 
  Database, 
  Wifi,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Headphones,
    title: "Managed IT Support",
    overview: "Comprehensive 24/7 IT support for your entire workforce, ensuring minimal downtime and maximum productivity.",
    target: "SMEs and growing UK enterprises without a full-time in-house IT department.",
    process: ["Initial Audit", "Onboarding", "24/7 Monitoring", "Proactive Maintenance", "Monthly Reporting"],
    benefits: ["Fixed monthly costs", "Unlimited remote support", "Fast response times", "Strategic IT planning"],
    price: 450
  },
  {
    icon: Shield,
    title: "Cyber Security Solutions",
    overview: "Enterprise-grade protection against evolving digital threats, including ransomware, phishing, and data breaches.",
    target: "Businesses handling sensitive client data or operating in regulated sectors.",
    process: ["Vulnerability Assessment", "Security Implementation", "Employee Training", "Continuous Monitoring", "Incident Response"],
    benefits: ["GDPR compliance", "Cyber Essentials certification", "Reduced risk profile", "Data protection"],
    price: 750
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    overview: "Scalable and secure cloud solutions including migration, management, and optimisation of Azure and AWS environments.",
    target: "Companies looking to modernise their infrastructure and enable remote working.",
    process: ["Readiness Assessment", "Migration Strategy", "Deployment", "Optimisation", "Ongoing Management"],
    benefits: ["Improved accessibility", "Reduced hardware costs", "Enhanced disaster recovery", "Global scalability"],
    price: 600
  },
  {
    icon: Server,
    title: "Network & Connectivity",
    overview: "High-performance business broadband, leased lines, and robust internal networking solutions.",
    target: "Offices requiring ultra-reliable and fast internet connectivity.",
    process: ["Site Survey", "Design", "Installation", "Testing", "Support"],
    benefits: ["Guaranteed speeds", "Low latency", "Secure guest access", "Failover protection"],
    price: 300
  },
  {
    icon: Database,
    title: "Data Backup & Recovery",
    overview: "Automated off-site backups and rapid disaster recovery planning to protect your business continuity.",
    target: "Any business where data loss would be catastrophic to operations.",
    process: ["Data Mapping", "Backup Setup", "Encryption", "Regular Testing", "Recovery Drills"],
    benefits: ["Peace of mind", "Minimal data loss", "Quick restoration", "Compliance adherence"],
    price: 200
  },
  {
    icon: Monitor,
    title: "IT Consultancy",
    overview: "Strategic technology advice to align your IT infrastructure with your long-term business goals.",
    target: "Leadership teams planning digital transformation or major infrastructure changes.",
    process: ["Discovery", "Analysis", "Strategy Development", "Implementation Roadmap", "Review"],
    benefits: ["Expert guidance", "ROI focused", "Future-proofed tech", "Competitive advantage"],
    price: 1200
  }
];

export default function Services() {
  return (
    <div className="bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Our IT Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
            From day-to-day support to complex digital transformations, we provide the technology solutions your business needs to excel.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden"
              >
                <div className="grid lg:grid-cols-12">
                  <div className="lg:col-span-5 p-8 md:p-12 bg-slate-50 border-r border-slate-100">
                    <div className="w-16 h-16 bg-brand-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-600/20">
                      <service.icon size={32} />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">{service.title}</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">{service.overview}</p>
                    <div className="space-y-4">
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Ideal For</p>
                      <p className="text-slate-900 font-medium">{service.target}</p>
                    </div>
                    <div className="mt-12 pt-8 border-t border-slate-200">
                      <p className="text-sm text-slate-500 mb-2">Starting from</p>
                      <p className="text-4xl font-display font-bold text-brand-600">£{service.price}<span className="text-lg text-slate-400 font-normal"> / month</span></p>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-7 p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center space-x-2">
                          <CheckCircle2 size={20} className="text-brand-600" />
                          <span>Key Benefits</span>
                        </h3>
                        <ul className="space-y-4">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start space-x-3 text-slate-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2 shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center space-x-2">
                          <ArrowRight size={20} className="text-brand-600" />
                          <span>Our Process</span>
                        </h3>
                        <div className="space-y-6">
                          {service.process.map((step, i) => (
                            <div key={i} className="flex items-center space-x-4">
                              <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-bold shrink-0">
                                {i + 1}
                              </div>
                              <span className="text-slate-700 font-medium">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-12 flex justify-end">
                      <Link to="/contact" className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-all">
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-12">Compliance & Standards</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50">
            <div className="flex flex-col items-center">
              <Shield size={48} className="mb-4" />
              <span className="font-bold">ISO 27001</span>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle2 size={48} className="mb-4" />
              <span className="font-bold">Cyber Essentials</span>
            </div>
            <div className="flex flex-col items-center">
              <Database size={48} className="mb-4" />
              <span className="font-bold">GDPR Compliant</span>
            </div>
            <div className="flex flex-col items-center">
              <Wifi size={48} className="mb-4" />
              <span className="font-bold">Ofcom Registered</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
