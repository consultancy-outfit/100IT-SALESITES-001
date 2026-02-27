import { motion } from 'motion/react';
import { Shield, Cloud, Server, Headphones, Code, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Cybersecurity & Compliance",
    overview: "Comprehensive protection for your digital assets, ensuring full compliance with UK GDPR and Cyber Essentials standards.",
    target: "SMEs and Large Enterprises handling sensitive client data.",
    process: ["Initial Vulnerability Audit", "Threat Modelling", "Implementation of Controls", "24/7 Monitoring", "Regular Compliance Reviews"],
    benefits: ["Reduced risk of data breaches", "Full regulatory compliance", "Peace of mind for stakeholders", "Enhanced brand reputation"],
    price: "£499/month"
  },
  {
    icon: <Cloud className="w-10 h-10" />,
    title: "Cloud Infrastructure",
    overview: "Scalable, secure, and cost-effective cloud solutions using AWS, Azure, or private UK-based data centres.",
    target: "Businesses looking to modernise their legacy infrastructure.",
    process: ["Readiness Assessment", "Architecture Design", "Seamless Migration", "Performance Tuning", "Ongoing Management"],
    benefits: ["Improved scalability", "Reduced hardware costs", "Enhanced disaster recovery", "Global accessibility"],
    price: "£299/month"
  },
  {
    icon: <Server className="w-10 h-10" />,
    title: "Managed IT Support",
    overview: "Proactive maintenance and rapid response support to keep your business running smoothly 24/7.",
    target: "Companies without a dedicated in-house IT department.",
    process: ["System Onboarding", "Remote Monitoring Setup", "Helpdesk Integration", "Preventative Maintenance", "Quarterly Strategy Meetings"],
    benefits: ["Zero downtime", "Predictable monthly costs", "Access to expert engineers", "Focus on core business"],
    price: "£35/user/month"
  },
  {
    icon: <Code className="w-10 h-10" />,
    title: "Custom Software Development",
    overview: "Bespoke software solutions designed to solve your specific business challenges and improve efficiency.",
    target: "Organisations with unique processes that off-the-shelf software can't meet.",
    process: ["Requirements Gathering", "UI/UX Design", "Agile Development", "Rigorous Testing", "Deployment & Support"],
    benefits: ["Tailored functionality", "Competitive advantage", "Seamless integration", "Full ownership of IP"],
    price: "£5,000/project"
  },
  {
    icon: <Lock className="w-10 h-10" />,
    title: "Disaster Recovery & Backup",
    overview: "Robust data backup and recovery strategies to ensure business continuity in any scenario.",
    target: "Any business where data loss would be catastrophic.",
    process: ["Risk Assessment", "Backup Strategy Design", "Automated Implementation", "Regular Testing", "Rapid Recovery Drills"],
    benefits: ["Minimal data loss", "Fast recovery times", "Protection against ransomware", "Business resilience"],
    price: "£150/month"
  },
  {
    icon: <Headphones className="w-10 h-10" />,
    title: "IT Consultancy & Strategy",
    overview: "Expert advice to align your technology roadmap with your long-term business goals.",
    target: "Leadership teams planning for growth or digital transformation.",
    process: ["Business Goal Alignment", "Technology Audit", "Roadmap Development", "Vendor Selection", "Implementation Oversight"],
    benefits: ["Informed decision making", "Future-proofed technology", "Optimised IT spend", "Strategic growth"],
    price: "£1,200/day"
  }
];

const Services = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              We offer a comprehensive suite of IT services designed to help British 
              businesses thrive in an increasingly digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-16 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 space-y-8">
                  <div className="w-20 h-20 bg-zinc-900 text-white rounded-2xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-zinc-600 leading-relaxed">{service.overview}</p>
                  </div>
                  
                  <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                    <h4 className="font-bold mb-2 text-sm uppercase tracking-wider text-zinc-400">Target Audience</h4>
                    <p className="text-zinc-700">{service.target}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold mb-4 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-zinc-400" />
                        Process
                      </h4>
                      <ul className="space-y-2 text-sm text-zinc-600">
                        {service.process.map((step, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="text-zinc-900 font-bold">{j + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-4 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-zinc-400" />
                        Key Benefits
                      </h4>
                      <ul className="space-y-2 text-sm text-zinc-600">
                        {service.benefits.map((benefit, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-1.5 shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 w-full">
                  <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-zinc-100">
                    <img 
                      src={`https://picsum.photos/seed/service${i}/800/800`} 
                      alt={service.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">Starting from</p>
                          <p className="text-3xl font-bold text-zinc-900">{service.price}</p>
                        </div>
                        <Link 
                          to="/contact" 
                          className="bg-zinc-900 text-white px-6 py-3 rounded-full font-bold hover:bg-zinc-800 transition-colors"
                        >
                          Enquire Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Need a Custom Solution?</h2>
          <p className="text-xl text-zinc-600 mb-12 max-w-2xl mx-auto">
            Our team of experts can design a bespoke IT strategy tailored specifically to your business needs.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-10 py-5 bg-zinc-900 text-white rounded-full font-bold text-lg hover:bg-zinc-800 transition-all"
          >
            Book a Strategy Session
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
