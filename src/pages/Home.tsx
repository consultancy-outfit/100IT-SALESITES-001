import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Zap, Globe, Users, BarChart3, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_DETAILS } from '../constants';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-transparent z-10" />
          <img 
            src="https://picsum.photos/seed/london-it/1920/1080?blur=2" 
            alt="London Skyline" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="container-custom relative z-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-brand-accent uppercase bg-blue-500/10 border border-blue-500/20 rounded-full">
                Leading UK IT Partners
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
                Strategic IT Solutions for <span className="text-brand-accent">Modern Business.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                Servoca London provides enterprise-grade IT support, cloud strategy, and cyber security tailored for the UK market. We don't just fix problems; we drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services" className="btn-primary text-lg px-8 py-4">
                  Explore Services <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/contact" className="btn-secondary text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Stats Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-white/5 backdrop-blur-sm border-t border-white/10 py-8 hidden lg:block">
          <div className="container-custom">
            <div className="grid grid-cols-4 gap-8">
              {[
                { label: 'Uptime Guarantee', value: '99.99%' },
                { label: 'Response Time', value: '< 15 Mins' },
                { label: 'Client Retention', value: '98%' },
                { label: 'UK Support', value: '24/7/365' },
              ].map((stat, i) => (
                <div key={i} className="text-center border-r border-white/10 last:border-0">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Servoca London?</h2>
            <p className="text-slate-600">We combine technical excellence with a deep understanding of the UK business landscape to deliver results that matter.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-brand-accent" />,
                title: 'Security First',
                desc: 'Every solution we build is hardened with enterprise-grade security and GDPR compliance at its core.'
              },
              {
                icon: <Zap className="w-8 h-8 text-brand-accent" />,
                title: 'Proactive Support',
                desc: 'We monitor your systems 24/7 to identify and resolve issues before they impact your business operations.'
              },
              {
                icon: <Globe className="w-8 h-8 text-brand-accent" />,
                title: 'UK Based Expertise',
                desc: 'Our entire team is based in the UK, providing local knowledge and rapid on-site response when needed.'
              }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all"
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Specialised IT Support for UK Industries</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We understand that every sector has unique challenges. Our consultants have deep experience in delivering tailored IT strategies for:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Financial Services', 'Legal & Professional', 'Healthcare', 'Manufacturing', 'Retail & E-commerce', 'Non-Profit'
                ].map((industry, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                    <span className="font-medium text-slate-700">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <img 
                src="https://picsum.photos/seed/office-uk/800/600" 
                alt="Modern UK Office" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden sm:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">500+</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Active Users Supported</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Measurable Results</h2>
            <p className="text-slate-600">How we've helped UK businesses thrive through technology.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                client: 'Midlands Manufacturing Ltd',
                challenge: 'Legacy server downtime costing £5k per hour.',
                solution: 'Full cloud migration to Azure with managed support.',
                result: '£45,000 annual savings in infrastructure costs.'
              },
              {
                client: 'City Legal Partners',
                challenge: 'Security audit revealed critical vulnerabilities.',
                solution: 'ISO 27001 alignment and advanced threat protection.',
                result: 'Zero security incidents in 24 months post-implementation.'
              }
            ].map((study, i) => (
              <div key={i} className="bg-slate-900 rounded-3xl p-10 text-white overflow-hidden relative group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-brand-accent">{study.client}</h3>
                <div className="space-y-4 relative z-10">
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">The Challenge</p>
                    <p className="text-lg">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Our Solution</p>
                    <p className="text-lg">{study.solution}</p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">The Result</p>
                    <p className="text-2xl font-bold text-green-400">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'James Henderson', role: 'CEO, Fintech Solutions', text: 'Servoca London transformed our IT from a bottleneck into a competitive advantage. Their response times are unmatched.' },
              { name: 'Sarah Thompson', role: 'Operations Director, NHS Trust Partner', text: 'The peace of mind knowing our data is secure and GDPR compliant is invaluable. A truly professional team.' },
              { name: 'David Wright', role: 'Founder, Wright & Co Law', text: 'Switching to Servoca was the best decision we made this year. Their cloud strategy has made remote work seamless for our staff.' }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-slate-600 italic mb-6">"{t.text}"</p>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Future-Proof Your Business?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join hundreds of UK businesses that trust Servoca London for their IT needs. Let's build something great together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-brand-accent hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              Get Started Now
            </Link>
            <Link to="/pricing" className="bg-brand-accent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
