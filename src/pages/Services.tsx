import { motion } from 'motion/react';
import { Shield, Cloud, Lock, Headphones, Network, Database, Server, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Managed IT Support",
    icon: Headphones,
    overview: "Comprehensive 24/7 helpdesk and proactive maintenance for your entire IT estate.",
    target: "SMEs looking for a complete outsourced IT department.",
    process: ["Audit", "Onboarding", "Monitoring", "Support"],
    benefits: ["Fixed monthly costs", "Unlimited remote support", "Proactive health checks"],
    startingPrice: "£25 per user/month",
  },
  {
    title: "Cybersecurity Solutions",
    icon: Lock,
    overview: "Multi-layered defence strategies to protect your business from evolving digital threats.",
    target: "Businesses handling sensitive data or requiring compliance.",
    process: ["Risk Assessment", "Implementation", "Training", "Response"],
    benefits: ["GDPR compliance", "Reduced breach risk", "Cyber Essentials readiness"],
    startingPrice: "£495 per audit",
  },
  {
    title: "Cloud Infrastructure",
    icon: Cloud,
    overview: "Strategic migration and management of Microsoft Azure, AWS, and Hybrid Cloud environments.",
    target: "Firms looking to modernize their infrastructure and enable remote work.",
    process: ["Planning", "Migration", "Optimisation", "Management"],
    benefits: ["Scalability", "Cost efficiency", "High availability"],
    startingPrice: "£150 per month",
  },
  {
    title: "Network & Connectivity",
    icon: Network,
    overview: "High-speed business broadband, leased lines, and secure SD-WAN solutions.",
    target: "Multi-site businesses requiring reliable, fast connectivity.",
    process: ["Site Survey", "Design", "Installation", "Monitoring"],
    benefits: ["Low latency", "Failover protection", "Secure site-to-site links"],
    startingPrice: "£45 per month",
  },
  {
    title: "Disaster Recovery",
    icon: Database,
    overview: "Robust backup and recovery plans to ensure business continuity in any scenario.",
    target: "Any business where downtime results in significant loss.",
    process: ["BIA", "Strategy", "Implementation", "Testing"],
    benefits: ["Rapid recovery", "Data integrity", "Peace of mind"],
    startingPrice: "£95 per month",
  },
  {
    title: "IT Consultancy",
    icon: Server,
    overview: "Expert guidance on digital transformation, budgeting, and technology roadmaps.",
    target: "Growing companies needing high-level strategic technical input.",
    process: ["Discovery", "Analysis", "Roadmap", "Execution"],
    benefits: ["Strategic alignment", "Future-proofing", "Expert insights"],
    startingPrice: "£850 per day",
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
              Specialist IT Services <br />
              <span className="text-primary-600">Tailored for Your Success</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We provide a full spectrum of IT solutions designed to solve complex business challenges 
              and drive operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 mb-6">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-display font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-6">{service.overview}</p>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Ideal For</h4>
                      <p className="text-slate-600">{service.target}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Key Benefits</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.benefits.map((b, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-600">
                            <Shield className="w-4 h-4 text-primary-500" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div>
                      <span className="text-sm text-slate-500">Starting from</span>
                      <div className="text-2xl font-bold text-slate-900">{service.startingPrice}</div>
                    </div>
                    <Link to="/contact" className="btn-primary">
                      Enquire Now
                    </Link>
                  </div>
                </div>

                <div className={`relative ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-lg">
                    <img 
                      src={`https://picsum.photos/seed/service-${idx}/800/600`} 
                      className="w-full h-full object-cover" 
                      alt={service.title}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hidden md:block max-w-xs">
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-primary-600" />
                      Our Process
                    </h4>
                    <div className="space-y-3">
                      {service.process.map((step, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-700 text-xs flex items-center justify-center font-bold">
                            {i + 1}
                          </span>
                          <span className="text-slate-600 text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Not Sure What You Need?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Our consultants are here to help you navigate the complex technology landscape. 
            Book a free, no-obligation discovery call today.
          </p>
          <Link to="/contact" className="btn-primary px-12">
            Book Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
}
