import { 
  ShieldCheck, 
  CloudLightning, 
  Headphones, 
  BarChart, 
  Network, 
  Cpu,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Managed IT Support',
    overview: 'Full-spectrum IT management for your business, acting as your dedicated internal IT department.',
    target: 'SMEs with 10-250 employees looking for reliable, 24/7 support.',
    process: ['Audit', 'Onboarding', 'Proactive Monitoring', 'Helpdesk Support'],
    benefits: ['Reduced downtime', 'Fixed monthly costs', 'Expert advice on tap'],
    price: '£450',
    icon: Headphones,
  },
  {
    title: 'Cybersecurity Solutions',
    overview: 'Enterprise-grade protection against ransomware, phishing, and data breaches.',
    target: 'Businesses handling sensitive client data or under strict compliance requirements.',
    process: ['Vulnerability Scan', 'Strategy Design', 'Implementation', 'Staff Training'],
    benefits: ['Peace of mind', 'Compliance assurance', 'Insurance premium reduction'],
    price: '£750',
    icon: ShieldCheck,
  },
  {
    title: 'Cloud Infrastructure',
    overview: 'Seamless migration and management of cloud environments (Azure, AWS, Google Cloud).',
    target: 'Companies looking to move away from physical servers or improve remote work capabilities.',
    process: ['Readiness Assessment', 'Migration Planning', 'Execution', 'Optimization'],
    benefits: ['Scalability', 'Remote accessibility', 'Lower hardware costs'],
    price: '£950',
    icon: CloudLightning,
  },
  {
    title: 'IT Consultancy & Strategy',
    overview: 'High-level technical leadership to align your technology with your business goals.',
    target: 'Growing companies needing a vCTO (Virtual Chief Technology Officer).',
    process: ['Business Review', 'Tech Roadmap', 'Budgeting', 'Quarterly Reviews'],
    benefits: ['Strategic alignment', 'Informed decision making', 'Future-proofing'],
    price: '£1,200',
    icon: BarChart,
  },
  {
    title: 'Network Design & Security',
    overview: 'Robust, high-speed networking solutions that keep your team connected and secure.',
    target: 'Offices requiring high-performance Wi-Fi, VPNs, and secure internal networks.',
    process: ['Site Survey', 'Network Design', 'Installation', 'Ongoing Management'],
    benefits: ['Reliable connectivity', 'Secure remote access', 'Optimised performance'],
    price: '£600',
    icon: Network,
  },
  {
    title: 'Disaster Recovery',
    overview: 'Comprehensive backup and recovery plans to ensure your business survives any catastrophe.',
    target: 'Any business where data loss would be critical to operations.',
    process: ['Risk Assessment', 'Backup Strategy', 'Testing', 'Disaster Simulation'],
    benefits: ['Zero data loss', 'Rapid recovery', 'Business continuity'],
    price: '£400',
    icon: Cpu,
  },
];

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-600 uppercase tracking-wide">Our Expertise</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Comprehensive IT Services for the Modern Enterprise
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            We provide end-to-end technology solutions that empower your team to work smarter, faster, and more securely.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-brand-300 transition-colors shadow-sm">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold leading-7 text-slate-900">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600 flex-grow">
                  {service.overview}
                </p>
                
                <div className="mt-8 space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Target Audience</h4>
                    <p className="mt-1 text-sm text-slate-700">{service.target}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Our Process</h4>
                    <ul className="mt-2 grid grid-cols-2 gap-2">
                      {service.process.map((step) => (
                        <li key={step} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle className="h-3 w-3 text-brand-500" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-slate-200">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-medium text-slate-500">Starting from</span>
                      <span className="text-2xl font-bold text-slate-900">{service.price}</span>
                      <span className="text-sm font-medium text-slate-500">/mo</span>
                    </div>
                    <Link
                      to="/contact"
                      className="mt-6 block w-full rounded-full bg-white border border-brand-600 px-3 py-2 text-center text-sm font-semibold text-brand-600 hover:bg-brand-600 hover:text-white transition-all"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
