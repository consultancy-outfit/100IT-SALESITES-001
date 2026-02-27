import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Users, BarChart3, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-slate-50">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-bold mb-6">
                UK-Based Managed IT Experts
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
                Intelligent IT for <span className="text-brand-accent">Supported Living</span> & Care.
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                We provide specialist IT infrastructure and cyber security solutions tailored for the UK care sector. Ensuring your technology is as reliable as your service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-primary/20">
                  Book a Free Audit <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/services" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center">
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-accent/5 to-transparent hidden lg:block" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl" />
      </section>

      {/* Stats / Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'GDPR Compliant', desc: 'Full data protection for sensitive patient & client records.' },
              { icon: Zap, title: '99.9% Uptime', desc: 'Proactive monitoring to prevent issues before they occur.' },
              { icon: Users, title: 'Expert Support', desc: 'UK-based helpdesk with deep knowledge of care software.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all"
              >
                <item.icon className="w-10 h-10 text-brand-accent mb-6" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/it-office/800/600" 
                alt="Modern IT Office" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block border border-slate-100">
                <p className="text-4xl font-bold text-brand-accent mb-1">15+</p>
                <p className="text-slate-600 font-medium uppercase tracking-wider text-xs">Years Experience</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Bridging the Gap Between <span className="text-brand-accent">Care & Technology</span></h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At Worksop Supported Living Service, we understand that in the care sector, IT isn't just about computers—it's about the people you support. A system failure can mean more than just lost productivity; it can impact care delivery.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Specialist knowledge of Care Management Systems',
                  'Secure remote access for mobile care workers',
                  'NHS-grade security protocols and encryption',
                  'Cost-effective solutions for non-profits and SMEs'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="text-brand-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Learn more about our mission <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Measurable Results</h2>
            <p className="text-slate-600">How we've helped UK organizations optimize their digital operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-3xl bg-slate-900 text-white p-10">
              <div className="relative z-10">
                <BarChart3 className="w-12 h-12 text-brand-accent mb-6" />
                <h3 className="text-2xl font-bold mb-4">Regional Care Provider</h3>
                <p className="text-slate-400 mb-8">Full infrastructure overhaul across 12 sites, implementing secure cloud sync and VOIP.</p>
                <div className="flex gap-8">
                  <div>
                    <p className="text-3xl font-bold text-brand-accent">£12k</p>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Annual Saving</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-brand-accent">40%</p>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Speed Increase</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-brand-accent/20 transition-colors" />
            </div>
            <div className="group relative overflow-hidden rounded-3xl bg-brand-primary text-white p-10">
              <div className="relative z-10">
                <ShieldCheck className="w-12 h-12 text-brand-accent mb-6" />
                <h3 className="text-2xl font-bold mb-4">Nottinghamshire SME</h3>
                <p className="text-slate-400 mb-8">Cyber security audit and implementation of MFA and advanced threat protection.</p>
                <div className="flex gap-8">
                  <div>
                    <p className="text-3xl font-bold text-brand-accent">0</p>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Security Breaches</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-brand-accent">100%</p>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">GDPR Compliance</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-brand-accent/20 transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Jenkins', role: 'Operations Manager', text: 'The transition to cloud hosting was seamless. The team at Worksop IT really understood our specific needs as a care provider.' },
              { name: 'David Thompson', role: 'Director, DT Logistics', text: 'Reliable, professional, and always there when we need them. Their managed support has saved us thousands in potential downtime.' },
              { name: 'Emily Wright', role: 'Compliance Officer', text: 'Their security audit was thorough and eye-opening. We now feel completely confident in our GDPR compliance and data safety.' }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-slate-600 italic mb-6">"{t.text}"</p>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-primary text-white overflow-hidden relative">
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Transform Your IT?</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Join dozens of UK businesses who trust us with their technology. Let's build a secure, scalable future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-brand-accent text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-sky-500 transition-all shadow-xl shadow-brand-accent/20">
              Get a Free Quote
            </Link>
            <Link to="/pricing" className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
              View Pricing
            </Link>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full" />
        </div>
      </section>
    </div>
  );
};

export default Home;
