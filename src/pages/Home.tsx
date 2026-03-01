import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap, Users, BarChart3, Globe, CheckCircle2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#0ea5e9_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-500 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Trusted UK IT Partner
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              Future-Proof Your <span className="text-brand-500">Business</span> with Expert IT.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
              Island Business Centre delivers premium managed IT services, robust cybersecurity, and scalable cloud solutions tailored for the British market.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/services" className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-bold transition-all flex items-center gap-2 shadow-xl shadow-brand-600/20">
                Explore Services <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold transition-all">
                Book a Consultation
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                alt="Cybersecurity Operations" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-2xl z-20 max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                  <ShieldCheck size={24} />
                </div>
                <span className="text-2xl font-bold text-slate-900">99.9%</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Uptime Guarantee for all managed clients.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">Who We Are</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Your Local IT Department, <br />Only Smarter.
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Based in Telford, Island Business Centre has been at the forefront of the UK's IT evolution. We don't just fix computers; we build resilient digital foundations that allow businesses to scale without technical friction.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <Zap className="text-amber-500" />, title: "Rapid Response", desc: "Average 15-minute response time for critical issues." },
                  { icon: <ShieldCheck className="text-brand-500" />, title: "UK Compliance", desc: "Fully GDPR compliant and Cyber Essentials certified." }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      {item.icon}
                      {item.title}
                    </div>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why British Businesses Choose Us</h2>
            <p className="text-slate-600">We combine technical excellence with a deep understanding of the UK business landscape.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Users />, title: "Dedicated Support", desc: "No call centres. You get a direct line to our senior engineers who know your business inside out." },
              { icon: <BarChart3 />, title: "Predictable Costs", desc: "Fixed-fee monthly plans help you manage your budget with zero hidden surprises." },
              { icon: <Globe />, title: "Local Expertise", desc: "UK-based data centres and on-site support across the Midlands and beyond." }
            ].map((benefit, i) => (
              <motion.div 
                key={i} 
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{benefit.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Measurable Success</h2>
              <p className="text-slate-400">Real results delivered to our UK clients through strategic IT implementation.</p>
            </div>
            <Link to="/services" className="text-brand-400 font-bold flex items-center gap-2 hover:text-brand-300 transition-colors">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                client: "Midlands Logistics Ltd", 
                result: "£45,000 Annual Savings", 
                desc: "Migrated legacy on-premise servers to a secure Azure environment, reducing hardware maintenance and energy costs.",
                tag: "Cloud Migration"
              },
              { 
                client: "London Legal Partners", 
                result: "Zero Downtime in 24 Months", 
                desc: "Implemented a comprehensive disaster recovery and business continuity plan following a major security audit.",
                tag: "Cybersecurity"
              }
            ].map((study, i) => (
              <motion.div 
                key={i} 
                {...fadeIn}
                className="relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 text-xs font-bold mb-6">
                  {study.tag}
                </span>
                <h4 className="text-2xl font-bold mb-2 text-brand-400">{study.result}</h4>
                <h5 className="text-lg font-semibold mb-4">for {study.client}</h5>
                <p className="text-slate-400 text-sm leading-relaxed">{study.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alistair Graham", role: "MD, Graham & Sons", text: "Island Business Centre transformed our remote working capabilities overnight. Their team is professional, knowledgeable, and always available." },
              { name: "Sarah Jenkins", role: "Operations Director, Telford Tech", text: "The peace of mind we have knowing our cybersecurity is handled by IBC is invaluable. They are a true extension of our team." },
              { name: "David Thompson", role: "Founder, Peak Performance", text: "Switching to their managed services was the best decision we made this year. Our IT costs are down and our productivity is up." }
            ].map((t, i) => (
              <motion.div key={i} {...fadeIn} className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 italic mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-200 flex items-center justify-center text-brand-700 font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">{t.name}</h5>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-brand-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4"></div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Secure Your Digital Future?</h2>
          <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
            Join hundreds of UK businesses that trust Island Business Centre for their IT needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-10 py-4 bg-white text-brand-600 rounded-full font-bold hover:bg-brand-50 transition-all shadow-xl">
              Get Started Today
            </Link>
            <Link to="/pricing" className="px-10 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-all">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
