import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Cloud, 
  Server, 
  Cpu, 
  Headphones, 
  Code, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Globe, 
  Zap,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-48">
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-200/30 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-100/20 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-brand-50 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span>Trusted UK IT Partner</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-8">
            Empowering British Business Through <span className="text-brand-600">Innovation</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
            Howse Garden provides enterprise-grade IT services, cybersecurity, and cloud solutions tailored for the UK's most ambitious companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/services" className="bg-brand-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-700 transition-all shadow-xl shadow-brand-600/25 flex items-center justify-center space-x-2">
              <span>Explore Services</span>
              <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center">
              Book a Consultation
            </Link>
          </div>
          
          <div className="mt-12 flex items-center space-x-8 opacity-60 grayscale">
            <div className="flex items-center space-x-2">
              <Shield size={24} />
              <span className="font-bold">ISO 27001</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users size={24} />
              <span className="font-bold">Cyber Essentials</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe size={24} />
              <span className="font-bold">GDPR Ready</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/it-office/800/600" 
              alt="Modern IT Office" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl max-w-[240px]">
            <div className="flex items-center space-x-1 text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-sm font-medium text-slate-900">"The most reliable IT partner we've ever worked with in London."</p>
            <p className="text-xs text-slate-500 mt-2">— James Wilson, CEO of TechFlow UK</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Cyber Security",
      desc: "Advanced threat protection and 24/7 monitoring to keep your business safe."
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      desc: "Seamless migration and management of Azure, AWS, and private cloud."
    },
    {
      icon: Headphones,
      title: "Managed Support",
      desc: "Unlimited remote and onsite support with guaranteed response times."
    },
    {
      icon: Server,
      title: "Infrastructure",
      desc: "Scalable server and networking solutions built for performance."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Why Choose Howse Garden?</h2>
          <p className="text-lg text-slate-600">We combine technical excellence with a deep understanding of the British business landscape.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:bg-white hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mb-6">
                <f.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => {
  const cases = [
    {
      title: "Financial Sector Transformation",
      industry: "London Fintech",
      result: "£250k Annual Savings",
      desc: "Complete cloud migration and security overhaul for a growing fintech firm."
    },
    {
      title: "Retail Infrastructure Scale",
      industry: "E-commerce",
      result: "99.99% Uptime Achieved",
      desc: "Optimising server infrastructure for a national UK retailer during peak seasons."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-display font-bold mb-6">Real Results for Real Businesses</h2>
            <p className="text-slate-400 text-lg">We don't just provide services; we deliver measurable business value across the UK.</p>
          </div>
          <Link to="/services" className="text-brand-400 font-bold flex items-center space-x-2 hover:text-brand-300 transition-colors">
            <span>View all case studies</span>
            <ArrowRight size={20} />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden bg-slate-800 border border-slate-700 p-8 md:p-12">
              <div className="mb-8">
                <span className="text-brand-400 text-sm font-bold uppercase tracking-widest">{c.industry}</span>
                <h3 className="text-3xl font-display font-bold mt-2 mb-4">{c.title}</h3>
                <p className="text-slate-400 leading-relaxed">{c.desc}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-brand-600/20 text-brand-400 px-6 py-3 rounded-xl font-bold text-xl border border-brand-600/30">
                  {c.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Thompson",
      role: "Operations Director",
      company: "Midlands Logistics",
      content: "Howse Garden transformed our legacy systems into a modern, agile infrastructure. Their support team is second to none."
    },
    {
      name: "David Miller",
      role: "CTO",
      company: "Bristol Creative",
      content: "Security was our biggest concern. Their Cyber Essentials audit and subsequent implementation gave us complete peace of mind."
    },
    {
      name: "Robert Hughes",
      role: "Managing Director",
      company: "Manchester Legal",
      content: "Professional, knowledgeable, and always available. They feel like an extension of our own team rather than a third party."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-slate-900">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 italic mb-8 leading-relaxed">"{t.content}"</p>
              <div>
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}, {t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-brand-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-white rounded-full" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Ready to Modernise Your IT Infrastructure?</h2>
          <p className="text-xl text-brand-100 mb-12">Join hundreds of UK businesses who trust Howse Garden for their technology needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-brand-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-brand-50 transition-all">
              Contact Us Today
            </Link>
            <Link to="/pricing" className="bg-brand-700 text-white border border-brand-500 px-10 py-4 rounded-full text-lg font-bold hover:bg-brand-800 transition-all">
              View Pricing Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CaseStudies />
      <Testimonials />
      <CTA />
    </>
  );
}
