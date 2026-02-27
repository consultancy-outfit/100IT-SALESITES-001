import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Shield, Zap, Globe, Users, BarChart3, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section, Button } from './components/Layout';
import { COMPANY_DETAILS } from './constants';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="relative overflow-hidden bg-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span>Trusted by 200+ UK Businesses</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Next-Gen IT Solutions for <span className="text-indigo-600">British Enterprise.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              From managed cloud infrastructure to elite cybersecurity, we provide the technical backbone your business needs to scale in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button as={Link} to="/services" className="px-10">
                Explore Services <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="secondary" as={Link} to="/contact">
                Book a Consultation
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/it-services/800/800"
                alt="Modern IT Infrastructure"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="font-bold text-slate-900">99.9% Uptime</span>
              </div>
              <p className="text-xs text-slate-500">Guaranteed service level agreements for all managed clients.</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Key Benefits */}
      <Section className="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why British Businesses Choose SureCare</h2>
          <p className="text-slate-600">We combine local expertise with global standards to deliver IT excellence across the UK.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Rapid Response",
              desc: "Our UK-based helpdesk resolves 85% of issues within the first 15 minutes of contact."
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Cyber Resilience",
              desc: "Advanced threat detection and GDPR-compliant data protection strategies for peace of mind."
            },
            {
              icon: <Globe className="w-8 h-8" />,
              title: "Scalable Cloud",
              desc: "Seamlessly transition to the cloud with our bespoke Azure and AWS migration frameworks."
            }
          ].map((benefit, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all"
            >
              <div className="text-indigo-600 mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Case Study Snippet */}
      <Section className="bg-slate-950 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Measurable Impact for UK Industry</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-indigo-500 pl-6">
                <h4 className="text-2xl font-bold mb-2">£1.2M Annual Savings</h4>
                <p className="text-slate-400">For a West Yorkshire manufacturing firm through automated supply chain IT integration.</p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-6">
                <h4 className="text-2xl font-bold mb-2">40% Efficiency Boost</h4>
                <p className="text-slate-400">A London-based legal practice reduced document processing time via our custom cloud DMS.</p>
              </div>
            </div>
            <Button variant="outline" className="mt-12">View All Case Studies</Button>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <BarChart3 className="w-12 h-12 text-indigo-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Data-Driven Results</h3>
            <p className="text-slate-400 mb-8">We don't just provide support; we provide strategic growth. Our clients see an average ROI of 215% within the first 18 months of partnership.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl">
                <div className="text-3xl font-bold text-indigo-400">98%</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Client Retention</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <div className="text-3xl font-bold text-indigo-400">24/7</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Alistair Graham",
              role: "CTO, Northern Logistics",
              quote: "SureCare transformed our legacy systems into a modern, agile infrastructure. Their support is second to none."
            },
            {
              name: "Sarah Jenkins",
              role: "Director, Batley Creative",
              quote: "Finally, an IT partner that speaks plain English and understands the local business landscape in West Yorkshire."
            },
            {
              name: "David Thompson",
              role: "Operations Manager, UK Retail Group",
              quote: "The cybersecurity audit they performed saved us from a potential breach. Highly professional and thorough."
            }
          ].map((t, i) => (
            <div key={i} className="p-8 rounded-2xl border border-slate-100 italic text-slate-600 relative">
              <p className="mb-6">"{t.quote}"</p>
              <div className="flex items-center space-x-3 not-italic">
                <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-indigo-600 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Modernise Your IT?</h2>
        <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
          Join hundreds of UK businesses that trust SureCare for their critical infrastructure and support.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="outline" className="bg-white text-indigo-600 hover:bg-indigo-50 border-none">
            Get Started Today
          </Button>
          <Button variant="outline">
            View Pricing Plans
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Home;
