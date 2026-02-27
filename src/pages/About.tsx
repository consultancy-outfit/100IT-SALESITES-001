import React from 'react';
import { COMPANY_DETAILS } from '../constants';
import { Shield, Target, Eye, Heart, Users } from 'lucide-react';

export const About = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Built on Trust, Powered by <span className="text-emerald-600">Expertise.</span></h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            Thurrock was founded with a simple mission: to provide UK businesses with the same level of IT excellence usually reserved for global corporations.
          </p>
        </div>

        {/* Mission/Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="bg-zinc-50 p-10 rounded-3xl border border-black/5">
            <Target className="w-12 h-12 text-emerald-600 mb-6" />
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-zinc-600 leading-relaxed">
              To empower British enterprises by delivering reliable, secure, and innovative IT solutions that drive growth and operational excellence. We aim to be the silent engine behind our clients' success.
            </p>
          </div>
          <div className="bg-zinc-50 p-10 rounded-3xl border border-black/5">
            <Eye className="w-12 h-12 text-emerald-600 mb-6" />
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-zinc-600 leading-relaxed">
              To become the UK's most trusted IT partner, recognised for our technical brilliance, unwavering integrity, and commitment to the success of the local business community.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-zinc-600 leading-relaxed">
                <p>
                  Started in the heart of London, Thurrock began as a small team of passionate engineers who saw a gap in the market for high-quality, personal IT support. We noticed that many providers were either too large to care or too small to cope.
                </p>
                <p>
                  Over the last decade, we've grown into a full-service IT consultancy, but we've never lost that personal touch. Every client is a partner, and every problem is an opportunity to demonstrate our value.
                </p>
                <p>
                  Today, we manage thousands of endpoints across the UK, helping businesses navigate the complexities of cloud migration, cybersecurity, and digital transformation.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/office/800/600"
                alt="Our Office"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold mb-1">10+</div>
                <div className="text-sm font-medium uppercase tracking-wider">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Integrity", desc: "We do what's right for the client, always. No hidden costs, no jargon, just honest advice.", icon: Shield },
              { title: "Excellence", desc: "We strive for perfection in every ticket, every project, and every interaction.", icon: Target },
              { title: "Innovation", desc: "Technology never stops, and neither do we. We're always looking for better ways to serve you.", icon: Eye },
            ].map((value) => (
              <div key={value.title} className="text-center p-8">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-center mb-16">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "James Thurrock", role: "Founder & CEO", bio: "20+ years in enterprise IT. Passionate about SME growth." },
              { name: "Eleanor Vance", role: "Technical Director", bio: "Cloud architecture specialist and former lead at a Tier 1 bank." },
              { name: "Marcus Reed", role: "Head of Security", bio: "Certified Ethical Hacker with a focus on UK compliance standards." },
            ].map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-square bg-zinc-100 rounded-3xl mb-6 overflow-hidden relative">
                  <img
                    src={`https://picsum.photos/seed/${member.name}/400/400`}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-emerald-600 font-medium mb-4">{member.role}</p>
                <p className="text-zinc-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GDPR Commitment */}
        <div className="bg-zinc-900 text-white p-12 rounded-3xl flex flex-col md:flex-row items-center gap-12">
          <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Commitment to GDPR</h2>
            <p className="text-zinc-400 leading-relaxed">
              As a UK-based company, we take data protection seriously. We are fully GDPR compliant and help our clients achieve the same standards. Your data is processed within the UK/EEA and protected by industry-leading encryption and security protocols.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
