import { Service, PricingPlan, Testimonial, CaseStudy } from './types';

export const SERVICES: Service[] = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    description: 'Proactive 24/7 monitoring and support for your entire IT infrastructure.',
    overview: 'Our comprehensive managed IT support ensures your business stays online and productive. We handle everything from desktop support to server maintenance.',
    targetAudience: 'SMEs looking for a reliable outsourced IT department.',
    process: ['Initial Audit', 'Infrastructure Setup', '24/7 Monitoring', 'Monthly Reporting'],
    benefits: ['Reduced Downtime', 'Predictable Costs', 'Expert Advice', 'Enhanced Security'],
    startingPrice: 250,
    icon: 'Monitor'
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Migration & Strategy',
    description: 'Seamless transition to Microsoft 365, Azure, or AWS with expert guidance.',
    overview: 'Move your business to the cloud with confidence. We provide strategy, migration, and ongoing management for cloud-first environments.',
    targetAudience: 'Businesses aiming for scalability and remote work flexibility.',
    process: ['Cloud Readiness Assessment', 'Migration Planning', 'Data Transfer', 'Staff Training'],
    benefits: ['Scalability', 'Remote Access', 'Cost Efficiency', 'Disaster Recovery'],
    startingPrice: 1500,
    icon: 'Cloud'
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security & Compliance',
    description: 'Protecting your business from evolving threats with enterprise-grade security.',
    overview: 'We implement multi-layered security protocols, including firewalls, encryption, and employee training to safeguard your data.',
    targetAudience: 'Companies handling sensitive data or requiring GDPR compliance.',
    process: ['Vulnerability Scan', 'Security Implementation', 'Employee Training', 'Continuous Auditing'],
    benefits: ['Data Protection', 'Regulatory Compliance', 'Peace of Mind', 'Threat Prevention'],
    startingPrice: 500,
    icon: 'ShieldCheck'
  },
  {
    id: 'it-consultancy',
    title: 'Strategic IT Consultancy',
    description: 'Aligning your technology roadmap with your long-term business goals.',
    overview: 'Our consultants work with your leadership team to develop a technology strategy that drives growth and innovation.',
    targetAudience: 'Growing businesses needing high-level technical direction.',
    process: ['Business Goal Analysis', 'Tech Roadmap Design', 'Vendor Selection', 'Implementation Oversight'],
    benefits: ['Strategic Alignment', 'Informed Decision Making', 'Future-Proofing', 'ROI Optimization'],
    startingPrice: 1200,
    icon: 'Lightbulb'
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    description: 'Robust, high-speed networking solutions for modern office environments.',
    overview: 'From structured cabling to high-performance Wi-Fi, we build the foundations of your digital business.',
    targetAudience: 'New office fit-outs or businesses experiencing network bottlenecks.',
    process: ['Site Survey', 'Network Design', 'Installation', 'Performance Testing'],
    benefits: ['High Speed', 'Reliable Connectivity', 'Secure Access', 'Scalable Design'],
    startingPrice: 2000,
    icon: 'Network'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Essential',
    price: '£25',
    features: ['Remote Support', 'Antivirus Included', 'Patch Management', 'Email Support'],
    supportLevel: 'Business Hours',
    idealFor: 'Small startups and solo entrepreneurs',
    cta: 'Get Started'
  },
  {
    name: 'Professional',
    price: '£45',
    features: ['On-site Support', 'Cloud Backup', 'Security Awareness Training', 'Priority Response'],
    supportLevel: '24/7 Critical Support',
    idealFor: 'Growing SMEs with 10-50 employees',
    cta: 'Most Popular',
    highlight: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Dedicated Account Manager', 'Full Infrastructure Management', 'Compliance Auditing', 'Unlimited Support'],
    supportLevel: '24/7 Dedicated Support',
    idealFor: 'Large organisations with complex needs',
    cta: 'Contact Sales'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Alistair Graham',
    role: 'Managing Director',
    company: 'Mersey Logistics Ltd',
    content: 'Sterling Standard transformed our outdated systems into a modern, cloud-based powerhouse. Their support team is second to none.'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Operations Manager',
    company: 'Cotswold Creative',
    content: 'Switching to their managed IT service was the best decision we made this year. We finally have peace of mind regarding our data security.'
  },
  {
    name: 'David Thompson',
    role: 'Founder',
    company: 'Thompson & Co Solicitors',
    content: 'Professional, reliable, and incredibly knowledgeable. They understand the specific compliance needs of the UK legal sector.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Cloud Transformation for Retailer',
    client: 'Northern Fashion Hub',
    challenge: 'Legacy on-premise servers causing frequent downtime during peak sales.',
    solution: 'Full migration to Azure with auto-scaling capabilities.',
    result: 'Zero downtime during Black Friday and £12,000 annual savings on hardware maintenance.'
  },
  {
    title: 'Cyber Security Overhaul',
    client: 'Liverpool Health Group',
    challenge: 'Increasing phishing attempts and outdated firewall protection.',
    solution: 'Implemented multi-factor authentication and advanced threat protection.',
    result: '100% reduction in successful security breaches and full GDPR compliance achieved.'
  }
];
