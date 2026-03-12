import { motion } from "motion/react";
import {
  Shield,
  Cloud,
  Code,
  Headphones,
  Lock,
  BarChart,
  Server,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    icon: <Server className="w-8 h-8" />,
    title: "Managed IT Services",
    overview:
      "Comprehensive management of your entire IT infrastructure, from endpoints to servers.",
    target:
      "SMEs and growing enterprises looking for a reliable outsourced IT department.",
    process: [
      "Infrastructure Audit",
      "Proactive Monitoring",
      "Regular Maintenance",
      "Strategic Reviews",
    ],
    benefits: [
      "Reduced Downtime",
      "Predictable Monthly Costs",
      "Expert Support",
    ],
    price: "From £499/month",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cybersecurity Solutions",
    overview:
      "Advanced threat protection, vulnerability assessments, and incident response.",
    target:
      "Businesses handling sensitive data or operating in high-risk sectors.",
    process: [
      "Risk Assessment",
      "Security Implementation",
      "Employee Training",
      "Continuous Monitoring",
    ],
    benefits: ["Data Protection", "Regulatory Compliance", "Peace of Mind"],
    price: "From £750/audit",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Migration & Strategy",
    overview:
      "Seamless transition to cloud environments (AWS, Azure, Google Cloud) with ongoing management.",
    target:
      "Companies looking to improve scalability and remote work capabilities.",
    process: [
      "Readiness Assessment",
      "Migration Planning",
      "Execution",
      "Optimization",
    ],
    benefits: ["Scalability", "Cost Efficiency", "Enhanced Collaboration"],
    price: "From £1,200/project",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Custom Software Development",
    overview:
      "Bespoke applications tailored to your specific business processes and needs.",
    target:
      "Organizations needing unique solutions not available off-the-shelf.",
    process: [
      "Requirements Gathering",
      "Design & Prototyping",
      "Agile Development",
      "Testing & Deployment",
    ],
    benefits: [
      "Competitive Advantage",
      "Process Automation",
      "Ownership of IP",
    ],
    price: "From £5,000/project",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "IT Consultancy & Strategy",
    overview:
      "Expert advice to align your technology roadmap with your business goals.",
    target:
      "Leadership teams planning for digital transformation or expansion.",
    process: [
      "Business Goal Analysis",
      "Tech Gap Analysis",
      "Roadmap Creation",
      "Implementation Oversight",
    ],
    benefits: ["ROI Maximization", "Future-Proofing", "Strategic Clarity"],
    price: "From £150/hour",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "24/7 Service Desk",
    overview:
      "Round-the-clock technical support for your employees, ensuring minimal disruption.",
    target:
      "Businesses with remote teams or operations outside standard UK hours.",
    process: ["Ticket Submission", "Triage", "Resolution", "Follow-up"],
    benefits: [
      "Immediate Assistance",
      "High User Satisfaction",
      "Global Coverage",
    ],
    price: "From £25/user/month",
    image:
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Services() {
  return (
    <div className="bg-stone-50">
      {/* Header */}
      <section className="pt-24 pb-16 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-8">
              Our Services
            </h1>
            <p className="text-xl text-stone-400 leading-relaxed">
              We provide a comprehensive suite of IT services designed to help
              UK businesses thrive in the digital age. From day-to-day support
              to long-term strategic planning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SERVICES.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center text-violet-600 mb-8">
                    {service.icon}
                  </div>
                  <h2 className="text-4xl font-bold text-stone-900 mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                    {service.overview}
                  </p>

                  <div className="space-y-6 mb-10">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
                        Target Audience
                      </h4>
                      <p className="text-stone-800 font-medium">
                        {service.target}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
                        Process Steps
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.process.map((step, si) => (
                          <span
                            key={si}
                            className="px-3 py-1 bg-stone-200 text-stone-700 rounded-full text-sm font-medium"
                          >
                            {step}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-white border border-stone-200 rounded-2xl shadow-sm">
                    <div>
                      <p className="text-sm text-stone-500 font-medium">
                        Starting from
                      </p>
                      <p className="text-2xl font-bold text-stone-900">
                        {service.price}
                      </p>
                    </div>
                    <Link
                      to="/contact"
                      className="bg-violet-600 text-white px-6 py-3 rounded-full font-bold hover:bg-violet-700 transition-all flex items-center"
                    >
                      Enquire Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className={`relative ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-[4/3] rounded-3xl bg-stone-200 overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl border border-stone-100 max-w-xs hidden md:block">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-violet-600 mb-4">
                      Key Benefits
                    </h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, bi) => (
                        <li
                          key={bi}
                          className="flex items-center text-stone-700 text-sm font-medium"
                        >
                          <div className="w-1.5 h-1.5 bg-violet-500 rounded-full mr-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-stone-900 mb-8">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-stone-600 mb-12 max-w-2xl mx-auto">
            Every business is unique. We can tailor our services to meet your
            specific requirements and budget.
          </p>
          <Link
            to="/contact"
            className="bg-stone-900 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-stone-800 transition-all shadow-xl"
          >
            Schedule a Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
}
