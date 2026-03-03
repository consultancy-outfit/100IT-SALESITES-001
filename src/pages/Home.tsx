import { motion } from 'motion/react';
import { ArrowRight, Shield, Zap, Users, Globe, BarChart3, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    title: 'UK-Based Support',
    description: 'Our helpdesk is staffed by local experts who understand the British business landscape.',
    icon: Globe,
  },
  {
    title: 'Enterprise Security',
    description: 'We deploy the same level of protection used by global corporations to your SME.',
    icon: Shield,
  },
  {
    title: 'Rapid Response',
    description: 'Average response time of under 15 minutes for critical infrastructure issues.',
    icon: Zap,
  },
];

const industries = [
  'Legal & Professional Services',
  'Healthcare & Life Sciences',
  'Manufacturing & Logistics',
  'Finance & FinTech',
  'Education & Non-Profit',
  'Retail & E-commerce'
];

const caseStudies = [
  {
    client: 'Luton Legal Associates',
    challenge: 'Legacy server failures causing 4 hours of downtime weekly.',
    solution: 'Full cloud migration to Microsoft Azure with redundant backups.',
    result: '£12,000 annual savings in hardware maintenance and zero downtime.',
  },
  {
    client: 'Midlands Manufacturing Ltd',
    challenge: 'Ransomware attack threatening sensitive production data.',
    solution: 'Implementation of advanced endpoint protection and security training.',
    result: 'Prevented an estimated £45,000 in potential data breach fines and recovery costs.',
  }
];

const testimonials = [
  {
    name: 'Alistair Graham',
    role: 'Managing Director, Graham & Co',
    content: 'Assure IT transformed our remote working capabilities overnight. Their proactive approach is exactly what we needed.',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Operations Manager, HealthFirst UK',
    content: 'The peace of mind knowing our patient data is GDPR compliant and secure is invaluable. A truly professional team.',
  }
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
                Trusted UK IT Partner
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                Future-Proof Your Business with <span className="text-indigo-600">Intelligent IT</span>
              </h1>
              <p className="text-lg text-zinc-600 mb-10 leading-relaxed max-w-xl">
                Assure IT provides managed support, cybersecurity, and cloud solutions tailored for the modern British enterprise. We handle the tech, so you can focus on growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
                >
                  Get a Free Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-zinc-900 bg-white border-2 border-zinc-200 rounded-full hover:bg-zinc-50 transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/modern-it-office.png"
                  alt="Modern IT Office"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 hidden sm:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900">100% Secure</p>
                    <p className="text-xs text-zinc-500">GDPR Compliant Solutions</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Why British Businesses Choose Assure IT</h2>
            <p className="text-zinc-600">We combine technical excellence with a deep understanding of local market requirements.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100"
              >
                <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{benefit.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">Specialised IT for Your Industry</h2>
              <p className="text-zinc-600 mb-8">We don't believe in one-size-fits-all. Our solutions are engineered to meet the specific regulatory and operational demands of your sector.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industries.map((industry, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                    <span className="text-zinc-700 font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-zinc-900 rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10">
                <Globe className="h-64 w-64" />
              </div>
              <h3 className="text-2xl font-bold mb-6">National Reach, Local Touch</h3>
              <p className="text-zinc-400 mb-8 leading-relaxed">Headquartered in Luton, we provide on-site support across the Home Counties and remote management for businesses nationwide.</p>
              <div className="flex items-center space-x-8">
                <div>
                  <p className="text-3xl font-bold text-indigo-400">15m</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">Avg Response</p>
                </div>
                <div className="w-px h-12 bg-zinc-800" />
                <div>
                  <p className="text-3xl font-bold text-indigo-400">99.9%</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">Uptime SLA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Measurable Results</h2>
            <p className="text-zinc-600">See how we've helped other UK businesses save money and improve security.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-100 flex flex-col">
                <div className="p-8 flex-grow">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Case Study</span>
                    <BarChart3 className="h-5 w-5 text-zinc-300" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">{cs.client}</h3>
                  <div className="space-y-4 text-sm">
                    <p><strong className="text-zinc-900">Challenge:</strong> <span className="text-zinc-600">{cs.challenge}</span></p>
                    <p><strong className="text-zinc-900">Solution:</strong> <span className="text-zinc-600">{cs.solution}</span></p>
                  </div>
                </div>
                <div className="bg-indigo-600 p-6 text-white">
                  <p className="text-sm font-medium opacity-80 mb-1">Impact:</p>
                  <p className="text-lg font-bold">{cs.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">What Our Clients Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {testimonials.map((t, idx) => (
                  <div key={idx} className="space-y-6">
                    <p className="text-xl text-indigo-100 italic leading-relaxed">"{t.content}"</p>
                    <div>
                      <p className="text-white font-bold">{t.name}</p>
                      <p className="text-indigo-300 text-sm">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-zinc-900 mb-6">Ready to Secure Your Digital Future?</h2>
          <p className="text-xl text-zinc-600 mb-10 max-w-2xl mx-auto">Join hundreds of UK businesses that trust Assure IT for their technical excellence and reliable support.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200"
          >
            Book Your Free IT Audit
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
