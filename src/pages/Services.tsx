import { motion } from 'motion/react';
import { Shield, Cloud, Headphones, Database, Network, LineChart, PhoneCall, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Headphones className="text-brand-500" />,
    title: "Managed IT Support",
    overview: "Comprehensive 24/7 monitoring and helpdesk support for your entire IT estate. We act as your internal IT department, resolving issues before they impact your productivity.",
    audience: "Small to medium-sized UK businesses looking for reliable, fixed-cost IT management.",
    process: ["Initial Audit", "Onboarding & Tooling", "Proactive Monitoring", "24/7 Helpdesk Support"],
    benefits: ["Reduced Downtime", "Predictable Monthly Costs", "Expert Technical Advice"],
    price: "£25 per user / month"
  },
  {
    icon: <Shield className="text-emerald-500" />,
    title: "Cybersecurity & Threat Protection",
    overview: "Advanced security layers to protect your business from ransomware, phishing, and data breaches. We implement enterprise-grade security tailored for SMEs.",
    audience: "Businesses handling sensitive data or those requiring Cyber Essentials certification.",
    process: ["Vulnerability Assessment", "Security Implementation", "Employee Training", "Continuous Monitoring"],
    benefits: ["Data Protection", "Regulatory Compliance", "Peace of Mind"],
    price: "£499 per audit"
  },
  {
    icon: <Cloud className="text-blue-500" />,
    title: "Cloud Solutions & Migration",
    overview: "Seamless migration to Microsoft Azure or AWS. We help you leverage the power of the cloud for better scalability, security, and remote working capabilities.",
    audience: "Companies looking to retire on-premise servers and embrace modern, flexible working.",
    process: ["Cloud Readiness Assessment", "Migration Strategy", "Execution & Testing", "Post-Migration Support"],
    benefits: ["Scalability", "Cost Efficiency", "Enhanced Collaboration"],
    price: "£1,200 starting project fee"
  },
  {
    icon: <Database className="text-amber-500" />,
    title: "Business Continuity & Backup",
    overview: "Robust backup solutions and disaster recovery planning. We ensure your data is safe and your business can recover quickly from any technical failure.",
    audience: "Any business where data loss or downtime would have a significant financial impact.",
    process: ["Risk Analysis", "Backup Configuration", "Recovery Testing", "Regular Audits"],
    benefits: ["Zero Data Loss", "Rapid Recovery", "Insurance Compliance"],
    price: "£75 per month"
  },
  {
    icon: <Network className="text-purple-500" />,
    title: "Network Infrastructure",
    overview: "High-performance networking, Wi-Fi solutions, and structured cabling. We build the physical and logical foundations of your digital business.",
    audience: "New office fit-outs or businesses experiencing slow, unreliable connectivity.",
    process: ["Site Survey", "Network Design", "Installation", "Performance Tuning"],
    benefits: ["Faster Speeds", "Improved Reliability", "Secure Guest Access"],
    price: "£850 starting installation"
  },
  {
    icon: <LineChart className="text-rose-500" />,
    title: "IT Consultancy & Strategy",
    overview: "Strategic technology roadmaps aligned with your business goals. We help you make informed decisions about your future IT investments.",
    audience: "Growing businesses needing high-level technical leadership without the cost of a full-time CTO.",
    process: ["Business Goal Alignment", "Technology Audit", "Roadmap Development", "Quarterly Reviews"],
    benefits: ["Strategic Growth", "ROI Optimization", "Future-Proofing"],
    price: "£150 per hour"
  },
  {
    icon: <PhoneCall className="text-indigo-500" />,
    title: "VoIP & Unified Communications",
    overview: "Modern, cloud-based phone systems that work anywhere. Replace expensive landlines with flexible, feature-rich communication tools.",
    audience: "Remote teams and businesses looking to reduce telephony costs and improve professional image.",
    process: ["Number Porting", "System Configuration", "Handset/App Setup", "User Training"],
    benefits: ["Lower Costs", "Remote Flexibility", "Professional Features"],
    price: "£15 per user / month"
  }
];

const Services = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Our IT Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            From day-to-day support to long-term strategic planning, we provide the technical expertise your business needs to thrive in the digital age.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                {...fadeIn}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white shadow-lg rounded-2xl">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{service.title}</h2>
                  </div>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                    {service.overview}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-brand-600" />
                        Key Benefits
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        {service.benefits.map((b, i) => <li key={i}>• {b}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <ArrowRight size={18} className="text-brand-600" />
                        Our Process
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        {service.process.map((p, i) => <li key={i}>{i + 1}. {p}</li>)}
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 bg-brand-50 rounded-2xl border border-brand-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-1">Starting From</p>
                      <p className="text-2xl font-bold text-slate-900">{service.price}</p>
                    </div>
                    <Link to="/contact" className="px-6 py-3 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 transition-all text-center">
                      Enquire Now
                    </Link>
                  </div>
                </div>

                <div className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                    <img 
                      src={`https://images.unsplash.com/photo-${index === 0 ? '1486312338219-ce68d2c6f44d' : index === 1 ? '1550751827-4bd374c3f58b' : index === 2 ? '1451187580459-43490279c0fa' : '1558494949-ef010cbdcc51'}?auto=format&fit=crop&q=80&w=1000`} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className={`absolute -z-10 w-full h-full bg-brand-100 rounded-3xl translate-x-4 translate-y-4`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Not sure what you need?</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
            Our experts can provide a free, no-obligation IT audit to identify risks and opportunities in your current infrastructure.
          </p>
          <Link to="/contact" className="px-8 py-4 bg-brand-600 text-white rounded-full font-bold hover:bg-brand-700 transition-all inline-flex items-center gap-2">
            Book Free IT Audit <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
