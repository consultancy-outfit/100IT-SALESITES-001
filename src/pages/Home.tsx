import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Zap, Users, BarChart3, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-32 pb-24 lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-zinc-900 uppercase bg-zinc-100 rounded-full">
                Premium UK IT Services
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
                Empowering British Business <br />
                <span className="text-zinc-500 italic">Through Technology</span>
              </h1>
              <p className="max-w-xl text-lg text-zinc-600 mb-10 leading-relaxed">
                Basildon IT provides enterprise-grade managed services, cybersecurity, and cloud consultancy tailored for the UK market. We handle the tech, you handle the growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-zinc-900 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
                >
                  Explore Services <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full font-medium hover:bg-zinc-50 transition-all text-center"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] md:aspect-square bg-zinc-100 rounded-[3rem] overflow-hidden border border-zinc-200 shadow-2xl relative z-10">
                <img 
                  src="https://picsum.photos/id/1/1000/1000" 
                  alt="Software Development and IT Solutions" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent"></div>
              </div>
              
              {/* Floating Element */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 z-20 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center">
                    <Shield className="text-emerald-600 w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-zinc-900">Secure by Design</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">UK GDPR Compliant</div>
                  </div>
                </div>
              </div>

              {/* Decorative Circles */}
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-zinc-100 rounded-full -z-0 blur-3xl opacity-60"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-zinc-200 rounded-full -z-0 blur-3xl opacity-40"></div>
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
                icon: <Shield className="w-8 h-8" />,
                title: "Cyber Resilience",
                desc: "Advanced threat protection and GDPR-compliant security frameworks for your business data."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Proactive Support",
                desc: "24/7 monitoring and rapid response times to ensure your operations never skip a beat."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Consultancy",
                desc: "Strategic IT roadmaps designed by industry veterans with deep UK market expertise."
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-zinc-200 shadow-sm"
              >
                <div className="text-zinc-900 mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4">{benefit.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">Industries We Serve Across the UK</h2>
              <p className="text-zinc-600 text-lg">
                From financial services in the City to manufacturing in the Midlands, we provide sector-specific IT excellence.
              </p>
            </div>
            <Link to="/about" className="text-zinc-900 font-semibold flex items-center gap-2 hover:underline">
              Learn about our values <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Financial Services', 'Healthcare', 'Manufacturing', 'Legal', 'Retail', 'Education', 'Construction', 'Non-Profit'].map((industry, i) => (
              <div key={i} className="p-6 border border-zinc-100 rounded-xl hover:bg-zinc-50 transition-colors flex items-center gap-3">
                <CheckCircle2 className="text-zinc-400 w-5 h-5" />
                <span className="font-medium text-zinc-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-zinc-400 uppercase text-xs tracking-widest font-semibold mb-4 block">Case Study</span>
              <h2 className="text-4xl font-bold mb-8">Digital Transformation for Essex Logistics Ltd</h2>
              <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
                We migrated their legacy on-premise infrastructure to a secure Azure cloud environment, resulting in significant operational savings and enhanced remote work capabilities.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">£45,000</div>
                  <div className="text-zinc-500 text-sm">Annual IT Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">99.99%</div>
                  <div className="text-zinc-500 text-sm">Uptime Achieved</div>
                </div>
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all">
                View more results <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-video bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700">
                <img 
                  src="https://picsum.photos/id/1/800/450" 
                  alt="Modern Office" 
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl text-zinc-900 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center">
                    <BarChart3 className="text-zinc-900" />
                  </div>
                  <div>
                    <div className="font-bold">ROI Focused</div>
                    <div className="text-sm text-zinc-500">Measurable impact in £</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900 text-center mb-16">Trusted by British Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The team at Basildon IT transformed our security posture. Their understanding of GDPR and UK compliance is second to none.",
                author: "Alistair Cook",
                role: "Director, London Finance Group"
              },
              {
                quote: "Switching to their managed support was the best decision we made this year. Downtime is a thing of the past.",
                author: "Sarah Jenkins",
                role: "Operations Manager, Kent Manufacturing"
              },
              {
                quote: "Professional, responsive, and highly technical. They feel like an extension of our own team.",
                author: "Dr. Edward Miller",
                role: "CEO, Cambridge Biotech"
              }
            ].map((t, i) => (
              <div key={i} className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-zinc-900 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-700 italic mb-8 leading-relaxed">"{t.quote}"</p>
                <div>
                  <div className="font-bold text-zinc-900">{t.author}</div>
                  <div className="text-sm text-zinc-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 md:p-20 rounded-[3rem] border border-zinc-200 shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8">Ready to Secure Your Future?</h2>
              <p className="text-zinc-600 text-lg mb-10 max-w-xl mx-auto">
                Join hundreds of UK businesses that trust Basildon IT for their critical infrastructure and support.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-zinc-900 text-white px-10 py-5 rounded-full font-bold hover:bg-zinc-800 transition-all shadow-lg"
              >
                Get Started Today
              </Link>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Globe size={200} className="text-zinc-900" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
