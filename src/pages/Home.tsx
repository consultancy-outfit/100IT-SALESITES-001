import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Zap, Users, BarChart3, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, CASE_STUDIES } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-slate-50">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-400 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
              Empowering UK Businesses with Elite IT
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]"
            >
              Your Strategic Partner in <span className="text-indigo-600">Digital Excellence</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              CWD Outreach Service provides managed IT support, robust cybersecurity, and cloud solutions tailored for the unique challenges of British enterprises.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link 
                to="/services" 
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl hover:shadow-indigo-200 flex items-center justify-center gap-2 group"
              >
                Explore Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-sm"
              >
                Book a Free Audit
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="text-3xl font-bold text-indigo-600">99.9%</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Uptime Guarantee</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-indigo-600">15m</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Avg Response Time</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-indigo-600">500+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Projects Delivered</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-indigo-600">£1M+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Client Cost Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Why Choose CWD?</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  IT Infrastructure That Works As Hard As You Do
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We don't just fix computers; we build resilient digital foundations that enable your business to scale. Based in Telford, we serve clients across the UK with a focus on reliability, security, and measurable ROI.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: "GDPR Compliant", desc: "Full data protection alignment." },
                  { icon: Zap, title: "Proactive Support", desc: "Fixing issues before they occur." },
                  { icon: Users, title: "Expert Team", desc: "UK-based certified engineers." },
                  { icon: BarChart3, title: "ROI Driven", desc: "Technology that pays for itself." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern Office" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 bg-indigo-600 text-white p-8 rounded-2xl shadow-xl hidden sm:block">
                <div className="text-4xl font-bold mb-1">10+</div>
                <div className="text-sm font-medium opacity-90 uppercase tracking-wider">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Our Expertise</h2>
            <h3 className="text-4xl font-bold text-slate-900">Comprehensive IT Solutions</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From managed support to complex cloud migrations, we provide the tools your business needs to thrive in the digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service, idx) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
              >
                <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 mb-6 line-clamp-2">{service.description}</p>
                <Link to="/services" className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ChevronRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Success Stories</h2>
              <h3 className="text-4xl font-bold text-slate-900">Real Results for UK Clients</h3>
            </div>
            <Link to="/contact" className="text-indigo-600 font-bold flex items-center gap-2 hover:underline">
              View All Case Studies <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {CASE_STUDIES.map((study, idx) => (
              <div key={idx} className="bg-slate-900 rounded-3xl overflow-hidden flex flex-col sm:flex-row">
                <div className="sm:w-1/3 bg-indigo-600 p-8 flex flex-col justify-between text-white">
                  <div className="text-xs font-bold uppercase tracking-widest opacity-80">Case Study</div>
                  <div className="text-2xl font-bold leading-tight">{study.client}</div>
                </div>
                <div className="sm:w-2/3 p-8 space-y-6">
                  <h4 className="text-xl font-bold text-white">{study.title}</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">The Challenge</div>
                      <p className="text-slate-400 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">The Result</div>
                      <p className="text-slate-200 font-medium">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-indigo-200 font-bold tracking-wider uppercase text-sm">Testimonials</h2>
            <h3 className="text-4xl font-bold">Trusted by Business Leaders</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-indigo-700/50 p-8 rounded-2xl backdrop-blur-sm border border-indigo-500/30">
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => <CheckCircle2 key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg italic mb-8 text-indigo-50">"{t.content}"</p>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-indigo-300">{t.role}, {t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-slate-950 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-500 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-[100px]" />
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Ready to Future-Proof Your Business?
              </h2>
              <p className="text-xl text-slate-400">
                Join hundreds of UK companies who trust CWD Outreach Service for their technology needs. Let's build something great together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl hover:shadow-indigo-500/20"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/pricing" 
                  className="w-full sm:w-auto px-10 py-5 bg-transparent text-white border border-slate-700 rounded-full font-bold text-lg hover:bg-slate-900 transition-all"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
