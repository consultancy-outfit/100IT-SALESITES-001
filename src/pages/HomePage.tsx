import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Zap, Globe, Users, BarChart3, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS, CASE_STUDIES, SERVICES } from '../constants';

const Hero = () => (
  <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="absolute -bottom-[40%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-500/10 blur-[120px]" />
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Trusted UK IT Partner
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8">
            Empowering British Business through <span className="text-indigo-400">Technical Excellence.</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
            From managed support to strategic digital transformation, we provide the infrastructure and expertise that drives growth for UK enterprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-500 transition-all flex items-center justify-center gap-2 group"
            >
              Consult an Expert <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center justify-center"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Benefits = () => {
  const benefits = [
    { title: '24/7 UK Support', desc: 'Round-the-clock monitoring and helpdesk from our Cambridge-based team.', icon: Shield },
    { title: 'Strategic Roadmap', desc: 'We don\'t just fix problems; we build long-term technology strategies.', icon: Zap },
    { title: 'GDPR Compliant', desc: 'Full adherence to UK data protection laws and security standards.', icon: Globe },
    { title: 'Cost Efficiency', desc: 'Predictable monthly billing with measurable ROI on all IT investments.', icon: BarChart3 },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Isaac Newton House?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We combine the precision of scientific inquiry with the pragmatism of modern business.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors group"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                <benefit.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Industries We Serve in the UK</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Our expertise spans across diverse sectors, understanding the unique regulatory and operational challenges of the British market.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {['Legal & Professional', 'Finance & FinTech', 'Manufacturing', 'Retail & E-commerce', 'Biotech & Life Sciences', 'Logistics'].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="h-48 rounded-2xl bg-indigo-100 overflow-hidden">
              <img src="https://picsum.photos/seed/it1/600/400" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            </div>
            <div className="h-64 rounded-2xl bg-slate-200 overflow-hidden">
              <img src="https://picsum.photos/seed/it2/600/400" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="h-64 rounded-2xl bg-slate-200 overflow-hidden">
              <img src="https://picsum.photos/seed/it3/600/400" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            </div>
            <div className="h-48 rounded-2xl bg-indigo-100 overflow-hidden">
              <img src="https://picsum.photos/seed/it4/600/400" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CaseStudies = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Measurable Results</h2>
          <p className="text-slate-600">Real impact for real British businesses.</p>
        </div>
        <Link to="/services" className="hidden sm:flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all">
          View all services <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CASE_STUDIES.map((study, i) => (
          <div key={i} className="group relative overflow-hidden rounded-3xl bg-slate-900 p-8 lg:p-12 text-white">
            <div className="relative z-10">
              <span className="text-indigo-400 font-mono text-sm mb-4 block">{study.client}</span>
              <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">{study.description}</p>
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/10 rounded-xl border border-white/10">
                <span className="text-xs uppercase tracking-wider text-slate-400">Result</span>
                <span className="text-xl font-bold text-indigo-400">{study.result}</span>
              </div>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <BarChart3 className="w-32 h-32" />
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
        <h2 className="text-3xl font-bold text-slate-900">What Our Clients Say</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
            <p className="text-slate-600 italic mb-8 leading-relaxed">"{t.content}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-indigo-600 font-bold">
                {t.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-24 bg-indigo-600 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
    </div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h2 className="text-4xl font-bold text-white mb-8">Ready to modernize your IT infrastructure?</h2>
      <p className="text-xl text-indigo-100 mb-10">Join the ranks of forward-thinking British companies partnering with Isaac Newton House.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/contact" className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold hover:bg-indigo-50 transition-all">
          Book a Discovery Call
        </Link>
        <Link to="/pricing" className="bg-indigo-700 text-white px-10 py-4 rounded-full font-bold hover:bg-indigo-800 transition-all">
          View Pricing
        </Link>
      </div>
    </div>
  </section>
);

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Industries />
      <CaseStudies />
      <Testimonials />
      <CTA />
    </>
  );
};
