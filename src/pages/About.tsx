import { motion } from 'motion/react';
import { Target, Eye, History, ShieldCheck, Heart, Award, CheckCircle2 } from 'lucide-react';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Office" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            Empowering British Business Through <span className="text-brand-500">Innovation</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-300 leading-relaxed"
          >
            Island Business Centre is a leading UK IT services provider, dedicated to delivering technical excellence and strategic value to businesses across the United Kingdom.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...fadeIn} className="p-10 rounded-3xl bg-brand-50 border border-brand-100">
              <div className="w-14 h-14 bg-brand-600 text-white rounded-2xl flex items-center justify-center mb-6">
                <Target size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To provide British businesses with the most reliable, secure, and innovative IT solutions, enabling them to focus on their core objectives while we handle the technical complexities.
              </p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="p-10 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6">
                <Eye size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted technology partner in the UK, recognised for our technical expertise, customer-centric approach, and commitment to business growth through technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                  alt="Our History" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                <p className="text-4xl font-bold text-brand-600 mb-1">10+</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Years of Excellence</p>
              </div>
            </motion.div>
            <motion.div {...fadeIn}>
              <div className="flex items-center gap-2 text-brand-600 font-bold uppercase tracking-widest mb-4">
                <History size={20} />
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Built on Trust, Driven by Results.</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Founded in Telford, Island Business Centre began with a simple goal: to make enterprise-grade IT accessible to small and medium-sized British businesses. We saw a gap in the market for an IT provider that combined high-level technical skill with a personal, local touch.
                </p>
                <p>
                  Over the last decade, we have grown from a small team of engineers into a comprehensive IT services provider, supporting hundreds of clients across logistics, finance, legal, and manufacturing sectors.
                </p>
                <p>
                  Today, we continue to evolve, staying ahead of the curve in cybersecurity, cloud computing, and AI-driven IT management, ensuring our clients are always one step ahead of the competition.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide everything we do.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck className="text-emerald-500" />, title: "Integrity", desc: "We are honest, transparent, and always act in the best interest of our clients." },
              { icon: <Heart className="text-rose-500" />, title: "Client-Centric", desc: "Your success is our success. We build long-term relationships based on mutual growth." },
              { icon: <Award className="text-amber-500" />, title: "Excellence", desc: "We strive for technical perfection and continuous improvement in all our services." }
            ].map((value, i) => (
              <motion.div key={i} {...fadeIn} className="p-8 rounded-2xl border border-slate-100 hover:border-brand-200 hover:bg-brand-50/30 transition-all">
                <div className="mb-6">{value.icon}</div>
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
            <p className="text-slate-400">Meet the experts driving our technical vision.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "James Harrison", role: "Managing Director", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
              { name: "Eleanor Brooks", role: "Technical Director", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
              { name: "Robert Miller", role: "Operations Manager", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" }
            ].map((leader, i) => (
              <motion.div key={i} {...fadeIn} className="text-center group">
                <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-brand-500 transition-all">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xl font-bold mb-1">{leader.name}</h4>
                <p className="text-brand-400 text-sm font-medium">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-emerald-50 border border-emerald-100 flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 bg-emerald-600 text-white rounded-full flex items-center justify-center shrink-0">
              <ShieldCheck size={48} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Commitment to GDPR</h2>
              <p className="text-slate-600 mb-6">
                As a UK-based IT provider, data privacy is at the heart of everything we do. We are fully committed to GDPR compliance and help our clients achieve the same through robust security measures and data processing standards.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {["Data Encryption", "Secure Processing", "Privacy by Design", "Regular Audits"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
