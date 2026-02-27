import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Users, BarChart3, Globe, CheckCircle2, Cpu } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Trusted IT Partner in the UK
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
              Intelligent IT Solutions for <span className="text-emerald-600">Modern Business.</span>
            </h1>
            <p className="text-xl text-zinc-600 mb-10 leading-relaxed">
              Thurrock provides enterprise-grade Managed IT, Cloud Infrastructure, and Cybersecurity services tailored for the UK's most ambitious companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="bg-zinc-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-zinc-200"
              >
                Explore Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full font-semibold hover:bg-zinc-50 transition-all flex items-center justify-center"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Stats/Overview */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Excellence in IT Management</h2>
              <p className="text-zinc-600 mb-8 leading-relaxed">
                We don't just fix computers; we build the technological foundation your business needs to scale. Based in London, we serve clients across the UK with a focus on reliability, security, and strategic growth.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-emerald-600 mb-2">99.9%</div>
                  <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Uptime Guaranteed</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-600 mb-2">15m</div>
                  <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Avg. Response Time</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-600 mb-2">250+</div>
                  <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">UK Clients Served</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-600 mb-2">£12M+</div>
                  <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Client Cost Savings</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
                  <Shield className="w-8 h-8 text-emerald-600 mb-4" />
                  <h3 className="font-bold mb-2">Secure</h3>
                  <p className="text-sm text-zinc-500">GDPR compliant and Cyber Essentials certified.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
                  <Zap className="w-8 h-8 text-emerald-600 mb-4" />
                  <h3 className="font-bold mb-2">Fast</h3>
                  <p className="text-sm text-zinc-500">Rapid deployment and instant remote support.</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
                  <Users className="w-8 h-8 text-emerald-600 mb-4" />
                  <h3 className="font-bold mb-2">Expert</h3>
                  <p className="text-sm text-zinc-500">Senior engineers with decades of experience.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
                  <BarChart3 className="w-8 h-8 text-emerald-600 mb-4" />
                  <h3 className="font-bold mb-2">Strategic</h3>
                  <p className="text-sm text-zinc-500">Technology aligned with your business goals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Industries We Empower</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Specialised IT solutions for diverse sectors across the United Kingdom.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Financial Services", icon: Globe },
            { name: "Legal & Professional", icon: Shield },
            { name: "Healthcare", icon: Zap },
            { name: "Manufacturing", icon: Cpu },
          ].map((industry) => (
            <div key={industry.name} className="flex flex-col items-center p-8 rounded-2xl bg-zinc-50 border border-black/5 hover:border-emerald-200 transition-colors group">
              <industry.icon className="w-10 h-10 text-zinc-400 group-hover:text-emerald-600 transition-colors mb-4" />
              <span className="font-semibold text-zinc-900">{industry.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Measurable Results</h2>
              <p className="text-zinc-400">
                Real-world impact for our British clients. We focus on ROI and efficiency.
              </p>
            </div>
            <Link to="/services" className="text-emerald-400 font-semibold flex items-center gap-2 hover:text-emerald-300 transition-colors">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-800/50 p-8 rounded-3xl border border-white/5">
              <div className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-4">Legal Firm Migration</div>
              <h3 className="text-2xl font-bold mb-4">Cloud Transition Saves £45k Annually</h3>
              <p className="text-zinc-400 mb-6">
                Migrated a 50-user law firm to a hybrid cloud environment, reducing hardware maintenance costs and improving remote access speeds by 40%.
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>ROI achieved in 7 months</span>
              </div>
            </div>
            <div className="bg-zinc-800/50 p-8 rounded-3xl border border-white/5">
              <div className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-4">Manufacturing Security</div>
              <h3 className="text-2xl font-bold mb-4">Zero Breach Record Post-Implementation</h3>
              <p className="text-zinc-400 mb-6">
                Deployed advanced EDR and employee training for a mid-sized manufacturer, preventing an estimated £120k in potential ransomware damages.
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>100% Compliance Score</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Alistair Graham", role: "CEO, Graham & Co", quote: "Thurrock transformed our IT from a headache into a competitive advantage. Their response times are unmatched." },
              { name: "Sarah Jenkins", role: "Operations Director, MedTech UK", quote: "Professional, knowledgeable, and genuinely invested in our success. The best IT partner we've ever had." },
              { name: "David Thompson", role: "Partner, Thompson Law", quote: "The transition to cloud was seamless. We haven't had a single minute of downtime since Thurrock took over." },
            ].map((t) => (
              <div key={t.name} className="p-8 rounded-2xl bg-white border border-black/5 shadow-sm">
                <p className="text-zinc-600 italic mb-6">"{t.quote}"</p>
                <div>
                  <div className="font-bold text-zinc-900">{t.name}</div>
                  <div className="text-sm text-zinc-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Future-Proof Your Business?</h2>
          <p className="text-emerald-50 text-xl mb-10 max-w-2xl mx-auto">
            Join hundreds of UK businesses that trust Thurrock for their IT needs. Let's build something great together.
          </p>
          <Link
            to="/contact"
            className="inline-flex bg-white text-emerald-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-xl"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};
