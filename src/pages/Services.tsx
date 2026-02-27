import React from 'react';
import { motion } from 'motion/react';
import { Shield, Cloud, Headphones, Server, Laptop, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Headphones className="text-blue-500" />,
    title: "Managed IT Support",
    overview: "Comprehensive 24/7 helpdesk and proactive monitoring for your entire team.",
    target: "Small to Medium Enterprises (SMEs) in the UK.",
    process: ["Audit", "Onboarding", "Monitoring", "Support"],
    benefits: ["Reduced downtime", "Predictable costs", "Expert advice"],
    price: "£25"
  },
  {
    icon: <Shield className="text-emerald-500" />,
    title: "Cybersecurity & Compliance",
    overview: "Advanced protection against threats and assistance with Cyber Essentials certification.",
    target: "Businesses handling sensitive UK data.",
    process: ["Assessment", "Hardening", "Training", "Certification"],
    benefits: ["GDPR peace of mind", "Threat prevention", "Insurance compliance"],
    price: "£45"
  },
  {
    icon: <Cloud className="text-sky-500" />,
    title: "Cloud Migration",
    overview: "Seamless transition to Microsoft 365, Azure, or AWS with minimal disruption.",
    target: "Companies looking to modernize their infrastructure.",
    process: ["Strategy", "Migration", "Optimization", "Management"],
    benefits: ["Scalability", "Remote work ready", "Cost efficiency"],
    price: "£500"
  },
  {
    icon: <Server className="text-purple-500" />,
    title: "Infrastructure Design",
    overview: "Custom network and server architecture built for performance and reliability.",
    target: "Growing organisations with complex tech needs.",
    process: ["Design", "Procurement", "Installation", "Maintenance"],
    benefits: ["Future-proofed tech", "High performance", "Robust security"],
    price: "£1,200"
  },
  {
    icon: <Laptop className="text-orange-500" />,
    title: "Hardware Procurement",
    overview: "Sourcing and setting up business-grade laptops, servers, and networking gear.",
    target: "Teams needing reliable, pre-configured hardware.",
    process: ["Consultation", "Sourcing", "Configuration", "Delivery"],
    benefits: ["Business-grade quality", "Ready to use", "Warranty management"],
    price: "£50"
  },
  {
    icon: <Lock className="text-rose-500" />,
    title: "Disaster Recovery",
    overview: "Automated backups and rapid recovery plans to keep your business running.",
    target: "Any business where data loss is not an option.",
    process: ["Risk Analysis", "Backup Setup", "Testing", "Recovery Support"],
    benefits: ["Business continuity", "Data integrity", "Peace of mind"],
    price: "£75"
  }
];

export default function Services() {
  return (
    <div className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our IT Services</h1>
          <p className="text-xl text-slate-600">Tailored technology solutions designed to drive efficiency and security for UK businesses.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 text-sm flex-grow">{service.overview}</p>
              
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Ideal For</p>
                  <p className="text-sm text-slate-700">{service.target}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Benefits</p>
                  <ul className="space-y-1">
                    {service.benefits.map((b, j) => (
                      <li key={j} className="text-sm text-slate-600 flex items-center">
                        <CheckCircle2 size={14} className="text-accent mr-2" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-auto">
                <div className="flex items-baseline justify-between mb-6">
                  <span className="text-slate-500 text-sm">Starting from</span>
                  <span className="text-2xl font-bold text-primary">{service.price}<span className="text-sm font-normal text-slate-400">/mo</span></span>
                </div>
                <Link to="/contact" className="block w-full text-center bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 transition-colors">
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">How We Work</h2>
            <p className="text-slate-600">A structured approach to your IT success.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consult", desc: "We listen to your challenges and goals." },
              { step: "02", title: "Strategy", desc: "We design a custom roadmap for your tech." },
              { step: "03", title: "Deploy", desc: "Our engineers implement solutions with zero fuss." },
              { step: "04", title: "Support", desc: "Ongoing 24/7 care and proactive maintenance." }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-slate-100 absolute -top-8 -left-2 z-0">{step.step}</div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-slate-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
