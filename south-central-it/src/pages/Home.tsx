import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Globe,
  Quote
} from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: <Shield className="w-6 h-6 text-brand-600" />,
    title: "Enterprise Security",
    description: "Cyber Essentials Plus certified protection for your critical business data."
  },
  {
    icon: <Zap className="w-6 h-6 text-brand-600" />,
    title: "Proactive Support",
    description: "24/7 monitoring and rapid response times to keep your operations running."
  },
  {
    icon: <Globe className="w-6 h-6 text-brand-600" />,
    title: "Cloud Experts",
    description: "Seamless migration and management for Azure, AWS, and Google Cloud."
  }
];

const industries = [
  "Financial Services", "Legal & Professional", "Healthcare", "Manufacturing", "Education", "Retail"
];

const caseStudies = [
  {
    title: "Legal Firm Digital Transformation",
    result: "£45k Annual Savings",
    description: "Migrated a 50-person law firm to a secure cloud environment, reducing hardware overhead."
  },
  {
    title: "Manufacturing IoT Integration",
    result: "22% Efficiency Increase",
    description: "Implemented real-time monitoring across three UK production sites."
  }
];

const testimonials = [
  {
    name: "James Harrington",
    role: "CTO, London Finance Group",
    content: "South Central IT transformed our infrastructure. Their response times are unmatched in the UK market."
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Director, Midlands Health",
    content: "A truly professional partner. They understand the compliance needs of the healthcare sector perfectly."
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-600 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-brand-400 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/4" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
                </span>
                Trusted IT Partner for UK SMEs
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-slate-900 leading-[1.1] mb-6">
                Next-Gen IT <br />
                <span className="text-brand-600">Solutions</span> for <br />
                Modern Business.
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
                We provide managed IT services, cybersecurity, and cloud strategy that drive growth and protect your digital assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-xl hover:shadow-brand-200 flex items-center justify-center gap-2">
                  Book a Free Audit <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/services" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center">
                  Explore Services
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <BarChart3 className="w-8 h-8 text-brand-600 mb-4" />
                    <div className="text-3xl font-bold text-slate-900 tracking-tight">99.9%</div>
                    <div className="text-sm text-slate-500 font-medium">Uptime SLA</div>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <Users className="w-8 h-8 text-brand-600 mb-4" />
                    <div className="text-3xl font-bold text-slate-900 tracking-tight">15m</div>
                    <div className="text-sm text-slate-500 font-medium">Avg Response</div>
                  </div>
                  <div className="col-span-2 p-6 bg-brand-600 rounded-2xl text-white">
                    <div className="flex items-center justify-between mb-4">
                      <Shield className="w-8 h-8" />
                      <div className="text-xs font-bold bg-white/20 px-2 py-1 rounded">ACTIVE PROTECTION</div>
                    </div>
                    <div className="text-lg font-bold mb-1">Cyber Threat Shield</div>
                    <div className="text-sm text-white/80">Real-time monitoring enabled across all endpoints.</div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-100 rounded-full -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate-200 rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 mb-4">Why South Central IT?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We combine technical excellence with a deep understanding of the UK business landscape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">Supporting Key UK Industries</h2>
              <p className="text-lg text-slate-400 mb-10">
                Our expertise spans multiple sectors, ensuring compliance and performance tailored to your specific field.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-brand-500" />
                    <span className="font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {caseStudies.map((study, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-brand-400 font-bold text-2xl mb-2">{study.result}</div>
                  <h4 className="text-xl font-bold mb-3">{study.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{study.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {testimonials.map((t, idx) => (
              <div key={idx} className="relative p-10 rounded-3xl bg-slate-50 border border-slate-100">
                <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-100" />
                <p className="text-xl text-slate-700 italic mb-8 relative z-10 leading-relaxed">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-600 flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-600 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-display font-bold mb-8 relative z-10">
              Ready to Secure Your <br className="hidden lg:block" /> Digital Future?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto relative z-10">
              Join hundreds of UK businesses that trust South Central IT for their technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link to="/contact" className="bg-white text-brand-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all shadow-lg">
                Get a Custom Quote
              </Link>
              <Link to="/contact" className="bg-brand-700 text-white border border-brand-500 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-brand-800 transition-all">
                Speak to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
