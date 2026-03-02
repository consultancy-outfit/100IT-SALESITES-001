import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS, CASE_STUDIES } from '../constants';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-navy overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#10b981_0%,_transparent_50%)]"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
            >
              Empowering British Business with <span className="text-brand-emerald">Next-Gen IT</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 mb-10 leading-relaxed"
            >
              Managed IT services, cyber security, and cloud transformation designed specifically for the UK SME landscape. Reliable, secure, and commercially focused.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/services" className="btn-primary bg-brand-emerald hover:bg-emerald-600">
                Explore Services <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
                Book a Free Audit
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Croft House?</h2>
            <p className="text-slate-600">We combine technical excellence with a deep understanding of the UK business environment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'UK-Based Support', desc: 'Our engineers are based in the UK, providing support during your business hours and beyond.' },
              { title: 'GDPR Compliant', desc: 'We ensure all your data handling and IT infrastructure meets strict UK GDPR standards.' },
              { title: 'Fixed Monthly Fees', desc: 'No hidden costs. Our transparent pricing helps you manage your IT budget with confidence.' },
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="w-12 h-12 bg-brand-emerald/10 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-brand-emerald" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Snippet */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-brand-navy rounded-3xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <span className="text-brand-emerald font-semibold uppercase tracking-wider text-sm mb-4">Featured Case Study</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{CASE_STUDIES[0].title}</h2>
              <p className="text-slate-300 mb-8 text-lg">{CASE_STUDIES[0].challenge}</p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <div className="text-brand-emerald text-3xl font-bold mb-1">{CASE_STUDIES[0].value}</div>
                  <div className="text-slate-400 text-sm">Annual Savings</div>
                </div>
                <div>
                  <div className="text-brand-emerald text-3xl font-bold mb-1">40%</div>
                  <div className="text-slate-400 text-sm">Efficiency Gain</div>
                </div>
              </div>
              <Link to="/about" className="text-white font-medium inline-flex items-center hover:text-brand-emerald transition-colors">
                Read Full Story <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="lg:w-1/2 bg-slate-800 relative min-h-[400px]">
              <img 
                src="https://picsum.photos/seed/it-office/800/600" 
                alt="Modern IT Office" 
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-16">Trusted by UK Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-brand-emerald text-brand-emerald" />)}
                </div>
                <p className="text-lg text-slate-700 italic mb-8 flex-grow">"{t.content}"</p>
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}, {t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-emerald">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Ready to Modernise Your IT?</h2>
          <p className="text-emerald-900 text-xl mb-10 max-w-2xl mx-auto">Join dozens of UK businesses who trust Croft House for their technology needs.</p>
          <Link to="/contact" className="btn-primary bg-brand-navy hover:bg-slate-800 text-white px-10 py-4 text-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
