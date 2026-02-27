import React from 'react';
import { motion } from 'motion/react';
import { Shield, Cloud, Headphones, Code, Lock, Server, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Section, Button } from './components/Layout';

const services = [
  {
    icon: <Headphones className="w-10 h-10" />,
    title: "Managed IT Support",
    overview: "Comprehensive 24/7 helpdesk and proactive maintenance for your entire business infrastructure.",
    audience: "SMEs and growing enterprises without in-house IT teams.",
    process: ["Audit & Onboarding", "24/7 Monitoring", "Proactive Patching", "Helpdesk Support"],
    benefits: ["Reduced downtime", "Predictable monthly costs", "Access to expert engineers"],
    price: "From £25 /user/month"
  },
  {
    icon: <Lock className="w-10 h-10" />,
    title: "Cybersecurity Solutions",
    overview: "Multi-layered defence strategies including threat detection, firewall management, and employee training.",
    audience: "Businesses handling sensitive data or subject to strict compliance.",
    process: ["Vulnerability Assessment", "Security Implementation", "Continuous Monitoring", "Staff Training"],
    benefits: ["GDPR compliance", "Protection against ransomware", "Peace of mind"],
    price: "From £499 /month"
  },
  {
    icon: <Cloud className="w-10 h-10" />,
    title: "Cloud Migration & Hosting",
    overview: "Seamless transition to Microsoft Azure, AWS, or our private UK-based cloud hosting.",
    audience: "Companies looking to modernise legacy hardware and enable remote work.",
    process: ["Readiness Assessment", "Migration Strategy", "Execution", "Post-Migration Support"],
    benefits: ["Global accessibility", "Automatic backups", "Scalable resources"],
    price: "From £1,500 (One-off)"
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Disaster Recovery",
    overview: "Robust backup and recovery plans to ensure business continuity in any scenario.",
    audience: "Mission-critical businesses that cannot afford any data loss.",
    process: ["Risk Analysis", "Backup Setup", "Recovery Testing", "Ongoing Validation"],
    benefits: ["Zero data loss", "Fast recovery times", "Business resilience"],
    price: "From £150 /month"
  },
  {
    icon: <Server className="w-10 h-10" />,
    title: "Network Infrastructure",
    overview: "Design, installation, and management of high-speed business networks and Wi-Fi solutions.",
    audience: "Offices, warehouses, and retail spaces requiring reliable connectivity.",
    process: ["Site Survey", "Network Design", "Hardware Installation", "Performance Tuning"],
    benefits: ["High-speed connectivity", "Secure guest access", "Future-proofed cabling"],
    price: "Custom Quote"
  }
];

const Services = () => {
  return (
    <div className="pt-20">
      <Section className="bg-slate-50">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Our Core Services</h1>
          <p className="text-xl text-slate-600">
            Tailored IT solutions designed to solve British business challenges. We focus on reliability, security, and performance.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="text-indigo-600 mb-6">{service.icon}</div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-8">{service.overview}</p>
                
                <div className="mb-8">
                  <h4 className="font-bold text-slate-900 mb-3">Ideal For:</h4>
                  <p className="text-slate-600">{service.audience}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">The Process:</h4>
                    <ul className="space-y-2">
                      {service.process.map((p, i) => (
                        <li key={i} className="flex items-center text-sm text-slate-600">
                          <ArrowRight className="w-4 h-4 mr-2 text-indigo-500" /> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((b, i) => (
                        <li key={i} className="flex items-center text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">Investment</span>
                    <div className="text-2xl font-bold text-slate-900">{service.price}</div>
                  </div>
                  <Button variant="primary">Get Started</Button>
                </div>
              </div>
              
              <div className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={`https://picsum.photos/seed/service-${index}/800/600`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-xs uppercase tracking-widest opacity-80">Satisfaction Rate</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Services;
