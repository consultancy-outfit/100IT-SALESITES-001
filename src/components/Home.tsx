import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, CASE_STUDIES } from '../constants';

export const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#0e91e9_0%,transparent_50%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-semibold mb-6">
                UK-Based IT Excellence
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1]">
                Empowering Your <span className="text-brand-400">Digital Future</span> with Precision.
              </h1>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                Bruntsfield House provides premium managed IT services, cyber security, and strategic consultancy tailored for the British business landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-brand-600/20"
                >
                  Our Services <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold flex items-center justify-center transition-all"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Bruntsfield House?</h2>
            <p className="text-slate-600">We don't just fix computers; we build resilient technical foundations that allow your business to scale without limits.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Security First', desc: 'Every solution we build has security at its core, ensuring GDPR compliance and data integrity.' },
              { icon: Zap, title: 'Proactive Support', desc: 'We monitor your systems 24/7, resolving issues before they impact your operations.' },
              { icon: Users, title: 'UK Expertise', desc: 'Our team of British engineers understands the local market, regulations, and business culture.' }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 transition-colors"
              >
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 mb-6">
                  <benefit.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Competencies</h2>
              <p className="text-slate-600">Specialised IT services designed for the demands of modern UK industry.</p>
            </div>
            <Link to="/services" className="text-brand-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.benefits.slice(0, 3).map((benefit, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-slate-500">
                      <CheckCircle2 size={14} className="text-brand-500" /> {benefit}
                    </li>
                  ))}
                </ul>
                <Link to={`/services#${service.id}`} className="text-sm font-bold text-brand-900 hover:text-brand-600">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {CASE_STUDIES.map((study, i) => (
              <div key={i} className="bg-slate-900 text-white rounded-3xl overflow-hidden flex flex-col md:flex-row">
                <div className="p-8 md:p-12 flex-1">
                  <span className="text-brand-400 text-xs font-bold uppercase tracking-widest mb-4 block">Case Study</span>
                  <h3 className="text-2xl font-bold mb-6">{study.title}</h3>
                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold mb-1">Challenge</p>
                      <p className="text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold mb-1">Result</p>
                      <p className="text-sm">{study.result}</p>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold mb-1">Annual Savings</p>
                      <p className="text-xl font-bold text-brand-400">{study.savings}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 relative">
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Secure Your Business Technology?</h2>
          <p className="text-xl text-brand-100 mb-10">Join dozens of UK businesses that trust Bruntsfield House for their IT excellence.</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-brand-900 px-10 py-4 rounded-full font-bold hover:bg-brand-50 transition-all shadow-xl"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};
