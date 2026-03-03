import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  Shield, 
  Zap, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Globe, 
  Clock,
  Quote
} from "lucide-react";

import { COMPANY_DETAILS } from "../constants";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-accent blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-400 blur-[100px] rounded-full translate-y-1/4 -translate-x-1/4"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-brand-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                </span>
                <span>Trusted IT Partner in London & West UK</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
                Intelligent IT Solutions for <span className="text-brand-accent">Modern Business.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Walfinch IT provides enterprise-grade technology support, cybersecurity, and cloud strategy tailored for UK small and medium enterprises.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 flex items-center justify-center group"
                >
                  Book a Free Audit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  Explore Services
                </Link>
              </div>
              
              <div className="mt-12 flex items-center space-x-8 grayscale opacity-50">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Trusted By</div>
                <div className="flex space-x-6 font-display font-black text-xl italic">
                  <span>TECHCORP</span>
                  <span>FINANCE.UK</span>
                  <span>LOGISTIX</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://picsum.photos/seed/it-office/800/600"
                  alt="Modern IT Office"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Zap size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">99.9%</div>
                    <div className="text-sm text-slate-500 font-medium">Uptime Guaranteed</div>
                  </div>
                </div>
              </div>
              {/* Floating User Card */}
              <div className="absolute -top-10 -right-10 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <img
                        key={i}
                        src={`https://picsum.photos/seed/user${i}/100/100`}
                        className="w-10 h-10 rounded-full border-2 border-white"
                        alt="User"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">250+ Clients</div>
                    <div className="text-xs text-slate-500">Across the UK</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Why Choose Walfinch IT?</h2>
            <p className="text-lg text-slate-600">
              We don't just fix computers; we build resilient technology foundations that drive business growth and security.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Security First",
                desc: "Every solution we implement is built with a security-first mindset, protecting your data from evolving UK cyber threats."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Proactive Support",
                desc: "We monitor your systems 24/7, identifying and resolving issues before they impact your business operations."
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Strategic Growth",
                desc: "Our IT roadmaps align with your business goals, ensuring your technology scales as you do."
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 transition-all"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-accent mb-8">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Real Results for UK Businesses</h2>
              <p className="text-lg text-slate-600">
                See how we've helped companies across London and the Home Counties optimize their IT infrastructure.
              </p>
            </div>
            <Link to="/services" className="text-brand-accent font-bold flex items-center hover:underline">
              View all case studies <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Legal Firm Infrastructure Overhaul",
                location: "Ealing, London",
                result: "£45,000 annual savings",
                desc: "Migrated a 50-person law firm to a secure cloud environment, reducing hardware costs and improving remote work efficiency.",
                image: "https://picsum.photos/seed/legal/800/500"
              },
              {
                title: "Manufacturing Cybersecurity Shield",
                location: "Uxbridge",
                result: "Zero downtime in 24 months",
                desc: "Implemented advanced threat detection and employee training for a manufacturing plant, preventing multiple ransomware attempts.",
                image: "https://picsum.photos/seed/factory/800/500"
              }
            ].map((study, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="rounded-3xl overflow-hidden mb-8 relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-xs font-bold text-brand-primary">
                    {study.location}
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-brand-accent font-bold text-sm mb-3">
                  <CheckCircle2 size={16} />
                  <span>{study.result}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-brand-accent transition-colors">
                  {study.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{study.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-brand-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Globe className="w-full h-full scale-150 translate-x-1/4" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8">Specialist IT Support Across Industries</h2>
              <p className="text-lg text-slate-300 mb-12">
                Our team brings deep expertise to sectors with high compliance and security requirements in the UK market.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  "Legal & Professional",
                  "Healthcare & Medical",
                  "Manufacturing",
                  "Construction",
                  "Education",
                  "Retail & E-commerce"
                ].map((industry, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-slate-200">
                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                    <span className="font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur p-8 rounded-3xl border border-white/10">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="bg-brand-accent p-8 rounded-3xl">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-sm text-white/80 uppercase tracking-wider">Monitoring</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white/5 backdrop-blur p-8 rounded-3xl border border-white/10">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">UK Based Team</div>
                </div>
                <div className="bg-white/5 backdrop-blur p-8 rounded-3xl border border-white/10">
                  <div className="text-3xl font-bold mb-2">GDPR</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alistair Graham",
                role: "Director, Graham & Co Solicitors",
                content: "Walfinch IT transformed our remote working capabilities. Their response time is exceptional and they truly understand the security needs of a legal practice."
              },
              {
                name: "Sarah Jenkins",
                role: "Operations Manager, West London Logistics",
                content: "Since switching to Walfinch, our IT headaches have vanished. They are proactive, professional, and explain technical issues in plain English."
              },
              {
                name: "David Thompson",
                role: "CEO, Uxbridge Manufacturing Ltd",
                content: "The cybersecurity audit they performed was eye-opening. We now feel much more secure knowing our data is protected by their 24/7 monitoring."
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative">
                <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-100" />
                <div className="relative z-10">
                  <p className="text-slate-600 italic mb-8 leading-relaxed">"{t.content}"</p>
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
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-accent rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 relative z-10">Ready to Future-Proof Your IT?</h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto relative z-10">
              Contact us today for a free, no-obligation IT infrastructure audit and discover how we can help your business thrive.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 relative z-10">
              <Link
                to="/contact"
                className="bg-white text-brand-accent px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-xl"
              >
                Get Your Free Audit
              </Link>
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="bg-brand-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-800 transition-all"
              >
                Call Us: {COMPANY_DETAILS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
