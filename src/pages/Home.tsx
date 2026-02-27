import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Server, Shield, Code, BarChart, Users, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Strategic IT Solutions for <span className="text-indigo-400">Modern UK Businesses</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-slate-300 mb-8 leading-relaxed">
              Swanton Community Services Suffolk delivers enterprise-grade technology infrastructure, cybersecurity, and digital transformation services tailored for the British market.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-indigo-900/20">
                Request a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-lg font-semibold transition-colors backdrop-blur-sm">
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Empowering Growth Through Technology</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Based in Suffolk, we understand the unique challenges faced by UK businesses today. From navigating GDPR compliance to optimizing remote work infrastructure, our team of certified experts provides end-to-end IT management.
              </p>
              <ul className="space-y-4">
                {[
                  '24/7 UK-based Support Desk',
                  'Cyber Essentials Plus Certified',
                  'Proactive Network Monitoring',
                  'Strategic IT Consultancy'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-100 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1553877615-30c7316c155d?q=80&w=2070&auto=format&fit=crop" 
                alt="IT Team Collaboration" 
                className="relative rounded-xl shadow-xl w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Partner With Us?</h2>
            <p className="text-slate-600">We deliver measurable value through robust technology frameworks.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Enhanced Security',
                desc: 'Bank-grade encryption and threat detection to protect your sensitive business data.'
              },
              {
                icon: BarChart,
                title: 'Cost Efficiency',
                desc: 'Predictable monthly pricing models that reduce your capital expenditure.'
              },
              {
                icon: Server,
                title: '99.9% Uptime',
                desc: 'Redundant infrastructure ensuring your business operations never stop.'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Building2, name: 'Finance & Legal' },
              { icon: Users, name: 'Healthcare' },
              { icon: Code, name: 'Technology' },
              { icon: Server, name: 'Manufacturing' }
            ].map((industry, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:bg-slate-800 transition-colors">
                <industry.icon className="w-10 h-10 text-indigo-400 mb-4" />
                <span className="font-semibold">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Proven Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
              <div className="p-8">
                <div className="text-sm font-bold text-indigo-600 mb-2 uppercase tracking-wide">Financial Services</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Cloud Migration for London Fintech</h3>
                <p className="text-slate-600 mb-6">Migrated legacy infrastructure to a secure hybrid cloud environment, resulting in a 40% reduction in operational costs.</p>
                <div className="flex items-center gap-6 border-t border-slate-200 pt-6">
                  <div>
                    <div className="text-3xl font-bold text-slate-900">£120k</div>
                    <div className="text-sm text-slate-500">Annual Savings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900">3x</div>
                    <div className="text-sm text-slate-500">Deployment Speed</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
              <div className="p-8">
                <div className="text-sm font-bold text-indigo-600 mb-2 uppercase tracking-wide">Healthcare</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">NHS Trust Cybersecurity Overhaul</h3>
                <p className="text-slate-600 mb-6">Implemented advanced threat detection and staff training across 5 locations in East Anglia.</p>
                <div className="flex items-center gap-6 border-t border-slate-200 pt-6">
                  <div>
                    <div className="text-3xl font-bold text-slate-900">100%</div>
                    <div className="text-sm text-slate-500">Compliance Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900">£45k</div>
                    <div className="text-sm text-slate-500">Risk Mitigation Value</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Swanton's team transformed our IT infrastructure. Their response time is incredible.",
                author: "James Alistair",
                role: "Director, Alistair & Co. Solicitors"
              },
              {
                quote: "Finally, an IT partner that speaks plain English and delivers on promises.",
                author: "Sarah Penrose",
                role: "Operations Manager, Suffolk Logistics"
              },
              {
                quote: "The cybersecurity audit was an eye-opener. We feel much safer now.",
                author: "David Hemmings",
                role: "CEO, TechFlow UK"
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex text-indigo-500 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6">"{t.quote}"</p>
                <div>
                  <div className="font-bold text-slate-900">{t.author}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Optimise Your Business IT?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Book a free 30-minute consultation with our Suffolk-based experts today.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-indigo-200">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
