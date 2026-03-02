import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Users, Briefcase, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS, CASE_STUDIES, SERVICES } from '../constants';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                </span>
                UK Based IT Experts
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                Technology that <span className="text-indigo-600">Cares.</span> Solutions that <span className="text-indigo-600">Empower.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                SENSE Supported Living Services West Midlands provides specialized IT infrastructure and software solutions for the care sector. We bridge the gap between technology and human-centric support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 group"
                >
                  Explore Services
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-200/50 border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80" 
                  alt="Modern Software Company Office" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-100 rounded-full blur-3xl opacity-60 -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-indigo-50 rounded-full blur-3xl opacity-60 -z-10"></div>
              <div className="absolute top-1/2 -right-12 w-24 h-24 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center text-indigo-600 animate-bounce-slow hidden lg:flex">
                <CheckCircle2 size={32} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80" 
                alt="Professional Leadership" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80" 
                alt="Supported Living Care" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats / Benefits */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 shrink-0">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">UK-Based Support</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Our entire team is based in the UK, providing local expertise and understanding of the British business landscape.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 shrink-0">
                <Briefcase size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Industry Experience</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Specialized IT solutions for healthcare, logistics, and professional services across the West Midlands.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 shrink-0">
                <TrendingUp size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Measurable ROI</h3>
                <p className="text-slate-600 text-sm leading-relaxed">We focus on technology that drives efficiency, reduces costs, and delivers tangible financial results for your business.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
              <h3 className="text-4xl font-bold text-slate-900">Comprehensive IT services designed for modern growth.</h3>
            </div>
            <Link to="/services" className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View all services <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="p-8 bg-white border border-slate-100 rounded-3xl hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 mb-6 line-clamp-2">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="w-1 h-1 bg-indigo-400 rounded-full" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link to={`/services#${service.id}`} className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">Success Stories</h2>
            <h3 className="text-4xl font-bold">Delivering real value to UK businesses.</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {CASE_STUDIES.map((study, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 p-10 rounded-3xl">
                <h4 className="text-2xl font-bold mb-6">{study.title}</h4>
                <div className="space-y-6 mb-10">
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase mb-2">The Challenge</p>
                    <p className="text-slate-300">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase mb-2">Our Solution</p>
                    <p className="text-slate-300">{study.solution}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-8 pt-8 border-t border-slate-700">
                  <div>
                    <p className="text-3xl font-bold text-indigo-400 mb-1">{study.result}</p>
                    <p className="text-xs text-slate-500 uppercase font-bold">Outcome</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-emerald-400 mb-1">{study.value}</p>
                    <p className="text-xs text-slate-500 uppercase font-bold">Financial Impact</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4">Testimonials</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">Trusted by leaders across the West Midlands.</h3>
              <p className="text-slate-600 mb-8">Don't just take our word for it. Hear from the businesses we support every day.</p>
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <p className="text-slate-700 italic mb-8">"{t.content}"</p>
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}, {t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-700 rounded-full blur-3xl opacity-50"></div>
            
            <div className="relative">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Ready to secure your business future?</h2>
              <p className="text-indigo-100 text-xl mb-12 max-w-2xl mx-auto">
                Join hundreds of UK businesses that trust SENSE IT for their technology needs. Let's build something great together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-indigo-600 px-10 py-5 rounded-full font-bold hover:bg-slate-50 transition-all shadow-xl"
                >
                  Contact Us Today
                </Link>
                <Link
                  to="/pricing"
                  className="bg-indigo-700 text-white border border-indigo-500 px-10 py-5 rounded-full font-bold hover:bg-indigo-800 transition-all"
                >
                  View Pricing Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
