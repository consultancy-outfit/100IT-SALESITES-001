import { motion } from 'motion/react';
import { Target, Eye, History, Users, ShieldCheck, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-8">Crafting the Future of <span className="text-brand-accent">British IT</span>.</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Founded in London, Daisy Haye was born from a simple mission: to provide enterprise-grade IT solutions with a personal, local touch.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
              <p className="text-slate-600 leading-relaxed">
                Daisy Haye began as a small consultancy helping local businesses navigate the complexities of digital transformation. Over the years, we've grown into a full-service IT partner, serving clients across the UK from our headquarters in London.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We believe that technology should be an enabler, not a barrier. Our team of certified engineers and strategic consultants work tirelessly to ensure our clients have the tools they need to succeed in an increasingly digital world.
              </p>
              <div className="pt-6 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-brand-primary">15+</div>
                  <div className="text-sm text-slate-500">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-primary">250+</div>
                  <div className="text-sm text-slate-500">Clients Served</div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src="https://picsum.photos/seed/about/800/600" alt="Team Meeting" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
              <Target className="h-12 w-12 text-brand-accent mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower UK businesses by delivering innovative, secure, and reliable IT services that drive sustainable growth and operational excellence.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
              <Eye className="h-12 w-12 text-brand-accent mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the United Kingdom's most trusted partner for digital transformation, known for our technical integrity and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <ShieldCheck className="h-10 w-10 text-brand-accent" />,
                title: "Integrity",
                desc: "We operate with absolute transparency and honesty in every interaction."
              },
              {
                icon: <Users className="h-10 w-10 text-brand-accent" />,
                title: "Collaboration",
                desc: "We work as a true partner, aligning our goals with yours."
              },
              {
                icon: <Heart className="h-10 w-10 text-brand-accent" />,
                title: "Excellence",
                desc: "We strive for perfection in every line of code and every support ticket."
              }
            ].map((v, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-6">{v.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
            <p className="text-slate-400">The experts driving our technical strategy.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "Alistair Haye", role: "Managing Director", img: "https://picsum.photos/seed/p1/400/400" },
              { name: "Victoria Daisy", role: "Technical Director", img: "https://picsum.photos/seed/p2/400/400" },
              { name: "Robert Sterling", role: "Head of Security", img: "https://picsum.photos/seed/p3/400/400" }
            ].map((p, i) => (
              <div key={i} className="text-center group">
                <div className="h-64 w-64 mx-auto bg-slate-800 rounded-full overflow-hidden mb-6 border-4 border-slate-800 group-hover:border-brand-accent transition-colors">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xl font-bold">{p.name}</h4>
                <p className="text-brand-accent text-sm">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Compliance */}
      <section className="py-24 bg-brand-accent text-white">
        <div className="container-custom text-center">
          <ShieldCheck className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">GDPR & Data Privacy</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            As a UK-based company, we are fully committed to GDPR compliance. We handle your data with the highest level of security and respect, ensuring all processing meets the stringent requirements of UK data protection laws.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
