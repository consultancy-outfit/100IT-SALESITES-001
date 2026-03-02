import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Cloud, 
  Headphones, 
  Database, 
  Search, 
  Lock,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    icon: Headphones,
    overview: "Comprehensive 24/7 technical support and infrastructure management for your entire organisation.",
    audience: "SMEs and Enterprise businesses needing reliable, outsourced IT expertise.",
    process: ["Audit & Onboarding", "Proactive Monitoring", "Helpdesk Support", "Strategic Reviews"],
    benefits: ["Fixed monthly costs", "Reduced downtime", "Expert advice on demand"],
    startingPrice: "£450/month"
  },
  {
    id: "cyber-security",
    title: "Cyber Security Solutions",
    icon: ShieldCheck,
    overview: "Multi-layered security strategies to protect your data, networks, and reputation from evolving threats.",
    audience: "Businesses handling sensitive data, particularly in Healthcare and Finance.",
    process: ["Vulnerability Assessment", "Threat Mitigation", "Employee Training", "Incident Response"],
    benefits: ["GDPR compliance", "Peace of mind", "Asset protection"],
    startingPrice: "£750/audit"
  },
  {
    id: "cloud-services",
    title: "Cloud Infrastructure",
    icon: Cloud,
    overview: "Seamless migration and management of cloud environments using Azure, AWS, and private UK data centres.",
    audience: "Organisations looking for scalability, remote access, and cost efficiency.",
    process: ["Cloud Readiness Assessment", "Migration Planning", "Deployment", "Optimization"],
    benefits: ["Work from anywhere", "Scalable resources", "Lower hardware costs"],
    startingPrice: "£300/month"
  },
  {
    id: "disaster-recovery",
    title: "Disaster Recovery & Backup",
    icon: Database,
    overview: "Robust data backup and business continuity planning to ensure you can recover from any eventuality.",
    audience: "Any business where data loss would be catastrophic to operations.",
    process: ["Risk Analysis", "Backup Strategy", "Implementation", "Regular Testing"],
    benefits: ["Zero data loss", "Rapid recovery", "Regulatory compliance"],
    startingPrice: "£200/month"
  },
  {
    id: "it-consultancy",
    title: "IT Consultancy & Strategy",
    icon: Search,
    overview: "Strategic technology planning to align your IT infrastructure with your long-term business goals.",
    audience: "Leadership teams planning growth, digital transformation, or mergers.",
    process: ["Business Alignment", "Technology Roadmap", "Budget Planning", "Execution Oversight"],
    benefits: ["Future-proofed tech", "ROI focused", "Strategic advantage"],
    startingPrice: "£950/day"
  },
  {
    id: "network-solutions",
    title: "Secure Network Solutions",
    icon: Lock,
    overview: "Design and implementation of high-performance, secure wired and wireless networks.",
    audience: "Multi-site businesses and offices requiring high-speed, secure connectivity.",
    process: ["Site Survey", "Network Design", "Installation", "Ongoing Management"],
    benefits: ["High-speed connectivity", "Secure guest access", "Seamless roaming"],
    startingPrice: "£1,200/project"
  }
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our IT Services</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We provide a full spectrum of technology solutions designed to help UK businesses operate securely, efficiently, and at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-brand-200">
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-8">{service.overview}</p>
                  
                  <div className="mb-8">
                    <h4 className="font-bold text-slate-900 mb-2">Ideal For:</h4>
                    <p className="text-slate-600">{service.audience}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8 mb-10">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                        <ArrowRight size={16} className="mr-2 text-brand-600" /> Our Process
                      </h4>
                      <ul className="space-y-2">
                        {service.process.map((step, i) => (
                          <li key={i} className="text-sm text-slate-600 flex items-center">
                            <span className="w-1.5 h-1.5 bg-brand-400 rounded-full mr-2" /> {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                        <CheckCircle2 size={16} className="mr-2 text-brand-600" /> Key Benefits
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="text-sm text-slate-600 flex items-center">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2" /> {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div>
                      <div className="text-sm text-slate-500 font-medium">Starting from</div>
                      <div className="text-2xl font-bold text-slate-900">{service.startingPrice}</div>
                    </div>
                    <Link 
                      to="/contact" 
                      className="px-6 py-3 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 transition-colors"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>

                <div className={`relative ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <img 
                      src={`https://images.unsplash.com/photo-${idx === 0 ? '1551434678-e076c223a692' : idx === 1 ? '1550751827-4bd374c3f58b' : idx === 2 ? '1451187580459-43490279c0fa' : idx === 3 ? '1558494949-ef010cbdcc31' : idx === 4 ? '1552664730-d307ca884978' : '1544197150-b99a580bb7a8'}?auto=format&fit=crop&q=80&w=1000`} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-100 rounded-full -z-10" />
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-slate-100 rounded-full -z-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-8">Not sure which service is right for you?</h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">Our experts are ready to provide a free, no-obligation IT audit to identify gaps in your current infrastructure and recommend the best path forward.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-brand-600 text-white rounded-full font-bold text-lg hover:bg-brand-700 transition-all shadow-lg shadow-brand-200"
          >
            Book Your Free Audit <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
