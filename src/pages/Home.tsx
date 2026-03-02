import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Server, Shield, Users, BarChart3, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="text-sm font-medium text-indigo-300">Manchester's Premier IT Partner</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8 leading-tight">
              Enterprise IT Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">British Business</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              We deliver robust, secure, and scalable technology infrastructure. From cloud migration to 24/7 support, we keep Manchester working.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/25">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Strategic IT for the Modern UK Workplace
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                At Visiting Angels Manchester West, we don't just fix computers; we engineer business continuity. Our focus is on proactive management, ensuring your systems are resilient against threats and optimised for performance.
              </p>
              <ul className="space-y-4">
                {[
                  'GDPR Compliant Data Handling',
                  '24/7 UK-Based Support Desk',
                  'Proactive Threat Monitoring',
                  'Cloud-First Strategy Implementation'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1553877616-15280ed54729?q=80&w=2070&auto=format&fit=crop" 
                  alt="Modern IT Office in Manchester" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-slate-900 p-8 rounded-xl shadow-xl max-w-xs">
                <div className="text-4xl font-bold text-indigo-400 mb-2">99.9%</div>
                <div className="text-sm text-slate-300">Uptime guarantee for all managed service clients across the North West.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Why Partner With Us?</h2>
            <p className="text-slate-600">We bring enterprise-grade technology to SMEs across Manchester and the wider UK.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Cyber Security First",
                desc: "Bank-grade encryption and threat detection to protect your proprietary data."
              },
              {
                icon: Server,
                title: "Reliable Infrastructure",
                desc: "Robust network solutions designed to handle high-bandwidth modern workflows."
              },
              {
                icon: Users,
                title: "Dedicated Support",
                desc: "No call centres abroad. Speak directly to Manchester-based engineers."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Finance & Fintech', 'Legal Services', 'Healthcare', 'Manufacturing', 'Retail & E-commerce', 'Education', 'Real Estate', 'Logistics'].map((industry) => (
              <div key={industry} className="p-6 bg-slate-50 rounded-xl text-center font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors cursor-default">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-indigo-400 font-medium mb-4">CASE STUDY</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Saving £45,000 annually for a Manchester Logistics Firm</h2>
              <p className="text-slate-300 mb-8 text-lg">
                By migrating their legacy on-premise servers to a hybrid cloud solution, we reduced downtime by 98% and cut hardware maintenance costs significantly.
              </p>
              <div className="grid grid-cols-3 gap-8 border-t border-slate-800 pt-8">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">£45k</div>
                  <div className="text-sm text-slate-400">Annual Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">98%</div>
                  <div className="text-sm text-slate-400">Less Downtime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">3x</div>
                  <div className="text-sm text-slate-400">Faster Backups</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <blockquote className="italic text-lg text-slate-300 mb-6">
                "Visiting Angels Manchester West transformed our IT infrastructure. We went from constant fire-fighting to a smooth, silent operation. The ROI was evident within three months."
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center font-bold text-white mr-3">
                  JD
                </div>
                <div>
                  <div className="font-bold text-white">James Davies</div>
                  <div className="text-sm text-indigo-300">Operations Director, SwiftLogistics UK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Ready to upgrade your IT infrastructure?</h2>
          <p className="text-indigo-100 text-lg mb-10">
            Join the leading Manchester businesses trusting us with their technology.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-indigo-600 bg-white rounded-lg hover:bg-indigo-50 transition-all">
            Get Your Free Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
