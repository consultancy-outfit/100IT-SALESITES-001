import { motion } from 'motion/react';
import { Shield, Cloud, Cpu, Headphones, Code, Database, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Cloud,
    title: "Managed Cloud Solutions",
    overview: "Scalable, secure, and high-performance cloud infrastructure tailored for UK businesses.",
    target: "SMEs and Enterprise looking to reduce hardware overhead and improve accessibility.",
    process: ["Audit & Strategy", "Seamless Migration", "24/7 Monitoring", "Continuous Optimization"],
    benefits: ["99.99% Uptime Guarantee", "Reduced IT Costs", "Enhanced Disaster Recovery"],
    price: "From £499 /month"
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    overview: "Comprehensive protection against modern threats with a focus on UK regulatory standards.",
    target: "Legal, Financial, and Healthcare sectors requiring strict data governance.",
    process: ["Vulnerability Assessment", "Security Implementation", "Employee Training", "Regular Audits"],
    benefits: ["GDPR Compliance", "Cyber Essentials+ Readiness", "Real-time Threat Detection"],
    price: "From £750 /month"
  },
  {
    icon: Database,
    title: "Case Management Systems",
    overview: "Bespoke software solutions designed to streamline workflows and document handling.",
    target: "Law firms, social care providers, and professional service agencies.",
    process: ["Workflow Analysis", "Custom Development", "API Integration", "Staff Onboarding"],
    benefits: ["30% Faster Processing", "Centralised Data", "Automated Reporting"],
    price: "From £1,200 /setup"
  },
  {
    icon: Headphones,
    title: "24/7 IT Support Desk",
    overview: "Proactive remote and on-site support from our expert UK-based technical team.",
    target: "Any organisation requiring reliable, round-the-clock technical assistance.",
    process: ["Ticket Submission", "Triage & Diagnosis", "Rapid Resolution", "Post-Issue Review"],
    benefits: ["15-Min Response Time", "On-site Support Available", "Proactive Maintenance"],
    price: "From £25 /user/month"
  },
  {
    icon: Code,
    title: "Custom Software Development",
    overview: "Tailored applications built to solve specific business challenges and drive innovation.",
    target: "Businesses with unique processes that off-the-shelf software can't handle.",
    process: ["Discovery Phase", "Agile Development", "Rigorous Testing", "Deployment & Support"],
    benefits: ["Competitive Advantage", "Full Ownership", "Scalable Architecture"],
    price: "From £5,000 /project"
  },
  {
    icon: Lock,
    title: "Network Infrastructure",
    overview: "Robust, high-speed networking solutions for modern office environments and remote work.",
    target: "Expanding companies needing reliable connectivity and secure remote access.",
    process: ["Site Survey", "Hardware Installation", "Network Configuration", "Security Hardening"],
    benefits: ["Gigabit Speeds", "Secure VPN Access", "Future-proof Hardware"],
    price: "From £999 /install"
  }
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl mb-6"
          >
            Our <span className="text-brand-emerald italic">Expertise</span>
          </motion.h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Comprehensive IT solutions designed to propel your business forward in the digital age.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:items-center gap-16 ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                <div className="flex-1">
                  <div className="w-16 h-16 bg-brand-navy rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-navy/20">
                    <service.icon className="text-white w-8 h-8" />
                  </div>
                  <h2 className="text-3xl mb-4">{service.title}</h2>
                  <p className="text-slate-600 mb-6 text-lg leading-relaxed">{service.overview}</p>
                  
                  <div className="mb-8">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-3">Target Audience</h4>
                    <p className="text-slate-600 italic">{service.target}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8 mb-10">
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider text-brand-emerald mb-4">The Process</h4>
                      <ul className="space-y-2">
                        {service.process.map((step, si) => (
                          <li key={si} className="flex items-center text-sm text-slate-500">
                            <span className="w-1.5 h-1.5 bg-brand-emerald rounded-full mr-2" />
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider text-brand-emerald mb-4">Key Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, bi) => (
                          <li key={bi} className="flex items-center text-sm text-slate-500">
                            <CheckCircle className="text-brand-emerald w-4 h-4 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Starting From</p>
                      <p className="text-2xl font-serif font-bold text-brand-navy">{service.price}</p>
                    </div>
                    <Link to="/contact" className="btn-primary py-2 px-6 text-sm">Enquire Now</Link>
                  </div>
                </div>

                <div className="flex-1 relative">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src={`https://picsum.photos/seed/service-${i}/800/800`} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-emerald/10 rounded-full blur-3xl -z-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl mb-6">Need a Custom Solution?</h2>
          <p className="text-slate-400 mb-10 text-lg">Our consultants are ready to design a bespoke IT strategy that fits your unique business requirements.</p>
          <Link to="/contact" className="btn-primary bg-brand-emerald hover:bg-brand-emerald/90 inline-flex items-center">
            Speak to an Expert <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function CheckCircle(props: any) {
  return (
    <svg 
      {...props}
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
