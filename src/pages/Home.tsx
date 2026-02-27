import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Zap, Users, BarChart3, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const BENEFITS = [
  {
    title: "24/7 Proactive Monitoring",
    description: "We spot issues before they become problems, ensuring 99.9% uptime for your business.",
    icon: Zap
  },
  {
    title: "Cybersecurity First",
    description: "Enterprise-grade protection tailored for UK SMEs, protecting your data and reputation.",
    icon: Shield
  },
  {
    title: "Local UK Experts",
    description: "Based in Wigan, our engineers understand the local business landscape and requirements.",
    icon: Users
  }
];

const CASE_STUDIES = [
  {
    client: "Lancashire Logistics Ltd",
    result: "£45,000 Annual Savings",
    description: "Optimised cloud infrastructure and automated backup systems reduced operational overheads.",
    industry: "Logistics"
  },
  {
    client: "North West Retail Group",
    result: "60% Faster Response",
    description: "Implemented a unified communication system across 12 branch locations.",
    industry: "Retail"
  }
];

const TESTIMONIALS = [
  {
    name: "Alistair Graham",
    role: "Managing Director, Graham & Sons",
    content: "Wigan IT transformed our legacy systems into a modern powerhouse. Their support is second to none."
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Manager, Peak Health",
    content: "Reliable, professional, and genuinely helpful. They feel like an extension of our own team."
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-primary">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full border border-accent/20">
                Wigan's Premier IT Partner
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
                Future-Proof Your <span className="text-accent">Business Technology</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                We provide managed IT services, cybersecurity, and cloud solutions 
                that empower UK businesses to scale securely and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-accent hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group"
                >
                  Explore Services
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all text-center"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://picsum.photos/seed/it-office/800/600"
                alt="Modern IT Office"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-accent p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold text-white mb-1">15+</p>
                <p className="text-sm font-medium text-white/80 uppercase tracking-wider">Years of Excellence</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Dedicated IT Support for the Modern British Enterprise
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At Wigan IT, we don't just fix computers; we build resilient digital 
                foundations. Our team of certified engineers works tirelessly to 
                ensure your technology aligns with your commercial goals, 
                minimising downtime and maximising productivity.
              </p>
              <ul className="space-y-4 mb-10">
                {['Managed IT Support', 'Cloud Migration', 'Cybersecurity Audits', 'Disaster Recovery'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="text-primary font-bold flex items-center gap-2 hover:text-accent transition-colors">
                Learn more about our mission <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Why Choose Wigan IT?</h2>
            <p className="text-slate-600">We combine technical brilliance with a human touch to deliver results that matter.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100"
              >
                <div className="bg-slate-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Measurable Success</h2>
              <p className="text-slate-400">Real results delivered to our partners across the United Kingdom.</p>
            </div>
            <Link to="/services" className="bg-accent text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-600 transition-colors">
              View All Services
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">{study.industry}</span>
                  <BarChart3 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{study.client}</h3>
                <p className="text-3xl font-bold text-accent mb-4">{study.result}</p>
                <p className="text-slate-400 leading-relaxed">{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Trusted by UK Leaders</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="relative p-10 bg-slate-50 rounded-3xl">
                <Quote className="absolute top-6 right-6 h-12 w-12 text-slate-200" />
                <p className="text-lg text-slate-700 italic mb-8 relative z-10">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="bg-accent rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Secure Your Digital Future?</h2>
              <p className="text-white/90 text-lg mb-10">
                Join hundreds of Wigan businesses that trust us with their IT infrastructure. 
                Let's talk about your next project.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl"
              >
                Contact Our Team Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
