import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Zap, Users, BarChart3, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const benefits = [
    {
      title: "Proactive Security",
      description: "Advanced threat detection and 24/7 monitoring to keep your UK business safe from evolving cyber threats.",
      icon: Shield
    },
    {
      title: "Strategic Growth",
      description: "IT roadmaps designed to scale with your organisation, ensuring technology is an asset, not a bottleneck.",
      icon: BarChart3
    },
    {
      title: "Expert Support",
      description: "Direct access to UK-based senior engineers who understand your local business context and requirements.",
      icon: Users
    }
  ];

  const caseStudies = [
    {
      client: "London Logistics Group",
      result: "£145k Annual Savings",
      description: "Optimised cloud infrastructure and automated supply chain tracking systems.",
      industry: "Transport & Logistics"
    },
    {
      client: "Cambridge BioTech",
      result: "100% GDPR Compliance",
      description: "Implemented secure data handling and encryption protocols for sensitive research data.",
      industry: "Life Sciences"
    },
    {
      client: "Manchester Retail Partners",
      result: "40% Increase in Uptime",
      description: "Modernised legacy server systems with a high-availability hybrid cloud solution.",
      industry: "Retail"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
                Leading UK IT Consultancy
              </span>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-8">
                Technology that drives <span className="text-indigo-600">British Innovation.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Wickham Hall provides bespoke IT services, cybersecurity, and managed solutions tailored for the unique challenges of the UK business landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all bg-indigo-600 rounded-full hover:bg-indigo-700 shadow-xl shadow-indigo-200"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-700 transition-all bg-white border-2 border-slate-200 rounded-full hover:bg-slate-50"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-16 lg:mt-0 relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/it-office/800/600"
                  alt="Modern UK Tech Office"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Why British Enterprises Trust Wickham Hall
            </h2>
            <p className="text-lg text-slate-600">
              We combine deep technical expertise with a thorough understanding of the UK regulatory and commercial environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 transition-all"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6">
                  <benefit.icon className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Specialised IT Support Across UK Industries
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Financial Services",
                  "Legal & Professional",
                  "Healthcare & NHS Trusts",
                  "Manufacturing",
                  "Education",
                  "Public Sector"
                ].map((industry, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-indigo-400 w-5 h-5" />
                    <span className="text-slate-300 font-medium">{industry}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Link to="/about" className="text-indigo-400 font-bold flex items-center hover:text-indigo-300 transition-colors">
                  Learn about our industry expertise
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://picsum.photos/seed/finance/400/500" className="rounded-2xl shadow-lg" alt="Finance" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/legal/400/300" className="rounded-2xl shadow-lg" alt="Legal" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/health/400/300" className="rounded-2xl shadow-lg" alt="Health" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/manufacturing/400/500" className="rounded-2xl shadow-lg" alt="Manufacturing" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                Measurable Results for Our Clients
              </h2>
              <p className="text-lg text-slate-600">
                We don't just deliver technology; we deliver commercial value and operational efficiency.
              </p>
            </div>
            <Link to="/services" className="bg-slate-100 text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-slate-200 transition-all">
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={`https://picsum.photos/seed/case-${idx}/600/400`}
                    alt={study.client}
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-sm font-bold text-indigo-600">
                    {study.industry}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{study.client}</h3>
                <div className="text-indigo-600 font-display font-bold text-xl mb-3">{study.result}</div>
                <p className="text-slate-600 leading-relaxed">{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">What Our Partners Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Alistair Wickens",
                role: "CTO, Thames Water Systems",
                text: "Wickham Hall transformed our legacy infrastructure into a powerhouse of efficiency. Their understanding of UK compliance is second to none."
              },
              {
                name: "Sarah Jenkins",
                role: "Operations Director, Midlands Health",
                text: "The level of proactive support we receive is exceptional. It feels like having an in-house IT department that never sleeps."
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative">
                <Quote className="absolute top-8 right-8 text-indigo-100 w-12 h-12" />
                <p className="text-xl text-slate-700 italic mb-8 leading-relaxed relative z-10">"{t.text}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Ready to elevate your business technology?</h2>
              <p className="text-xl text-indigo-100 mb-12">
                Join hundreds of UK businesses that rely on Wickham Hall for their critical IT infrastructure and strategy.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/contact" className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl">
                  Get Started Today
                </Link>
                <Link to="/pricing" className="bg-indigo-700 text-white border border-indigo-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-800 transition-all">
                  View Pricing
                </Link>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-500 rounded-full opacity-20"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
