import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Zap, BarChart3, Users2, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-slate-900 pt-20 pb-32 lg:pt-32 lg:pb-48">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6"
            >
              Empowering British Business through <span className="text-brand-accent">Intelligent IT</span>.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 mb-10 leading-relaxed"
            >
              Daisy Haye delivers world-class managed IT services, cybersecurity, and cloud consultancy tailored for the UK's most ambitious enterprises.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/services" className="btn-primary px-8 py-4 text-lg">
                Explore Our Services
              </Link>
              <Link to="/contact" className="btn-secondary bg-transparent text-white border-white/20 hover:bg-white/10 px-8 py-4 text-lg">
                Book a Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Daisy Haye?</h2>
            <p className="text-slate-600">We combine technical excellence with a deep understanding of the UK business landscape to provide IT that actually works.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-brand-accent" />,
                title: "Security First",
                desc: "Enterprise-grade cybersecurity integrated into every solution we build and manage."
              },
              {
                icon: <Zap className="h-8 w-8 text-brand-accent" />,
                title: "Rapid Response",
                desc: "Our UK-based support team is available 24/7 to ensure your operations never stop."
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-brand-accent" />,
                title: "Strategic Growth",
                desc: "We don't just fix problems; we align your technology with your long-term business goals."
              }
            ].map((benefit, i) => (
              <div key={i} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-lg transition-shadow">
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Specialised IT for UK Industries</h2>
              <p className="text-slate-600 mb-8">We understand the unique regulatory and operational challenges faced by businesses in the United Kingdom.</p>
              <ul className="space-y-4">
                {[
                  "Financial Services & Fintech",
                  "Legal & Professional Services",
                  "Manufacturing & Logistics",
                  "Healthcare & Life Sciences",
                  "Retail & E-commerce"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-accent" />
                    <span className="font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-slate-200 rounded-2xl overflow-hidden">
                  <img src="https://picsum.photos/seed/it1/600/400" alt="IT Support" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="h-64 bg-slate-200 rounded-2xl overflow-hidden">
                   <img src="https://picsum.photos/seed/it2/600/400" alt="Server Room" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 bg-slate-200 rounded-2xl overflow-hidden">
                   <img src="https://picsum.photos/seed/it3/600/400" alt="Office" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="h-48 bg-slate-200 rounded-2xl overflow-hidden">
                   <img src="https://picsum.photos/seed/it4/600/400" alt="Code" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="bg-brand-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 text-white">
              <span className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4 block">Featured Case Study</span>
              <h2 className="text-4xl font-bold mb-6">Digital Transformation for London Legal Firm</h2>
              <p className="text-slate-400 mb-8 text-lg">How we migrated a 150-staff law firm to a secure private cloud, reducing IT overheads by 35% annually.</p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <div className="text-3xl font-bold text-brand-accent">£45,000</div>
                  <div className="text-sm text-slate-400">Annual Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-accent">99.99%</div>
                  <div className="text-sm text-slate-400">Uptime Achieved</div>
                </div>
              </div>
              <Link to="/services" className="inline-flex items-center text-white font-bold hover:text-brand-accent transition-colors">
                Read Full Story <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="lg:w-1/2 bg-slate-800 relative">
              <img src="https://picsum.photos/seed/legal/800/600" alt="Legal Office" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Trusted by British Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Daisy Haye transformed our infrastructure. Their proactive approach to security has given us peace of mind we never had before.",
                author: "James Harrington",
                role: "CTO, British Logistics Group"
              },
              {
                quote: "The transition to managed services was seamless. Their team feels like an extension of our own company.",
                author: "Sarah Jenkins",
                role: "Operations Director, London Fintech"
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
                <p className="text-lg text-slate-700 italic mb-8">"{t.quote}"</p>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-slate-200 rounded-full"></div>
                  <div>
                    <div className="font-bold text-slate-900">{t.author}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-primary text-center">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Secure Your Future?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg">Join hundreds of UK businesses that trust Daisy Haye for their critical IT infrastructure.</p>
          <Link to="/contact" className="btn-primary bg-brand-accent hover:bg-emerald-600 px-10 py-4 text-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
