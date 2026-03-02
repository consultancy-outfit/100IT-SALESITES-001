import React from 'react';
import { motion } from 'motion/react';
import { 
  Cloud, 
  ShieldAlert, 
  Headphones, 
  Server, 
  Code2, 
  Database,
  ChevronRight,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Managed IT Support",
    overview: "Comprehensive 24/7 helpdesk and proactive infrastructure management.",
    target: "SMEs looking for a reliable outsourced IT department.",
    process: ["Audit", "Onboarding", "24/7 Monitoring", "Monthly Reviews"],
    benefits: ["Reduced Downtime", "Predictable Costs", "Expert Access"],
    price: "From £250/month"
  },
  {
    icon: <ShieldAlert className="w-8 h-8" />,
    title: "Cybersecurity Solutions",
    overview: "Advanced threat protection, vulnerability assessments, and compliance management.",
    target: "Businesses handling sensitive data or requiring Cyber Essentials.",
    process: ["Risk Assessment", "Implementation", "Staff Training", "Incident Response"],
    benefits: ["Data Protection", "Regulatory Compliance", "Peace of Mind"],
    price: "From £400/audit"
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Migration & Strategy",
    overview: "Seamless transition to Microsoft 365, Azure, or AWS with zero data loss.",
    target: "Companies looking to modernise and enable remote work.",
    process: ["Strategy", "Data Migration", "Optimization", "Training"],
    benefits: ["Scalability", "Remote Access", "Cost Efficiency"],
    price: "From £1,500/project"
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Infrastructure Design",
    overview: "Building robust on-premise and hybrid network environments.",
    target: "Firms with complex hardware or high-performance needs.",
    process: ["Design", "Procurement", "Installation", "Testing"],
    benefits: ["High Performance", "Reliability", "Future-Proofing"],
    price: "Custom Quote"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Disaster Recovery",
    overview: "Automated backups and rapid recovery plans to ensure business continuity.",
    target: "Any business where data loss is not an option.",
    process: ["BIA Analysis", "Backup Setup", "Drill Testing", "Recovery Support"],
    benefits: ["Zero Data Loss", "Quick Restoration", "Risk Mitigation"],
    price: "From £150/month"
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "IT Consultancy",
    overview: "Strategic technology roadmaps aligned with your business goals.",
    target: "Leadership teams needing expert technical direction.",
    process: ["Discovery", "Analysis", "Roadmap Creation", "Execution Support"],
    benefits: ["Strategic Alignment", "ROI Focus", "Expert Guidance"],
    price: "From £850/day"
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-display font-extrabold text-slate-900 mb-6"
          >
            Our IT <span className="text-brand-600">Services</span>
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Tailored technology solutions designed to empower your business, 
            enhance security, and drive operational efficiency.
          </p>
        </div>

        <div className="grid gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="grid lg:grid-cols-12">
                <div className="lg:col-span-4 bg-slate-900 p-10 text-white flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-display font-bold mb-4">{service.title}</h2>
                    <p className="text-slate-400 leading-relaxed mb-8">{service.overview}</p>
                  </div>
                  <div className="pt-8 border-t border-white/10">
                    <div className="text-sm text-slate-500 uppercase font-bold tracking-widest mb-2">Starting At</div>
                    <div className="text-3xl font-display font-bold text-brand-400">{service.price}</div>
                  </div>
                </div>
                
                <div className="lg:col-span-8 p-10 lg:p-16">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-6">Process Steps</h3>
                      <div className="space-y-4">
                        {service.process.map((step, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center text-xs font-bold">
                              {sIdx + 1}
                            </div>
                            <span className="text-slate-700 font-medium">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-6">Key Benefits</h3>
                      <div className="space-y-4">
                        {service.benefits.map((benefit, bIdx) => (
                          <div key={bIdx} className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-emerald-500" />
                            <span className="text-slate-700 font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Ideal For</div>
                      <div className="text-slate-900 font-semibold">{service.target}</div>
                    </div>
                    <Link 
                      to="/contact" 
                      className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-600 transition-colors"
                    >
                      Enquire Now <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
