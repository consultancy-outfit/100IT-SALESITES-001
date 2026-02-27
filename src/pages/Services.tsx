import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Cloud, 
  Headset, 
  LineChart, 
  Database, 
  Lock, 
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Headset className="w-10 h-10" />,
    title: "Managed IT Support",
    overview: "Comprehensive 24/7 IT management and helpdesk support for your entire team.",
    target: "SMEs looking to outsource their IT department or supplement existing staff.",
    process: ["Initial Audit", "Onboarding & Setup", "24/7 Monitoring", "Monthly Reviews"],
    benefits: ["Reduced Downtime", "Predictable Costs", "Expert Knowledge Access"],
    price: "£25 per user / month",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: "Cybersecurity Solutions",
    overview: "Advanced threat protection, vulnerability assessments, and employee security training.",
    target: "Businesses handling sensitive data or operating in regulated industries.",
    process: ["Risk Assessment", "Layered Defense Setup", "Staff Training", "Continuous Monitoring"],
    benefits: ["Data Breach Prevention", "Compliance Assurance", "Peace of Mind"],
    price: "£499 per audit",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: <Cloud className="w-10 h-10" />,
    title: "Cloud Migration & Strategy",
    overview: "Seamless transition to Microsoft 365, Azure, or AWS with ongoing optimization.",
    target: "Companies looking to improve remote work flexibility and reduce server costs.",
    process: ["Cloud Readiness Assessment", "Migration Planning", "Execution", "Post-Migration Support"],
    benefits: ["Scalability", "Remote Accessibility", "Lower Infrastructure Costs"],
    price: "£1,500 starting project",
    color: "bg-cyan-50 text-cyan-600"
  },
  {
    icon: <LineChart className="w-10 h-10" />,
    title: "IT Consultancy & Strategy",
    overview: "Expert guidance on digital transformation and long-term technology roadmaps.",
    target: "Growing businesses needing high-level technical leadership without a full-time CTO.",
    process: ["Business Goal Alignment", "Gap Analysis", "Strategic Roadmap", "Implementation Oversight"],
    benefits: ["ROI Focused Tech", "Future-Proofing", "Competitive Advantage"],
    price: "£150 per hour",
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    icon: <Database className="w-10 h-10" />,
    title: "Backup & Disaster Recovery",
    overview: "Robust data protection strategies ensuring your business can recover from any disaster.",
    target: "Any business where data loss would be catastrophic for operations.",
    process: ["Data Inventory", "Backup Configuration", "Recovery Testing", "Off-site Storage"],
    benefits: ["Business Continuity", "Regulatory Compliance", "Secure Data Retention"],
    price: "£99 per month",
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    icon: <Lock className="w-10 h-10" />,
    title: "Network Security & WiFi",
    overview: "High-performance, secure wired and wireless networking for offices and warehouses.",
    target: "Businesses with physical locations requiring reliable and secure connectivity.",
    process: ["Site Survey", "Network Design", "Hardware Installation", "Security Hardening"],
    benefits: ["High-Speed Connectivity", "Guest Network Isolation", "Eliminated Dead Zones"],
    price: "£750 per site setup",
    color: "bg-amber-50 text-amber-600"
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-display font-bold text-slate-900 mb-6"
          >
            Our IT Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            Tailored technology solutions designed to empower your business, enhance security, and drive efficiency.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="grid lg:grid-cols-12">
                {/* Left Side: Overview */}
                <div className="lg:col-span-5 p-10 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-50">
                  <div>
                    <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 ${service.color}`}>
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">{service.title}</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">{service.overview}</p>
                    <div className="space-y-4">
                      <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Target Audience</div>
                      <p className="text-slate-700 font-medium">{service.target}</p>
                    </div>
                  </div>
                  <div className="mt-12 pt-8 border-t border-slate-50">
                    <div className="text-sm text-slate-400 mb-1">Starting from</div>
                    <div className="text-3xl font-display font-bold text-brand-accent">{service.price}</div>
                  </div>
                </div>

                {/* Right Side: Details */}
                <div className="lg:col-span-7 p-10 lg:p-16 bg-slate-50/50">
                  <div className="grid md:grid-cols-2 gap-12">
                    {/* Process */}
                    <div>
                      <h3 className="text-xl font-display font-bold text-slate-900 mb-6 flex items-center">
                        <span className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-brand-accent mr-3 shadow-sm">1</span>
                        Our Process
                      </h3>
                      <ul className="space-y-4">
                        {service.process.map((step, sIdx) => (
                          <li key={sIdx} className="flex items-center text-slate-600">
                            <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-3"></div>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-xl font-display font-bold text-slate-900 mb-6 flex items-center">
                        <span className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-brand-accent mr-3 shadow-sm">2</span>
                        Key Benefits
                      </h3>
                      <ul className="space-y-4">
                        {service.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-center text-slate-700 font-medium">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-16">
                    <Link
                      to="/contact"
                      className="inline-flex items-center bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all group"
                    >
                      Enquire About This Service
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <div className="bg-brand-primary text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-display font-bold mb-6">Not sure what you need?</h2>
              <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                Our experts can provide a comprehensive IT audit to identify gaps in your current infrastructure and recommend the best path forward.
              </p>
              <Link
                to="/contact"
                className="bg-brand-accent text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-500 transition-all shadow-lg"
              >
                Schedule a Free Consultation
              </Link>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-accent opacity-20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
