/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, ShieldCheck, Users, Globe, Award, CheckCircle2, Lightbulb } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

const values = [
  {
    title: "Integrity First",
    description: "We believe in honest, transparent communication and ethical business practices in every interaction.",
    icon: Heart,
  },
  {
    title: "Innovation Driven",
    description: "We stay ahead of the curve, constantly exploring new technologies to give our clients a competitive edge.",
    icon: Lightbulb,
  },
  {
    title: "Client Centric",
    description: "Your business goals are our goals. We tailor our solutions to meet your specific needs and challenges.",
    icon: Users,
  },
  {
    title: "Security Focused",
    description: "In an increasingly digital world, security is at the heart of everything we do.",
    icon: ShieldCheck,
  },
];

const leadership = [
  {
    name: "James Anderson",
    role: "Chief Executive Officer",
    bio: "With over 20 years of experience in the UK IT sector, James leads our strategic vision and growth.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Eleanor Wright",
    role: "Chief Technology Officer",
    bio: "Eleanor is a cybersecurity expert and cloud architect, ensuring our technical solutions are world-class.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Robert Hughes",
    role: "Director of Operations",
    bio: "Robert oversees our service delivery and client support, ensuring excellence in every project.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];

export default function About() {
  return (
    <div className="pt-20 pb-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Our Story: <span className="text-indigo-600">Empowering UK Business</span> Through Technology.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Founded in Northumberland, {COMPANY_DETAILS.name} was born out of a desire to provide high-quality, reliable, and strategic IT services to businesses across the UK.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We've grown from a small local team to a national IT partner, but our core mission remains the same: to make technology an asset, not a burden, for our clients.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1522071823992-b49e722167d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Our Team"
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-indigo-600 text-white p-10 rounded-3xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-sm font-medium uppercase tracking-widest opacity-80">Years of Excellence</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="bg-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Target className="h-8 w-8 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To provide innovative, secure, and reliable IT solutions that empower UK businesses to achieve their full potential in an increasingly digital world.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="bg-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="h-8 w-8 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To be the UK's most trusted IT partner, recognized for our technical excellence, strategic insight, and unwavering commitment to client success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Our Core Values</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-16">The Principles That Guide Us</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="p-8 rounded-3xl hover:bg-slate-50 transition-colors text-center">
                <div className="bg-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <value.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Our Leadership</h2>
            <h3 className="text-4xl font-bold text-slate-900">The Experts Behind Our Success</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {leadership.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">{leader.name}</h4>
                  <div className="text-indigo-600 font-semibold mb-4 uppercase tracking-wider text-sm">{leader.role}</div>
                  <p className="text-slate-600">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-50 p-12 md:p-16 rounded-[3rem] border border-indigo-100">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="bg-white p-6 rounded-3xl shadow-xl shrink-0">
                <ShieldCheck className="h-20 w-20 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Commitment to GDPR</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  At {COMPANY_DETAILS.name}, we take data protection seriously. We are fully committed to GDPR compliance and ensure that all our IT solutions are designed with privacy and security at their core.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3 text-slate-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-indigo-500 shrink-0" />
                    <span>Data Protection by Design and Default</span>
                  </li>
                  <li className="flex items-center space-x-3 text-slate-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-indigo-500 shrink-0" />
                    <span>Regular Security Audits & Compliance Checks</span>
                  </li>
                  <li className="flex items-center space-x-3 text-slate-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-indigo-500 shrink-0" />
                    <span>Secure Data Processing and Storage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
