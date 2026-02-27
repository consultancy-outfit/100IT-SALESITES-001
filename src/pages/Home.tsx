import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Users, Building2, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { SERVICES, TESTIMONIALS, CASE_STUDIES } from '../constants';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#10b981,transparent_50%)] blur-3xl transform -translate-y-1/2"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-wider mb-6 border border-brand-accent/20">
                UK's Trusted IT Partner
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                Empowering British Business Through <span className="text-brand-accent">Intelligent IT</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
                From managed support to advanced cybersecurity, Community Short Breaks provides the technical backbone your business needs to thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="px-8 py-4 bg-brand-accent text-white rounded-full font-bold hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-accent/20"
                >
                  Explore Services <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all text-center"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-800 border-y border-slate-700">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Uptime Guarantee', value: '99.9%' },
              { label: 'Client Retention', value: '98%' },
              { label: 'Response Time', value: '< 15m' },
              { label: 'Cost Savings', value: '£50k+' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Community Short Breaks?</h2>
            <p className="text-slate-600 text-lg">
              We don't just fix computers; we build strategic partnerships that drive growth and security for UK enterprises.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-brand-accent" />,
                title: 'Expert UK Team',
                desc: 'Our engineers are based right here in the UK, providing local knowledge and rapid response.'
              },
              {
                icon: <Shield className="w-8 h-8 text-brand-accent" />,
                title: 'Security First',
                desc: 'Cybersecurity is baked into everything we do, ensuring your data remains your most secure asset.'
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-brand-accent" />,
                title: 'Scalable Growth',
                desc: 'Our solutions grow with you, from your first office to international expansion.'
              }
            ].map((benefit, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group">
                <div className="mb-6 p-3 bg-white rounded-xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Measurable Results</h2>
              <p className="text-slate-600 text-lg">See how we've helped British businesses optimise their operations and save thousands in overheads.</p>
            </div>
            <Link to="/about" className="text-brand-accent font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Stories <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-4">{study.client}</div>
                <h3 className="text-2xl font-bold mb-6">{study.title}</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <div className="shrink-0 mt-1"><CheckCircle2 className="w-5 h-5 text-emerald-500" /></div>
                    <p className="text-slate-600"><span className="font-semibold text-slate-900">Challenge:</span> {study.challenge}</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="shrink-0 mt-1"><CheckCircle2 className="w-5 h-5 text-emerald-500" /></div>
                    <p className="text-slate-600"><span className="font-semibold text-slate-900">Result:</span> {study.result}</p>
                  </div>
                </div>
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 text-emerald-800 font-medium">
                  Impact: {study.result.split(' and ')[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 relative">
                <div className="text-6xl text-brand-accent/10 absolute top-4 right-8 font-serif">"</div>
                <p className="text-slate-600 italic mb-8 relative z-10">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-brand-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Future-Proof Your Business?</h2>
              <p className="text-slate-400 text-lg mb-10">
                Join hundreds of UK businesses that trust Community Short Breaks for their IT needs. Let's start a conversation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-10 py-4 bg-brand-accent text-white rounded-full font-bold hover:bg-emerald-500 transition-all shadow-xl shadow-brand-accent/20"
                >
                  Get Started Now
                </Link>
                <Link
                  to="/pricing"
                  className="px-10 py-4 bg-white/5 text-white border border-white/20 rounded-full font-bold hover:bg-white/10 transition-all"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
