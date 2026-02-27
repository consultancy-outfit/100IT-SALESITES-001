import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Zap, Users, BarChart3, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Shield size={16} />
                <span>Trusted UK IT Partner</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-primary leading-tight mb-6">
                Modern IT Solutions for <span className="text-accent">British Business</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                We provide enterprise-grade IT services, cybersecurity, and cloud infrastructure 
                tailored for the unique needs of UK organisations. Reliable, secure, and local.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services" className="bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent/90 transition-all flex items-center justify-center group">
                  Explore Services
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="border-2 border-slate-200 text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center">
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
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/it-uk/800/800" 
                  alt="Modern Office" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">99.9% Uptime</p>
                    <p className="text-xs text-slate-500">Guaranteed SLA</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose SSD IT Solutions?</h2>
            <p className="text-slate-600">We combine technical excellence with a deep understanding of the UK business landscape.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="text-amber-500" />, title: "Rapid Response", desc: "Average response time under 15 minutes for critical issues." },
              { icon: <Shield className="text-blue-500" />, title: "Cyber Essentials", desc: "Helping you achieve and maintain UK government security standards." },
              { icon: <Users className="text-emerald-500" />, title: "Local Experts", desc: "UK-based engineers who understand your local infrastructure." }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Industries We Empower in the UK</h2>
              <p className="text-slate-600 mb-8">From non-profits to financial services, we provide specialized IT support that meets regulatory and operational demands.</p>
              <ul className="space-y-4">
                {[
                  "Charities & Non-Profits",
                  "Healthcare & Care Services",
                  "Professional Services (Legal/Finance)",
                  "Education & Special Needs Support",
                  "Manufacturing & Logistics"
                ].map((industry, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-accent" size={20} />
                    <span>{industry}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/ind1/400/500" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/ind2/400/500" className="rounded-2xl shadow-lg mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study / Results */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Measurable Results</h2>
            <p className="text-slate-400">Real impact for our British clients over the last 12 months.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Client Savings", value: "£240k+", icon: <BarChart3 /> },
              { label: "Uptime Achieved", value: "99.99%", icon: <Globe /> },
              { label: "Cyber Threats Blocked", value: "1.2M+", icon: <Shield /> },
              { label: "Support Tickets Resolved", value: "15k+", icon: <Users /> }
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
                <div className="inline-flex p-3 rounded-xl bg-accent/20 text-accent mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alistair Graham", role: "Director, London Care Group", text: "SSD IT transformed our infrastructure. Their understanding of UK compliance is unmatched." },
              { name: "Sarah Jenkins", role: "Operations Manager, Midlands Tech", text: "The response time is incredible. It feels like having an in-house team just down the road." },
              { name: "David Thompson", role: "CEO, Bristol Logistics", text: "Switching to SSD IT saved us over £15,000 in annual licensing costs alone. Highly recommended." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 italic text-slate-600">
                <p className="mb-6">"{t.text}"</p>
                <div className="not-italic">
                  <p className="font-bold text-primary">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Secure Your Future?</h2>
          <p className="text-xl text-white/80 mb-10">Join hundreds of UK businesses who trust SSD IT Solutions for their technology needs.</p>
          <Link to="/contact" className="inline-flex items-center bg-white text-accent px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all">
            Get a Free IT Audit
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
