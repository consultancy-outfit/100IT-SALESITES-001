import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Server, Shield, Users, BarChart3, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm font-medium text-emerald-300">Supporting Independence in Hertfordshire & Barnet</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8 leading-tight">
              Supported Living for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Quality of Life</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Person-centred support that helps people live independently. We work with individuals and families across Hertfordshire and Barnet to deliver high-quality supported living services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-500/25">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Person-Centred Support for Independent Living
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                At Hertfordshire and Barnet Supported Living Service, we put people first. Our focus is on dignity, choice, and enabling individuals to live as independently as possible in their own homes and communities.
              </p>
              <ul className="space-y-4">
                {[
                  'Person-Centred Care Planning',
                  'Supported Living Accommodation',
                  'Dignity and Independence Focus',
                  'CQC-Regulated Quality Standards'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" 
                  alt="Supported living and care" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-slate-900 p-8 rounded-xl shadow-xl max-w-xs">
                <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
                <div className="text-sm text-slate-300">Support available for people we support across Hertfordshire and Barnet.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Why Choose Us?</h2>
            <p className="text-slate-600">We deliver high-quality, person-centred supported living across Hertfordshire and Barnet.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Safe & Supported",
                desc: "We prioritise safety and wellbeing so people can live with confidence and dignity."
              },
              {
                icon: Server,
                title: "Stable Accommodation",
                desc: "Quality supported living accommodation tailored to individual needs."
              },
              {
                icon: Users,
                title: "Dedicated Team",
                desc: "A consistent, trained team who know you and support your goals."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-emerald-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">Areas We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Hertfordshire', 'Barnet', 'Supported Living', 'Learning Disabilities', 'Mental Health', 'Autism', 'Young Adults', 'Older People'].map((area) => (
              <div key={area} className="p-6 bg-slate-50 rounded-xl text-center font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors cursor-default">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-emerald-400 font-medium mb-4">OUR APPROACH</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Supporting people to live their best lives</h2>
              <p className="text-slate-300 mb-8 text-lg">
                We work in partnership with individuals, families, and commissioners to deliver flexible, person-centred supported living that promotes independence and wellbeing.
              </p>
              <div className="grid grid-cols-3 gap-8 border-t border-slate-800 pt-8">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-slate-400">Support Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">Person-Centred</div>
                  <div className="text-sm text-slate-400">Care Planning</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">Local</div>
                  <div className="text-sm text-slate-400">Hertfordshire & Barnet</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <blockquote className="italic text-lg text-slate-300 mb-6">
                "Hertfordshire and Barnet Supported Living Service has made a real difference. The team understand our son's needs and support him to live independently with dignity."
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-white mr-3">
                  FM
                </div>
                <div>
                  <div className="font-bold text-white">Family Member</div>
                  <div className="text-sm text-emerald-300">Hertfordshire</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Get in touch</h2>
          <p className="text-emerald-100 text-lg mb-10">
            Find out how we can support you or someone you care about in Hertfordshire and Barnet.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-emerald-600 bg-white rounded-lg hover:bg-emerald-50 transition-all">
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
