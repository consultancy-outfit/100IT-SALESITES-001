import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap, Users, BarChart3, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" />
              Trusted UK IT Partners
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
              Empowering Care with <span className="text-brand-600">Intelligent IT</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              We provide specialized IT infrastructure and managed services tailored for the UK's supported living and healthcare sectors. Secure, reliable, and compliant.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="bg-brand-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all shadow-sm"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/it-office/800/800" 
                alt="Modern IT Office" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-emerald-600" />
                </div>
                <span className="font-bold text-slate-900">99.9% Uptime</span>
              </div>
              <p className="text-sm text-slate-500">Guaranteed service levels for critical care environments.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Choose Teesside Supported Living?</h2>
            <p className="text-slate-600">We understand the unique pressures of the care sector, where technology must be invisible yet infallible.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8 text-brand-600" />,
                title: "GDPR & Care Compliance",
                desc: "Full alignment with UK healthcare data standards and CQC technology requirements."
              },
              {
                icon: <Zap className="w-8 h-8 text-brand-600" />,
                title: "Rapid Response Support",
                desc: "UK-based helpdesk providing 24/7 support for your critical frontline staff."
              },
              {
                icon: <Users className="w-8 h-8 text-brand-600" />,
                title: "Sector Specialists",
                desc: "Over 15 years experience specifically serving the supported living and social care industry."
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-brand-100 transition-all group"
              >
                <div className="mb-6 p-3 bg-white rounded-xl shadow-sm w-fit group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Measurable Impact</h2>
              <p className="text-slate-400">Real results delivered to our partners across the North East and beyond.</p>
            </div>
            <Link to="/services" className="text-brand-400 font-semibold flex items-center gap-2 hover:text-brand-300">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700">
              <div className="text-brand-400 font-bold text-sm uppercase tracking-widest mb-4">Case Study: North East Care Group</div>
              <h3 className="text-2xl font-bold mb-4">Infrastructure Modernisation</h3>
              <p className="text-slate-400 mb-6">We overhauled the legacy network of a 12-site provider, implementing secure cloud sync and VoIP.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-white">£45,000</div>
                  <div className="text-xs text-slate-500 uppercase">Annual Savings</div>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-white">40%</div>
                  <div className="text-xs text-slate-500 uppercase">Efficiency Gain</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700">
              <div className="text-brand-400 font-bold text-sm uppercase tracking-widest mb-4">Case Study: Tees Valley Housing</div>
              <h3 className="text-2xl font-bold mb-4">Cybersecurity Fortification</h3>
              <p className="text-slate-400 mb-6">Implemented multi-layer security and staff training to protect sensitive resident data.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-white">0</div>
                  <div className="text-xs text-slate-500 uppercase">Security Breaches</div>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-white">£12,000</div>
                  <div className="text-xs text-slate-500 uppercase">Insurance Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Jenkins",
                role: "Operations Director, Haven Care",
                quote: "Teesside Supported Living transformed our IT from a daily headache into a strategic asset. Their understanding of care compliance is unmatched."
              },
              {
                name: "David Thompson",
                role: "CEO, Tees Valley Housing",
                quote: "The transition to their managed services was seamless. We now have 24/7 peace of mind knowing our systems and data are secure."
              },
              {
                name: "Alistair Cook",
                role: "IT Manager, North East Social Services",
                quote: "Professional, responsive, and truly local. They feel like an extension of our own team rather than just a third-party vendor."
              }
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 italic relative">
                <div className="text-brand-600 text-4xl absolute top-4 left-4 opacity-20">"</div>
                <p className="text-slate-700 mb-6 relative z-10">{t.quote}</p>
                <div className="flex items-center gap-4 not-italic">
                  <div className="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center font-bold text-brand-700">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-brand-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-900/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 relative z-10">Ready to Modernise Your Care IT?</h2>
          <p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Join dozens of UK care providers who trust us with their digital infrastructure. Let's build a more efficient future together.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link to="/contact" className="bg-white text-brand-600 px-10 py-4 rounded-full font-bold hover:bg-brand-50 transition-all shadow-lg">
              Book a Free Audit
            </Link>
            <Link to="/services" className="bg-brand-700 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-800 transition-all border border-brand-500">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
