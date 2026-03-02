/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Shield, Zap, TrendingUp, Users, Globe, ArrowRight, Star, Quote, Lock } from 'lucide-react';
import { cn } from '../utils';

const benefits = [
  {
    title: "24/7 Proactive Support",
    description: "Our dedicated UK-based helpdesk is always ready to resolve your IT issues before they impact your business.",
    icon: Shield,
  },
  {
    title: "Strategic IT Planning",
    description: "We align your technology roadmap with your business goals to ensure long-term growth and efficiency.",
    icon: TrendingUp,
  },
  {
    title: "Cybersecurity Excellence",
    description: "Protect your business from evolving threats with our comprehensive security audits and threat protection.",
    icon: Lock,
  },
];

const industries = [
  "Professional Services",
  "Healthcare & Social Care",
  "Manufacturing & Logistics",
  "Retail & E-commerce",
  "Education & Non-Profit",
  "Construction & Engineering",
];

const caseStudies = [
  {
    title: "Cloud Transformation for Legal Firm",
    industry: "Legal",
    result: "£45,000 annual savings",
    description: "Migrated a 50-user legal firm to a secure Azure environment, reducing hardware costs and enabling seamless remote work.",
  },
  {
    title: "Cybersecurity Overhaul for Manufacturer",
    industry: "Manufacturing",
    result: "Zero downtime in 24 months",
    description: "Implemented advanced threat protection and employee training, preventing an estimated £120,000 in potential ransomware losses.",
  },
];

const testimonials = [
  {
    name: "Alistair Graham",
    role: "Managing Director",
    company: "Northumberland Logistics Ltd",
    content: "Shared Lives IT has been instrumental in our digital transformation. Their proactive approach to IT support has saved us countless hours of downtime.",
  },
  {
    name: "Sarah Jenkins",
    role: "Practice Manager",
    company: "Tyne Valley Medical",
    content: "The level of expertise and responsiveness from the team is unparalleled. They truly understand the unique IT requirements of the healthcare sector.",
  },
  {
    name: "David Thompson",
    role: "Finance Director",
    company: "Border Construction",
    content: "Switching to Shared Lives IT was the best decision we made. Our IT costs are now predictable, and our systems are more secure than ever.",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl opacity-50" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                <Globe className="h-4 w-4" />
                <span>Trusted IT Partner Across the UK</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-8">
                Empowering Your <span className="text-indigo-600">Digital Future</span> with Expert IT.
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
                Shared Lives Northumberland provides world-class managed IT services, cybersecurity, and cloud solutions tailored for ambitious UK businesses.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl text-center"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/services"
                  className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-50 transition-all text-center"
                >
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
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Modern IT Office"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">99.9%</div>
                    <div className="text-sm text-slate-500">Uptime Guaranteed</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Why Choose Us</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Built for Reliability, Designed for Growth</h3>
            <p className="text-lg text-slate-600">We don't just fix IT problems; we partner with you to build a resilient and scalable technology foundation.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
              >
                <div className="bg-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                  <benefit.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h4>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Industries We Serve</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-8">Specialised IT Expertise for Diverse UK Sectors</h3>
              <p className="text-lg text-slate-600 mb-10">
                We understand that every industry has unique challenges. Our team brings deep domain knowledge to provide tailored IT solutions that meet regulatory requirements and operational demands.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industries.map((industry, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-slate-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-indigo-500" />
                    <span>{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Industry 1" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Industry 2" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Industry 3" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Industry 4" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-4">Case Studies</h2>
              <h3 className="text-4xl font-bold mb-6">Real Results for Real Businesses</h3>
              <p className="text-slate-400 text-lg">See how we've helped UK companies optimize their operations and secure their digital assets.</p>
            </div>
            <Link to="/services" className="text-indigo-400 font-semibold flex items-center hover:text-indigo-300 transition-colors">
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 p-12 rounded-3xl hover:bg-slate-800 transition-colors group"
              >
                <div className="text-indigo-400 font-bold text-sm uppercase tracking-widest mb-4">{study.industry}</div>
                <h4 className="text-3xl font-bold mb-6 group-hover:text-indigo-400 transition-colors">{study.title}</h4>
                <p className="text-slate-400 mb-8 leading-relaxed">{study.description}</p>
                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-600/20 text-indigo-400 px-6 py-3 rounded-xl font-bold text-lg border border-indigo-600/30">
                    {study.result}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Testimonials</h2>
            <h3 className="text-4xl font-bold text-slate-900">What Our Clients Say</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-10 rounded-3xl relative"
              >
                <Quote className="absolute top-8 right-8 h-12 w-12 text-indigo-100" />
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-8 leading-relaxed relative z-10">"{t.content}"</p>
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}, {t.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-700 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-xl text-indigo-100 mb-12 leading-relaxed">
                Join hundreds of UK businesses that trust Shared Lives Northumberland for their IT needs. Let's build something great together.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  to="/contact"
                  className="bg-white text-indigo-600 px-10 py-5 rounded-full text-lg font-bold hover:bg-indigo-50 transition-all shadow-xl"
                >
                  Book a Free Consultation
                </Link>
                <Link
                  to="/pricing"
                  className="bg-indigo-700 text-white border border-indigo-500 px-10 py-5 rounded-full text-lg font-bold hover:bg-indigo-800 transition-all"
                >
                  View Pricing Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
