import { motion } from 'motion/react';
import { ChevronRight, Shield, Zap, Globe, Users, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Robust cybersecurity protocols designed for UK compliance standards.',
  },
  {
    icon: Zap,
    title: 'Rapid Response',
    description: 'Average response time of under 15 minutes for critical IT issues.',
  },
  {
    icon: Globe,
    title: 'Cloud Excellence',
    description: 'Seamless migration and management of cloud infrastructure.',
  },
];

const industries = [
  'Financial Services',
  'Healthcare & NHS',
  'Legal & Professional',
  'Manufacturing',
  'Education',
  'Retail & E-commerce',
];

const caseStudies = [
  {
    company: 'London Logistics Ltd',
    result: '£45,000 annual savings',
    description: 'Optimised server infrastructure and migrated to Azure cloud.',
  },
  {
    company: 'Manchester Legal Group',
    result: '99.99% Uptime achieved',
    description: 'Implemented disaster recovery and 24/7 managed support.',
  },
];

const testimonials = [
  {
    name: 'James Harrison',
    role: 'CTO, British Retail Corp',
    content: 'Sylvian Care transformed our digital infrastructure. Their proactive approach saved us thousands in potential downtime.',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Director, Thames Valley Health',
    content: 'Professional, reliable, and deeply knowledgeable about the UK IT landscape. Highly recommended.',
  },
];

export default function Home() {
  return (
    <div className="space-y-32 pb-20">
      {/* Hero Section */}
      <section className="relative px-6 pt-16 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Trusted IT Partner in the UK
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Next-Gen IT Solutions for <span className="text-indigo-600">British Business.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              From managed support to advanced cybersecurity, we provide the technical backbone your company needs to scale in the digital age.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center gap-2"
              >
                Book a Free Audit
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all"
              >
                View Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://picsum.photos/seed/it-office/800/800"
                alt="Modern IT Office"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 glass p-6 rounded-2xl shadow-xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Efficiency Boost</p>
                  <p className="text-xl font-bold">+42%</p>
                </div>
              </div>
              <p className="text-xs text-slate-500">Average productivity increase for our managed clients in 2025.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl font-bold">Why Sylvian Care?</h2>
          <p className="text-slate-600">We don't just fix computers; we build resilient digital ecosystems that drive business growth.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all space-y-6"
            >
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center">
                <benefit.icon className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-slate-900 py-32 px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">UK Industries We Serve</h2>
            <p className="text-slate-400 text-lg">Our expertise spans across diverse sectors, ensuring tailored solutions that meet specific regulatory and operational requirements.</p>
            <div className="grid grid-cols-2 gap-4">
              {industries.map((industry, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                  <span>{industry}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 rotate-3">
             <div className="space-y-4">
               <img src="https://picsum.photos/seed/finance/400/500" className="rounded-2xl shadow-2xl" alt="Finance" referrerPolicy="no-referrer" />
               <img src="https://picsum.photos/seed/health/400/300" className="rounded-2xl shadow-2xl" alt="Health" referrerPolicy="no-referrer" />
             </div>
             <div className="space-y-4 pt-12">
               <img src="https://picsum.photos/seed/legal/400/300" className="rounded-2xl shadow-2xl" alt="Legal" referrerPolicy="no-referrer" />
               <img src="https://picsum.photos/seed/factory/400/500" className="rounded-2xl shadow-2xl" alt="Factory" referrerPolicy="no-referrer" />
             </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Measurable Results</h2>
            <p className="text-slate-600">Real impact for real British businesses.</p>
          </div>
          <Link to="/services" className="text-indigo-600 font-bold flex items-center gap-2 group">
            Explore all services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-3xl bg-white border border-slate-100 p-8 hover:border-indigo-200 transition-all">
              <div className="space-y-4 relative z-10">
                <p className="text-indigo-600 font-bold text-sm uppercase tracking-wider">{study.company}</p>
                <h3 className="text-3xl font-bold">{study.result}</h3>
                <p className="text-slate-600">{study.description}</p>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <BarChart3 className="w-24 h-24" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-50 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm space-y-6">
                <p className="text-lg italic text-slate-700 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${t.name}`} alt={t.name} referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center text-white space-y-8 relative overflow-hidden shadow-2xl shadow-indigo-200">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Ready to Modernise Your <br /> IT Infrastructure?</h2>
          <p className="text-indigo-100 text-lg max-w-2xl mx-auto">Join hundreds of UK businesses that trust Sylvian Care for their technology needs. Let's build something great together.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-10 py-5 bg-white text-indigo-600 rounded-full font-bold hover:bg-indigo-50 transition-all shadow-xl"
            >
              Get a Free Consultation
            </Link>
            <Link
              to="/pricing"
              className="px-10 py-5 bg-indigo-500 text-white rounded-full font-bold hover:bg-indigo-400 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
