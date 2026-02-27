import { motion } from 'motion/react';
import { Shield, Cloud, Headset, Search, Database, Globe, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    id: 'managed-it',
    title: "Managed IT Support",
    overview: "Comprehensive day-to-day management of your IT environment, from helpdesk support to server maintenance.",
    target: "SMEs looking for a reliable outsourced IT department.",
    benefits: ["Unlimited remote support", "On-site emergency visits", "Proactive system health checks"],
    process: ["Audit", "Onboarding", "Active Monitoring", "Regular Review"],
    price: "From £25 /user/month",
    icon: Headset
  },
  {
    id: 'cybersecurity',
    title: "Cybersecurity Solutions",
    overview: "Multi-layered protection against ransomware, phishing, and data breaches using industry-leading tools.",
    target: "Businesses handling sensitive client data or regulated industries.",
    benefits: ["Endpoint protection", "Email security", "Staff awareness training"],
    process: ["Risk Assessment", "Implementation", "Threat Hunting", "Compliance Reporting"],
    price: "From £450 /audit",
    icon: Shield
  },
  {
    id: 'cloud-infra',
    title: "Cloud Infrastructure",
    overview: "Seamless migration and management of Microsoft 365, Azure, and private cloud environments.",
    target: "Companies seeking remote work flexibility and scalability.",
    benefits: ["Reduced hardware costs", "Anywhere access", "Automatic scalability"],
    process: ["Cloud Readiness Assessment", "Migration Planning", "Execution", "Optimisation"],
    price: "From £150 /month",
    icon: Cloud
  },
  {
    id: 'it-consultancy',
    title: "IT Consultancy & Strategy",
    overview: "Strategic guidance to align your technology roadmap with your long-term business objectives.",
    target: "Growing businesses needing high-level technical leadership.",
    benefits: ["Cost-effective scaling", "Technology audits", "Project management"],
    process: ["Discovery", "Strategic Roadmap", "Vendor Selection", "Implementation"],
    price: "From £750 /day",
    icon: Search
  },
  {
    id: 'backup-recovery',
    title: "Backup & Disaster Recovery",
    overview: "Ensuring your business can recover from any data loss event within minutes, not days.",
    target: "Any business where data loss would be catastrophic.",
    benefits: ["Automated off-site backups", "Rapid recovery testing", "Business continuity planning"],
    process: ["Data Mapping", "Backup Setup", "Recovery Testing", "Ongoing Verification"],
    price: "From £95 /month",
    icon: Database
  }
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Specialist <span className="text-accent">IT Services</span>
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Tailored technology solutions designed to solve complex business challenges 
            and drive operational efficiency.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {SERVICES.map((service, idx) => (
              <div 
                key={service.id}
                className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 relative group">
                    <div className="absolute -top-6 -left-6 bg-accent p-6 rounded-3xl shadow-xl group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold mb-6 text-primary">{service.title}</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {service.overview}
                    </p>
                    
                    <div className="space-y-6 mb-10">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Ideal For</h4>
                        <p className="text-slate-700 font-medium">{service.target}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Key Benefits</h4>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center gap-2 text-sm text-slate-600">
                              <Check className="h-4 w-4 text-accent" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-8 border-t border-slate-200">
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Starting Price</p>
                        <p className="text-2xl font-bold text-primary">{service.price}</p>
                      </div>
                      <Link 
                        to="/contact" 
                        className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors"
                      >
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 space-y-8">
                  <h3 className="text-2xl font-bold text-primary">Our Implementation Process</h3>
                  <div className="space-y-6">
                    {service.process.map((step, sIdx) => (
                      <div key={step} className="flex items-center gap-6 group">
                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-primary font-bold text-lg group-hover:bg-accent group-hover:text-white transition-colors">
                          {sIdx + 1}
                        </div>
                        <p className="text-lg font-medium text-slate-700">{step}</p>
                      </div>
                    ))}
                  </div>
                  <div className="pt-8">
                    <img 
                      src={`https://picsum.photos/seed/${service.id}/600/400`} 
                      alt={service.title}
                      className="rounded-3xl shadow-lg"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Bespoke Solution?</h2>
          <p className="text-slate-600 mb-10 max-w-xl mx-auto">
            Every business is unique. We offer custom IT packages designed to 
            meet your specific operational requirements.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-600 transition-colors"
          >
            Request a Custom Quote <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
