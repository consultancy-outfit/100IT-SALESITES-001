import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Heart, Lightbulb, Users, Zap } from "lucide-react";

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              Our Mission is Your <span className="text-indigo-400">Digital Success</span>
            </h1>
            <p className="mt-6 text-xl text-slate-400 leading-relaxed">
              Based in the heart of Luton, Team24 was founded on the principle that technology should empower businesses, not hinder them. We bridge the gap between complex IT and business growth.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600/10 skew-x-12 transform translate-x-1/2" />
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Team24 Story</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Team24 Luton and Dunstable started as a small team of passionate IT engineers who saw a need for reliable, local IT support. We noticed that many small businesses were being underserved by large, impersonal national providers.
                </p>
                <p>
                  Since our inception, we have grown into a full-service IT partner, supporting hundreds of businesses across Bedfordshire and beyond. Our growth is built on a foundation of trust, technical excellence, and a "client-first" mentality.
                </p>
                <p>
                  Today, we are proud to be a leading provider of managed IT services, helping our clients navigate the complexities of the modern digital landscape with confidence.
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/team/800/600"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide UK businesses with innovative, secure, and reliable IT solutions that drive efficiency and foster sustainable growth. We aim to be the silent engine behind our clients' success.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                <Lightbulb size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted and respected IT service provider in the UK, known for our technical expertise, integrity, and unwavering commitment to our clients' digital well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
            <p className="mt-4 text-lg text-slate-600">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck />, title: "Integrity", desc: "We are honest, transparent, and always act in our clients' best interests." },
              { icon: <Users />, title: "Collaboration", desc: "We work as an extension of your team, not just an external vendor." },
              { icon: <Zap />, title: "Innovation", desc: "We stay ahead of the curve to bring you the latest and most effective tech." },
              { icon: <Heart />, title: "Excellence", desc: "We strive for perfection in every project and support ticket we handle." },
            ].map((value, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-6">
                  {React.cloneElement(value.icon as React.ReactElement, { size: 32 })}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ShieldCheck size={48} className="mx-auto mb-6 text-indigo-200" />
          <h2 className="text-3xl font-bold mb-6">Our Commitment to GDPR</h2>
          <p className="text-lg text-indigo-100 leading-relaxed mb-8">
            As a UK-based company, we take data privacy and security extremely seriously. We are fully committed to GDPR compliance, ensuring that both our internal processes and the solutions we provide for our clients meet the highest standards of data protection.
          </p>
          <div className="inline-flex items-center space-x-2 text-sm font-semibold bg-indigo-700 px-4 py-2 rounded-full">
            <span>ICO Registered</span>
            <span className="w-1 h-1 bg-indigo-400 rounded-full" />
            <span>Cyber Essentials Certified</span>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
