import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Zap, BarChart3, Users2, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const stats = [
  { label: 'Client Satisfaction', value: '99%' },
  { label: 'Projects Delivered', value: '500+' },
  { label: 'Uptime Guarantee', value: '99.9%' },
  { label: 'Cost Savings', value: '£2.4M+' },
];

const benefits = [
  {
    title: 'UK-Based Support',
    description: 'Our dedicated team of experts is based entirely in the UK, ensuring seamless communication and local expertise.',
    icon: Globe2,
  },
  {
    title: 'GDPR Compliant',
    description: 'We prioritize data security and are fully compliant with UK GDPR regulations, protecting your business and clients.',
    icon: Shield,
  },
  {
    title: 'Rapid Response',
    description: 'Our average response time for critical issues is under 15 minutes, keeping your operations running smoothly.',
    icon: Zap,
  },
];

const caseStudies = [
  {
    title: 'Financial Sector Migration',
    client: 'London Capital Partners',
    result: '£120,000 annual savings',
    description: 'Successfully migrated a legacy infrastructure to a secure cloud environment, improving performance by 40%.',
  },
  {
    title: 'E-commerce Scalability',
    client: 'Manchester Retail Group',
    result: '300% traffic capacity increase',
    description: 'Optimised server architecture to handle peak seasonal traffic without downtime.',
  },
];

const testimonials = [
  {
    name: 'James Harrison',
    role: 'CTO, TechFlow UK',
    content: 'The team at SLS Uxbridge transformed our digital infrastructure. Their attention to detail and UK-centric support is unmatched.',
  },
  {
    name: 'Sarah Thompson',
    role: 'Director, Thompson & Co',
    content: 'Professional, reliable, and incredibly knowledgeable. They helped us navigate complex GDPR requirements with ease.',
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 text-indigo-700 mb-6">
                British IT Excellence
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-zinc-900 tracking-tight leading-[1.1] mb-6">
                Empowering UK Business Through <span className="text-indigo-600">Smart Technology</span>
              </h1>
              <p className="text-xl text-zinc-600 mb-8 leading-relaxed max-w-lg">
                Supported Living Services Uxbridge delivers world-class IT infrastructure, 
                cybersecurity, and managed services tailored for the British market.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 font-semibold group"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full text-zinc-700 bg-zinc-100 hover:bg-zinc-200 transition-all font-semibold"
                >
                  Contact Us
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
                  src="https://picsum.photos/seed/it-office/800/800"
                  alt="Modern UK IT Office"
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-50 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900">ISO 27001 Certified</p>
                    <p className="text-xs text-zinc-500">Security Excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-indigo-600 mb-1">{stat.value}</p>
                <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl mb-4">Why Choose SLS Uxbridge?</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              We combine deep technical expertise with a commitment to the British business community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-indigo-200 transition-colors group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{benefit.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">Measurable Results</h2>
              <p className="text-zinc-400 text-lg">
                Our solutions don't just work; they deliver tangible financial and operational value.
              </p>
            </div>
            <Link to="/services" className="text-indigo-400 font-semibold flex items-center hover:text-indigo-300 transition-colors">
              View all services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.title} className="bg-zinc-800/50 p-8 rounded-3xl border border-zinc-700 hover:border-indigo-500/50 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-indigo-400 font-medium text-sm mb-2">{study.client}</p>
                    <h3 className="text-2xl font-bold">{study.title}</h3>
                  </div>
                  <div className="bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-full text-sm font-bold border border-indigo-500/20">
                    {study.result}
                  </div>
                </div>
                <p className="text-zinc-400 leading-relaxed mb-6">{study.description}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-white">
                  <BarChart3 className="w-4 h-4 text-indigo-400" />
                  Performance Metrics Verified
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl mb-4">Trusted by British Leaders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="p-10 rounded-3xl bg-indigo-50/50 border border-indigo-100 relative">
                <p className="text-lg text-zinc-700 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center font-bold text-indigo-700">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900">{t.name}</p>
                    <p className="text-sm text-zinc-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your IT?</h2>
          <p className="text-xl text-indigo-100 mb-10">
            Join hundreds of UK businesses that trust SLS Uxbridge for their technology needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-white text-indigo-600 hover:bg-indigo-50 transition-all shadow-xl font-bold text-lg"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
