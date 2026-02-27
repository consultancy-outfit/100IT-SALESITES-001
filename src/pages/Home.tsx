import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Zap, Globe, Users, BarChart3, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_DETAILS } from '../constants';

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-700"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-brand-700 uppercase bg-brand-50 rounded-full border border-brand-100">
            Premium UK IT Solutions
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 mb-6 leading-tight">
            Future-Proof Your <span className="gradient-text">Business Technology</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            City Gate House provides enterprise-grade IT services, cybersecurity, and cloud infrastructure tailored for ambitious UK businesses. We bridge the gap between complex technology and your commercial goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white rounded-full font-bold text-lg hover:bg-brand-700 transition-all shadow-lg shadow-brand-200 flex items-center justify-center gap-2"
            >
              Explore Services <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
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
  <section className="py-12 bg-white border-y border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { label: 'Uptime Guarantee', value: '99.99%' },
          { label: 'Response Time', value: '< 15m' },
          { label: 'UK Businesses', value: '250+' },
          { label: 'Security Audits', value: '1,000+' },
        ].map((stat, i) => (
          <div key={i}>
            <div className="text-3xl font-display font-bold text-brand-600 mb-1">{stat.value}</div>
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
        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Why Choose City Gate House?</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">We don't just fix computers; we build the digital foundations that allow your business to scale securely and efficiently.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <Shield className="text-brand-600" size={32} />,
            title: 'Security First',
            desc: 'Every solution we build is hardened against modern threats, ensuring your data and reputation remain intact.'
          },
          {
            icon: <Zap className="text-brand-600" size={32} />,
            title: 'Proactive Support',
            desc: 'We identify and resolve issues before they impact your operations, maintaining peak performance 24/7.'
          },
          {
            icon: <Globe className="text-brand-600" size={32} />,
            title: 'UK Compliance',
            desc: 'Fully GDPR compliant and aligned with UK regulatory standards, providing peace of mind for local enterprises.'
          }
        ].map((benefit, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100"
          >
            <div className="mb-6">{benefit.icon}</div>
            <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
            <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Industries = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Specialised Expertise Across UK Industries</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Our team understands the unique technological challenges and regulatory requirements of various sectors in the UK market.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Financial Services', 'Legal & Professional', 'Healthcare & Life Sciences', 
              'Manufacturing', 'Retail & E-commerce', 'Non-Profit Sector'
            ].map((industry, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-emerald-500" size={20} />
                <span className="font-medium text-slate-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          <img src="https://picsum.photos/seed/it1/400/500" alt="IT Infrastructure" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
          <img src="https://picsum.photos/seed/it2/400/500" alt="Office Tech" className="rounded-2xl shadow-lg mt-8" referrerPolicy="no-referrer" />
        </div>
      </div>
    </div>
  </section>
);

const CaseStudies = () => (
  <section className="py-24 bg-slate-900 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Measurable Results</h2>
        <p className="text-slate-400">Real impact for real UK businesses.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: 'Cloud Migration for London Law Firm',
            result: 'Reduced infrastructure costs by 35%',
            value: '£45,000 annual saving',
            desc: 'Migrated legacy on-premise servers to a secure Azure environment with zero downtime.'
          },
          {
            title: 'Cybersecurity Overhaul for Fintech',
            result: '100% reduction in security incidents',
            value: '£120,000 risk mitigation',
            desc: 'Implemented multi-layer defense and 24/7 SOC monitoring for a rapidly growing startup.'
          }
        ].map((study, i) => (
          <div key={i} className="p-8 bg-slate-800 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-bold mb-4">{study.title}</h3>
            <p className="text-slate-400 mb-6">{study.desc}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-brand-900/50 border border-brand-500/30 p-4 rounded-xl flex-1">
                <div className="text-xs text-brand-400 uppercase font-bold mb-1">Outcome</div>
                <div className="font-bold">{study.result}</div>
              </div>
              <div className="bg-emerald-900/50 border border-emerald-500/30 p-4 rounded-xl flex-1">
                <div className="text-xs text-emerald-400 uppercase font-bold mb-1">Financial Impact</div>
                <div className="font-bold">{study.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Client Testimonials</h2>
        <p className="text-slate-600">What our partners say about us.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: 'Alistair Graham',
            role: 'Operations Director',
            company: 'Thames Logistics Ltd',
            content: 'City Gate House transformed our IT from a constant headache into a strategic asset. Their response times are unmatched in the London area.'
          },
          {
            name: 'Sarah Jenkins',
            role: 'CTO',
            company: 'Brighton Creative',
            content: 'The security audit they performed was eye-opening. We now have full confidence in our remote working infrastructure.'
          },
          {
            name: 'David Thompson',
            role: 'Managing Partner',
            company: 'Thompson & Co Solicitors',
            content: 'Professional, knowledgeable, and genuinely British in their approach to service. They understand the nuances of the UK legal sector.'
          }
        ].map((t, i) => (
          <div key={i} className="p-8 bg-slate-50 rounded-2xl relative">
            <Quote className="absolute top-4 right-4 text-slate-200" size={40} />
            <p className="text-slate-700 italic mb-6 relative z-10">"{t.content}"</p>
            <div>
              <div className="font-bold text-slate-900">{t.name}</div>
              <div className="text-sm text-slate-500">{t.role}, {t.company}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-brand-600 rounded-3xl p-12 text-center text-white shadow-2xl shadow-brand-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to Elevate Your IT?</h2>
          <p className="text-brand-100 text-xl mb-10 max-w-2xl mx-auto">
            Join hundreds of UK businesses that trust City Gate House for their technology needs. Let's build something great together.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-white text-brand-600 rounded-full font-bold text-lg hover:bg-brand-50 transition-all"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export const Home = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <Benefits />
      <Industries />
      <CaseStudies />
      <Testimonials />
      <CTA />
    </main>
  );
};
