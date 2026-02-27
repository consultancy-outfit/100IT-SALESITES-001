import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Users, Briefcase, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, CASE_STUDIES } from '../constants';

export function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-brand-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#10b981_0,transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,#10b981_0,transparent_40%)]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-brand-accent/20 text-brand-accent rounded-full text-sm font-semibold mb-6 border border-brand-accent/30">
                UK-Based IT Excellence
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tighter">
                Empowering British Business Through <span className="text-brand-accent">Strategic IT</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                Rosewood Lodge provides premium managed IT support, cloud strategy, and cyber security solutions tailored for the modern UK enterprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/services" 
                  className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-emerald-500 transition-all shadow-lg shadow-brand-accent/20"
                >
                  Explore Services <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-12 right-12 hidden lg:flex gap-8">
          {[
            { label: 'Uptime', value: '99.9%' },
            { label: 'Response Time', value: '< 15m' },
            { label: 'Client Retention', value: '98%' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="glass-card p-6 rounded-2xl border-white/10 bg-white/5"
            >
              <div className="text-2xl font-bold text-brand-accent">{stat.value}</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-black tracking-tighter">MICROSOFT PARTNER</span>
            <span className="text-xl font-black tracking-tighter">AWS CERTIFIED</span>
            <span className="text-xl font-black tracking-tighter">CYBER ESSENTIALS</span>
            <span className="text-xl font-black tracking-tighter">GDPR COMPLIANT</span>
            <span className="text-xl font-black tracking-tighter">ISO 27001</span>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-4">Why Rosewood Lodge?</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Your Dedicated Technology Partner in the Heart of the UK
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We don't just fix computers; we build the digital foundations that allow your business to scale. Based in Reading, we serve clients across London and the South East with a focus on reliability, security, and strategic growth.
              </p>
              <ul className="space-y-4">
                {[
                  'Proactive 24/7 monitoring and maintenance',
                  'Strategic technology roadmaps for growth',
                  'Enterprise-grade cyber security for SMEs',
                  'Transparent, fixed-fee pricing models'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-medium text-slate-800">
                    <CheckCircle2 className="text-brand-accent" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/it-office/800/800" 
                  alt="Modern IT Office" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent">
                    <Users size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-xs text-slate-500 uppercase font-bold">Users Supported</div>
                  </div>
                </div>
                <p className="text-sm text-slate-500 italic">"Their response time is unparalleled in the industry."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Core IT Solutions</h2>
            <p className="text-lg text-slate-600">
              Tailored technology services designed to solve complex business challenges and drive efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link 
                key={service.id} 
                to="/services" 
                className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-brand-primary hover:text-white transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-accent mb-6 shadow-sm group-hover:bg-brand-accent group-hover:text-white transition-colors">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-500 group-hover:text-slate-300 mb-6 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-brand-accent group-hover:text-white">
                  Learn More <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-4">Measurable Results</h2>
              <h3 className="text-4xl md:text-5xl font-bold">Real Success Stories</h3>
            </div>
            <Link to="/about" className="text-brand-accent font-bold flex items-center gap-2 hover:underline">
              View All Case Studies <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {CASE_STUDIES.map((study, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-10 rounded-3xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{study.client}</h4>
                    <p className="text-brand-accent text-sm font-semibold">{study.title}</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-slate-400 text-sm uppercase font-bold mb-2">The Result</p>
                    <p className="text-lg leading-relaxed">{study.result}</p>
                  </div>
                  <div className="p-6 bg-brand-accent/10 rounded-2xl border border-brand-accent/20">
                    <p className="text-brand-accent font-bold text-2xl">{study.savings}</p>
                    <p className="text-sm text-slate-400">Annual Operational Savings</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-lg text-slate-600">Trusted by leading businesses across the United Kingdom.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-slate-50 relative">
                <Star className="text-brand-accent absolute top-8 right-8" size={24} fill="currentColor" />
                <p className="text-lg text-slate-700 mb-8 italic leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${t.name}`} alt={t.name} />
                  </div>
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-xs text-slate-500 uppercase font-bold">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,#000_0,transparent_40%)]" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
            Ready to Future-Proof Your Business?
          </h2>
          <p className="text-xl text-emerald-900 mb-12 max-w-2xl mx-auto font-medium">
            Join hundreds of UK businesses that trust Rosewood Lodge for their critical IT infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-brand-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl"
            >
              Get a Free IT Audit
            </Link>
            <Link 
              to="/pricing" 
              className="bg-white text-brand-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
