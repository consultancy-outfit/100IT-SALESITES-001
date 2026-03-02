import { Shield, Target, Heart, Users, Award, Building2 } from 'lucide-react';

const values = [
  {
    name: 'Integrity',
    description: 'We believe in honest, transparent communication. No technical jargon, just clear solutions.',
    icon: Shield,
  },
  {
    name: 'Excellence',
    description: 'We strive for perfection in every ticket, project, and strategic roadmap we deliver.',
    icon: Award,
  },
  {
    name: 'Innovation',
    description: 'We stay ahead of the curve so you don’t have to, bringing the latest tech to your business.',
    icon: Target,
  },
  {
    name: 'Client-Centric',
    description: 'Your success is our success. We build long-term partnerships, not just client lists.',
    icon: Heart,
  },
];

const leadership = [
  {
    name: 'Alistair Sterling',
    role: 'Founder & Managing Director',
    bio: 'With over 20 years in UK enterprise IT, Alistair founded Attaining Independence to bring corporate-level tech to the SME market.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
  },
  {
    name: 'Eleanor Vance',
    role: 'Technical Operations Director',
    bio: 'Eleanor leads our support and engineering teams, ensuring our 15-minute response time guarantee is always met.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
  },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">Our Story</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Founded in Telford, Attaining Independence was born from a simple observation: UK small and medium businesses were being underserved by traditional IT providers. We set out to change that by providing enterprise-grade technology with a personal, local touch.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-white">Our Mission</h3>
              <p className="mt-4 text-lg text-slate-300">
                To empower UK businesses by providing seamless, secure, and scalable IT solutions that foster growth and independence from technical limitations.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-white">Our Vision</h3>
              <p className="mt-4 text-lg text-slate-300">
                To be the most trusted IT partner in the UK, recognised for our technical excellence, proactive support, and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-600 uppercase tracking-wide">Our Values</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              The principles that guide our work
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                    <value.icon className="h-5 w-5 flex-none text-brand-600" aria-hidden="true" />
                    {value.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Leadership Team</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our experienced directors bring decades of expertise to help steer your business toward technical success.
            </p>
          </div>
          <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {leadership.map((person) => (
              <li key={person.name} className="flex flex-col gap-6 sm:flex-row">
                <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.image} alt="" referrerPolicy="no-referrer" />
                <div className="flex-auto">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-slate-900">{person.name}</h3>
                  <p className="text-base leading-7 text-brand-600">{person.role}</p>
                  <p className="mt-6 text-base leading-7 text-slate-600">{person.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* GDPR Commitment */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl bg-brand-600 px-6 py-16 sm:p-16 lg:flex lg:items-center lg:justify-between">
            <div className="lg:max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Commitment to GDPR Compliance</h2>
              <p className="mt-6 text-lg leading-8 text-brand-100">
                Data privacy isn't just a legal requirement for us; it's a core value. We ensure all our systems and processes are fully GDPR compliant, protecting both your business and your clients' information.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-none">
              <div className="flex items-center gap-x-2 text-white font-semibold">
                <Shield className="h-8 w-8" />
                <span>ISO 27001 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
