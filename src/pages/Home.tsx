import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Users, Zap, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section, Button, Card } from '../components/UI';
import { TESTIMONIALS, CASE_STUDIES } from '../constants';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 via-white to-sky-50 opacity-70" />
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-accent/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/5 rounded-full blur-[100px]" />
        </div>

        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/10 text-brand-accent rounded-full text-sm font-semibold mb-6">
              <Shield size={16} />
              <span>Trusted UK IT Partners</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.1]">
              Empowering <span className="text-brand-accent">Healthcare</span> Through Intelligent IT.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              Shauna IT Solutions provides world-class managed IT services, cyber security, and digital transformation for healthcare and SMEs across the UK.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Our Services <ArrowRight size={20} />
              </Button>
              <Button variant="outline" size="lg">
                View Pricing
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">15+</span>
                <span className="text-xs uppercase tracking-wider">Years Experience</span>
              </div>
              <div className="w-px h-10 bg-slate-300" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">200+</span>
                <span className="text-xs uppercase tracking-wider">Clients Served</span>
              </div>
              <div className="w-px h-10 bg-slate-300" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">99.9%</span>
                <span className="text-xs uppercase tracking-wider">Uptime Record</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
                alt="Healthcare Technology" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-emerald-100 text-emerald-600 rounded-full">
                  <Zap size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">System Performance</p>
                  <p className="text-xl font-bold">+45% Efficiency</p>
                </div>
              </div>
              <p className="text-xs text-slate-400">Average improvement seen by our healthcare partners in the first 6 months.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <Section 
        title="Why British Businesses Choose Shauna IT" 
        subtitle="Key Benefits"
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Shield className="text-brand-accent" />, title: "GDPR Compliant", desc: "Full alignment with UK data protection laws and NHS security standards." },
            { icon: <Users className="text-brand-accent" />, title: "Local Support", desc: "UK-based engineers providing remote and on-site assistance when you need it." },
            { icon: <Award className="text-brand-accent" />, title: "Certified Experts", desc: "Microsoft, Cisco, and Cyber Essentials certified professionals at your service." },
          ].map((item, i) => (
            <Card key={i} delay={i * 0.1}>
              <div className="p-4 bg-slate-50 rounded-2xl w-fit mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Industries Section */}
      <Section title="Industries We Serve" subtitle="Specialization" dark>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {['Healthcare & NHS', 'Legal Services', 'Financial Institutions', 'Education', 'Manufacturing', 'Retail', 'Logistics', 'Non-Profits'].map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 border border-slate-800 rounded-xl hover:bg-slate-800 transition-colors group cursor-default"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-medium">{industry}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Case Studies Section */}
      <Section title="Measurable Success" subtitle="Case Studies">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, i) => (
            <Card key={i} delay={i * 0.1} className="flex flex-col h-full">
              <h4 className="text-brand-accent font-bold text-3xl mb-2">{study.result}</h4>
              <h3 className="text-xl mb-4">{study.title}</h3>
              <p className="text-slate-600 mb-8 flex-grow">{study.description}</p>
              <Link to="/services" className="text-brand-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Read Full Story <ArrowRight size={16} />
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section title="What Our Clients Say" subtitle="Testimonials" className="bg-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <Card key={i} delay={i * 0.1} className="relative">
              <div className="text-6xl text-brand-accent/20 absolute top-4 right-8 font-serif">"</div>
              <p className="text-slate-600 italic mb-8 relative z-10">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/10 skew-x-12 transform translate-x-1/4" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-8">Ready to Secure Your Digital Future?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Join hundreds of UK businesses who trust Shauna IT Solutions for their technology needs.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary">Book a Consultation</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary">Contact Us</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
