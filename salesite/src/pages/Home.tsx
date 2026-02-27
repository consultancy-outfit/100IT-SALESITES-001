import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Users, Globe, ArrowRight, CheckCircle2, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';

const Hero = () => (
  <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-48">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(79,70,229,0.1)_0%,transparent_100%)]" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 mb-6">
            Trusted IT Partners for UK Business
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8">
            Intelligent IT Solutions for the <span className="text-indigo-600">Modern Enterprise</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            From managed services to advanced cybersecurity, we provide the technical foundation your business needs to scale securely in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={ROUTES.SERVICES}
              className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center group"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to={ROUTES.CONTACT}
              className="w-full sm:w-auto bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg border border-slate-200 hover:bg-slate-50 transition-all"
            >
              Book a Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="bg-white py-20 border-y border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: 'Uptime SLA', value: '99.9%' },
          { label: 'Active Clients', value: '250+' },
          { label: 'Support Response', value: '< 15m' },
          { label: 'Projects Delivered', value: '1.2k' },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.value}</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Lumina IT?</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">We combine technical excellence with a deep understanding of the UK business landscape.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: Shield,
            title: 'Cybersecurity First',
            desc: 'Every solution we build is hardened with enterprise-grade security protocols by default.',
          },
          {
            icon: Zap,
            title: 'Rapid Deployment',
            desc: 'Our agile processes ensure your infrastructure is ready when you need it, not weeks later.',
          },
          {
            icon: Users,
            title: 'Dedicated Support',
            desc: 'UK-based engineers available 24/7 to ensure your operations never skip a beat.',
          },
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
              <item.icon className="text-indigo-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CaseStudies = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Success Stories</h2>
          <p className="text-slate-600">Real results for real British businesses.</p>
        </div>
        <Link to={ROUTES.SERVICES} className="text-indigo-600 font-semibold flex items-center hover:underline">
          View all services <ChevronRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            client: 'FinTech London',
            title: 'Cloud Migration & Security Overhaul',
            result: '£45k annual savings',
            desc: 'We migrated their legacy infrastructure to a secure Azure environment, improving performance by 40%.',
          },
          {
            client: 'Midlands Manufacturing',
            title: 'Managed IT & Network Resilience',
            result: 'Zero downtime in 24 months',
            desc: 'Implemented a redundant network architecture and 24/7 monitoring for a multi-site operation.',
          },
        ].map((study, i) => (
          <div key={i} className="group relative overflow-hidden rounded-3xl bg-slate-900 p-8 text-white">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Globe className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <span className="text-indigo-400 font-bold text-sm uppercase tracking-widest">{study.client}</span>
              <h3 className="text-2xl font-bold mt-2 mb-4">{study.title}</h3>
              <p className="text-slate-400 mb-6">{study.desc}</p>
              <div className="inline-flex items-center bg-indigo-600/20 text-indigo-300 px-4 py-2 rounded-lg border border-indigo-500/30 font-semibold">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                {study.result}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-slate-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: 'Alistair Graham',
            role: 'CTO, Sterling Logistics',
            text: 'Lumina IT transformed our digital infrastructure. Their response times are unmatched in the UK market.',
          },
          {
            name: 'Sarah Jenkins',
            role: 'Director, Oakwood Legal',
            text: 'Professional, knowledgeable, and reliable. They handled our GDPR compliance and security with absolute precision.',
          },
          {
            name: 'David Thompson',
            role: 'Founder, TechPulse UK',
            text: 'The managed services plan has saved us thousands in potential downtime. Highly recommended for any growing firm.',
          },
        ].map((t, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 relative">
            <div className="flex text-amber-400 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-slate-600 italic mb-6">"{t.text}"</p>
            <div>
              <div className="font-bold text-slate-900">{t.name}</div>
              <div className="text-sm text-slate-500">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Secure Your Digital Future?</h2>
          <p className="text-indigo-100 text-lg mb-12 max-w-2xl mx-auto">
            Join hundreds of British businesses that trust Lumina IT for their critical infrastructure and support.
          </p>
          <Link
            to={ROUTES.CONTACT}
            className="inline-flex items-center bg-white text-indigo-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-indigo-50 transition-all shadow-xl"
          >
            Contact Our Experts
            <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Benefits />
      <CaseStudies />
      <Testimonials />
      <CTA />
    </>
  );
}
