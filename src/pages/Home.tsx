import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Zap, Users, BarChart3, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-52">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(16,185,129,0.08)_0%,rgba(255,255,255,0)_100%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-8"
            >
              <Zap className="w-4 h-4" />
              <span>Trusted IT Partner for UK Enterprises</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]"
            >
              Empowering British Business Through <span className="text-emerald-600 italic font-serif">Intelligent IT</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-zinc-600 mb-12 leading-relaxed max-w-2xl mx-auto"
            >
              Bespoke managed IT services, cyber security, and cloud solutions designed to scale your business securely and efficiently.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 group"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-full font-semibold hover:bg-zinc-50 transition-all flex items-center justify-center"
              >
                Book a Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Shield className="w-8 h-8 text-emerald-600" />,
                title: "UK-Based Security",
                desc: "Full GDPR compliance and Cyber Essentials certified protection for your data."
              },
              {
                icon: <Zap className="w-8 h-8 text-emerald-600" />,
                title: "Rapid Response",
                desc: "Average response time under 15 minutes for critical business issues."
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-emerald-600" />,
                title: "Cost Efficiency",
                desc: "Strategic IT planning that reduces overheads and maximises your technology ROI."
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm"
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4">{benefit.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">Our Expertise</h2>
              <p className="text-4xl font-bold text-zinc-900 leading-tight">
                Comprehensive IT Solutions Tailored for the Modern Enterprise
              </p>
            </div>
            <Link to="/services" className="text-emerald-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl border border-zinc-100 hover:border-emerald-200 transition-all hover:shadow-xl hover:shadow-emerald-50"
              >
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">{service.title}</h3>
                <p className="text-zinc-600 mb-8 line-clamp-2">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-zinc-500">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services#${service.id}`}
                  className="inline-flex items-center gap-2 text-zinc-900 font-bold group-hover:text-emerald-600 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study / Impact */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-4">Measurable Results</h2>
              <h3 className="text-4xl font-bold mb-8 leading-tight">
                Helping a London Law Firm Save £45,000 Annually Through Cloud Migration
              </h3>
              <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                By transitioning their legacy on-premise servers to a secure Azure environment, we improved their remote working capabilities while significantly reducing maintenance costs.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-emerald-500 mb-2">£45k</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wider">Annual Savings</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-500 mb-2">99.9%</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wider">Uptime Achieved</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="https://picsum.photos/seed/tech/800/800"
                  alt="Modern Office"
                  className="object-cover w-full h-full opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-emerald-600 p-8 rounded-3xl shadow-2xl max-w-xs">
                <Quote className="w-8 h-8 text-emerald-300 mb-4" />
                <p className="text-white font-medium mb-4 italic">
                  "Penstone Farm transformed our digital infrastructure. Their expertise in UK compliance was exactly what we needed."
                </p>
                <div className="text-sm">
                  <div className="font-bold">James Sterling</div>
                  <div className="text-emerald-200">Managing Partner, Sterling & Co.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">Client Voices</h2>
            <p className="text-4xl font-bold text-zinc-900">What Our Partners Say</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alistair Cook",
                role: "CTO, Thames Logistics",
                text: "The level of proactive support is unmatched. They don't just fix problems; they prevent them."
              },
              {
                name: "Sarah Jenkins",
                role: "Director, Cotswold Creative",
                text: "Switching to Penstone Farm was the best decision for our agency. Our team can finally focus on work, not IT issues."
              },
              {
                name: "Oliver Thompson",
                role: "Operations Manager, Bristol Manufacturing",
                text: "Professional, reliable, and deeply knowledgeable about the UK tech landscape. Highly recommended."
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Zap key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                  ))}
                </div>
                <p className="text-zinc-600 mb-8 leading-relaxed italic">"{t.text}"</p>
                <div>
                  <div className="font-bold text-zinc-900">{t.name}</div>
                  <div className="text-sm text-zinc-500">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)]" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 relative z-10">
              Ready to Modernise Your IT Infrastructure?
            </h2>
            <p className="text-emerald-50 text-xl mb-12 max-w-2xl mx-auto relative z-10">
              Join hundreds of UK businesses that trust Penstone Farm for their technology needs. Let's build your digital future together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-5 bg-white text-emerald-600 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-xl"
              >
                Get Started Today
              </Link>
              <Link
                to="/pricing"
                className="w-full sm:w-auto px-10 py-5 bg-emerald-700 text-white rounded-full font-bold text-lg hover:bg-emerald-800 transition-all"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
