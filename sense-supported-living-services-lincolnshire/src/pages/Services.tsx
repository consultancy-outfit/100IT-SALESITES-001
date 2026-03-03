import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Cloud, 
  Headphones, 
  Lock, 
  RefreshCw, 
  Network,
  Database,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Headphones className="text-emerald-600" size={40} />,
    title: "Managed IT Support",
    overview: "Comprehensive 24/7 helpdesk and proactive maintenance for your entire IT estate.",
    target: "SMEs looking for a reliable, outsourced IT department.",
    process: ["Audit", "Onboarding", "Monitoring", "Continuous Support"],
    benefits: ["Reduced downtime", "Fixed monthly costs", "Expert advice on tap"],
    price: "£25 per user/month"
  },
  {
    icon: <ShieldCheck className="text-emerald-600" size={40} />,
    title: "Cybersecurity & Compliance",
    overview: "Advanced threat protection, firewall management, and GDPR compliance auditing.",
    target: "Businesses handling sensitive data or requiring Cyber Essentials certification.",
    process: ["Vulnerability Scan", "Hardening", "Employee Training", "Reporting"],
    benefits: ["Data breach prevention", "Legal compliance", "Client trust"],
    price: "£495 per audit"
  },
  {
    icon: <Cloud className="text-emerald-600" size={40} />,
    title: "Cloud Solutions & Migration",
    overview: "Seamless transition to Microsoft 365, Azure, or private cloud environments.",
    target: "Companies moving away from legacy on-premise servers.",
    process: ["Readiness Assessment", "Migration Plan", "Execution", "Optimisation"],
    benefits: ["Work from anywhere", "Scalability", "Lower hardware costs"],
    price: "£1,200 starting project"
  },
  {
    icon: <RefreshCw className="text-emerald-600" size={40} />,
    title: "Disaster Recovery & Backup",
    overview: "Automated off-site backups and rapid recovery plans to ensure business continuity.",
    target: "Any business where data loss would be catastrophic.",
    process: ["Risk Analysis", "Backup Setup", "Testing", "Recovery Drills"],
    benefits: ["Zero data loss", "Fast recovery times", "Insurance compliance"],
    price: "£45 per month"
  },
  {
    icon: <Network className="text-emerald-600" size={40} />,
    title: "Network Infrastructure",
    overview: "Design and installation of high-speed WiFi, structured cabling, and secure VPNs.",
    target: "Offices, warehouses, and multi-site organisations.",
    process: ["Site Survey", "Design", "Installation", "Certification"],
    benefits: ["Eliminate dead zones", "Secure remote access", "Future-proofed speed"],
    price: "£850 starting install"
  },
  {
    icon: <Database className="text-emerald-600" size={40} />,
    title: "IT Consultancy & Strategy",
    overview: "Virtual CTO services to align your technology roadmap with business goals.",
    target: "Leadership teams planning for growth or digital transformation.",
    process: ["Discovery", "Strategy Workshop", "Roadmap Creation", "Review"],
    benefits: ["Smart investment", "Competitive edge", "Technology alignment"],
    price: "£150 per hour"
  }
];

const Services = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Professional care and technology solutions delivered with a personal, British touch.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row"
            >
              <div className="p-8 lg:p-12 lg:w-2/3">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-emerald-50 rounded-2xl">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                </div>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.overview}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                      <ChevronRight className="text-emerald-600 mr-1" size={18} />
                      Target Audience
                    </h4>
                    <p className="text-slate-600 text-sm">{service.target}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                      <ChevronRight className="text-emerald-600 mr-1" size={18} />
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((b, i) => (
                        <li key={i} className="text-slate-600 text-sm flex items-center">
                          <CheckCircle2 className="text-emerald-500 mr-2" size={14} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-8">
                  <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-xs">Our Process</h4>
                  <div className="flex flex-wrap gap-4">
                    {service.process.map((step, i) => (
                      <div key={i} className="flex items-center">
                        <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs flex items-center justify-center font-bold mr-2">
                          {i + 1}
                        </span>
                        <span className="text-sm font-medium text-slate-700">{step}</span>
                        {i < service.process.length - 1 && (
                          <div className="ml-4 w-4 h-px bg-slate-200 hidden sm:block" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center items-center text-center text-white">
                <p className="text-slate-400 mb-2 uppercase tracking-widest text-xs font-bold">Starting From</p>
                <div className="text-5xl font-bold mb-8">{service.price}</div>
                <Link
                  to="/contact"
                  className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg"
                >
                  Enquire Now
                </Link>
                <p className="mt-6 text-xs text-slate-500">
                  * Prices exclude VAT. Final quote subject to site survey and specific requirements.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        <div className="bg-white p-12 rounded-3xl shadow-lg border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Need a Custom Solution?</h2>
          <p className="text-slate-600 mb-8">
            Every business is unique. We can tailor a package that fits your specific operational needs and budget.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all"
          >
            Request a Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
