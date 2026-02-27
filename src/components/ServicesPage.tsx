import React from 'react';
import { 
  Shield, 
  Cloud, 
  Cpu, 
  Lock, 
  Headphones, 
  Globe, 
  Zap,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { SectionHeading, Button, Card } from './Shared';

const services = [
  {
    icon: Shield,
    title: "Managed IT Support",
    overview: "Comprehensive 24/7 IT management and helpdesk support for your entire workforce.",
    target: "Small to Medium Enterprises (SMEs) looking for a reliable, outsourced IT department.",
    process: ["Audit", "Onboarding", "Monitoring", "Proactive Support"],
    benefits: ["Reduced downtime", "Predictable costs", "Expert UK engineers"],
    price: "From £45 / user / month"
  },
  {
    icon: Lock,
    title: "Cybersecurity Solutions",
    overview: "Multi-layered security strategies to protect your business from ransomware, phishing, and data breaches.",
    target: "Businesses handling sensitive client data or operating in regulated UK sectors.",
    process: ["Vulnerability Assessment", "Implementation", "Staff Training", "Incident Response"],
    benefits: ["Peace of mind", "Regulatory compliance", "Advanced threat detection"],
    price: "From £250 / month"
  },
  {
    icon: Cloud,
    title: "Cloud Migration & Hosting",
    overview: "Strategic migration to Azure, AWS, or Private Cloud environments tailored for performance.",
    target: "Companies looking to modernise their infrastructure and enable secure remote work.",
    process: ["Strategy", "Migration", "Optimisation", "Ongoing Management"],
    benefits: ["Scalability", "Cost-efficiency", "Business continuity"],
    price: "From £500 / project"
  },
  {
    icon: Globe,
    title: "Network Infrastructure",
    overview: "Design and implementation of high-speed, secure wired and wireless networks.",
    target: "Offices, warehouses, and multi-site operations requiring robust connectivity.",
    process: ["Site Survey", "Design", "Installation", "Testing"],
    benefits: ["High performance", "Secure access", "Future-proofed cabling"],
    price: "From £1,200 / site"
  },
  {
    icon: Zap,
    title: "Disaster Recovery",
    overview: "Robust backup and recovery solutions ensuring your data is safe and business can resume instantly.",
    target: "Any business where data loss or downtime would have significant financial impact.",
    process: ["Risk Analysis", "Backup Setup", "Recovery Testing", "Monitoring"],
    benefits: ["Zero data loss", "Rapid recovery", "Off-site UK storage"],
    price: "From £150 / month"
  },
  {
    icon: Cpu,
    title: "IT Consultancy & Strategy",
    overview: "Virtual CTO services to align your technology roadmap with your long-term business objectives.",
    target: "Growing businesses needing high-level technical leadership without the full-time cost.",
    process: ["Discovery", "Roadmap Creation", "Budgeting", "Execution"],
    benefits: ["Strategic alignment", "Informed decision making", "ROI focus"],
    price: "From £950 / day"
  }
];

export const ServicesPage = () => {
  return (
    <div className="pt-32">
      <section className="section-padding">
        <SectionHeading 
          centered 
          title="Our Core IT Services" 
          subtitle="Tailored technology solutions designed to drive growth and security for British businesses."
        />
        
        <div className="grid gap-12">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
                  <service.icon size={32} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-lg text-slate-600 mb-6">{service.overview}</p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-slate-900 mb-2">Ideal For:</h4>
                  <p className="text-slate-600">{service.target}</p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Process Steps:</h4>
                    <ul className="space-y-2">
                      {service.process.map((step, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-600">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">{i + 1}</div>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-600">
                          <CheckCircle2 size={16} className="text-emerald-500" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Starting From</p>
                    <p className="text-2xl font-bold text-slate-900">{service.price}</p>
                  </div>
                  <Button>Enquire Now</Button>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                  <img 
                    src={`https://picsum.photos/seed/service-${index}/800/600`} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
