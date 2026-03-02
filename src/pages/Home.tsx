import { Link } from 'react-router-dom';
import { 
  Shield, 
  Cloud, 
  Zap, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  Lock, 
  BarChart3,
  Quote
} from 'lucide-react';

const stats = [
  { label: 'Client Retention', value: '98%' },
  { label: 'Response Time', value: '< 15m' },
  { label: 'Uptime Guarantee', value: '99.9%' },
  { label: 'Project ROI', value: '£2.4M+' },
];

const benefits = [
  {
    name: 'Proactive Monitoring',
    description: 'We spot issues before they become problems, ensuring your business stays online 24/7.',
    icon: Shield,
  },
  {
    name: 'Cloud-First Strategy',
    description: 'Modernise your infrastructure with scalable cloud solutions tailored for UK SMEs.',
    icon: Cloud,
  },
  {
    name: 'Cybersecurity Excellence',
    description: 'Protect your data with enterprise-grade security protocols and GDPR compliance.',
    icon: Lock,
  },
  {
    name: 'Strategic Partnership',
    description: 'We don’t just fix computers; we help you leverage technology to grow your revenue.',
    icon: Users,
  },
];

const caseStudies = [
  {
    title: 'Financial Services Migration',
    client: 'Midlands Wealth Management',
    result: '£45,000 annual savings',
    description: 'Seamlessly migrated legacy on-premise servers to a secure Azure environment.',
  },
  {
    title: 'Retail Infrastructure Overhaul',
    client: 'London Boutique Group',
    result: '30% increase in efficiency',
    description: 'Implemented a unified POS and inventory system across 12 UK locations.',
  },
];

const testimonials = [
  {
    content: "Attaining Independence transformed our IT from a headache into a competitive advantage. Their response times are unmatched.",
    author: "James Harrison",
    role: "Operations Director, Harrison Logistics",
  },
  {
    content: "The cybersecurity audit they performed saved us from a potential breach. Professional, knowledgeable, and very British in their approach.",
    author: "Sarah Jenkins",
    role: "CEO, Jenkins & Co Legal",
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-slate-900 pb-16 pt-14 sm:pb-20">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-400 ring-1 ring-white/10 hover:ring-white/20">
                Trusted by 200+ UK Businesses.{' '}
                <Link to="/about" className="font-semibold text-white">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read our story <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Empowering Your Business Through <span className="text-brand-400">IT Excellence</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Attaining Independence provides managed IT services, cybersecurity, and cloud solutions designed to help UK businesses thrive in a digital-first world.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-full bg-brand-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-all"
              >
                Book a Free Audit
              </Link>
              <Link to="/services" className="text-sm font-semibold leading-6 text-white flex items-center gap-1 group">
                View Services <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-slate-600">{stat.label}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Benefits section */}
      <div className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-600 uppercase tracking-wide">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to scale your IT infrastructure
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We provide a comprehensive suite of services designed to eliminate technical friction and protect your most valuable digital assets.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {benefits.map((benefit) => (
                <div key={benefit.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                    <benefit.icon className="h-5 w-5 flex-none text-brand-600" aria-hidden="true" />
                    {benefit.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                    <p className="flex-auto">{benefit.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Real Results for UK Clients</h2>
            <p className="mt-2 text-lg leading-8 text-slate-600">
              See how we've helped businesses across the country achieve their digital goals.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {caseStudies.map((study) => (
              <article key={study.title} className="flex flex-col items-start justify-between bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-x-4 text-xs">
                  <span className="text-brand-600 font-bold uppercase tracking-wider">{study.client}</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-xl font-semibold leading-6 text-slate-900 group-hover:text-brand-600">
                    {study.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">{study.description}</p>
                </div>
                <div className="mt-8 flex items-center gap-x-2 text-brand-700 font-semibold">
                  <CheckCircle2 className="h-5 w-5" />
                  {study.result}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-slate-900 py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <Quote className="absolute -top-10 -left-10 h-64 w-64 text-white/5 -z-0" />
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-brand-400">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by leaders across the UK
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="flex flex-col bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                <blockquote className="flex-auto text-lg leading-8 text-slate-300">
                  <p>“{testimonial.content}”</p>
                </blockquote>
                <div className="mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-slate-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-brand-600 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to secure your business future?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-brand-100">
              Get in touch today for a comprehensive IT audit and discover how we can help you attain true technological independence.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-brand-600 shadow-sm hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
              >
                Contact Us Now
              </Link>
              <Link to="/pricing" className="text-sm font-semibold leading-6 text-white">
                View Pricing <span aria-hidden="true">→</span>
              </Link>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce4c-41a0-b391-471d28fd145e)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="827591b1-ce4c-41a0-b391-471d28fd145e">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
