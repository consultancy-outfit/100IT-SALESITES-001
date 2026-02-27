import { SERVICES } from "../constants";
import { motion } from "motion/react";
import { CheckCircle2, ArrowRight, Server, Cloud, ShieldAlert, Cpu, Database, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const iconMap: Record<string, any> = {
  "managed-it": Server,
  "cloud-solutions": Cloud,
  "cyber-security": ShieldAlert,
  "it-consultancy": Cpu,
  "disaster-recovery": Database,
};

export default function Services() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-20 space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">Our IT Services</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We provide a comprehensive suite of IT services designed to help UK businesses leverage technology for competitive advantage.
          </p>
        </div>

        <div className="grid gap-12">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.id] || HelpCircle;
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group grid lg:grid-cols-2 gap-12 items-center p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-2xl hover:border-emerald-100 transition-all"
              >
                <div className="space-y-8">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                    <p className="text-lg text-slate-600">{service.description}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-bold text-slate-900 uppercase tracking-wider text-sm">Key Benefits</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-600">
                          <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Starting from</p>
                      <p className="text-3xl font-bold text-slate-900">£{service.startingPrice}<span className="text-sm font-normal text-slate-500">/month</span></p>
                    </div>
                    <Link to="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-bold text-white hover:bg-slate-800 transition-all">
                      Get Started
                    </Link>
                  </div>
                </div>

                <div className="space-y-8 bg-slate-50 p-8 rounded-2xl">
                  <div className="space-y-4">
                    <h3 className="font-bold text-slate-900">Ideal For</h3>
                    <p className="text-slate-600">{service.audience}</p>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="font-bold text-slate-900">Our Process</h3>
                    <div className="relative space-y-8 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-16px)] before:w-0.5 before:bg-emerald-200">
                      {service.process.map((step, i) => (
                        <div key={i} className="relative pl-10">
                          <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full bg-emerald-600 border-4 border-white shadow-sm"></div>
                          <p className="font-bold text-slate-900">{step}</p>
                          <p className="text-sm text-slate-500">Phase {i + 1} of implementation</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-24 rounded-3xl bg-slate-900 p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10">
            Every business is unique. We can tailor our services to meet your specific operational requirements and budget constraints.
          </p>
          <Link to="/contact" className="inline-flex h-14 items-center justify-center rounded-full bg-emerald-600 px-10 text-lg font-bold text-white hover:bg-emerald-700 transition-all">
            Request a Custom Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
