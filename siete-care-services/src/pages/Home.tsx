import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Cloud, 
  Headphones, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Building2, 
  Stethoscope, 
  Scale, 
  ShoppingBag, 
  Briefcase 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';

const BENEFITS = [
  {
    title: '24/7 UK Support',
    description: 'Round-the-clock monitoring and support from our Sheffield-based technical operations centre.',
    icon: Headphones,
  },
  {
    title: 'Cybersecurity First',
    description: 'Enterprise-grade security protocols integrated into every solution we deploy.',
    icon: ShieldCheck,
  },
  {
    title: 'Cloud Optimization',
    description: 'Maximize performance and minimize costs with our tailored cloud infrastructure strategies.',
    icon: Cloud,
  },
  {
    title: 'Rapid Deployment',
    description: 'Agile implementation processes that get your systems up and running without delay.',
    icon: Zap,
  },
];

const INDUSTRIES = [
  { name: 'Healthcare & Care Homes', icon: Stethoscope },
  { name: 'Legal & Professional Services', icon: Scale },
  { name: 'Manufacturing & Logistics', icon: Building2 },
  { name: 'Retail & E-commerce', icon: ShoppingBag },
  { name: 'Finance & Insurance', icon: Briefcase },
];

const CASE_STUDIES = [
  {
    client: 'Midlands Logistics Ltd',
    result: '£45,000 annual savings',
    description: 'Optimized legacy server infrastructure and migrated to a hybrid cloud model.',
  },
  {
    client: 'Yorkshire Care Group',
    result: '99.99% Uptime achieved',
    description: 'Implemented a robust disaster recovery plan and 24/7 managed support.',
  },
  {
    client: 'London Legal Partners',
    result: 'Zero security breaches',
    description: 'Deployed advanced endpoint protection and employee security awareness training.',
  },
];

const TESTIMONIALS = [
  {
    name: 'Alistair Graham',
    role: 'Operations Director, Graham & Sons',
    content: "Siete Care transformed our IT from a constant headache into a strategic asset. Their UK-based team is incredibly responsive and knowledgeable.",
  },
  {
    name: 'Sarah Jenkins',
    role: 'CEO, Bright Futures Care',
    content: "The level of professionalism and technical expertise Siete Care brings is unmatched. They truly understand the specific needs of UK businesses.",
  },
  {
    name: 'David Thompson',
    role: 'IT Manager, Northern Tech',
    content: "Switching to Siete Care's managed services was the best decision we made this year. Our systems are faster, more secure, and more reliable.",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#4f46e5_0%,transparent_50%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
                Trusted UK IT Partner
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Empowering Your <br />
                <span className="text-indigo-600">Digital Future</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Siete Care Services provides world-class managed IT support, cybersecurity, and cloud solutions tailored for British businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
                >
                  Our Services <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="https://picsum.photos/seed/it-office/800/600"
                  alt="Modern IT Office"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-100 rounded-full blur-3xl opacity-60 z-0" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-60 z-0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* IT Focus Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Strategic IT Solutions for Modern Enterprises</h2>
            <p className="text-lg text-slate-600">
              We don't just fix computers; we build resilient, scalable technology foundations that drive business growth and operational excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Specialised IT Support Across UK Industries</h2>
              <p className="text-slate-400 text-lg mb-8">
                Every sector has unique challenges. We provide bespoke IT strategies that address the specific regulatory and operational requirements of your industry.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {INDUSTRIES.map((industry) => (
                  <div key={industry.name} className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                    <industry.icon className="w-6 h-6 text-indigo-400" />
                    <span className="font-medium">{industry.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/healthcare/400/300" alt="Healthcare" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/legal/400/300" alt="Legal" className="rounded-2xl shadow-lg mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Measurable Results</h2>
              <p className="text-slate-600">Real impact for our British clients.</p>
            </div>
            <Link to="/services" className="text-indigo-600 font-semibold flex items-center gap-2 hover:underline">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study) => (
              <div key={study.client} className="group relative bg-slate-50 p-8 rounded-3xl border border-slate-100 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <TrendingUp className="w-24 h-24 text-indigo-600" />
                </div>
                <h4 className="text-indigo-600 font-bold text-2xl mb-2">{study.result}</h4>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{study.client}</h3>
                <p className="text-slate-600 relative z-10">{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 italic text-slate-600 relative">
                <div className="mb-6 text-indigo-600">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="mb-8">"{t.content}"</p>
                <div className="not-italic">
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Elevate Your IT Infrastructure?</h2>
          <p className="text-indigo-100 text-xl mb-10">
            Join hundreds of UK businesses that trust Siete Care Services for their technology needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl"
          >
            Get a Free IT Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
