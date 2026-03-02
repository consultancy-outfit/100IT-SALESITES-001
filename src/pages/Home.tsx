import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, Zap, Users, BarChart3, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#4f46e5,transparent_50%)]"></div>
        </div>
        
        <div className="section-padding relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <Zap size={14} />
              <span>Leading UK IT Partner</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Future-Proof Your <span className="text-indigo-400">Business</span> with Intelligent IT.
            </h1>
            <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
              We provide managed IT services, cybersecurity, and cloud solutions tailored for the UK market. Reliable, secure, and scalable technology at your fingertips.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/services" 
                className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-xl shadow-indigo-500/20"
              >
                Explore Services <ArrowRight size={20} />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all"
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                alt="Cybersecurity and IT Infrastructure" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why Choose Khattak IT?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">We combine technical excellence with a deep understanding of the UK business landscape.</p>
        </div>

        <motion.div 
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "UK-Based Support",
              desc: "Our team is based in the UK, providing responsive support during your business hours.",
              icon: <Users className="text-indigo-600" size={32} />
            },
            {
              title: "GDPR Compliant",
              desc: "Security and data protection are at the core of everything we do, ensuring full compliance.",
              icon: <Shield className="text-indigo-600" size={32} />
            },
            {
              title: "Scalable Solutions",
              desc: "Technology that grows with you, from startups to established UK enterprises.",
              icon: <Zap className="text-indigo-600" size={32} />
            }
          ].map((benefit, i) => (
            <motion.div 
              key={i}
              variants={fadeIn}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="mb-6 p-4 bg-indigo-50 rounded-2xl w-fit">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-slate-50 py-24">
        <div className="section-padding">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Proven Results</h2>
              <p className="text-slate-500 max-w-xl">Real-world impact for our UK clients, measured in efficiency and growth.</p>
            </div>
            <Link to="/services" className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm">
              <div className="p-8 space-y-6">
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-wider">
                  <BarChart3 size={18} />
                  <span>Financial Services</span>
                </div>
                <h3 className="text-2xl font-bold">Infrastructure Overhaul for London Fintech</h3>
                <p className="text-slate-600">Migrated legacy systems to a secure cloud environment, reducing downtime by 99% and saving over <span className="font-bold text-slate-900">£45,000</span> in annual maintenance costs.</p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm text-slate-400 italic">"A game-changer for our operations."</span>
                  <CheckCircle2 className="text-emerald-500" size={24} />
                </div>
              </div>
            </div>

            <div className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm">
              <div className="p-8 space-y-6">
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-wider">
                  <Shield size={18} />
                  <span>Retail Sector</span>
                </div>
                <h3 className="text-2xl font-bold">Cybersecurity Shield for E-commerce</h3>
                <p className="text-slate-600">Implemented advanced threat detection and response, preventing a major data breach and securing <span className="font-bold text-slate-900">£1.2M</span> in projected revenue.</p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm text-slate-400 italic">"Our data is finally safe."</span>
                  <CheckCircle2 className="text-emerald-500" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Trusted by UK Leaders</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "James Harrison",
              role: "CEO, Harrison Logistics",
              quote: "Khattak IT transformed our fleet management system. Their UK-based support is second to none."
            },
            {
              name: "Sarah Jenkins",
              role: "Director, Caterham Creative",
              quote: "Reliable, professional, and always ahead of the curve. They are truly part of our team."
            },
            {
              name: "Robert Miller",
              role: "IT Manager, Surrey Health",
              quote: "The cybersecurity audit they performed saved us from potential disaster. Highly recommended."
            }
          ].map((t, i) => (
            <div key={i} className="p-8 rounded-3xl bg-indigo-50/50 border border-indigo-100 relative">
              <Quote className="absolute top-6 right-8 text-indigo-200" size={40} />
              <p className="text-slate-700 italic mb-8 relative z-10">"{t.quote}"</p>
              <div>
                <h4 className="font-bold text-slate-900">{t.name}</h4>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center text-white space-y-8 relative overflow-hidden shadow-2xl shadow-indigo-200">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight relative z-10">Ready to Elevate Your IT?</h2>
          <p className="text-indigo-100 text-xl max-w-2xl mx-auto relative z-10">
            Join hundreds of UK businesses that trust Khattak IT Solutions for their technology needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link 
              to="/contact" 
              className="bg-white text-indigo-600 px-10 py-5 rounded-full font-bold hover:bg-indigo-50 transition-all shadow-lg"
            >
              Get Started Today
            </Link>
            <Link 
              to="/about" 
              className="bg-indigo-500 text-white border border-indigo-400 px-10 py-5 rounded-full font-bold hover:bg-indigo-400 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
