import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Users, 
  Globe, 
  CheckCircle2,
  BarChart3,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6">
                <ShieldCheck className="w-4 h-4" />
                UK Managed IT Services
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
                Empowering British Business Through <span className="text-brand-600">Smarter IT</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                Walfinch Eastbourne provides enterprise-grade IT support, cybersecurity, and cloud solutions tailored for the UK market.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-200/50 flex items-center gap-2"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/it-office/800/800"
                  alt="Modern IT Office"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">99.9% Uptime</p>
                    <p className="text-xs text-slate-500">Guaranteed Service Level</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">Why Choose Walfinch?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We combine local East Sussex expertise with national-scale infrastructure to deliver unparalleled IT support.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Local UK Support",
                desc: "Our engineers are based in Eastbourne, providing rapid on-site and remote assistance across the UK."
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Cybersecurity First",
                desc: "We integrate advanced security protocols into every solution, ensuring your data stays protected and GDPR compliant."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Cloud Native",
                desc: "Modernizing your infrastructure with scalable Microsoft 365 and Azure solutions built for the future."
              }
            ].map((benefit, i) => (
              <div key={i} className="p-8 rounded-3xl border border-slate-100 hover:border-brand-200 hover:bg-brand-50/30 transition-all group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-100 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-8">Industries We <span className="text-brand-400">Empower</span></h2>
              <div className="space-y-6">
                {[
                  "Professional Services (Legal & Finance)",
                  "Healthcare & Private Clinics",
                  "Manufacturing & Logistics",
                  "Education & Non-Profits",
                  "Retail & E-commerce"
                ].map((industry, i) => (
                  <div key={i} className="flex items-center gap-4 text-lg font-medium">
                    <CheckCircle2 className="w-6 h-6 text-brand-400 shrink-0" />
                    {industry}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/legal/400/500" alt="Legal" className="rounded-2xl w-full aspect-[4/5] object-cover" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/health/400/300" alt="Health" className="rounded-2xl w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="https://picsum.photos/seed/factory/400/300" alt="Factory" className="rounded-2xl w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/retail/400/500" alt="Retail" className="rounded-2xl w-full aspect-[4/5] object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">Measurable Results</h2>
              <p className="text-slate-600">Real impact for real British businesses.</p>
            </div>
            <Link to="/services" className="text-brand-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View all services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Cloud Migration for Regional Law Firm",
                client: "Hastings Legal Partners",
                result: "£45,000 annual infrastructure savings",
                desc: "Successfully migrated 50+ staff to a secure Azure environment, improving remote work efficiency by 40%."
              },
              {
                title: "Cybersecurity Overhaul for Manufacturer",
                client: "Eastbourne Precision Engineering",
                result: "Zero security breaches in 24 months",
                desc: "Implemented multi-layered defense and staff training, reducing phishing vulnerability by 95%."
              }
            ].map((study, i) => (
              <div key={i} className="bg-slate-50 p-8 lg:p-12 rounded-3xl border border-slate-100">
                <div className="flex items-center gap-2 text-brand-600 font-bold text-sm mb-4">
                  <BarChart3 className="w-5 h-5" />
                  CASE STUDY
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{study.title}</h3>
                <p className="text-slate-500 text-sm mb-6">Client: {study.client}</p>
                <p className="text-slate-700 mb-8 leading-relaxed">{study.desc}</p>
                <div className="p-4 bg-white rounded-2xl border border-slate-200 inline-block">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Key Result</p>
                  <p className="text-xl font-bold text-emerald-600">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">Client Testimonials</h2>
            <p className="text-slate-600">What our partners say about us.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alistair Cook",
                role: "Managing Director",
                company: "Sussex Logistics Ltd",
                content: "Walfinch Eastbourne transformed our IT from a headache into a competitive advantage. Their response times are exceptional."
              },
              {
                name: "Sarah Jenkins",
                role: "Practice Manager",
                company: "South Coast Medical",
                content: "GDPR compliance was our biggest worry. Walfinch implemented a robust data protection strategy that gives us complete peace of mind."
              },
              {
                name: "Oliver Thompson",
                role: "Founder",
                company: "Brighton Creative Agency",
                content: "The transition to Microsoft 365 was seamless. We haven't had a single hour of downtime since Walfinch took over our managed services."
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <CheckCircle2 key={i} className="w-4 h-4 text-brand-500 fill-brand-500" />)}
                </div>
                <p className="text-slate-700 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-600 rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-900/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 relative z-10">Ready to Secure Your <br />Business Future?</h2>
            <p className="text-xl text-brand-100 mb-12 max-w-2xl mx-auto relative z-10">
              Join hundreds of UK businesses that trust Walfinch Eastbourne for their IT success.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Link
                to="/contact"
                className="bg-white text-brand-600 px-10 py-5 rounded-full font-bold hover:bg-brand-50 transition-all shadow-xl"
              >
                Book a Free Consultation
              </Link>
              <Link
                to="/pricing"
                className="bg-brand-700 text-white border border-brand-500 px-10 py-5 rounded-full font-bold hover:bg-brand-800 transition-all"
              >
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
