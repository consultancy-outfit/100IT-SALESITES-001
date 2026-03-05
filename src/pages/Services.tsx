import { motion } from 'motion/react';
import { Check, Shield, Home, Users, Heart, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Home,
    title: "24-Hour Supported Living",
    price: "Enquiry based",
    description: "Round-the-clock support in your own home so you can live safely and independently.",
    audience: "Individuals needing 24/7 support",
    benefits: ["Person-centred care plans", "Consistent staff team", "Safe, suitable accommodation"],
    steps: ["Assessment", "Care planning", "Ongoing support"]
  },
  {
    icon: Shield,
    title: "Supported Housing",
    price: "Enquiry based",
    description: "Quality accommodation with support tailored to your needs and goals.",
    audience: "People seeking supported living accommodation",
    benefits: ["Suitable housing", "Support with daily living", "Community links"],
    steps: ["Referral", "Matching", "Settlement"]
  },
  {
    icon: Users,
    title: "Outreach & Floating Support",
    price: "Enquiry based",
    description: "Flexible support that visits you at home or in the community when you need it.",
    audience: "People building independence",
    benefits: ["Flexible hours", "Goal-focused support", "Promoting independence"],
    steps: ["Assessment", "Agreed hours", "Regular reviews"]
  },
  {
    icon: Heart,
    title: "Person-Centred Care Planning",
    price: "Included",
    description: "Care and support plans built around you, your choices, and your outcomes.",
    audience: "Everyone we support",
    benefits: ["Your goals at the centre", "Regular reviews", "Family involvement where wanted"],
    steps: ["Getting to know you", "Planning", "Review"]
  },
  {
    icon: Lock,
    title: "Safeguarding & Quality",
    price: "—",
    description: "We are committed to CQC standards, safeguarding, and continuous improvement.",
    audience: "Commissioners and families",
    benefits: ["Safe services", "Trained staff", "Transparent reporting"],
    steps: ["Policies", "Training", "Audit"]
  },
  {
    icon: Users,
    title: "Transition Support",
    price: "Enquiry based",
    description: "Support for young adults and others moving into supported living.",
    audience: "Young adults and transition-age individuals",
    benefits: ["Smooth transitions", "Life skills support", "Community inclusion"],
    steps: ["Planning", "Move", "Settlement"]
  }
];

export default function Services() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Person-centred supported living and care across Hertfordshire and Barnet.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="bg-emerald-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="h-7 w-7 text-emerald-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
              <div className="text-emerald-600 font-semibold mb-4">{service.price}</div>
              <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>
              
              <div className="space-y-4 mb-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Key Benefits</div>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-700">
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-auto">
                <div className="text-xs text-slate-500 mb-1">Ideal for:</div>
                <div className="text-sm font-medium text-slate-900 mb-4">{service.audience}</div>
                <Link 
                  to="/contact" 
                  className="block w-full text-center py-3 px-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium text-sm"
                >
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Referral & Assessment", desc: "We discuss needs and how we can support you." },
              { step: "02", title: "Care Planning", desc: "Person-centred plan tailored to your goals." },
              { step: "03", title: "Matching & Onboarding", desc: "Introducing the right team and accommodation." },
              { step: "04", title: "Ongoing Support", desc: "Consistent, quality support and regular reviews." }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-display font-bold text-slate-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
