import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Zap, Users, Building2, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES, TESTIMONIALS, CASE_STUDIES } from '../constants';

export const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-zinc-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-emerald-700 uppercase bg-emerald-100 rounded-full">
                Trusted UK IT Partners
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
                Empowering British Business Through <span className="text-emerald-600">Secure IT</span>
              </h1>
              <p className="text-xl text-zinc-600 mb-10 leading-relaxed">
                From managed support to advanced cybersecurity, Community Recovery provides the technical foundation your business needs to thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-zinc-900 rounded-xl hover:bg-zinc-800 transition-all group"
                >
                  Book a Free Audit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-zinc-900 bg-white border border-zinc-200 rounded-xl hover:bg-zinc-50 transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-1/2 h-full bg-emerald-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">Why Choose Community Recovery?</h2>
              <p className="text-lg text-zinc-600 mb-8">
                We aren't just an IT company; we're your strategic technology partner. Based in the UK, we understand the unique challenges faced by British SMEs—from GDPR compliance to the need for rapid digital transformation.
              </p>
              <div className="space-y-4">
                {[
                  '24/7 UK-Based Technical Support',
                  'Enterprise-Grade Security for SMEs',
                  'Transparent, Fixed-Fee Monthly Pricing',
                  'Strategic IT Roadmapping & Consulting'
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span className="font-medium text-zinc-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-zinc-50 p-8 rounded-3xl">
                  <Shield className="w-10 h-10 text-emerald-600 mb-4" />
                  <h3 className="font-bold text-lg mb-2">Secure</h3>
                  <p className="text-sm text-zinc-500">GDPR compliant and Cyber Essentials focused.</p>
                </div>
                <div className="bg-zinc-900 p-8 rounded-3xl text-white">
                  <Zap className="w-10 h-10 text-emerald-400 mb-4" />
                  <h3 className="font-bold text-lg mb-2">Fast</h3>
                  <p className="text-sm text-zinc-400">Rapid response times and high-speed infrastructure.</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-emerald-600 p-8 rounded-3xl text-white">
                  <Users className="w-10 h-10 text-emerald-200 mb-4" />
                  <h3 className="font-bold text-lg mb-2">Personal</h3>
                  <p className="text-sm text-emerald-100">Dedicated account managers who know your business.</p>
                </div>
                <div className="bg-zinc-50 p-8 rounded-3xl">
                  <Building2 className="w-10 h-10 text-emerald-600 mb-4" />
                  <h3 className="font-bold text-lg mb-2">Scalable</h3>
                  <p className="text-sm text-zinc-500">Solutions that grow alongside your company.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-16">Industries We Support Across the UK</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Logistics', 'Manufacturing', 'Finance', 'Legal', 'Retail', 'Healthcare', 'Education', 'Non-Profit'].map((industry) => (
              <div key={industry} className="bg-white p-6 rounded-2xl border border-zinc-200 hover:border-emerald-500 transition-colors">
                <span className="font-semibold text-zinc-800">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">Measurable Results</h2>
              <p className="text-zinc-600">Real-world examples of how we've helped British businesses save money and increase efficiency.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study) => (
              <div key={study.title} className="bg-zinc-50 p-10 rounded-3xl border border-zinc-100">
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">{study.title}</h3>
                <div className="mb-6">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Client: {study.client}</span>
                </div>
                <div className="space-y-4 mb-8">
                  <p className="text-zinc-600"><strong className="text-zinc-900">Challenge:</strong> {study.challenge}</p>
                  <p className="text-zinc-600"><strong className="text-zinc-900">Solution:</strong> {study.solution}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-zinc-200">
                  <p className="text-emerald-700 font-bold text-lg">Result: {study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-zinc-400">Trusted by business leaders across the United Kingdom.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-zinc-800/50 p-8 rounded-3xl border border-zinc-700/50 backdrop-blur-sm">
                <Quote className="w-10 h-10 text-emerald-500 mb-6 opacity-50" />
                <p className="text-lg italic text-zinc-300 mb-8 leading-relaxed">"{t.content}"</p>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-emerald-500">{t.role}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/20 to-transparent pointer-events-none" />
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Secure Your Business Future?</h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Join hundreds of UK businesses that trust Community Recovery for their IT infrastructure and security.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-emerald-700 bg-white rounded-2xl hover:bg-emerald-50 transition-all shadow-xl shadow-emerald-900/20"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};
