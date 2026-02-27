import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Zap, Users, Building2, TrendingUp, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES, TESTIMONIALS, CASE_STUDIES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
            <div className="absolute top-0 left-0 w-72 h-72 bg-zinc-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-zinc-100 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-zinc-600 uppercase bg-zinc-100 rounded-full">
                Premium IT Services for UK Business
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
                Empowering Your <span className="text-zinc-500">Digital Future</span>
              </h1>
              <p className="text-xl text-zinc-600 mb-10 leading-relaxed">
                Draycombe House provides world-class managed IT support, cybersecurity, and cloud solutions tailored for the unique needs of British enterprises.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto bg-zinc-900 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group"
                >
                  Get Started Today
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="w-full sm:w-auto bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full font-medium hover:bg-zinc-50 transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Overview Section */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="text-4xl font-bold text-zinc-900">99.9%</div>
              <p className="text-zinc-500 font-medium uppercase tracking-widest text-xs">Uptime Guaranteed</p>
              <p className="text-sm text-zinc-600">Reliable infrastructure that keeps your business running around the clock.</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-zinc-900">15min</div>
              <p className="text-zinc-500 font-medium uppercase tracking-widest text-xs">Response Time</p>
              <p className="text-sm text-zinc-600">Rapid support from our UK-based helpdesk whenever you need it.</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-zinc-900">£2M+</div>
              <p className="text-zinc-500 font-medium uppercase tracking-widest text-xs">Client Savings</p>
              <p className="text-sm text-zinc-600">Helping businesses optimize IT spend and reduce operational overhead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
                Why UK Businesses Trust Draycombe House
              </h2>
              <p className="text-lg text-zinc-600">
                We don't just fix computers; we build strategic technology foundations that drive growth, security, and efficiency.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Shield, title: "GDPR Compliant", desc: "Full adherence to UK data protection regulations." },
                  { icon: Zap, title: "Proactive Monitoring", desc: "We solve problems before they impact your business." },
                  { icon: Users, title: "Expert Local Team", desc: "Certified engineers based right here in the UK." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-900">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900 mb-1">{item.title}</h3>
                      <p className="text-zinc-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/it1/600/800" alt="IT Support" className="rounded-2xl object-cover h-64 w-full" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/it2/600/400" alt="Server Room" className="rounded-2xl object-cover h-48 w-full" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="https://picsum.photos/seed/it3/600/400" alt="Team Work" className="rounded-2xl object-cover h-48 w-full" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/it4/600/800" alt="Technology" className="rounded-2xl object-cover h-64 w-full" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Specialised IT solutions for diverse sectors across the United Kingdom.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Building2, name: "Legal & Finance" },
              { icon: TrendingUp, name: "Professional Services" },
              { icon: Building2, name: "Manufacturing" },
              { icon: Building2, name: "Retail & E-commerce" }
            ].map((industry, i) => (
              <div key={i} className="p-8 border border-zinc-800 rounded-2xl hover:bg-zinc-900 transition-colors group">
                <industry.icon className="w-10 h-10 mb-6 text-zinc-500 group-hover:text-white transition-colors" />
                <h3 className="text-xl font-bold">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-4">Measurable Results</h2>
              <p className="text-zinc-600">Real-world impact for our UK clients.</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-2 text-zinc-900 font-semibold hover:gap-3 transition-all">
              View all services <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study, i) => (
              <div key={i} className="bg-zinc-50 p-10 rounded-3xl border border-zinc-100 flex flex-col h-full">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">{study.industry}</span>
                <h3 className="text-2xl font-bold text-zinc-900 mb-6">{study.title}</h3>
                <div className="space-y-4 mb-8 flex-grow">
                  <p className="text-sm text-zinc-600"><span className="font-bold text-zinc-900">Challenge:</span> {study.challenge}</p>
                  <p className="text-sm text-zinc-600"><span className="font-bold text-zinc-900">Solution:</span> {study.solution}</p>
                </div>
                <div className="pt-6 border-t border-zinc-200">
                  <p className="text-lg font-bold text-zinc-900">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">What Our Clients Say</h2>
            <div className="flex justify-center gap-1 text-zinc-900">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 italic text-zinc-600 relative">
                <p className="mb-6 leading-relaxed">"{t.content}"</p>
                <div className="not-italic">
                  <p className="font-bold text-zinc-900">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-bold mb-8">Ready to Secure Your Business?</h2>
              <p className="text-xl text-zinc-400 mb-12">
                Join hundreds of UK businesses that trust Draycombe House for their IT needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto bg-white text-zinc-900 px-10 py-5 rounded-full font-bold hover:bg-zinc-100 transition-colors"
                >
                  Book a Free Consultation
                </Link>
                <Link
                  to="/pricing"
                  className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-10 py-5 rounded-full font-bold hover:bg-white/5 transition-colors"
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
};

export default Home;
