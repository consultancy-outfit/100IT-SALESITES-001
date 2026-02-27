import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Cloud, 
  Cpu, 
  Zap, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Star
} from 'lucide-react';
import { SectionHeading, Button, Card, Page } from './Shared';

export const HomePage = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#10b981_0,transparent_50%)]"></div>
        </div>
        <div className="section-padding relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              Leading UK IT Consultancy
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Empowering British Business Through <span className="text-emerald-500">Innovation.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-lg">
              Badminton Gardens provides world-class managed IT services, cybersecurity, and cloud solutions tailored for the UK's dynamic market.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => setPage('services')}>Explore Services</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-950" onClick={() => setPage('contact')}>
                Book a Consultation
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/it-office/800/600" 
                alt="Modern UK Office" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-emerald-500 p-6 rounded-2xl shadow-xl z-20">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm opacity-90">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              title="Strategic IT Focus for the Modern Enterprise" 
              subtitle="We don't just fix computers; we build the digital foundations that allow your business to scale securely and efficiently."
            />
            <div className="space-y-6">
              {[
                { icon: Shield, title: "Cyber Resilience", desc: "Advanced protection against evolving UK-specific threats." },
                { icon: Cloud, title: "Cloud Transformation", desc: "Seamless migration to secure, scalable cloud architectures." },
                { icon: Cpu, title: "Infrastructure Managed", desc: "24/7 monitoring and proactive maintenance of your core systems." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-8">
              <img src="https://picsum.photos/seed/tech1/400/500" className="rounded-2xl shadow-lg" alt="Tech 1" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/tech2/400/300" className="rounded-2xl shadow-lg" alt="Tech 2" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4">
              <img src="https://picsum.photos/seed/tech3/400/300" className="rounded-2xl shadow-lg" alt="Tech 3" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/tech4/400/500" className="rounded-2xl shadow-lg" alt="Tech 4" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-slate-50 py-20">
        <div className="section-padding">
          <SectionHeading 
            centered 
            title="Why British Businesses Choose Us" 
            subtitle="Our commitment to excellence and deep understanding of the UK regulatory landscape sets us apart."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Local Expertise", desc: "Based in London, we understand the unique challenges and opportunities of the UK market." },
              { title: "GDPR Compliant", desc: "Data protection is in our DNA. We ensure all solutions meet strict UK GDPR standards." },
              { title: "Cost Efficiency", desc: "Our managed services typically reduce IT overheads by up to 35% for our clients." },
              { title: "24/7 UK Support", desc: "No offshore call centres. Speak to qualified UK engineers whenever you need help." },
              { title: "Scalable Solutions", desc: "Technology that grows with you, from startup to established enterprise." },
              { title: "Strategic Partnership", desc: "We act as your virtual CTO, aligning technology with your business goals." }
            ].map((benefit, i) => (
              <Card key={i} className="hover:-translate-y-1 transition-transform">
                <CheckCircle2 className="text-emerald-500 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding">
        <SectionHeading 
          centered 
          title="Industries We Empower" 
          subtitle="Specialised IT solutions for the sectors that drive the UK economy."
        />
        <div className="flex flex-wrap justify-center gap-4">
          {['Financial Services', 'Legal & Professional', 'Healthcare', 'Manufacturing', 'Education', 'Retail & E-commerce'].map((industry, i) => (
            <div key={i} className="px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-700 font-medium shadow-sm hover:border-emerald-500 hover:text-emerald-600 transition-colors cursor-default">
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-slate-900 text-white py-20">
        <div className="section-padding">
          <SectionHeading 
            title="Measurable Results" 
            subtitle="Real-world impact for our UK partners."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-8 rounded-3xl border border-white/10">
              <span className="text-emerald-400 font-mono text-sm uppercase tracking-widest">Financial Sector</span>
              <h3 className="text-2xl font-bold mt-4 mb-4">Infrastructure Overhaul for City Law Firm</h3>
              <p className="text-slate-400 mb-6">Migrated a 150-user firm to a hybrid cloud model, enhancing remote work capabilities and security.</p>
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="text-3xl font-bold text-emerald-500">£45,000</p>
                  <p className="text-sm text-slate-400">Annual Savings</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-emerald-500">99.99%</p>
                  <p className="text-sm text-slate-400">Uptime Achieved</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 p-8 rounded-3xl border border-white/10">
              <span className="text-emerald-400 font-mono text-sm uppercase tracking-widest">Manufacturing</span>
              <h3 className="text-2xl font-bold mt-4 mb-4">Cybersecurity Fortification</h3>
              <p className="text-slate-400 mb-6">Implemented multi-layered defense for a Midlands manufacturer after a ransomware attempt.</p>
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="text-3xl font-bold text-emerald-500">£120k+</p>
                  <p className="text-sm text-slate-400">Potential Loss Averted</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-emerald-500">100%</p>
                  <p className="text-sm text-slate-400">Compliance Score</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <SectionHeading 
          centered 
          title="What Our Clients Say" 
          subtitle="Trusted by leaders across the United Kingdom."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Alistair Graham", role: "CEO, Graham & Co", text: "Badminton Gardens transformed our IT from a headache into a competitive advantage. Their UK-based team is responsive and highly skilled." },
            { name: "Sarah Jenkins", role: "IT Director, MedTech UK", text: "The level of strategic insight provided by their consultants is unparalleled. They truly understand the nuances of the British healthcare sector." },
            { name: "David Thompson", role: "Founder, Thompson Logistics", text: "Reliable, professional, and proactive. Since partnering with them, our system downtime has been virtually non-existent. Highly recommended." }
          ].map((t, i) => (
            <Card key={i} className="flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-emerald-500 text-emerald-500" />)}
              </div>
              <p className="text-slate-600 italic mb-6 flex-grow">"{t.text}"</p>
              <div>
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-emerald-600 py-20 text-white">
        <div className="section-padding text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Future-Proof Your Business?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Join hundreds of UK businesses that trust Badminton Gardens for their mission-critical IT needs.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" onClick={() => setPage('contact')}>Get a Free Audit</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600" onClick={() => setPage('pricing')}>
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
