import { Shield, Cloud, Monitor, PhoneCall, Lock, Database, RefreshCw, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const services = [
  {
    icon: <Shield className="w-10 h-10" />,
    title: 'Cyber Security & Compliance',
    overview: 'Comprehensive protection for sensitive patient and resident data, ensuring full compliance with GDPR and NHS DSPT.',
    target: 'Care homes and clinics handling high volumes of sensitive medical records.',
    process: ['Risk Assessment', 'Strategy Design', 'Implementation', '24/7 Monitoring'],
    benefits: ['Zero Data Breaches', 'Regulatory Peace of Mind', 'Insured Protection'],
    price: '£499'
  },
  {
    icon: <Cloud className="w-10 h-10" />,
    title: 'Cloud Infrastructure',
    overview: 'Modernise your operations with scalable, secure cloud solutions that allow your team to work from anywhere.',
    target: 'Multi-site care groups looking to centralise their digital operations.',
    process: ['Cloud Audit', 'Migration Planning', 'Execution', 'Optimization'],
    benefits: ['Reduced Hardware Costs', 'Remote Accessibility', 'Automatic Backups'],
    price: '£299'
  },
  {
    icon: <Monitor className="w-10 h-10" />,
    title: 'Managed IT Support',
    overview: 'Proactive maintenance and rapid-response helpdesk support for all your hardware and software needs.',
    target: 'Any care organisation requiring reliable, 24/7 technical assistance.',
    process: ['Onboarding', 'System Monitoring', 'Helpdesk Access', 'Quarterly Reviews'],
    benefits: ['Minimal Downtime', 'Predictable Costs', 'Expert Guidance'],
    price: '£199'
  },
  {
    icon: <Lock className="w-10 h-10" />,
    title: 'Data Backup & Recovery',
    overview: 'Robust disaster recovery plans to ensure your critical systems can be restored in minutes, not days.',
    target: 'Organisations where data loss would critically impact patient care.',
    process: ['Data Mapping', 'Backup Scheduling', 'Testing', 'Recovery Drills'],
    benefits: ['Business Continuity', 'Data Integrity', 'Fast Restoration'],
    price: '£149'
  },
  {
    icon: <PhoneCall className="w-10 h-10" />,
    title: 'VoIP & Communication',
    overview: 'Crystal-clear, cost-effective communication systems designed for the high-demand environment of care settings.',
    target: 'Care homes needing reliable internal and external communication.',
    process: ['Site Survey', 'System Setup', 'Staff Training', 'Ongoing Support'],
    benefits: ['Lower Phone Bills', 'Flexible Routing', 'Integrated Messaging'],
    price: '£99'
  },
  {
    icon: <Database className="w-10 h-10" />,
    title: 'Digital Transformation',
    overview: 'Strategic consulting to help you move from paper-based systems to efficient digital care records.',
    target: 'Traditional care providers looking to innovate and improve efficiency.',
    process: ['Needs Analysis', 'Vendor Selection', 'Implementation', 'Change Management'],
    benefits: ['Increased Efficiency', 'Better Care Outcomes', 'Future-Proofing'],
    price: '£999'
  }
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-zinc-900 mb-8 tracking-tight">
              Specialised IT Services for <span className="text-indigo-600">UK Care</span>
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              From foundational support to complex digital transformation, we provide the technical backbone for modern care delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
              >
                {/* Visual/Icon Side */}
                <div className="lg:col-span-4">
                  <div className="p-8 rounded-3xl bg-indigo-50 text-indigo-600 inline-block mb-6 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-zinc-900 mb-4">{service.title}</h2>
                  <p className="text-zinc-600 mb-6 leading-relaxed">{service.overview}</p>
                  <div className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">Ideal For</div>
                  <p className="text-zinc-900 font-medium">{service.target}</p>
                </div>

                {/* Details Side */}
                <div className="lg:col-span-8 bg-zinc-50 rounded-[2rem] p-8 lg:p-12 border border-zinc-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-lg font-bold text-zinc-900 mb-6 flex items-center">
                        <RefreshCw className="w-5 h-5 mr-2 text-indigo-600" />
                        Our Process
                      </h3>
                      <ul className="space-y-4">
                        {service.process.map((step, idx) => (
                          <li key={idx} className="flex items-center text-zinc-600">
                            <span className="w-6 h-6 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-xs font-bold mr-3 text-indigo-600">
                              {idx + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-zinc-900 mb-6 flex items-center">
                        <ArrowRight className="w-5 h-5 mr-2 text-indigo-600" />
                        Key Benefits
                      </h3>
                      <ul className="space-y-4">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-zinc-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mr-3" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div>
                      <span className="text-sm text-zinc-500 block mb-1">Starting from</span>
                      <span className="text-3xl font-bold text-zinc-900">{service.price}<span className="text-lg font-normal text-zinc-400">/mo</span></span>
                    </div>
                    <Link
                      to="/contact"
                      className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-900 text-white font-bold hover:bg-zinc-800 transition-all text-center"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Not sure what you need?</h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">Our consultants can perform a full digital audit of your organisation to identify risks and opportunities.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-900/20"
          >
            Book a Free Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
