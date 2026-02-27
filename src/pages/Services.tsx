import { motion } from 'motion/react';
import { Shield, Cloud, Headphones, Lock, Network, Database, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Headphones className="w-10 h-10" />,
    title: "24/7 Managed IT Support",
    overview: "Comprehensive helpdesk support for care staff, ensuring technology never gets in the way of care delivery.",
    target: "Small to large care providers needing reliable, round-the-clock technical assistance.",
    process: ["Audit", "Onboarding", "24/7 Monitoring", "Proactive Maintenance"],
    benefits: ["Reduced downtime", "Fixed monthly costs", "Expert UK-based support"],
    price: "£25"
  },
  {
    icon: <Lock className="w-10 h-10" />,
    title: "Cybersecurity & GDPR",
    overview: "Advanced protection for sensitive resident data, including encryption, MFA, and threat detection.",
    target: "Providers handling sensitive medical and personal data requiring high-level compliance.",
    process: ["Risk Assessment", "Implementation", "Staff Training", "Continuous Monitoring"],
    benefits: ["Data breach prevention", "Regulatory compliance", "Peace of mind"],
    price: "£45"
  },
  {
    icon: <Cloud className="w-10 h-10" />,
    title: "Cloud Migration & Hosting",
    overview: "Transition your legacy systems to secure, scalable UK-based cloud environments.",
    target: "Organisations looking to move away from on-premise servers to flexible remote working.",
    process: ["Strategy", "Data Migration", "Testing", "Go-Live Support"],
    benefits: ["Access from anywhere", "Automatic backups", "Scalability"],
    price: "£150"
  },
  {
    icon: <Network className="w-10 h-10" />,
    title: "Network Infrastructure",
    overview: "Robust Wi-Fi and wired networking designed for multi-site care facilities and residential homes.",
    target: "New builds or existing sites with poor connectivity affecting staff or resident experience.",
    process: ["Site Survey", "Design", "Installation", "Certification"],
    benefits: ["Seamless roaming", "High-speed access", "Secure guest networks"],
    price: "£499"
  },
  {
    icon: <Database className="w-10 h-10" />,
    title: "Disaster Recovery",
    overview: "Automated off-site backups and rapid recovery plans to ensure business continuity.",
    target: "Any provider for whom data loss would be catastrophic for operations.",
    process: ["BIA Analysis", "Backup Setup", "Recovery Testing", "Annual Review"],
    benefits: ["Zero data loss", "Fast restoration", "Insurance compliance"],
    price: "£85"
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Compliance Auditing",
    overview: "Regular IT health checks and CQC-ready technology compliance reports.",
    target: "Management teams preparing for inspections or seeking ISO certifications.",
    process: ["Documentation Review", "Technical Scan", "Gap Analysis", "Report Delivery"],
    benefits: ["Audit readiness", "Risk identification", "Strategic roadmap"],
    price: "£750"
  }
];

export default function Services() {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Specialised IT Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            We provide a full suite of technology solutions designed specifically for the UK healthcare and supported living landscape.
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1 space-y-6">
                <div className="inline-flex p-4 rounded-2xl bg-brand-50 text-brand-600 shadow-sm">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-display font-bold">{service.title}</h2>
                <p className="text-slate-600 leading-relaxed">{service.overview}</p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-sm uppercase text-slate-400 mb-3">Target Audience</h4>
                    <p className="text-sm text-slate-600">{service.target}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase text-slate-400 mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((b, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 text-sm">Starting from</span>
                    <div className="text-2xl font-bold text-slate-900">{service.price}<span className="text-sm font-normal text-slate-500"> / month</span></div>
                  </div>
                  <Link to="/contact" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-colors">
                    Enquire Now
                  </Link>
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative overflow-hidden">
                  <h4 className="font-bold mb-6">Our Process</h4>
                  <div className="space-y-4 relative">
                    {service.process.map((step, k) => (
                      <div key={k} className="flex items-center gap-4 relative z-10">
                        <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-xs">
                          {k + 1}
                        </div>
                        <span className="font-medium text-slate-700">{step}</span>
                      </div>
                    ))}
                    <div className="absolute top-4 left-4 w-0.5 h-[calc(100%-2rem)] bg-brand-100 z-0" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 opacity-5">
                    {service.icon}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-slate-400 mb-10">Every care provider is different. We offer bespoke IT consultancy to match your specific operational needs and budget.</p>
          <Link to="/contact" className="inline-block bg-brand-600 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-700 transition-all">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
