import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Zap, Users, Building2, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, CASE_STUDIES } from '../constants';
import ServiceCard from '../components/ServiceCard';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wider uppercase mb-6">
                Premier UK IT Solutions
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-8 leading-[1.1]">
                Intelligent IT for the <span className="text-brand-secondary italic">Modern British Enterprise</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Swanton IT provides managed support, cybersecurity, and cloud strategy tailored for UK businesses. We handle the tech, so you can focus on growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
                  Book a Free Audit <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="btn-outline w-full sm:w-auto">
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100/30 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-100/50 blur-[120px] rounded-full" />
        </div>
      </section>

      {/* Stats/Benefits Bar */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Uptime Guarantee', value: '99.9%', icon: Zap },
              { label: 'Security Compliance', value: 'GDPR', icon: Shield },
              { label: 'Expert Engineers', value: '50+', icon: Users },
              { label: 'UK Support', value: '24/7', icon: Building2 },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-secondary shadow-sm">
                  <stat.icon size={24} />
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Comprehensive IT Services for Every Business Stage
              </h2>
              <p className="text-slate-600">
                From startups requiring initial setup to established firms needing complex cloud infrastructure, our UK-based team delivers excellence at every level.
              </p>
            </div>
            <Link to="/services" className="text-brand-secondary font-bold flex items-center gap-2 hover:underline">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Industries We Empower</h2>
            <p className="text-slate-400">
              We specialise in sectors with high regulatory and performance requirements across the United Kingdom.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'Legal Services', 'Manufacturing', 'Finance & FinTech', 
              'Healthcare', 'Professional Services', 'Education'
            ].map((industry, i) => (
              <div key={i} className="p-6 rounded-xl border border-slate-800 bg-slate-800/50 text-center hover:border-brand-secondary transition-colors">
                <span className="text-sm font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center">Measurable Results for Our Clients</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {CASE_STUDIES.map((study, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full">
                <div className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-4">{study.industry}</div>
                <h3 className="text-2xl font-display font-bold mb-6">{study.title}</h3>
                <div className="space-y-6 flex-grow">
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase mb-2">The Challenge</h4>
                    <p className="text-slate-600 italic">"{study.challenge}"</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase mb-2">Our Solution</h4>
                    <p className="text-slate-600">{study.solution}</p>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium uppercase">Key Result</div>
                      <div className="text-lg font-bold text-slate-900">{study.result}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Trusted by British Leaders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 relative">
                <Quote className="absolute top-6 right-6 text-slate-200" size={40} />
                <p className="text-slate-700 mb-8 relative z-10 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200" />
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-xs text-slate-500">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-brand-primary rounded-[2rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Ready to Optimise Your IT Infrastructure?</h2>
              <p className="text-xl text-slate-300 mb-10">
                Join hundreds of UK businesses that trust Swanton IT for their technical excellence and security.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="btn-secondary w-full sm:w-auto">
                  Get a Free Consultation
                </Link>
                <Link to="/pricing" className="text-white font-medium hover:underline">
                  View Pricing Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
