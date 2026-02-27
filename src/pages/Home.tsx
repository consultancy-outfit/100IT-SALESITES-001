import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Users, Shield, Zap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-slate-50 section-padding overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 transform translate-x-1/4" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-bold rounded-full mb-6">
                UK'S PREMIER IT PARTNER
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-[1.1]">
                Empowering <span className="text-accent">Healthcare</span> Through Technology.
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                Support Health Care Middlesbrough provides enterprise-grade IT solutions tailored for the unique demands of the UK healthcare and corporate sectors.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all flex items-center group"
                >
                  Our Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white border border-slate-200 text-primary px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/it-office/800/600"
                  alt="Modern IT Office"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 hidden sm:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-emerald-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">99.9%</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Uptime Guaranteed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Why Choose Support Health Care?</h2>
            <p className="text-slate-500">We combine technical excellence with deep industry knowledge to deliver IT that works for you.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Secure & Compliant", desc: "Fully aligned with UK GDPR and NHS Data Security standards." },
              { icon: Users, title: "Expert Support", desc: "UK-based engineers available around the clock for your team." },
              { icon: Zap, title: "Rapid Response", desc: "Industry-leading response times to keep your operations running." }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="text-accent w-6 h-6" />
                </div>
                <h3 className="text-xl mb-3">{benefit.title}</h3>
                <p className="text-slate-500 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Industries We Serve Across the UK</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                While we specialise in healthcare IT, our expertise extends to various sectors requiring high-availability and secure technology environments.
              </p>
              <ul className="space-y-4">
                {["Private Healthcare & Clinics", "Dental Practices", "Legal & Professional Services", "Financial Institutions", "Education & Non-Profit"].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-accent w-5 h-5" />
                    <span className="text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://picsum.photos/seed/health1/400/500" alt="Healthcare" className="rounded-xl shadow-lg" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/legal1/400/300" alt="Legal" className="rounded-xl shadow-lg" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/finance1/400/300" alt="Finance" className="rounded-xl shadow-lg" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/office1/400/500" alt="Office" className="rounded-xl shadow-lg" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl mb-4">Measurable Results</h2>
              <p className="text-slate-500">Real-world impact we've delivered for our clients across the North East and beyond.</p>
            </div>
            <Link to="/services" className="text-accent font-bold flex items-center hover:underline">
              View all services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <img src="https://picsum.photos/seed/case1/800/600" alt="Case Study 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 bg-accent text-white text-xs font-bold rounded-full uppercase tracking-wider">Healthcare</span>
                </div>
              </div>
              <h3 className="text-2xl mb-2">Regional Clinic Digital Transformation</h3>
              <p className="text-slate-500 mb-4">Implemented a secure cloud infrastructure, resulting in a <span className="text-emerald-600 font-bold">£45,000</span> annual saving in hardware maintenance.</p>
            </div>
            <div className="group cursor-pointer">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <img src="https://picsum.photos/seed/case2/800/600" alt="Case Study 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 bg-accent text-white text-xs font-bold rounded-full uppercase tracking-wider">Corporate</span>
                </div>
              </div>
              <h3 className="text-2xl mb-2">Multi-Site Network Consolidation</h3>
              <p className="text-slate-500 mb-4">Unified communication systems for a legal firm, increasing billable efficiency by <span className="text-emerald-600 font-bold">15%</span> across 3 UK offices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Alistair Graham", role: "Clinical Director", text: "Support Health Care transformed our practice's IT. Their understanding of clinical compliance is unmatched in the Middlesbrough area." },
              { name: "Sarah Jenkins", role: "Operations Manager", text: "Reliable, professional, and always there when we need them. They feel like an extension of our own team." },
              { name: "James Whittaker", role: "CEO, Whittaker Finance", text: "The transition to their managed services was seamless. We've seen a significant reduction in IT-related downtime." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Zap key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-slate-600 italic mb-6">"{t.text}"</p>
                <div>
                  <p className="font-bold text-primary">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-accent rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-4 border-white" />
              <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border-4 border-white" />
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 relative z-10">Ready to Modernise Your IT?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto relative z-10">
              Join dozens of UK businesses that trust Support Health Care for their technology needs.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-accent px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all relative z-10"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
