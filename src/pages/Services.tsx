import { motion } from 'motion/react';
import { Shield, Cloud, Headphones, Network, Search, Code, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Headphones className="h-10 w-10 text-brand-accent" />,
    title: "Managed IT Support",
    overview: "Comprehensive 24/7 helpdesk and proactive system monitoring for your entire workforce.",
    target: "SMEs and growing enterprises needing reliable day-to-day IT management.",
    process: ["Audit", "Onboarding", "Monitoring", "Support"],
    benefits: ["Reduced downtime", "Predictable costs", "Expert access"],
    price: "From £499/month"
  },
  {
    icon: <Shield className="h-10 w-10 text-brand-accent" />,
    title: "Cybersecurity Solutions",
    overview: "Multi-layered defence systems including threat detection, firewall management, and employee training.",
    target: "Businesses handling sensitive data or operating in regulated UK sectors.",
    process: ["Risk Assessment", "Implementation", "Training", "Response"],
    benefits: ["Data protection", "Regulatory compliance", "Peace of mind"],
    price: "From £750/month"
  },
  {
    icon: <Cloud className="h-10 w-10 text-brand-accent" />,
    title: "Cloud Infrastructure",
    overview: "Strategic migration and management of Azure, AWS, or private cloud environments.",
    target: "Companies looking to modernise their legacy infrastructure and enable remote work.",
    process: ["Cloud Strategy", "Migration", "Optimisation", "Management"],
    benefits: ["Scalability", "Cost efficiency", "Remote accessibility"],
    price: "From £1,200/setup"
  },
  {
    icon: <Network className="h-10 w-10 text-brand-accent" />,
    title: "Network Architecture",
    overview: "Design and implementation of high-performance, secure wired and wireless networks.",
    target: "Offices, warehouses, and multi-site organisations across the UK.",
    process: ["Site Survey", "Design", "Installation", "Testing"],
    benefits: ["High speed", "Zero dead zones", "Secure connectivity"],
    price: "From £2,500/project"
  },
  {
    icon: <Search className="h-10 w-10 text-brand-accent" />,
    title: "IT Consultancy",
    overview: "Strategic technology roadmapping and digital transformation advisory services.",
    target: "Leadership teams needing expert guidance on long-term technology investments.",
    process: ["Discovery", "Analysis", "Roadmap", "Execution"],
    benefits: ["ROI focus", "Future-proofing", "Strategic alignment"],
    price: "From £150/hour"
  },
  {
    icon: <Code className="h-10 w-10 text-brand-accent" />,
    title: "Business Continuity",
    overview: "Robust backup solutions and disaster recovery planning to ensure business resilience.",
    target: "Any business where data loss or downtime would be catastrophic.",
    process: ["Impact Analysis", "Backup Setup", "DR Planning", "Testing"],
    benefits: ["Data safety", "Fast recovery", "Risk mitigation"],
    price: "From £299/month"
  }
];

const Services = () => {
  return (
    <div className="bg-slate-50 py-20">
      <div className="container-custom">
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Our IT Services</h1>
          <p className="text-xl text-slate-600">Tailored technology solutions designed to drive efficiency, security, and growth for UK businesses.</p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col lg:flex-row"
            >
              <div className="lg:w-1/3 p-10 bg-slate-900 text-white flex flex-col justify-between">
                <div>
                  <div className="mb-6">{service.icon}</div>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.overview}</p>
                </div>
                <div className="pt-6 border-t border-slate-800">
                  <div className="text-brand-accent font-bold text-xl">{service.price}</div>
                  <div className="text-xs text-slate-500 mt-1">Excluding VAT</div>
                </div>
              </div>
              
              <div className="lg:w-2/3 p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Target Audience</h3>
                  <p className="text-slate-700 text-sm mb-8">{service.target}</p>
                  
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">The Process</h3>
                  <div className="flex items-center space-x-2">
                    {service.process.map((p, i) => (
                      <div key={i} className="flex items-center">
                        <span className="text-xs font-medium bg-slate-100 px-2 py-1 rounded">{p}</span>
                        {i < service.process.length - 1 && <span className="mx-1 text-slate-300">→</span>}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm text-slate-700">
                        <Check className="h-4 w-4 text-brand-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <Link to="/contact" className="text-brand-primary font-bold hover:text-brand-accent transition-colors flex items-center">
                      Enquire about this service <Check className="ml-2 h-4 w-4" />
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
};

export default Services;
