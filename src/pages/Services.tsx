import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Cloud, 
  Headphones, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Server, 
  Network, 
  PhoneCall, 
  Search,
  Settings,
  ShieldAlert
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    icon: Headphones,
    overview: 'Comprehensive 24/7 IT management for your entire business infrastructure.',
    audience: 'SMEs and growing UK businesses needing reliable tech support.',
    process: ['Audit', 'Onboarding', 'Monitoring', 'Support'],
    benefits: ['Reduced downtime', 'Predictable costs', 'Expert advice'],
    price: '£250/month',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    icon: ShieldAlert,
    overview: 'Advanced threat protection, vulnerability assessments, and employee training.',
    audience: 'Businesses handling sensitive data or requiring high security.',
    process: ['Assessment', 'Hardening', 'Training', 'Monitoring'],
    benefits: ['Data protection', 'Compliance', 'Peace of mind'],
    price: '£400/month',
  },
  {
    id: 'cloud-infra',
    title: 'Cloud Infrastructure',
    icon: Cloud,
    overview: 'Scalable cloud solutions including migration, hosting, and management.',
    audience: 'Companies looking to modernize their infrastructure and improve flexibility.',
    process: ['Strategy', 'Migration', 'Optimization', 'Management'],
    benefits: ['Scalability', 'Cost efficiency', 'Remote access'],
    price: '£350/month',
  },
  {
    id: 'it-consultancy',
    title: 'IT Consultancy',
    icon: Search,
    overview: 'Strategic technology planning to align your IT with your business goals.',
    audience: 'Leadership teams planning digital transformation or growth.',
    process: ['Discovery', 'Strategy', 'Roadmap', 'Implementation'],
    benefits: ['Strategic alignment', 'ROI focus', 'Future-proofing'],
    price: '£150/hour',
  },
  {
    id: 'disaster-recovery',
    title: 'Disaster Recovery',
    icon: Server,
    overview: 'Robust backup and recovery plans to ensure business continuity.',
    audience: 'Any business where data loss or downtime is critical.',
    process: ['Risk Analysis', 'Planning', 'Backup Setup', 'Testing'],
    benefits: ['Business continuity', 'Data integrity', 'Risk mitigation'],
    price: '£200/month',
  },
  {
    id: 'network-design',
    title: 'Network Design',
    icon: Network,
    overview: 'High-performance wired and wireless network implementation.',
    audience: 'New offices or businesses experiencing network bottlenecks.',
    process: ['Site Survey', 'Design', 'Installation', 'Optimization'],
    benefits: ['Reliability', 'Speed', 'Security'],
    price: '£1,500/project',
  },
  {
    id: 'voip-comms',
    title: 'VoIP & Comms',
    icon: PhoneCall,
    overview: 'Modern business communication systems for remote and office teams.',
    audience: 'Teams requiring flexible, cost-effective phone systems.',
    process: ['Demo', 'Setup', 'Training', 'Support'],
    benefits: ['Lower costs', 'Flexibility', 'Advanced features'],
    price: '£15/user/month',
  },
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Our Core IT Services
          </motion.h1>
          <p className="text-xl text-slate-600">
            Tailored technology solutions designed to help British businesses thrive in a digital-first world.
          </p>
        </div>

        <div className="space-y-12">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left: Icon & Title */}
                <div className="lg:col-span-4 p-10 bg-indigo-600 text-white flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-indigo-100 text-lg leading-relaxed">
                      {service.overview}
                    </p>
                  </div>
                  <div className="mt-8 pt-8 border-t border-white/20">
                    <p className="text-sm font-semibold uppercase tracking-wider text-indigo-200 mb-2">Starting From</p>
                    <p className="text-4xl font-bold">{service.price}</p>
                  </div>
                </div>

                {/* Right: Details */}
                <div className="lg:col-span-8 p-10 lg:p-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Audience & Benefits */}
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Target Audience</h3>
                        <p className="text-slate-700 leading-relaxed">{service.audience}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Key Benefits</h3>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center gap-3 text-slate-700">
                              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Process */}
                    <div>
                      <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-6">Our Process</h3>
                      <div className="relative space-y-8">
                        {service.process.map((step, i) => (
                          <div key={step} className="flex items-center gap-4 relative z-10">
                            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-500 shrink-0">
                              0{i + 1}
                            </div>
                            <span className="font-semibold text-slate-900">{step}</span>
                          </div>
                        ))}
                        {/* Connecting Line */}
                        <div className="absolute left-4 top-4 bottom-4 w-px bg-slate-200 -z-0" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-12 border-t border-slate-100 flex justify-end">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all"
                    >
                      Enquire about this service <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need a Custom Solution?</h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
            We understand that every business is unique. Our team can design a bespoke IT strategy that fits your specific goals and budget.
          </p>
          <Link
            to="/contact"
            className="bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl"
          >
            Speak to a Consultant
          </Link>
        </div>
      </div>
    </div>
  );
}
