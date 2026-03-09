import { useState, useEffect, ReactNode } from "react";
import {
  Monitor,
  Shield,
  Cloud,
  Cpu,
  Headset,
  ChevronRight,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
  ExternalLink,
  Clock,
  Lock,
  Database,
  Globe,
  Server,
  Users,
  Briefcase,
  Target,
  FileText,
  ShieldCheck,
  CreditCard,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./assets/Dasil Support  Services London.svg";

// --- Types ---
type Page =
  | "home"
  | "services"
  | "about"
  | "pricing"
  | "contact"
  | "terms"
  | "privacy";

// --- Constants ---
const COMPANY_DETAILS = {
  name: "Hertfordshire and Barnet Supported Living Service",
  address: "15 Queens Road, Donnington, Telford, England, TF2 8DB",
  crn: "17046307",
  phone: "0208 088 5981",
  email: "info@dasilsupportserviceslondon.co.uk",
  hours: "Mon - Fri: 09:00 - 17:30",
};

// --- Components ---

const Navbar = ({
  currentPage,
  setCurrentPage,
}: {
  currentPage: Page;
  setCurrentPage: (p: Page) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string; value: Page }[] = [
    { label: "Home", value: "home" },
    { label: "Services", value: "services" },
    { label: "About Us", value: "about" },
    { label: "Pricing", value: "pricing" },
    { label: "Contact", value: "contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setCurrentPage("home")}
          >
            <img
              src={Logo}
              alt="Dasil Support Services London"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setCurrentPage(item.value)}
                className={`text-sm font-medium transition-colors hover:text-brand-red ${
                  currentPage === item.value
                    ? "text-brand-red"
                    : "text-slate-600"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage("contact")}
              className="bg-brand-red text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-red-dark transition-all shadow-md"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    setCurrentPage(item.value);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-red rounded-md"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setCurrentPage("contact");
                  setIsOpen(false);
                }}
                className="w-full mt-4 bg-brand-red text-white px-5 py-3 rounded-md text-base font-semibold"
              >
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src={Logo}
                alt="Dasil Support Services London"
                className="h-10 w-auto bg-white rounded-md p-1"
              />
            </div>
            <p className="text-sm leading-relaxed">
              Delivering enterprise-grade IT solutions across the UK. We empower
              businesses through technology, security, and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-brand-red transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-brand-red transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <button
                  onClick={() => setCurrentPage("home")}
                  className="hover:text-brand-red transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("services")}
                  className="hover:text-brand-red transition-colors"
                >
                  IT Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("about")}
                  className="hover:text-brand-red transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("pricing")}
                  className="hover:text-brand-red transition-colors"
                >
                  Pricing Plans
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("contact")}
                  className="hover:text-brand-red transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <button
                  onClick={() => setCurrentPage("terms")}
                  className="hover:text-brand-red transition-colors"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("privacy")}
                  className="hover:text-brand-red transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="hover:text-brand-red transition-colors">
                  GDPR Compliance
                </button>
              </li>
              <li>
                <button className="hover:text-brand-red transition-colors">
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Details</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-blue mr-3 shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-brand-blue mr-3 shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-brand-blue mr-3 shrink-0" />
                <span className="break-all">{COMPANY_DETAILS.email}</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-brand-blue mr-3 shrink-0" />
                <span>{COMPANY_DETAILS.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-xs text-slate-500 space-y-1">
              <p>
                &copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}. All
                rights reserved.
              </p>
              <p>Company Registration Number: {COMPANY_DETAILS.crn}</p>
              <p>Registered in England & Wales</p>
            </div>
            <div className="md:text-right">
              <span className="text-xs text-slate-500">
                Designed for British Excellence
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Page Components ---

const HomePage = ({
  setCurrentPage,
}: {
  setCurrentPage: (p: Page) => void;
}) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-slate-50 overflow-hidden py-24 lg:py-32">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 -skew-x-12 transform translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-brand-red-soft text-brand-red-dark rounded-full text-sm font-bold tracking-wide uppercase mb-6">
                UK Managed IT Services
              </span>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Empowering Your Business Through{" "}
                <span className="text-brand-red">Smart Technology</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Hertfordshire & Barnet IT Services provides enterprise-grade
                infrastructure, cybersecurity, and cloud solutions tailored for
                the British market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setCurrentPage("services")}
                  className="bg-brand-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-red-dark transition-all flex items-center justify-center shadow-xl"
                >
                  Explore Services <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentPage("contact")}
                  className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="bg-white p-4 rounded-2xl shadow-2xl relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                  alt="Cybersecurity Dashboard"
                  className="rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-blue text-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px]">
                <p className="text-3xl font-bold mb-1">99.9%</p>
                <p className="text-sm opacity-90">
                  Uptime Guaranteed for our UK Clients
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our IT Expertise?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We combine local British support with global technology standards
              to deliver results that matter.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Cybersecurity First",
                desc: "GDPR compliant security protocols protecting your sensitive data from modern threats.",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "24/7 UK Support",
                desc: "Round-the-clock monitoring and support from our dedicated team based in England.",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Strategic Growth",
                desc: "We don't just fix PCs; we align your technology with your long-term business goals.",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:border-brand-red hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center text-brand-red shadow-sm mb-6 group-hover:bg-brand-red group-hover:text-white transition-all">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Specialised Sectors in the UK
              </h2>
              <p className="text-slate-400 mb-10 text-lg">
                Our deep understanding of UK regulatory environments allows us
                to provide niche IT services for critical industries.
              </p>
              <div className="space-y-4">
                {[
                  "Healthcare & Supported Living",
                  "Financial Services & Fintech",
                  "Legal & Professional Services",
                  "Manufacturing & Logistics",
                  "Education & Public Sector",
                ].map((industry, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-brand-blue w-5 h-5" />
                    <span className="text-lg font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                  <h4 className="font-bold mb-2">Compliance</h4>
                  <p className="text-sm text-slate-400">
                    Strict adherence to UK GDPR and Cyber Essentials Plus
                    standards.
                  </p>
                </div>
                <div className="bg-brand-red p-6 rounded-2xl">
                  <h4 className="font-bold mb-2">Innovation</h4>
                  <p className="text-sm text-white/80">
                    Leveraging AI and Cloud to drive efficiency in traditional
                    sectors.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                  <h4 className="font-bold mb-2">Reliability</h4>
                  <p className="text-sm text-slate-400">
                    Redundant systems ensuring zero downtime for critical
                    operations.
                  </p>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                  <h4 className="font-bold mb-2">Scalability</h4>
                  <p className="text-sm text-slate-400">
                    Infrastructure that grows with your business requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-sm border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-16">
                <span className="text-brand-red font-bold uppercase tracking-wider text-sm">
                  Success Story
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mt-4 mb-6">
                  Digital Transformation for London Logistics Firm
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  We migrated a legacy on-premise server system to a secure
                  Azure cloud environment for a major logistics provider in
                  South London.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div>
                    <p className="text-3xl font-bold text-brand-red">
                      £45,000
                    </p>
                    <p className="text-sm text-slate-500">
                      Annual Savings in IT Overhead
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-brand-red">40%</p>
                    <p className="text-sm text-slate-500">
                      Increase in Operational Speed
                    </p>
                  </div>
                </div>
                <button className="flex items-center text-brand-red font-bold hover:text-brand-red-dark">
                  Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
              <div className="bg-brand-blue relative min-h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
                  alt="Team working"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">
              What Our British Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alistair Graham",
                role: "Director, Graham & Partners",
                text: "The transition to managed IT was seamless. Their team understands the UK legal sector's security requirements perfectly.",
              },
              {
                name: "Sarah Jenkins",
                role: "Operations Manager, Telford Tech",
                text: "Since partnering with H&B IT, our downtime has dropped to zero. Their response time is exceptional.",
              },
              {
                name: "David Thompson",
                role: "CEO, London Logistics",
                text: "Professional, knowledgeable, and reliable. They've saved us thousands in potential security breaches.",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-slate-600 italic mb-6">"{t.text}"</p>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-red rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Secure Your Digital Future?
              </h2>
              <p className="text-xl text-white/80 mb-10">
                Join hundreds of UK businesses that trust us with their IT
                infrastructure.
              </p>
              <button
                onClick={() => setCurrentPage("contact")}
                className="bg-white text-brand-red px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-xl"
              >
                Book a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      title: "Managed IT Support",
      icon: <Headset className="w-10 h-10" />,
      overview:
        "Comprehensive 24/7 technical support for your entire business infrastructure.",
      target: "SMEs and growing UK enterprises.",
      process: ["Audit", "Onboarding", "Monitoring", "Resolution"],
      benefits: ["Zero downtime", "Predictable costs", "Expert advice"],
      price: "£250",
    },
    {
      title: "Cybersecurity Solutions",
      icon: <ShieldCheck className="w-10 h-10" />,
      overview:
        "Advanced threat protection, penetration testing, and GDPR compliance audits.",
      target: "Businesses handling sensitive client data.",
      process: ["Vulnerability Scan", "Hardening", "Training", "Monitoring"],
      benefits: ["Data protection", "Regulatory compliance", "Peace of mind"],
      price: "£499",
    },
    {
      title: "Cloud Migration & Hosting",
      icon: <Cloud className="w-10 h-10" />,
      overview:
        "Seamless transition to Azure, AWS, or private cloud environments.",
      target: "Companies looking to modernise legacy systems.",
      process: ["Assessment", "Strategy", "Migration", "Optimisation"],
      benefits: ["Scalability", "Remote access", "Cost efficiency"],
      price: "£750",
    },
    {
      title: "Network Infrastructure",
      icon: <Server className="w-10 h-10" />,
      overview:
        "Design and implementation of high-speed, secure business networks.",
      target: "New offices or infrastructure upgrades.",
      process: ["Site Survey", "Design", "Installation", "Testing"],
      benefits: ["High speed", "Secure connectivity", "Reliable hardware"],
      price: "£1,200",
    },
    {
      title: "Disaster Recovery",
      icon: <Database className="w-10 h-10" />,
      overview: "Automated backup solutions and rapid recovery protocols.",
      target: "Critical businesses where data loss is not an option.",
      process: ["Risk Analysis", "Backup Setup", "Testing", "Maintenance"],
      benefits: ["Business continuity", "Data integrity", "Rapid restore"],
      price: "£350",
    },
    {
      title: "IT Consultancy",
      icon: <Briefcase className="w-10 h-10" />,
      overview:
        "Strategic technology planning to align with your business objectives.",
      target: "Executive teams planning digital transformation.",
      process: ["Discovery", "Analysis", "Roadmap", "Execution"],
      benefits: ["ROI focus", "Future-proofing", "Strategic edge"],
      price: "£150/hr",
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our IT Services
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tailored technology solutions designed to drive efficiency and
            security for British businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-xl transition-all"
            >
              <div className="text-brand-red mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 flex-grow">
                {service.overview}
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Target Audience
                  </p>
                  <p className="text-sm text-slate-700">{service.target}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Key Benefits
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((b, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-brand-red-soft text-brand-red-dark text-xs font-medium rounded"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Starting from</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {service.price}
                  </p>
                </div>
                <button className="bg-brand-red text-white p-3 rounded-xl hover:bg-brand-red-dark transition-colors">
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="text-brand-red font-bold uppercase tracking-wider text-sm">
              Our Story
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-8">
              Bridging the Gap Between Business and Technology
            </h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded in the heart of England, Hertfordshire and Barnet
              Supported Living Service (H&B IT) began with a simple mission: to
              provide reliable, enterprise-grade IT support to businesses that
              were being underserved by generic providers.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Over the years, we have evolved into a full-service IT
              consultancy, specialising in the unique regulatory and operational
              needs of the UK market. Our roots in the supported living sector
              have given us a unique perspective on the importance of data
              security, reliability, and human-centric technology.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-bold text-brand-red">10+</p>
                <p className="text-sm text-slate-500">Years of Excellence</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-brand-red">500+</p>
                <p className="text-sm text-slate-500">Projects Completed</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Office culture"
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl hidden md:block border border-slate-100">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 text-green-600 p-3 rounded-full">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">GDPR Compliant</p>
                  <p className="text-sm text-slate-500">
                    Certified Data Handling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-brand-red text-white p-12 rounded-3xl">
            <Target className="w-12 h-12 mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-white/80 leading-relaxed">
              To empower UK businesses by providing innovative, secure, and
              reliable IT solutions that drive growth and operational
              excellence.
            </p>
          </div>
          <div className="bg-slate-900 text-white p-12 rounded-3xl">
            <Globe className="w-12 h-12 mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              To be the leading partner for digital transformation in the UK,
              recognised for our technical expertise and commitment to client
              success.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            The principles that guide every decision we make and every project
            we undertake.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            {
              title: "Integrity",
              desc: "Honest advice and transparent pricing in everything we do.",
            },
            {
              title: "Excellence",
              desc: "Striving for the highest standards in technical delivery.",
            },
            {
              title: "Security",
              desc: "Protecting client data is our absolute top priority.",
            },
            {
              title: "Innovation",
              desc: "Always looking for better ways to solve complex problems.",
            },
          ].map((v, i) => (
            <div
              key={i}
              className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {v.title}
              </h3>
              <p className="text-slate-600 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Leadership */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Meet Our Leadership
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              name: "James Harrison",
              role: "Managing Director",
              img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
            },
            {
              name: "Eleanor Brooks",
              role: "Technical Director",
              img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
            },
            {
              name: "Robert Sterling",
              role: "Head of Cybersecurity",
              img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
            },
          ].map((leader, i) => (
            <div key={i} className="text-center group">
              <div className="relative mb-6 inline-block">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg group-hover:border-brand-red transition-all"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {leader.name}
              </h3>
              <p className="text-brand-red font-medium">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PricingPage = () => {
  const plans = [
    {
      name: "Essential Support",
      price: "199",
      ideal: "Small businesses & Startups",
      features: [
        "Mon-Fri 9am-5pm Support",
        "Remote Troubleshooting",
        "Basic Antivirus Protection",
        "Cloud Backup (50GB)",
        "Monthly Health Check",
      ],
      support: "Next Business Day",
      highlight: false,
    },
    {
      name: "Professional Managed",
      price: "449",
      ideal: "Growing UK SMEs",
      features: [
        "24/7 Critical Support",
        "On-site Support Included",
        "Advanced Endpoint Security",
        "Cloud Backup (500GB)",
        "GDPR Compliance Audit",
        "Network Monitoring",
      ],
      support: "4-Hour Response",
      highlight: true,
    },
    {
      name: "Enterprise Secure",
      price: "999",
      ideal: "Large Scale Operations",
      features: [
        "Dedicated Account Manager",
        "Unlimited On-site Support",
        "Full Cybersecurity Suite",
        "Unlimited Cloud Backup",
        "Disaster Recovery Planning",
        "Strategic IT Roadmap",
      ],
      support: "1-Hour Response",
      highlight: false,
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose a plan that fits your business needs. All prices are subject
            to VAT at the prevailing rate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-3xl p-10 shadow-sm border ${
                plan.highlight
                  ? "border-brand-red ring-4 ring-brand-red/10 scale-105 z-10"
                  : "border-slate-100"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-red text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-slate-500 mb-6">{plan.ideal}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-slate-900">
                    £{plan.price}
                  </span>
                  <span className="text-slate-500 ml-2">/month</span>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((f, i) => (
                  <div key={i} className="flex items-center text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue mr-3 shrink-0" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 p-4 rounded-xl mb-8">
                <p className="text-xs font-bold text-slate-400 uppercase mb-1">
                  Support Level
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  {plan.support}
                </p>
              </div>

              <button
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.highlight
                    ? "bg-brand-red text-white hover:bg-brand-red-dark shadow-lg"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white p-8 rounded-2xl border border-slate-100 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-slate-600 mb-6">
            We provide bespoke IT packages for organisations with unique
            requirements. Contact our team for a tailored quote.
          </p>
          <button className="text-brand-red font-bold hover:underline">
            Contact Sales Support
          </button>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 mb-12">
              Have a question or need a quote? Our UK-based team is ready to
              help you with your IT requirements.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-brand-red-soft p-3 rounded-xl text-brand-red mr-6">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    Registered Office
                  </h3>
                  <p className="text-slate-600">{COMPANY_DETAILS.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-brand-red-soft p-3 rounded-xl text-brand-red mr-6">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    Phone Number
                  </h3>
                  <p className="text-slate-600">{COMPANY_DETAILS.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-brand-red-soft p-3 rounded-xl text-brand-red mr-6">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    Email Address
                  </h3>
                  <p className="text-slate-600">{COMPANY_DETAILS.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-brand-red-soft p-3 rounded-xl text-brand-red mr-6">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    Business Hours
                  </h3>
                  <p className="text-slate-600">{COMPANY_DETAILS.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-slate-100">
            {submitted ? (
              <div className="text-center py-20">
                <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Message Sent!
                </h2>
                <p className="text-slate-600 mb-8">
                  Thank you for contacting us. A member of our team will be in
                  touch shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-brand-red font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all"
                      placeholder="john@example.co.uk"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all"
                    placeholder="Your Company Ltd"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Service Required
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all bg-white">
                    <option>Managed IT Support</option>
                    <option>Cybersecurity</option>
                    <option>Cloud Migration</option>
                    <option>Infrastructure</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 mr-3"
                    id="privacy"
                  />
                  <label htmlFor="privacy" className="text-sm text-slate-600">
                    I consent to the processing of my data in accordance with
                    the{" "}
                    <button
                      type="button"
                      className="text-brand-red hover:underline"
                    >
                      Privacy Policy
                    </button>
                    .
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-red text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-red-dark transition-all shadow-lg"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const LegalPage = ({
  title,
  content,
}: {
  title: string;
  content: ReactNode;
}) => {
  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 lg:p-16 rounded-3xl shadow-sm border border-slate-100">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-8">
            {title}
          </h1>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "services":
        return <ServicesPage />;
      case "about":
        return <AboutPage />;
      case "pricing":
        return <PricingPage />;
      case "contact":
        return <ContactPage />;
      case "terms":
        return (
          <LegalPage
            title="Terms & Conditions"
            content={
              <>
                <p className="font-bold text-slate-900">1. Introduction</p>
                <p>
                  These terms and conditions govern your use of the services
                  provided by {COMPANY_DETAILS.name} ("the Company"). By using
                  our services, you accept these terms in full.
                </p>

                <p className="font-bold text-slate-900">2. Services</p>
                <p>
                  The Company provides IT consultancy, managed services, and
                  cybersecurity solutions. The specific scope of services will
                  be defined in a separate Service Level Agreement (SLA) or
                  Statement of Work (SOW).
                </p>

                <p className="font-bold text-slate-900">3. Payment Terms</p>
                <p>
                  All prices are quoted in Pounds Sterling (£) and are exclusive
                  of VAT unless otherwise stated. Payment is due within 30 days
                  of the invoice date unless otherwise agreed in writing. Late
                  payments may incur interest at 8% above the Bank of England
                  base rate.
                </p>

                <p className="font-bold text-slate-900">
                  4. Intellectual Property
                </p>
                <p>
                  All intellectual property rights in materials created by the
                  Company during the provision of services remain the property
                  of the Company until full payment is received, at which point
                  ownership transfers to the Client, subject to any third-party
                  licenses.
                </p>

                <p className="font-bold text-slate-900">5. Confidentiality</p>
                <p>
                  Both parties agree to keep confidential all information
                  obtained from the other party that is marked as confidential
                  or would reasonably be considered confidential in nature.
                </p>

                <p className="font-bold text-slate-900">
                  6. Limitation of Liability
                </p>
                <p>
                  The Company's total liability for any claim arising out of or
                  in connection with the services shall be limited to the total
                  fees paid by the Client for the specific service giving rise
                  to the claim.
                </p>

                <p className="font-bold text-slate-900">7. Governing Law</p>
                <p>
                  These terms and conditions are governed by and construed in
                  accordance with the laws of England and Wales. Any disputes
                  shall be subject to the exclusive jurisdiction of the courts
                  of England and Wales.
                </p>
              </>
            }
          />
        );
      case "privacy":
        return (
          <LegalPage
            title="Privacy Policy"
            content={
              <>
                <p className="font-bold text-slate-900">1. Data Collection</p>
                <p>
                  We collect personal data such as names, email addresses, and
                  phone numbers when you contact us or use our services. We also
                  collect technical data including IP addresses and cookie
                  information.
                </p>

                <p className="font-bold text-slate-900">
                  2. Purpose of Processing
                </p>
                <p>
                  We process your data to provide our IT services, respond to
                  enquiries, manage accounts, and comply with legal obligations
                  under UK GDPR.
                </p>

                <p className="font-bold text-slate-900">3. Data Retention</p>
                <p>
                  We retain personal data only for as long as necessary to
                  fulfil the purposes for which it was collected, including for
                  the purposes of satisfying any legal, accounting, or reporting
                  requirements.
                </p>

                <p className="font-bold text-slate-900">4. Your Rights</p>
                <p>
                  Under UK GDPR, you have the right to access, correct, or
                  delete your personal data. You also have the right to object
                  to processing and the right to data portability.
                </p>

                <p className="font-bold text-slate-900">5. Cookies</p>
                <p>
                  Our website uses cookies to enhance user experience and
                  analyse traffic. You can manage your cookie preferences
                  through your browser settings.
                </p>

                <p className="font-bold text-slate-900">6. Security Measures</p>
                <p>
                  We implement robust technical and organisational measures to
                  protect your data, including encryption, firewalls, and secure
                  access controls.
                </p>

                <p className="font-bold text-slate-900">7. Contact Us</p>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact our Data Protection Officer at {COMPANY_DETAILS.email}
                  .
                </p>
              </>
            }
          />
        );
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-red-soft selection:text-brand-red-dark">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
