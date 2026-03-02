import { motion } from 'motion/react';
import { ArrowRight, Shield, Zap, Globe, Users, BarChart3, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CASE_STUDIES = [
  {
    title: "Global Logistics Firm",
    result: "£1.2M",
    metric: "Annual Savings",
    description: "Streamlined infrastructure and cloud migration for a major UK logistics provider."
  },
  {
    title: "FinTech Startup",
    result: "99.99%",
    metric: "Uptime Achieved",
    description: "Implemented high-availability architecture and 24/7 monitoring."
  },
  {
    title: "Retail Chain",
    result: "£450k",
    metric: "Efficiency Gain",
    description: "Automated inventory management and POS integration across 50+ locations."
  }
];

const TESTIMONIALS = [
  {
    name: "Alistair Graham",
    role: "CTO, British Heritage Brands",
    content: "Fradel Lodge transformed our legacy systems into a modern, agile infrastructure. Their expertise in UK compliance is unmatched."
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Director, London Tech Hub",
    content: "The most reliable IT partner we've ever worked with. Their response times are exceptional and their strategic advice is invaluable."
  },
  {
    name: "David Thompson",
    role: "Founder, Midlands Manufacturing",
    content: "They don't just fix problems; they prevent them. Our productivity has increased by 30% since partnering with Fradel Lodge."
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
                <Zap size={14} />
                <span>UK's Leading IT Consultancy</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-[1.1] mb-8">
                Future-Proof Your <span className="text-emerald-600">Business</span> with Fradel Lodge
              </h1>
              <p className="text-xl text-stone-600 mb-10 leading-relaxed max-w-lg">
                Strategic IT solutions, robust cybersecurity, and managed services tailored for the unique challenges of the UK market.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-stone-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-stone-800 transition-all flex items-center justify-center group"
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white border border-stone-200 text-stone-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-stone-50 transition-all flex items-center justify-center"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-16 lg:mt-0 relative"
            >
              <div className="aspect-square rounded-3xl bg-stone-200 overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
                  alt="Modern Office"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-stone-900">500+</p>
                    <p className="text-xs text-stone-500 uppercase font-bold tracking-wider">UK Clients</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 bg-emerald-600 p-6 rounded-2xl shadow-xl text-white hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Shield size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">100%</p>
                    <p className="text-xs text-emerald-100 uppercase font-bold tracking-wider">Secure Delivery</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-stone-100 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-8">Trusted by industry leaders across the UK</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
            {/* Logos placeholders */}
            <span className="text-2xl font-serif italic text-stone-900">TechCorp</span>
            <span className="text-2xl font-serif italic text-stone-900">LondonLogistics</span>
            <span className="text-2xl font-serif italic text-stone-900">MidlandsFin</span>
            <span className="text-2xl font-serif italic text-stone-900">NorthernRetail</span>
            <span className="text-2xl font-serif italic text-stone-900">GlobalSystems</span>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-stone-900 mb-6">Why Choose Fradel Lodge?</h2>
            <p className="text-lg text-stone-600">We combine deep technical expertise with a thorough understanding of the UK business landscape.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "GDPR & Compliance",
                description: "Full alignment with UK data protection laws and industry-specific regulations."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Proactive Support",
                description: "24/7 monitoring and maintenance to resolve issues before they impact your operations."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Cloud Excellence",
                description: "Seamless migration and management of cloud infrastructures for maximum scalability."
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-4">{benefit.title}</h3>
                <p className="text-stone-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 lg:py-32 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold tracking-tight mb-6">Measurable Results</h2>
              <p className="text-stone-400 text-lg">Real-world impact for our clients across various sectors in the United Kingdom.</p>
            </div>
            <Link to="/services" className="text-emerald-400 font-bold flex items-center hover:text-emerald-300 transition-colors">
              View all services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="mb-8 overflow-hidden rounded-2xl aspect-video bg-stone-800">
                   <img
                    src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=600`}
                    alt={study.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-emerald-400 font-mono text-sm uppercase tracking-widest mb-2">{study.metric}</p>
                <h3 className="text-5xl font-bold mb-4">{study.result}</h3>
                <h4 className="text-xl font-bold mb-4">{study.title}</h4>
                <p className="text-stone-400 leading-relaxed">{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold tracking-tight text-stone-900 mb-6">What Our Clients Say</h2>
              <p className="text-lg text-stone-600 mb-8">We pride ourselves on building long-term partnerships based on trust and excellence.</p>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <CheckCircle2 key={s} className="text-emerald-600 w-5 h-5" />
                ))}
              </div>
              <p className="mt-4 text-sm font-bold text-stone-400 uppercase tracking-widest">4.9/5 Average Rating</p>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className={`p-8 rounded-3xl bg-stone-50 border border-stone-100 ${i === 2 ? 'md:col-span-2' : ''}`}>
                  <p className="text-stone-600 italic mb-6 text-lg">"{t.content}"</p>
                  <div>
                    <p className="font-bold text-stone-900">{t.name}</p>
                    <p className="text-sm text-stone-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-600 rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-8">Ready to Elevate Your IT Infrastructure?</h2>
              <p className="text-xl text-emerald-100 mb-12">Join hundreds of successful UK businesses that trust Fradel Lodge for their technology needs.</p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-emerald-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-stone-100 transition-all shadow-xl"
              >
                Get a Free Audit
                <ArrowRight className="ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
