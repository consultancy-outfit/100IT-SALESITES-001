import { motion } from "motion/react";
import { SERVICES } from "../constants";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="bg-slate-50">
      {/* Header */}
      <section className="bg-primary text-white py-24">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl mb-8">Our IT Services</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Comprehensive technology solutions designed to solve complex business challenges and drive efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="section-padding space-y-24">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 space-y-8">
                <div className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-bold text-sm">
                  Service 0{index + 1}
                </div>
                <h2 className="text-4xl md:text-5xl">{service.title}</h2>
                <p className="text-xl text-slate-600 leading-relaxed">{service.overview}</p>
                
                <div className="grid md:grid-cols-2 gap-8 pt-4">
                  <div>
                    <h4 className="font-bold text-primary mb-3">Target Audience</h4>
                    <p className="text-slate-500">{service.target}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-3">Starting Price</h4>
                    <p className="text-2xl font-bold text-accent">{service.price}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-primary">Key Benefits</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-slate-600">
                        <Check size={18} className="text-emerald-500" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors"
                >
                  Enquire About This Service <ArrowRight size={18} />
                </Link>
              </div>

              <div className="flex-1 w-full">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/10 rounded-3xl -rotate-3" />
                  <div className="relative bg-white p-10 rounded-3xl border border-slate-200 shadow-xl">
                    <h4 className="font-bold text-primary mb-6 uppercase tracking-widest text-sm">Our Process</h4>
                    <div className="space-y-6">
                      {service.process.map((step, i) => (
                        <div key={step} className="flex items-center gap-6">
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-primary shrink-0">
                            {i + 1}
                          </div>
                          <span className="text-lg text-slate-600 font-medium">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-white">
        <div className="section-padding">
          <h2 className="text-3xl md:text-5xl text-center mb-16">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Legal & Compliance",
              "Financial Services",
              "Manufacturing",
              "Healthcare",
              "Retail & E-commerce",
              "Education",
              "Real Estate",
              "Non-Profit"
            ].map((industry) => (
              <div key={industry} className="p-8 rounded-2xl bg-slate-50 text-center font-bold text-primary hover:bg-accent hover:text-white transition-all cursor-default">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
