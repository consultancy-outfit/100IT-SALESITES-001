import { motion } from "motion/react";
import { Check, ArrowRight, Cpu, Shield, Cloud, Lightbulb, Network } from "lucide-react";
import { SERVICES } from "../constants";

export function Services() {
  const icons = {
    "managed-it": Cpu,
    "cybersecurity": Shield,
    "cloud-services": Cloud,
    "it-consultancy": Lightbulb,
    "network-infrastructure": Network,
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Our IT Services</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We provide a comprehensive suite of IT solutions designed to help UK businesses thrive in a digital-first world.
          </p>
        </div>

        <div className="space-y-24">
          {SERVICES.map((service, index) => {
            const Icon = icons[service.id as keyof typeof icons] || Cpu;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row gap-12 lg:items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
              >
                <div className="flex-1 space-y-8">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-indigo-50 text-indigo-600">
                    <Icon className="w-6 h-6" />
                    <span className="font-bold uppercase tracking-wider text-xs">Service Overview</span>
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900">{service.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">{service.overview}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
                        Target Audience
                      </h4>
                      <p className="text-sm text-slate-600">{service.target}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
                        Key Benefits
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-4">Our Process</h4>
                    <div className="flex flex-wrap gap-4">
                      {service.process.map((step, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center">
                            {i + 1}
                          </span>
                          <span className="text-sm font-medium text-slate-700">{step}</span>
                          {i < service.process.length - 1 && <ArrowRight className="w-3 h-3 text-slate-300" />}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div>
                      <span className="text-sm text-slate-500 block">Starting from</span>
                      <span className="text-3xl font-bold text-slate-900">{service.price}</span>
                      <span className="text-sm text-slate-500 ml-1">/ month</span>
                    </div>
                    <button className="px-8 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all active:scale-95">
                      Enquire Now
                    </button>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-indigo-100 rounded-[2.5rem] -rotate-2"></div>
                    <img
                      src={`https://picsum.photos/seed/${service.id}/800/600`}
                      alt={service.title}
                      className="relative rounded-[2rem] shadow-2xl border border-white/20 object-cover aspect-[4/3]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
