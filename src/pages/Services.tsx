import { motion } from 'motion/react';
import { Check, Shield, Cloud, Database, Headphones, Code, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Shield,
    title: "Managed IT Support",
    price: "From £50/user/mo",
    description: "Comprehensive day-to-day IT management for your entire team.",
    audience: "SMEs with 10-200 employees",
    benefits: ["Unlimited Remote Support", "Patch Management", "Hardware Monitoring"],
    steps: ["Initial Audit", "Onboarding", "Active Monitoring"]
  },
  {
    icon: Lock,
    title: "Cyber Security Audits",
    price: "From £1,200 one-off",
    description: "Deep-dive vulnerability assessment to protect your business assets.",
    audience: "Regulated industries (Finance, Legal, Health)",
    benefits: ["Penetration Testing", "GDPR Compliance Check", "Staff Training"],
    steps: ["Vulnerability Scan", "Risk Report", "Remediation Plan"]
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    price: "Custom Quote",
    description: "Seamless transition of your data and apps to Azure or AWS.",
    audience: "Growing businesses needing scalability",
    benefits: ["Reduced Hardware Cost", "Remote Work Enablement", "Scalability"],
    steps: ["Strategy", "Data Migration", "Go-Live Support"]
  },
  {
    icon: Database,
    title: "Data Recovery & Backup",
    price: "From £100/mo",
    description: "Bulletproof backup solutions ensuring business continuity.",
    audience: "All businesses",
    benefits: ["Ransomware Protection", "Hourly Snapshots", "Rapid Restoration"],
    steps: ["Assessment", "Implementation", "Daily Verification"]
  },
  {
    icon: Code,
    title: "IT Consultancy",
    price: "£150/hour",
    description: "Strategic advice to align technology with your business goals.",
    audience: "Executives & Directors",
    benefits: ["Digital Transformation", "Vendor Management", "Cost Reduction"],
    steps: ["Discovery", "Strategy Formulation", "Execution Oversight"]
  },
  {
    icon: Headphones,
    title: "VoIP Solutions",
    price: "From £15/user/mo",
    description: "Modern internet telephony for crystal clear communication.",
    audience: "Remote & Hybrid Teams",
    benefits: ["Mobile App Integration", "Call Recording", "Lower Bills"],
    steps: ["Network Check", "Number Porting", "Handset Setup"]
  }
];

export default function Services() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            End-to-end technology solutions tailored for the UK market.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="bg-indigo-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="h-7 w-7 text-indigo-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
              <div className="text-indigo-600 font-semibold mb-4">{service.price}</div>
              <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>
              
              <div className="space-y-4 mb-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Key Benefits</div>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-700">
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-auto">
                <div className="text-xs text-slate-500 mb-1">Ideal for:</div>
                <div className="text-sm font-medium text-slate-900 mb-4">{service.audience}</div>
                <Link 
                  to="/contact" 
                  className="block w-full text-center py-3 px-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium text-sm"
                >
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Audit", desc: "We analyse your current infrastructure." },
              { step: "02", title: "Strategy", desc: "We design a roadmap tailored to your goals." },
              { step: "03", title: "Implement", desc: "Seamless deployment with minimal disruption." },
              { step: "04", title: "Support", desc: "Ongoing monitoring and UK-based helpdesk." }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-display font-bold text-slate-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
