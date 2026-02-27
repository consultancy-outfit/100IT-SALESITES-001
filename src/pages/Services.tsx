import React from 'react';
import { motion } from 'motion/react';
import { Shield, Cloud, Monitor, Cpu, Database, Network, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Monitor className="w-10 h-10" />,
    title: "Managed IT Support",
    overview: "Comprehensive 24/7 helpdesk and proactive maintenance for your entire IT estate.",
    target: "SMEs and growing UK enterprises seeking reliable day-to-day support.",
    process: ["Audit", "Onboarding", "Monitoring", "Continuous Support"],
    benefits: ["Reduced downtime", "Fixed monthly costs", "Unlimited remote support"],
    price: "From £25 per user/month"
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Cyber Security",
    overview: "Multi-layered defence strategies including endpoint protection, firewalls, and employee training.",
    target: "Businesses handling sensitive data or operating in regulated sectors.",
    process: ["Vulnerability Assessment", "Implementation", "Staff Training", "Compliance Audit"],
    benefits: ["GDPR compliance", "Threat mitigation", "Peace of mind"],
    price: "From £495 per audit"
  },
  {
    icon: <Cloud className="w-10 h-10" />,
    title: "Cloud Solutions",
    overview: "Seamless migration and management of Microsoft 365, Azure, and AWS environments.",
    target: "Companies looking to modernize infrastructure and enable remote work.",
    process: ["Cloud Readiness Assessment", "Migration Planning", "Execution", "Optimization"],
    benefits: ["Scalability", "Remote accessibility", "Cost efficiency"],
    price: "From £1,200 per migration"
  },
  {
    icon: <Cpu className="w-10 h-10" />,
    title: "IT Consultancy",
    overview: "Strategic technology roadmaps aligned with your long-term business objectives.",
    target: "Leadership teams needing expert guidance on digital transformation.",
    process: ["Business Analysis", "Strategy Design", "Vendor Selection", "Project Oversight"],
    benefits: ["Strategic alignment", "Future-proof tech", "Expert insights"],
    price: "From £850 per day"
  },
  {
    icon: <Network className="w-10 h-10" />,
    title: "Network Infrastructure",
    overview: "Design and installation of high-performance wired and wireless networking solutions.",
    target: "New office fit-outs or businesses experiencing connectivity issues.",
    process: ["Site Survey", "Design", "Hardware Installation", "Testing"],
    benefits: ["High-speed connectivity", "Secure guest access", "Reliable hardware"],
    price: "From £1,500 per project"
  },
  {
    icon: <Database className="w-10 h-10" />,
    title: "Disaster Recovery",
    overview: "Robust backup solutions and business continuity planning to protect against data loss.",
    target: "Any business where data is critical to daily operations.",
    process: ["Risk Analysis", "Backup Setup", "Recovery Testing", "Plan Maintenance"],
    benefits: ["Zero data loss", "Rapid recovery", "Business continuity"],
    price: "From £95 per month"
  }
];

const Services = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative bg-zinc-900 py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/534/1920/1080?blur=2" 
            alt="Services Background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/80 via-zinc-900/60 to-zinc-900"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-white uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              Our Expertise
            </span>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">Our IT Services</h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Tailored technology solutions designed to drive efficiency, security, and growth for British businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-zinc-900 text-white rounded-3xl mb-8 shadow-lg">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-zinc-900 mb-6">{service.title}</h2>
                  <p className="text-zinc-600 text-lg mb-8 leading-relaxed">{service.overview}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">Target Audience</h4>
                      <p className="text-zinc-700 text-sm">{service.target}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">Starting Price</h4>
                      <p className="text-zinc-900 font-bold text-lg">{service.price}</p>
                    </div>
                  </div>

                  <div className="mb-10">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">The Process</h4>
                    <div className="flex flex-wrap gap-3">
                      {service.process.map((step, i) => (
                        <span key={i} className="px-4 py-2 bg-zinc-100 text-zinc-700 text-xs font-medium rounded-full border border-zinc-200">
                          {i + 1}. {step}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link to="/contact" className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 transition-all">
                    Enquire Now <ArrowRight size={18} />
                  </Link>
                </div>

                <div className="flex-1 w-full">
                  <div className="bg-zinc-50 p-10 rounded-[2.5rem] border border-zinc-200 relative overflow-hidden">
                    <h4 className="text-xl font-bold text-zinc-900 mb-8">Key Benefits</h4>
                    <ul className="space-y-6">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="mt-1 bg-zinc-900 rounded-full p-1">
                            <Lock size={12} className="text-white" />
                          </div>
                          <span className="text-zinc-700 font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="absolute -bottom-10 -right-10 opacity-5">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Not sure which service you need?</h2>
          <p className="text-zinc-400 mb-10">Our experts are ready to help you navigate the technology landscape.</p>
          <Link to="/contact" className="text-white border-b-2 border-white pb-1 font-bold hover:text-zinc-300 hover:border-zinc-300 transition-all">
            Schedule a free 15-minute discovery call
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
