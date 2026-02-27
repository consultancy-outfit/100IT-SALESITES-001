import { motion } from 'motion/react';
import { Shield, Cloud, Cpu, Headphones, Code, Database, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: "Managed IT Support",
      icon: Headphones,
      overview: "Comprehensive 24/7 technical support for your entire organisation, from desktop issues to server maintenance.",
      target: "SMEs and mid-market enterprises looking for reliable, outsourced IT departments.",
      process: ["Audit", "Onboarding", "Monitoring", "Proactive Maintenance", "Review"],
      benefits: ["Reduced downtime", "Predictable monthly costs", "Access to senior expertise"],
      price: "£45 per user/month"
    },
    {
      title: "Cybersecurity Solutions",
      icon: Shield,
      overview: "Multi-layered security strategies including endpoint protection, firewall management, and employee training.",
      target: "Businesses handling sensitive data or operating in highly regulated UK sectors.",
      process: ["Risk Assessment", "Implementation", "Training", "Continuous Monitoring", "Incident Response"],
      benefits: ["GDPR compliance", "Protection against ransomware", "Peace of mind"],
      price: "£250 per site/month"
    },
    {
      title: "Cloud Infrastructure",
      icon: Cloud,
      overview: "Strategic migration and management of cloud environments using Azure, AWS, or UK-based private clouds.",
      target: "Organisations looking to modernise legacy systems and enable remote working.",
      process: ["Strategy", "Migration", "Optimisation", "Security Hardening", "Scaling"],
      benefits: ["Scalability", "Remote accessibility", "Disaster recovery"],
      price: "£500 setup + usage"
    },
    {
      title: "IT Consultancy & Strategy",
      icon: Cpu,
      overview: "High-level technology roadmaps and vCTO services to align your IT with your business goals.",
      target: "Leadership teams needing strategic guidance for digital transformation.",
      process: ["Discovery", "Gap Analysis", "Roadmap Design", "Budgeting", "Implementation Oversight"],
      benefits: ["Strategic alignment", "Cost optimisation", "Future-proofing"],
      price: "£1,200 per day"
    },
    {
      title: "Custom Software Development",
      icon: Code,
      overview: "Bespoke web and mobile applications designed to solve specific operational challenges.",
      target: "Companies needing unique tools that off-the-shelf software cannot provide.",
      process: ["Scoping", "Design", "Development", "Testing", "Deployment"],
      benefits: ["Competitive advantage", "Process automation", "Full ownership"],
      price: "Project-based"
    },
    {
      title: "Data Backup & Recovery",
      icon: Database,
      overview: "Robust business continuity planning ensures your data is safe and recoverable in any scenario.",
      target: "Any business where data loss would cause significant operational disruption.",
      process: ["Audit", "Backup Strategy", "Implementation", "Testing", "Reporting"],
      benefits: ["Business continuity", "Compliance", "Data integrity"],
      price: "£150 per TB/month"
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white">
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
            Tailored technology solutions designed to empower UK businesses with efficiency, security, and growth.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-12 items-start ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image/Icon Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-indigo-50 rounded-3xl -z-10"></div>
                    <img
                      src={`https://picsum.photos/seed/service-${idx}/800/600`}
                      alt={service.title}
                      className="rounded-2xl shadow-xl w-full h-auto"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6 bg-white p-4 rounded-2xl shadow-lg">
                      <service.icon className="w-8 h-8 text-indigo-600" />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div>
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">{service.title}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">{service.overview}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                        <Check className="w-4 h-4 text-indigo-600 mr-2" />
                        Target Audience
                      </h4>
                      <p className="text-sm text-slate-500">{service.target}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                        <Check className="w-4 h-4 text-indigo-600 mr-2" />
                        Key Benefits
                      </h4>
                      <ul className="text-sm text-slate-500 space-y-1">
                        {service.benefits.map((b, i) => <li key={i}>• {b}</li>)}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-4">Our Process</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.process.map((step, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider">
                          {i + 1}. {step}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-sm text-slate-500 block">Starting from</span>
                      <span className="text-2xl font-display font-bold text-indigo-600">{service.price}</span>
                    </div>
                    <Link
                      to="/contact"
                      className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition-all flex items-center"
                    >
                      Enquire Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6 text-slate-900">Need a custom solution?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Our experts are ready to design a bespoke IT strategy that fits your unique business requirements perfectly.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all bg-indigo-600 rounded-full hover:bg-indigo-700 shadow-xl shadow-indigo-200">
            Book a Free Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
