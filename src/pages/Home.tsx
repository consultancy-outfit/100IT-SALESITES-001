import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Zap, Users, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS, CASE_STUDIES } from '../constants';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-zinc-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_50%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
                <Shield className="h-3 w-3" />
                <span>Trusted UK IT Partner</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                Modern IT Solutions for <span className="text-emerald-600">British Business.</span>
              </h1>
              <p className="text-xl text-zinc-600 mb-8 max-w-xl leading-relaxed">
                Sterling Standard IT provides enterprise-grade technology services, cyber security, and strategic consultancy tailored for the UK market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-zinc-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 transition-all flex items-center justify-center group"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full font-semibold hover:bg-zinc-50 transition-all flex items-center justify-center"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-zinc-200">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
                  alt="Modern IT Infrastructure"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 z-20 max-w-[240px]">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Zap className="h-5 w-5 text-emerald-600" />
                  </div>
                  <span className="font-bold text-zinc-900">99.9% Uptime</span>
                </div>
                <p className="text-xs text-zinc-500">Guaranteed service level agreements for all managed clients.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Why Choose Sterling Standard?</h2>
            <p className="text-zinc-600">We combine technical excellence with a deep understanding of the UK business landscape.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'GDPR Compliant', desc: 'Full adherence to UK data protection laws and security standards.' },
              { icon: Users, title: 'Local UK Support', desc: 'Our engineers are based in the UK, providing responsive on-site and remote help.' },
              { icon: BarChart3, title: 'Measurable ROI', desc: 'We focus on technology that drives efficiency and reduces long-term costs.' }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100"
              >
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm mb-6">
                  <benefit.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{benefit.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-zinc-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs mb-4 block">Success Stories</span>
              <h2 className="text-4xl font-bold mb-4">Delivering Results Across the UK</h2>
              <p className="text-zinc-400">See how we've helped British businesses optimise their technology and secure their future.</p>
            </div>
            <Link to="/services" className="text-emerald-500 font-semibold flex items-center hover:text-emerald-400 transition-colors">
              View all services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study, i) => (
              <div key={i} className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold">{study.title}</h3>
                  <span className="bg-emerald-900/30 text-emerald-500 px-3 py-1 rounded-full text-xs font-bold">Case Study</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-zinc-500 text-sm block mb-1">Challenge</span>
                    <p className="text-zinc-300">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-zinc-500 text-sm block mb-1">Result</span>
                    <p className="text-emerald-400 font-semibold">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900 text-center mb-16">Trusted by Leaders</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-8 rounded-2xl border border-zinc-100 bg-zinc-50 relative">
                <div className="text-emerald-600 text-4xl font-serif absolute top-4 left-6 opacity-20">"</div>
                <p className="text-zinc-600 mb-8 italic relative z-10">"{t.content}"</p>
                <div>
                  <p className="font-bold text-zinc-900">{t.name}</p>
                  <p className="text-sm text-zinc-500">{t.role}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-900/20 rounded-full -ml-32 -mb-32 blur-3xl" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to upgrade your IT?</h2>
              <p className="text-emerald-100 text-lg mb-10">Join hundreds of UK businesses who trust Sterling Standard for their technology needs.</p>
              <Link
                to="/contact"
                className="inline-block bg-white text-emerald-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-xl"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
