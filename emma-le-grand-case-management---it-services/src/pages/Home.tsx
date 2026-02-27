import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Zap, Users, BarChart3, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-slate-50">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-emerald blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-navy blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm mb-6">
                <span className="w-2 h-2 bg-brand-emerald rounded-full animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Leading UK IT Consultancy</span>
              </div>
              <h1 className="text-5xl lg:text-7xl mb-6 leading-[1.1]">
                Empowering British <span className="text-brand-emerald italic">Enterprise</span> through Intelligent IT.
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
                Emma Le Grand Case Management provides world-class managed IT services, cybersecurity, and bespoke software solutions tailored for the UK's most ambitious organisations.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="btn-primary flex items-center justify-center group">
                  Book a Consultation
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/services" className="btn-secondary flex items-center justify-center">
                  Explore Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://picsum.photos/seed/it-office/800/600" 
                  alt="Modern UK IT Office" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 glass-card p-6 rounded-xl max-w-[240px]">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-brand-emerald/10 rounded-lg">
                    <Shield className="text-brand-emerald w-5 h-5" />
                  </div>
                  <span className="font-bold text-sm">Cyber Essentials+</span>
                </div>
                <p className="text-xs text-slate-500">Fully certified UK government standard security for your peace of mind.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl mb-4">Why Choose Emma Le Grand?</h2>
            <p className="text-slate-500">We combine British engineering excellence with cutting-edge global technology to deliver results that matter.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Rapid Response", desc: "Our UK-based helpdesk guarantees a 15-minute response time for critical issues." },
              { icon: Users, title: "Dedicated Experts", desc: "Every client is assigned a senior IT strategist with over 10 years of industry experience." },
              { icon: BarChart3, title: "Measurable ROI", desc: "We focus on technology that drives profit, reducing operational costs by an average of 22%." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl border border-slate-100 hover:border-brand-emerald/20 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="text-brand-navy w-6 h-6" />
                </div>
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl mb-8 leading-tight">Specialised IT Solutions for <span className="text-brand-emerald">UK Industries</span></h2>
              <div className="space-y-6">
                {[
                  { title: "Legal & Professional Services", desc: "Secure case management and document automation for top-tier law firms." },
                  { title: "Healthcare & NHS Partners", desc: "GDPR and IG compliant infrastructure for private clinics and health tech." },
                  { title: "Financial Services", desc: "FCA-compliant security frameworks and high-frequency trading support." },
                  { title: "Manufacturing & Logistics", desc: "IoT integration and supply chain visibility solutions for UK industry." }
                ].map((industry, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <CheckCircle2 className="text-brand-emerald w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">{industry.title}</h4>
                      <p className="text-slate-400 text-sm">{industry.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/legal/400/500" alt="Legal IT" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/health/400/500" alt="Health IT" className="rounded-2xl shadow-lg mt-12" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
            <div className="max-w-2xl">
              <h2 className="text-4xl mb-4">Success Stories</h2>
              <p className="text-slate-500">Real results delivered for our UK partners through strategic IT implementation.</p>
            </div>
            <Link to="/services" className="text-brand-navy font-bold flex items-center hover:text-brand-emerald transition-colors">
              View all services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                client: "London Legal Group",
                result: "£145,000 Annual Savings",
                desc: "Migrated legacy on-premise servers to a secure private cloud, reducing downtime by 99.9% and slashing hardware costs.",
                img: "https://picsum.photos/seed/case1/600/400"
              },
              {
                client: "Midlands Manufacturing",
                result: "35% Efficiency Increase",
                desc: "Implemented custom ERP integration and IoT monitoring for a major logistics hub, optimizing delivery routes across the UK.",
                img: "https://picsum.photos/seed/case2/600/400"
              }
            ].map((caseStudy, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video">
                  <img src={caseStudy.img} alt={caseStudy.client} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-brand-emerald text-white px-4 py-1 rounded-full text-xs font-bold">
                    {caseStudy.result}
                  </div>
                </div>
                <h3 className="text-2xl mb-2">{caseStudy.client}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{caseStudy.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alistair Graham", role: "CTO, British FinTech", text: "Emma Le Grand transformed our security posture. Their understanding of UK compliance is second to none." },
              { name: "Sarah Jenkins", role: "Director, London Health", text: "Professional, responsive, and highly skilled. They feel like an extension of our own team." },
              { name: "James Montgomery", role: "Partner, Sterling Legal", text: "The transition to their managed service was seamless. Our efficiency has never been higher." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex text-brand-emerald mb-4">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-slate-600 italic mb-6">"{t.text}"</p>
                <div>
                  <p className="font-bold text-brand-navy">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-navy rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <Globe className="w-full h-full text-white scale-150" />
             </div>
             <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl text-white mb-8">Ready to Modernise your <span className="text-brand-emerald">IT Infrastructure?</span></h2>
                <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">Join hundreds of UK businesses that trust Emma Le Grand for their mission-critical technology needs.</p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link to="/contact" className="btn-primary bg-brand-emerald hover:bg-brand-emerald/90">Get a Free IT Audit</Link>
                  <Link to="/pricing" className="btn-secondary bg-transparent text-white border-white/20 hover:bg-white/10">View Pricing Plans</Link>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
