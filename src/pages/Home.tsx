import { motion } from 'motion/react';
import { ChevronRight, Shield, Zap, Users, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, CASE_STUDIES } from '../constants';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-brand-600/20 blur-[120px]" />
          <div className="absolute -bottom-[40%] -right-[10%] w-[70%] h-[70%] rounded-full bg-brand-900/20 blur-[120px]" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-semibold mb-6">
                Trusted UK IT Partner
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-8">
                Future-Proof Your <span className="text-brand-500">Business Technology</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-10">
                Centenary Close provides premium managed IT services, robust cyber security, and strategic consultancy tailored for ambitious British enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20 flex items-center justify-center gap-2"
                >
                  Book a Free Audit <ChevronRight size={20} />
                </Link>
                <Link
                  to="/services"
                  className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="py-12 bg-slate-900 border-y border-slate-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Uptime Guarantee', value: '99.9%' },
              { label: 'Response Time', value: '< 15m' },
              { label: 'Client Retention', value: '98%' },
              { label: 'UK Support', value: '24/7' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Focus Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
                Expert IT Solutions for the <span className="text-brand-600">Modern Workplace</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At Centenary Close, we understand that technology should be an enabler, not a barrier. Our mission is to provide seamless IT infrastructure that allows you to focus on what you do best—running your business.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'UK-based helpdesk with certified engineers',
                  'Strategic technology roadmapping for growth',
                  'Comprehensive GDPR & Cyber Essentials compliance',
                  'Scalable cloud-first infrastructure design'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-600 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="text-brand-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Learn more about our approach <ArrowRight size={20} />
              </Link>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                  <Shield className="text-brand-600 mb-4" size={32} />
                  <h3 className="font-bold mb-2">Security First</h3>
                  <p className="text-sm text-slate-500">Built-in protection for every layer of your business.</p>
                </div>
                <div className="bg-brand-600 p-8 rounded-2xl text-white shadow-lg shadow-brand-600/20">
                  <Zap className="mb-4" size={32} />
                  <h3 className="font-bold mb-2">Fast Response</h3>
                  <p className="text-sm text-brand-100">Immediate support when you need it most.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-900 p-8 rounded-2xl text-white shadow-xl">
                  <Users className="text-brand-400 mb-4" size={32} />
                  <h3 className="font-bold mb-2">Expert Team</h3>
                  <p className="text-sm text-slate-400">Certified professionals dedicated to your success.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                  <Globe className="text-brand-600 mb-4" size={32} />
                  <h3 className="font-bold mb-2">UK Wide</h3>
                  <p className="text-sm text-slate-500">Supporting businesses across the United Kingdom.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Industries We Serve</h2>
            <p className="text-lg text-slate-600">We provide specialised IT support tailored to the unique regulatory and operational requirements of key UK sectors.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Legal & Professional', icon: '⚖️' },
              { name: 'Finance & Accounting', icon: '📊' },
              { name: 'Manufacturing & Logistics', icon: '🏭' },
              { name: 'Healthcare & Medical', icon: '🏥' },
              { name: 'Construction & Engineering', icon: '🏗️' },
              { name: 'Education & Non-Profit', icon: '🎓' },
              { name: 'Retail & E-commerce', icon: '🛒' },
              { name: 'Technology & Creative', icon: '💻' },
            ].map((industry, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="font-bold text-slate-800">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Measurable Results</h2>
              <p className="text-lg text-slate-600">See how we\'ve helped UK businesses achieve significant cost savings and operational improvements through technology.</p>
            </div>
            <Link to="/services" className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors">
              View All Services
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study) => (
              <div key={study.id} className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 flex flex-col">
                <div className="p-8 flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 bg-brand-100 text-brand-700 text-xs font-bold rounded-full uppercase tracking-wider">Case Study</span>
                    <span className="text-2xl font-display font-bold text-brand-600">{study.value}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{study.title}</h3>
                  <p className="text-slate-600 mb-6 italic">" {study.challenge} "</p>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center text-white shrink-0 mt-1">
                        <CheckCircle2 size={14} />
                      </div>
                      <p className="text-sm text-slate-700"><span className="font-bold">Solution:</span> {study.solution}</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0 mt-1">
                        <CheckCircle2 size={14} />
                      </div>
                      <p className="text-sm text-slate-700"><span className="font-bold">Result:</span> {study.result}</p>
                    </div>
                  </div>
                </div>
                <div className="px-8 py-4 bg-slate-100 border-t border-slate-200 flex justify-between items-center">
                  <span className="text-sm font-bold text-slate-500">{study.client}</span>
                  <ChevronRight className="text-slate-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-slate-950 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">What Our Clients Say</h2>
            <p className="text-lg text-slate-400">Hear from the business leaders who trust Centenary Close with their critical IT infrastructure.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white/5 border border-white/10 p-8 rounded-2xl relative">
                <div className="text-brand-500 text-6xl font-serif absolute top-4 right-8 opacity-20">"</div>
                <p className="text-slate-300 mb-8 relative z-10 leading-relaxed italic">
                  {t.content}
                </p>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}, {t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-brand-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Ready to Optimise Your IT?</h2>
          <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
            Join dozens of successful UK businesses who have already upgraded their technology with Centenary Close.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand-600 px-10 py-4 rounded-full font-bold hover:bg-brand-50 transition-all shadow-xl"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="bg-brand-700 text-white border border-brand-500 px-10 py-4 rounded-full font-bold hover:bg-brand-800 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
