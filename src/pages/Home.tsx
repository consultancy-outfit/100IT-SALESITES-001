import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Users, Briefcase, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const TESTIMONIALS = [
  {
    name: "James Harrison",
    role: "Director, Harrison Logistics",
    content: "Bridlington IT transformed our outdated infrastructure in weeks. Their proactive support has saved us thousands in potential downtime.",
    avatar: "https://picsum.photos/seed/james/100/100"
  },
  {
    name: "Sarah Miller",
    role: "Operations Manager, Kent Retail Group",
    content: "The level of expertise and personal service is unmatched. They truly feel like an extension of our own team.",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "David Thompson",
    role: "CEO, Thompson & Co Solicitors",
    content: "Cybersecurity was our biggest worry. Bridlington IT implemented a robust solution that gave us complete peace of mind.",
    avatar: "https://picsum.photos/seed/david/100/100"
  }
];

const CASE_STUDIES = [
  {
    title: "Cloud Transformation for Manufacturing",
    client: "Midlands Manufacturing Ltd",
    result: "£45,000 annual savings",
    description: "Migrated legacy on-premise servers to Azure, improving remote access and reducing hardware maintenance costs."
  },
  {
    title: "Cybersecurity Overhaul",
    client: "South Coast Finance",
    result: "100% threat mitigation",
    description: "Implemented multi-factor authentication and endpoint protection across 150 devices following a security audit."
  }
];

export const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-50 via-white to-white"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        </div>
        
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-brand-700 uppercase bg-brand-100 rounded-full">
                Your Trusted UK IT Partner
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                Empowering British Business with <span className="text-brand-600">Expert IT Solutions</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                From managed support to cloud strategy, we provide the technical foundation your business needs to scale securely and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white rounded-full font-bold text-lg hover:bg-brand-700 transition-all shadow-xl hover:shadow-brand-200 active:scale-95 flex items-center justify-center gap-2"
                >
                  Book a Free Audit <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all active:scale-95"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Clients Served", value: "250+", icon: Users },
              { label: "Uptime Guarantee", value: "99.9%", icon: TrendingUp },
              { label: "Expert Engineers", value: "15+", icon: Briefcase },
              { label: "Customer Rating", value: "4.9/5", icon: Star },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="flex justify-center">
                  <stat.icon className="w-6 h-6 text-brand-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core IT Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Tailored technology solutions designed to meet the unique challenges of modern UK enterprises.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -5 }}
                className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                   {/* Icon placeholder - in real app would map string to component */}
                   <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <Link to={`/services#${service.id}`} className="text-brand-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-600/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Measurable Results</h2>
              <p className="text-slate-400">We don't just provide IT; we deliver business value. See how we've helped British companies save money and improve efficiency.</p>
            </div>
            <Link to="/about" className="text-brand-400 font-semibold flex items-center gap-2">
              View All Success Stories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study, i) => (
              <div key={i} className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
                <div className="text-brand-400 font-mono text-sm mb-4 uppercase tracking-widest">{study.client}</div>
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">{study.description}</p>
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-brand-600/20 text-brand-400 rounded-full border border-brand-600/30 font-bold">
                  <TrendingUp className="w-5 h-5" /> {study.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-slate-600">Trusted by business leaders across the United Kingdom.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-2xl relative">
                <div className="mb-6 text-brand-600">
                  <Star className="w-5 h-5 inline-block fill-current" />
                  <Star className="w-5 h-5 inline-block fill-current" />
                  <Star className="w-5 h-5 inline-block fill-current" />
                  <Star className="w-5 h-5 inline-block fill-current" />
                  <Star className="w-5 h-5 inline-block fill-current" />
                </div>
                <p className="text-slate-700 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Modernise Your IT?</h2>
          <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
            Join hundreds of UK businesses who trust Bridlington IT for their technology needs.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 bg-white text-brand-600 rounded-full font-bold text-lg hover:bg-brand-50 transition-all shadow-2xl active:scale-95"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};
