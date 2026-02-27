import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Eye, Award, CheckCircle2, Heart } from 'lucide-react';
import { Layout } from '../components/Layout';
import { COMPANY_DETAILS } from '../constants';

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-slate-900 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Community Short Breaks</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A British IT services company built on trust, technical excellence, and a commitment to our clients' success.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Founded with a vision to simplify complex technology for UK businesses, Community Short Breaks has grown from a small consultancy into a full-service IT partner.
                </p>
                <p>
                  Our name reflects our philosophy: we handle the technical heavy lifting so our clients can take a "short break" from IT worries and focus on what they do best—running their businesses.
                </p>
                <p>
                  Today, we support hundreds of organisations across the UK, from London to Edinburgh, providing the infrastructure that powers the modern British economy.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-brand-primary mb-1">10+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-primary mb-1">500+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">Clients Supported</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/office/800/800"
                  alt="Our Office"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-accent p-8 rounded-3xl text-white shadow-xl hidden md:block">
                <Award className="w-12 h-12 mb-4" />
                <div className="font-bold text-xl">Cyber Essentials</div>
                <div className="text-sm opacity-80">Certified Partner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm">
              <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-brand-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide world-class IT support and cybersecurity solutions that empower UK businesses to innovate, scale, and succeed with confidence in an ever-changing digital landscape.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm">
              <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-brand-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted IT partner in the United Kingdom, recognised for our technical expertise, proactive approach, and unwavering commitment to client security and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Integrity', desc: 'We operate with complete transparency and honesty in every interaction.', icon: <Shield className="w-6 h-6" /> },
              { title: 'Excellence', desc: 'We strive for technical perfection and continuous improvement.', icon: <Award className="w-6 h-6" /> },
              { title: 'Client-Centric', desc: 'Your business goals are the primary driver of our technology strategies.', icon: <Heart className="w-6 h-6" /> }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-slate-900 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="section-padding bg-brand-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 text-brand-accent mx-auto mb-8" />
            <h2 className="text-3xl font-bold mb-6">Commitment to GDPR & Compliance</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              As a UK-based IT provider, we take data protection seriously. We are fully committed to GDPR compliance and help our clients navigate the complexities of UK data regulations. Our processes are audited regularly to ensure the highest standards of data integrity and privacy.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-accent" />
                <span>ICO Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-accent" />
                <span>Cyber Essentials Plus</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-accent" />
                <span>ISO 27001 Aligned</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
