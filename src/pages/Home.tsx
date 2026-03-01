import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Cloud, 
  Cpu, 
  Headset, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  TrendingUp,
  Building2,
  Stethoscope,
  Scale,
  ShoppingBag
} from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Client Satisfaction', value: '99%' },
  { label: 'Uptime Guarantee', value: '99.9%' },
  { label: 'Average Response', value: '15m' },
  { label: 'Projects Delivered', value: '500+' },
];

const benefits = [
  {
    title: 'UK-Based Support',
    description: 'Our entire support team is based in the UK, ensuring cultural alignment and local expertise.',
    icon: Headset,
  },
  {
    title: 'Enterprise Security',
    description: 'We implement military-grade cybersecurity protocols to protect your sensitive business data.',
    icon: ShieldCheck,
  },
  {
    title: 'Scalable Solutions',
    description: 'Our cloud-first approach allows your IT infrastructure to grow seamlessly with your business.',
    icon: Cloud,
  },
  {
    title: 'Strategic Partnership',
    description: 'We don\'t just fix computers; we align technology with your long-term business goals.',
    icon: TrendingUp,
  },
];

const industries = [
  { name: 'Legal Services', icon: Scale },
  { name: 'Healthcare', icon: Stethoscope },
  { name: 'Finance', icon: Building2 },
  { name: 'Retail', icon: ShoppingBag },
];

const caseStudies = [
  {
    company: 'London Legal Partners',
    result: '£45,000 Annual Savings',
    description: 'Migrated legacy on-premise servers to a secure private cloud, reducing maintenance costs by 40%.',
  },
  {
    company: 'Midlands Manufacturing',
    result: 'Zero Downtime in 24 Months',
    description: 'Implemented a robust disaster recovery plan and 24/7 monitoring for a multi-site factory operation.',
  },
];

const testimonials = [
  {
    name: 'James Harrison',
    role: 'Managing Director',
    company: 'Harrison & Sons',
    content: 'Cornwall-Place transformed our chaotic IT setup into a streamlined, secure environment. Their response times are exceptional.',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Operations Manager',
    company: 'Vanguard Logistics',
    content: 'The peace of mind we have knowing our data is protected by their cybersecurity team is worth every penny. Highly recommended.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary-500/10 text-primary-400 text-sm font-bold mb-6 border border-primary-500/20">
                UK's Leading IT Managed Services
              </span>
              <h1 className="text-5xl md:text-7xl text-white mb-8 leading-[1.1]">
                Future-Proof Your <span className="text-primary-500">British Business</span> with Smart IT.
              </h1>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                We provide comprehensive IT support, cybersecurity, and cloud consultancy tailored for the unique needs of UK enterprises. Reliable, secure, and always local.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all flex items-center justify-center gap-2"
                >
                  Book a Free Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white/10 text-white backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all text-center"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-800 border-y border-slate-700">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl mb-6">Why Choose Cornwall-Place?</h2>
            <p className="text-lg text-slate-600">
              We combine deep technical expertise with a commitment to personal service, ensuring your technology works as hard as you do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl mb-8">Specialised IT for UK Industries</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Every sector has its own challenges. We've developed industry-specific IT frameworks that address compliance, security, and operational needs for Britain's key sectors.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {industries.map((industry, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary-600 shadow-sm">
                      <industry.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-slate-700">{industry.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 gap-6">
              {caseStudies.map((study, idx) => (
                <div key={idx} className="bg-slate-900 p-8 rounded-3xl text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <TrendingUp className="w-24 h-24" />
                  </div>
                  <div className="relative z-10">
                    <div className="text-primary-400 font-bold mb-2">{study.company}</div>
                    <h3 className="text-2xl mb-4">{study.result}</h3>
                    <p className="text-slate-400 mb-6">{study.description}</p>
                    <Link to="/services" className="text-sm font-bold flex items-center gap-2 hover:text-primary-400 transition-colors">
                      Read Full Case Study <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl text-white mb-6">Trusted by British Leaders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-xl relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center text-white text-4xl font-serif">
                  "
                </div>
                <p className="text-lg text-slate-700 italic mb-8 leading-relaxed">
                  {t.content}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-primary-600">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-transparent opacity-50"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl text-white mb-8">Ready to Optimise Your IT?</h2>
              <p className="text-xl text-slate-400 mb-12">
                Join hundreds of UK businesses that trust Cornwall-Place for their technology needs. Let's build something great together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="bg-primary-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/30"
                >
                  Schedule a Consultation
                </Link>
                <Link
                  to="/pricing"
                  className="bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-100 transition-all"
                >
                  View Pricing Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
