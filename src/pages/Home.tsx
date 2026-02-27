import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Users, Shield, Zap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS, CASE_STUDIES } from '../constants';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Premier UK IT Partner</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.1] mb-8">
                Intelligent IT Solutions for <span className="text-zinc-500">British Business.</span>
              </h1>
              <p className="text-xl text-zinc-500 leading-relaxed mb-10 max-w-2xl">
                From managed support to advanced cybersecurity, Kanmore House provides the technical backbone your UK business needs to scale securely and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-zinc-900 text-white font-semibold hover:bg-zinc-800 transition-all group">
                  Book a Free Audit
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-zinc-200 text-zinc-900 font-semibold hover:bg-zinc-50 transition-all">
                  Explore Services
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block lg:col-span-5 relative"
            >
              <div className="aspect-square bg-zinc-50 rounded-3xl border border-zinc-100 p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-100/50 to-transparent"></div>
                <div className="relative z-10 grid grid-cols-2 gap-4 h-full">
                  <div className="space-y-4">
                    <div className="h-1/2 bg-white rounded-2xl shadow-sm border border-zinc-100 p-6 flex flex-col justify-between">
                      <Shield className="h-8 w-8 text-zinc-900" />
                      <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Security</div>
                    </div>
                    <div className="h-1/2 bg-zinc-900 rounded-2xl shadow-lg p-6 flex flex-col justify-between">
                      <Zap className="h-8 w-8 text-white" />
                      <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Performance</div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="h-1/2 bg-white rounded-2xl shadow-sm border border-zinc-100 p-6 flex flex-col justify-between">
                      <Users className="h-8 w-8 text-zinc-900" />
                      <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Support</div>
                    </div>
                    <div className="h-1/2 bg-zinc-100 rounded-2xl border border-zinc-200 p-6 flex flex-col justify-between">
                      <TrendingUp className="h-8 w-8 text-zinc-900" />
                      <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Growth</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">Who We Are</h2>
              <h3 className="text-4xl font-bold text-zinc-900 mb-6 leading-tight">
                Your Strategic Technology Partner in the Heart of the UK.
              </h3>
              <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                Kanmore House isn't just an IT provider; we are a dedicated extension of your team. Based in London, we serve businesses across the UK with a focus on reliability, security, and commercial growth.
              </p>
              <ul className="space-y-4">
                {[
                  'UK-based 24/7 support desk',
                  'GDPR & Cyber Essentials compliant',
                  'Microsoft & AWS certified engineers',
                  'Fixed-fee transparent pricing'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-zinc-700">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
                <div className="text-4xl font-bold text-zinc-900 mb-2">99.9%</div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Uptime Guarantee</div>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
                <div className="text-4xl font-bold text-zinc-900 mb-2">15m</div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Avg Response Time</div>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
                <div className="text-4xl font-bold text-zinc-900 mb-2">10+</div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Years Experience</div>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
                <div className="text-4xl font-bold text-zinc-900 mb-2">500+</div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">Industries</h2>
            <h3 className="text-4xl font-bold text-zinc-900">Sectors We Empower</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {['Legal', 'Finance', 'Logistics', 'Retail', 'Healthcare', 'Education'].map((industry) => (
              <div key={industry} className="flex flex-col items-center p-6 rounded-xl border border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50 transition-all text-center">
                <span className="text-zinc-900 font-bold">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4">Proven Results</h2>
              <h3 className="text-4xl font-bold mb-6">Real Impact for UK Businesses</h3>
            </div>
            <Link to="/services" className="text-zinc-400 hover:text-white transition-colors mb-6 md:mb-0 flex items-center">
              View all case studies <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study, i) => (
              <div key={i} className="bg-zinc-800/50 border border-zinc-700 p-10 rounded-3xl hover:bg-zinc-800 transition-all">
                <div className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-4">{study.industry}</div>
                <h4 className="text-2xl font-bold mb-4">{study.title}</h4>
                <p className="text-zinc-400 mb-8 leading-relaxed">{study.description}</p>
                <div className="pt-6 border-t border-zinc-700">
                  <div className="text-3xl font-bold text-white">{study.result}</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold mt-1">Measurable Outcome</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">Testimonials</h2>
            <h3 className="text-4xl font-bold text-zinc-900">What Our Clients Say</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 flex flex-col justify-between">
                <p className="text-zinc-600 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div>
                  <div className="font-bold text-zinc-900">{t.name}</div>
                  <div className="text-sm text-zinc-500">{t.role}, {t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white blur-[120px] rounded-full"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-500 blur-[120px] rounded-full"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                Ready to Future-Proof <br />Your IT Infrastructure?
              </h2>
              <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                Join hundreds of successful UK businesses. Let's build a secure, scalable, and efficient technology roadmap together.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/contact" className="px-10 py-5 bg-white text-zinc-900 rounded-full font-bold hover:bg-zinc-100 transition-all">
                  Contact Us Today
                </Link>
                <Link to="/pricing" className="px-10 py-5 border border-zinc-700 text-white rounded-full font-bold hover:bg-zinc-800 transition-all">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
