import { motion } from "motion/react";
import { Shield, Target, Eye, Heart, Award, CheckCircle } from "lucide-react";

const VALUES = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Integrity",
    description:
      "We operate with complete transparency and honesty in all our dealings.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Precision",
    description:
      "Our solutions are engineered with meticulous attention to detail.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Partnership",
    description:
      "We view ourselves as an extension of your team, not just a vendor.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Excellence",
    description:
      "We strive for the highest standards in everything we deliver.",
  },
];

const LEADERSHIP = [
  {
    name: "James Fradel",
    role: "Managing Director",
    bio: "With over 20 years in UK IT infrastructure, James leads the strategic vision of Fradel Lodge.",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Eleanor Lodge",
    role: "Technical Director",
    bio: "A specialist in cybersecurity and cloud architecture, Eleanor ensures our technical delivery is world-class.",
    image:
      "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&q=80&w=600",
  },
];

export default function About() {
  return (
    <div className="bg-stone-50">
      {/* Hero */}
      <section className="pt-24 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-stone-900 mb-8">
                Pioneering IT Excellence in the{" "}
                <span className="text-violet-600">UK</span>
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed">
                Founded on the principles of reliability and innovation, Fradel
                Lodge has grown from a boutique consultancy to a leading
                provider of managed IT services for businesses across the United
                Kingdom.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="p-12 bg-violet-600 rounded-[2rem] text-white">
              <Eye className="w-12 h-12 mb-8 opacity-50" />
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-violet-100 leading-relaxed">
                To be the most trusted technology partner for UK businesses,
                enabling them to achieve their full potential through secure,
                scalable, and innovative IT solutions.
              </p>
            </div>
            <div className="p-12 bg-stone-900 rounded-[2rem] text-white">
              <Target className="w-12 h-12 mb-8 opacity-50" />
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-stone-400 leading-relaxed">
                To simplify the complex world of technology for our clients,
                providing strategic guidance and robust support that drives
                measurable business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-stone-200 overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&q=80&w=800"
                  alt="Technology Strategy Meeting"
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-2xl shadow-xl border border-stone-100 hidden md:block">
                <p className="text-5xl font-bold text-violet-600 mb-2">15+</p>
                <p className="text-sm font-bold uppercase tracking-widest text-stone-400">
                  Years of Experience
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-stone-900 mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                <p>
                  Fradel Lodge was born out of a simple observation: many UK
                  businesses were struggling to keep pace with rapid
                  technological changes while maintaining security and
                  compliance.
                </p>
                <p>
                  Our founders, James and Eleanor, combined their expertise in
                  infrastructure and security to create a consultancy that
                  didn't just provide services, but built lasting partnerships.
                </p>
                <p>
                  Today, we are proud to support hundreds of businesses across
                  sectors ranging from finance and legal to manufacturing and
                  retail, all from our headquarters in Kings Langley.
                </p>
              </div>
              <div className="mt-12 p-8 bg-stone-100 rounded-2xl border border-stone-200">
                <div className="flex items-center space-x-4 mb-4">
                  <Shield className="text-violet-600" />
                  <h4 className="font-bold text-stone-900">GDPR Commitment</h4>
                </div>
                <p className="text-stone-600 text-sm">
                  We are fully committed to GDPR compliance. All our processes,
                  systems, and employee training are strictly aligned with UK
                  data protection standards to ensure your data remains secure
                  and private.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-stone-400">
              The principles that guide every decision we make and every
              solution we deliver.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-stone-800 border border-stone-700 hover:border-violet-500 transition-colors"
              >
                <div className="text-violet-400 mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-stone-900 mb-6">
              Our Leadership
            </h2>
            <p className="text-stone-600">
              Meet the experts behind Fradel Lodge's success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {LEADERSHIP.map((person, i) => (
              <div key={i} className="group">
                <div className="aspect-square rounded-3xl bg-stone-200 overflow-hidden mb-8 shadow-lg">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">
                  {person.name}
                </h3>
                <p className="text-violet-600 font-bold mb-4 uppercase tracking-widest text-xs">
                  {person.role}
                </p>
                <p className="text-stone-600 leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
