import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Cloud, 
  Zap, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Building2,
  Globe,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    title: 'UK-Based Support',
    description: 'Our dedicated team is based in London, providing real-time support during your business hours.',
    icon: Globe,
  },
  {
    title: 'GDPR Compliant',
    description: 'We ensure all your data handling meets the strictest UK and EU data protection standards.',
    icon: ShieldCheck,
  },
  {
    title: 'Scalable Infrastructure',
    description: 'Cloud solutions that grow with your business, from startups to established enterprises.',
    icon: Cloud,
  },
  {
    title: 'Proactive Security',
    description: 'Advanced threat detection and 24/7 monitoring to keep your digital assets safe.',
    icon: Lock,
  },
];

const caseStudies = [
  {
    company: 'FinTech Solutions Ltd',
    result: '£45,000 Annual Savings',
    description: 'Optimised cloud infrastructure and automated deployment pipelines.',
    industry: 'Financial Services',
  },
  {
    company: 'Manchester Logistics',
    result: '30% Efficiency Increase',
    description: 'Implemented custom ERP integration and real-time tracking systems.',
    industry: 'Logistics',
  },
  {
    company: 'Bristol Health Group',
    result: 'Zero Security Breaches',
    description: 'Full security audit and implementation of multi-layer defense systems.',
    industry: 'Healthcare',
  },
];

const testimonials = [
  {
    name: 'Alistair Graham',
    role: 'CTO, London Retail Group',
    content: "Blessday House transformed our legacy systems into a modern, agile infrastructure. Their UK-based team is exceptional.",
  },
  {
    name: 'Sarah Jenkins',
    role: 'Operations Director, Midlands Manufacturing',
    content: "The level of professionalism and technical expertise is unmatched. They saved us over £20k in the first six months.",
  },
  {
    name: 'David Thompson',
    role: 'Founder, TechStart Bristol',
    content: "As a startup, we needed a partner who could scale with us. Blessday House provided the perfect foundation.",
  },
];

const industries = [
  'Financial Services', 'Healthcare', 'Manufacturing', 'Retail & E-commerce', 'Professional Services', 'Education'
];

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-100/30 blur-[120px] rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold tracking-wide uppercase mb-6">
                Leading UK IT Consultancy
              </span>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-navy-900 leading-[1.1]">
                Future-Proof Your <span className="text-brand-600">Business Technology</span>
              </h1>
              <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                Blessday House provides premium IT services, cybersecurity, and cloud solutions tailored for the unique needs of British enterprises.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link to="/contact" className="btn-primary text-lg px-8">
                Book a Free Audit
              </Link>
              <Link to="/services" className="btn-secondary text-lg px-8">
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900">
              Expert IT Solutions for the Modern British Enterprise
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              At Blessday House, we understand that technology is the backbone of your business. Our mission is to provide seamless, secure, and scalable IT services that allow you to focus on what you do best—growing your business.
            </p>
            <ul className="space-y-4">
              {['24/7 UK-Based Monitoring', 'Bespoke Software Development', 'Cloud Migration Experts'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/it-office/800/600" 
                alt="Modern IT Office" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-xl shadow-xl hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="bg-brand-600 p-3 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-navy-900">99.9%</p>
                  <p className="text-sm text-slate-500">Uptime Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900">Why Choose Blessday House?</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">We combine technical excellence with a deep understanding of the UK business landscape.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-900 rounded-3xl p-8 lg:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/20 blur-[100px] rounded-full" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">Industries We Serve Across the UK</h2>
              <p className="text-slate-300 text-lg mb-8">Our expertise spans across various sectors, ensuring tailored solutions that meet industry-specific regulations and challenges.</p>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry) => (
                  <div key={industry} className="flex items-center gap-2 text-slate-200">
                    <Building2 className="w-4 h-4 text-brand-500" />
                    <span className="text-sm font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img src="https://picsum.photos/seed/finance/400/400" alt="Finance" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img src="https://picsum.photos/seed/health/400/300" alt="Healthcare" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img src="https://picsum.photos/seed/factory/400/500" alt="Manufacturing" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img src="https://picsum.photos/seed/shop/400/400" alt="Retail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900">Measurable Results</h2>
          <p className="mt-4 text-slate-600">See how we've helped British businesses thrive through technology.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.company} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-brand-500 transition-colors">
              <div className="p-8">
                <p className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-2">{study.industry}</p>
                <h3 className="text-xl font-bold text-navy-900 mb-4">{study.company}</h3>
                <p className="text-slate-600 text-sm mb-6">{study.description}</p>
                <div className="pt-6 border-t border-slate-100">
                  <p className="text-2xl font-bold text-brand-600">{study.result}</p>
                  <p className="text-xs text-slate-500 mt-1">Impact Delivered</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-navy-950 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((t) => (
              <div key={t.name} className="space-y-6">
                <div className="flex gap-1 text-brand-500">
                  {[...Array(5)].map((_, i) => <Zap key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-lg text-slate-300 italic">"{t.content}"</p>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-600 rounded-3xl p-12 lg:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-display font-bold">Ready to Elevate Your IT Infrastructure?</h2>
            <p className="text-xl text-brand-50 max-w-2xl mx-auto">Join hundreds of British businesses that trust Blessday House for their technology needs.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-white text-brand-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-colors">
                Get a Free Consultation
              </Link>
              <Link to="/pricing" className="bg-brand-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-800 transition-colors">
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
