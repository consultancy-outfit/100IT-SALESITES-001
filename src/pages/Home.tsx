import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Activity, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { TESTIMONIALS, CASE_STUDIES } from '../constants';

export const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-slate-50 section-padding overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-700 uppercase bg-brand-100 rounded-full">
                Trusted UK IT Partners
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Empowering <span className="text-brand-600">Healthcare</span> Through Technology
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                Specialist IT services for Cirencester and the UK. We provide secure, compliant, and reliable technology solutions tailored for healthcare providers and professional businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-600 text-white font-bold rounded-full hover:bg-brand-700 transition-all shadow-lg hover:shadow-xl group"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-full border border-slate-200 hover:bg-slate-50 transition-all shadow-sm"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
                  alt="Healthcare IT Professional"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Support Health Care?</h2>
            <p className="text-slate-600">We combine deep technical expertise with a thorough understanding of the UK healthcare landscape.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-brand-600" />,
                title: "GDPR & NHS Compliant",
                desc: "Every solution we implement meets the highest standards of UK data protection and healthcare regulations."
              },
              {
                icon: <Activity className="w-8 h-8 text-brand-600" />,
                title: "24/7 Proactive Support",
                desc: "We don't just fix problems; we prevent them. Our monitoring systems work around the clock to keep you online."
              },
              {
                icon: <Zap className="w-8 h-8 text-brand-600" />,
                title: "Local Expertise",
                desc: "Based in Cirencester, we provide rapid on-site support across the Cotswolds and South West England."
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 bg-slate-50 rounded-2xl border border-slate-100"
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Measurable Results</h2>
              <p className="text-slate-400">Real-world impact for our UK clients. We deliver technology that pays for itself.</p>
            </div>
            <Link to="/services" className="text-brand-400 font-semibold flex items-center gap-2 hover:text-brand-300 transition-colors">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study, i) => (
              <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                <p className="text-brand-400 text-sm font-semibold mb-6">{study.client}</p>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">The Challenge</span>
                    <p className="text-slate-300 mt-1">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">Our Solution</span>
                    <p className="text-slate-300 mt-1">{study.solution}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-700">
                    <span className="text-xs uppercase tracking-wider text-brand-500 font-bold">The Result</span>
                    <p className="text-xl font-bold text-white mt-1">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm italic text-slate-600 relative">
                <span className="text-6xl text-brand-100 absolute top-4 left-4 font-serif">"</span>
                <p className="relative z-10 mb-6">{t.content}</p>
                <div className="flex items-center gap-3 not-italic">
                  <div className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Secure Your IT Future?</h2>
          <p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto">
            Join dozens of UK healthcare providers who trust us with their technology. Get a free infrastructure audit today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-brand-600 font-bold rounded-full hover:bg-brand-50 transition-all shadow-xl"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};
