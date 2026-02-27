import React from 'react';
import { motion } from 'motion/react';
import { 
  Server, 
  ShieldCheck, 
  Cloud, 
  Headphones, 
  LineChart, 
  Database,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Managed IT Support",
    icon: <Headphones className="text-brand-600" size={32} />,
    overview: "Comprehensive 24/7 helpdesk and proactive maintenance for your entire IT estate.",
    target: "SMEs and mid-market enterprises looking to outsource their IT operations.",
    process: ["Audit", "Onboarding", "Monitoring", "Continuous Support"],
    benefits: ["Reduced downtime", "Predictable costs", "Expert support access"],
    price: "From £45 / user / month"
  },
  {
    title: "Cybersecurity Solutions",
    icon: <ShieldCheck className="text-brand-600" size={32} />,
    overview: "Advanced threat detection, endpoint protection, and security awareness training.",
    target: "Businesses handling sensitive data or requiring Cyber Essentials certification.",
    process: ["Risk Assessment", "Implementation", "Threat Hunting", "Compliance Reporting"],
    benefits: ["GDPR compliance", "Data protection", "Peace of mind"],
    price: "From £250 / month"
  },
  {
    title: "Cloud Infrastructure",
    icon: <Cloud className="text-brand-600" size={32} />,
    overview: "Strategic migration and management of Azure, AWS, and Microsoft 365 environments.",
    target: "Companies looking to scale, improve accessibility, and reduce hardware costs.",
    process: ["Strategy", "Migration", "Optimisation", "Management"],
    benefits: ["Scalability", "Remote work enablement", "Cost efficiency"],
    price: "From £500 / project"
  },
  {
    title: "IT Consultancy",
    icon: <LineChart className="text-brand-600" size={32} />,
    overview: "Strategic technology roadmapping and vCTO services to align IT with business goals.",
    target: "Leadership teams needing expert guidance on digital transformation.",
    process: ["Discovery", "Strategy Design", "Implementation Oversight", "Review"],
    benefits: ["Strategic alignment", "Technology ROI", "Future-proofing"],
    price: "From £1,200 / day"
  },
  {
    title: "Disaster Recovery",
    icon: <Database className="text-brand-600" size={32} />,
    overview: "Robust backup solutions and business continuity planning for worst-case scenarios.",
    target: "Enterprises where data loss or downtime is business-critical.",
    process: ["BIA Analysis", "Solution Design", "Testing", "Ongoing Validation"],
    benefits: ["Zero data loss", "Rapid recovery", "Insurance compliance"],
    price: "From £150 / month"
  }
];

export default function Services() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            Our <span className="text-brand-600">Core Services</span>
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tailored IT solutions designed to solve complex business challenges and drive growth for UK enterprises.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-8 p-8 lg:p-12 rounded-[2.5rem] border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 space-y-6">
                <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold">{service.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">{service.overview}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Target Audience</h4>
                    <p className="text-sm text-slate-600">{service.target}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((b, i) => (
                        <li key={i} className="flex items-center text-sm text-slate-600">
                          <CheckCircle2 size={14} className="text-brand-500 mr-2" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 bg-slate-50 rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 mb-4">Our Process</h4>
                  <div className="space-y-4">
                    {service.process.map((p, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-brand-600 text-white text-[10px] flex items-center justify-center font-bold mr-3">
                          {i + 1}
                        </div>
                        <span className="text-sm font-medium text-slate-700">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Starting Price</p>
                  <p className="text-2xl font-display font-bold text-brand-700 mb-6">{service.price}</p>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-600 text-white font-bold hover:bg-brand-700 transition-colors"
                  >
                    Enquire Now
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
