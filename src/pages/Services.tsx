import { motion } from 'motion/react';
import { Cloud, ShieldAlert, Laptop, Network, Database, Headphones, Code2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Cloud className="w-10 h-10" />,
    title: 'Managed Cloud Solutions',
    overview: 'Full-lifecycle cloud management including migration, optimisation, and 24/7 support on Azure, AWS, and Google Cloud.',
    audience: 'SMEs looking to scale infrastructure without heavy capital expenditure.',
    process: ['Audit', 'Strategy', 'Migration', 'Optimisation', 'Support'],
    benefits: ['99.9% Uptime', 'Scalable Resources', 'Cost Efficiency'],
    price: '£499'
  },
  {
    icon: <ShieldAlert className="w-10 h-10" />,
    title: 'Cybersecurity & Compliance',
    overview: 'Advanced threat protection, vulnerability assessments, and Cyber Essentials certification readiness.',
    audience: 'Businesses handling sensitive client data or requiring regulatory compliance.',
    process: ['Risk Assessment', 'Implementation', 'Training', 'Monitoring'],
    benefits: ['Reduced Risk', 'Legal Compliance', 'Peace of Mind'],
    price: '£750'
  },
  {
    icon: <Laptop className="w-10 h-10" />,
    title: 'Modern Workplace (M365)',
    overview: 'Implementation and management of Microsoft 365, Teams, and SharePoint for seamless collaboration.',
    audience: 'Distributed teams needing secure, integrated communication tools.',
    process: ['Setup', 'Data Migration', 'Security Hardening', 'Training'],
    benefits: ['Better Collaboration', 'Secure Access', 'Integrated Apps'],
    price: '£15'
  },
  {
    icon: <Network className="w-10 h-10" />,
    title: 'Network Infrastructure',
    overview: 'Design and installation of high-performance wired and wireless networks, including SD-WAN and VPNs.',
    audience: 'Offices requiring robust, high-speed connectivity for critical operations.',
    process: ['Site Survey', 'Design', 'Installation', 'Testing'],
    benefits: ['High Speed', 'Reliability', 'Secure Connectivity'],
    price: '£1,200'
  },
  {
    icon: <Database className="w-10 h-10" />,
    title: 'Disaster Recovery & Backup',
    overview: 'Automated backup solutions and comprehensive business continuity planning to protect your data.',
    audience: 'Any business where data loss would result in significant operational impact.',
    process: ['Planning', 'Implementation', 'Regular Testing', 'Recovery'],
    benefits: ['Fast Recovery', 'Data Integrity', 'Business Continuity'],
    price: '£299'
  },
  {
    icon: <Headphones className="w-10 h-10" />,
    title: '24/7 IT Support Desk',
    overview: 'Unlimited remote and on-site support from our London-based team of expert engineers.',
    audience: 'Companies needing reliable, fast-response technical assistance.',
    process: ['Onboarding', 'Ticketing', 'Resolution', 'Reporting'],
    benefits: ['Fast Response', 'Expert Knowledge', 'Fixed Costs'],
    price: '£35'
  },
  {
    icon: <Code2 className="w-10 h-10" />,
    title: 'Custom Software Development',
    overview: 'Bespoke web and mobile applications designed to solve specific business challenges.',
    audience: 'Businesses needing unique digital tools to gain a competitive edge.',
    process: ['Discovery', 'UX Design', 'Development', 'QA', 'Launch'],
    benefits: ['Unique Features', 'Ownership', 'Process Automation'],
    price: '£5,000'
  }
];

export default function Services() {
  return (
    <div className="pt-24 pb-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Comprehensive <span className="text-brand-accent">IT Services</span> for the Modern Enterprise.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We provide a full spectrum of technology solutions designed to enhance efficiency, security, and growth for UK businesses.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-accent/10 text-brand-accent rounded-3xl mb-8">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold mb-6 text-slate-900">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">{service.overview}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Target Audience</h4>
                    <p className="text-sm text-slate-700 font-medium">{service.audience}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Starting From</h4>
                    <p className="text-2xl font-bold text-brand-primary">£{service.price} <span className="text-xs text-slate-400 font-normal">/ month*</span></p>
                  </div>
                </div>

                <div className="mb-10">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Our Process</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.process.map((step, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold border border-slate-200">
                        {i + 1}. {step}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center text-brand-accent font-bold hover:gap-3 transition-all"
                >
                  Discuss this service <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="relative">
                  <div className="absolute -inset-4 bg-brand-accent/5 rounded-[2rem] -rotate-2"></div>
                  <div className="relative bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
                    <h4 className="text-lg font-bold mb-6">Key Benefits</h4>
                    <ul className="space-y-4">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-1 bg-brand-accent/20 p-1 rounded-full">
                            <ArrowRight className="w-3 h-3 text-brand-accent" />
                          </div>
                          <span className="text-slate-700 font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-12 pt-8 border-t border-slate-100">
                      <p className="text-xs text-slate-400 italic">
                        * Prices are indicative and exclude VAT. Final pricing depends on user count and specific infrastructure requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="mt-32 py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-8">Trusted by Leading UK Organisations</h3>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            {/* Placeholder logos */}
            <div className="text-xl font-black tracking-tighter">TECHCORP</div>
            <div className="text-xl font-black tracking-tighter">FINANCE.UK</div>
            <div className="text-xl font-black tracking-tighter">HEALTHLINK</div>
            <div className="text-xl font-black tracking-tighter">BUILDERS.CO</div>
            <div className="text-xl font-black tracking-tighter">LEGALPRO</div>
          </div>
        </div>
      </section>
    </div>
  );
}
