import React from 'react';
import { motion } from 'motion/react';
import { Shield, Cloud, Laptop, Headphones, Database, Network, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Headphones,
    title: 'Managed IT Support',
    overview: 'Comprehensive 24/7 technical support for your entire workforce, ensuring seamless operations.',
    target: 'SMEs and growing UK enterprises without a dedicated internal IT team.',
    process: ['Audit & Onboarding', '24/7 Monitoring', 'Helpdesk Support', 'Quarterly Reviews'],
    benefits: ['Reduced Downtime', 'Predictable Monthly Costs', 'Expert Knowledge Access'],
    price: '£499'
  },
  {
    icon: Shield,
    title: 'Cybersecurity Solutions',
    overview: 'Multi-layered defense strategies to protect your business from evolving digital threats.',
    target: 'Businesses handling sensitive client data or operating in regulated sectors.',
    process: ['Vulnerability Assessment', 'Firewall Management', 'Endpoint Protection', 'Staff Training'],
    benefits: ['Risk Mitigation', 'GDPR Compliance', 'Brand Protection'],
    price: '£750'
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    overview: 'Scalable, secure, and high-performance cloud solutions tailored to your business needs.',
    target: 'Companies looking to modernise legacy systems and enable remote work.',
    process: ['Cloud Readiness Audit', 'Migration Strategy', 'Deployment', 'Ongoing Optimisation'],
    benefits: ['Scalability', 'Cost Efficiency', 'Enhanced Collaboration'],
    price: '£1,200'
  },
  {
    icon: Database,
    title: 'Business Continuity',
    overview: 'Robust backup and disaster recovery plans to ensure your data is always safe and recoverable.',
    target: 'Any business where data loss or downtime would be catastrophic.',
    process: ['Impact Analysis', 'Backup Configuration', 'Recovery Testing', 'Real-time Syncing'],
    benefits: ['Peace of Mind', 'Minimal Data Loss', 'Rapid Recovery'],
    price: '£350'
  },
  {
    icon: Network,
    title: 'Network & Connectivity',
    overview: 'High-speed, reliable business broadband and secure internal networking solutions.',
    target: 'Offices requiring stable, high-bandwidth connections for VoIP and cloud apps.',
    process: ['Site Survey', 'Hardware Installation', 'Security Configuration', 'Performance Tuning'],
    benefits: ['Faster Speeds', 'Secure Connections', 'Optimised Traffic'],
    price: '£299'
  },
  {
    icon: Search,
    title: 'IT Strategic Consulting',
    overview: 'Expert guidance to align your technology roadmap with your long-term business goals.',
    target: 'Leadership teams planning for significant growth or digital transformation.',
    process: ['Business Goal Analysis', 'Tech Gap Audit', 'Roadmap Creation', 'Implementation Oversight'],
    benefits: ['Strategic Alignment', 'Informed Budgeting', 'Competitive Edge'],
    price: '£1,500'
  }
];

const Services = () => {
  return (
    <div className="bg-zinc-50 min-h-screen pb-32">
      {/* Header */}
      <section className="bg-white pt-24 pb-20 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6 tracking-tight"
          >
            Our <span className="text-indigo-600">IT Services</span>
          </motion.h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Enterprise-grade solutions designed for the British market. Scalable, secure, and supported by local experts.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-zinc-100 flex flex-col lg:flex-row gap-12"
              >
                <div className="lg:w-1/3">
                  <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-8">
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-zinc-900 mb-4">{service.title}</h2>
                  <p className="text-zinc-600 mb-6 leading-relaxed">{service.overview}</p>
                  <div className="pt-6 border-t border-zinc-100">
                    <p className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">Starting from</p>
                    <p className="text-4xl font-bold text-indigo-600">{service.price}<span className="text-lg text-zinc-400 font-normal"> /mo</span></p>
                  </div>
                </div>

                <div className="lg:w-2/3 grid md:grid-cols-2 gap-10">
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mb-4">Target Audience</h4>
                      <p className="text-zinc-600 text-sm leading-relaxed">{service.target}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mb-4">The Process</h4>
                      <ul className="space-y-3">
                        {service.process.map((step, i) => (
                          <li key={i} className="flex items-center text-sm text-zinc-600">
                            <div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-[10px] font-bold mr-3 shrink-0">
                              {i + 1}
                            </div>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mb-4">Key Benefits</h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center text-sm text-zinc-600">
                            <Shield size={14} className="text-emerald-500 mr-3 shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center text-indigo-600 font-bold hover:translate-x-1 transition-transform"
                      >
                        Enquire about this service <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-600 rounded-[2.5rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Need a custom IT package?</h2>
            <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">We understand every business is unique. Let's build a solution that fits your specific requirements and budget.</p>
            <Link
              to="/contact"
              className="bg-white text-indigo-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl"
            >
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
