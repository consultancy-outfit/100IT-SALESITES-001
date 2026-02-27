import { Service, PricingPlan, Testimonial, CaseStudy } from './types';

export const SERVICES: Service[] = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    description: 'Comprehensive 24/7 proactive monitoring and support for your entire IT infrastructure.',
    audience: 'SMEs and growing UK businesses needing reliable IT oversight.',
    process: ['Initial Audit', 'Infrastructure Setup', '24/7 Monitoring', 'Monthly Reporting'],
    benefits: ['Reduced Downtime', 'Predictable Costs', 'Expert Guidance', 'Scalability'],
    startingPrice: '£450',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    description: 'Advanced threat protection, vulnerability assessments, and employee security training.',
    audience: 'Businesses handling sensitive data or operating in regulated UK sectors.',
    process: ['Risk Assessment', 'Security Implementation', 'Employee Training', 'Incident Response Plan'],
    benefits: ['Data Protection', 'Regulatory Compliance', 'Peace of Mind', 'Brand Reputation'],
    startingPrice: '£750',
    icon: 'Lock',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Migration & Strategy',
    description: 'Seamless transition to Microsoft Azure or AWS with minimal business disruption.',
    audience: 'Companies looking to modernize their legacy systems and enable remote work.',
    process: ['Cloud Readiness Assessment', 'Migration Planning', 'Execution', 'Post-Migration Optimization'],
    benefits: ['Remote Accessibility', 'Cost Efficiency', 'Enhanced Collaboration', 'Disaster Recovery'],
    startingPrice: '£1,200',
    icon: 'Cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: 'it-consultancy',
    title: 'Strategic IT Consultancy',
    description: 'Expert advice to align your technology roadmap with your business objectives.',
    audience: 'Leadership teams seeking to leverage technology for competitive advantage.',
    process: ['Business Goal Alignment', 'Technology Gap Analysis', 'Roadmap Development', 'Implementation Oversight'],
    benefits: ['Strategic Growth', 'Optimized ROI', 'Future-Proofing', 'Efficiency Gains'],
    startingPrice: '£950',
    icon: 'Lightbulb',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    description: 'Design and implementation of robust, high-speed wired and wireless networks.',
    audience: 'Offices and warehouses requiring high-performance connectivity.',
    process: ['Site Survey', 'Network Design', 'Installation', 'Performance Testing'],
    benefits: ['High Speed', 'Reliability', 'Secure Access', 'Future Scalability'],
    startingPrice: '£1,500',
    icon: 'Network',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=600'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Essential',
    price: '£299',
    features: ['Remote Support', 'Antivirus Management', 'Patch Management', 'Monthly Health Check'],
    support: '9am - 5pm Mon-Fri',
    idealFor: 'Micro-businesses (1-5 users)',
    vatInfo: 'Excluding VAT'
  },
  {
    name: 'Professional',
    price: '£649',
    features: ['On-site & Remote Support', 'Advanced Security Suite', 'Cloud Backup (1TB)', 'Priority Response', 'Vulnerability Scanning'],
    support: '8am - 6pm Mon-Fri',
    idealFor: 'Growing SMEs (6-25 users)',
    vatInfo: 'Excluding VAT'
  },
  {
    name: 'Enterprise',
    price: '£1,499',
    features: ['24/7 Support', 'Dedicated Account Manager', 'Unlimited Cloud Backup', 'Disaster Recovery Planning', 'Full Compliance Auditing'],
    support: '24/7/365',
    idealFor: 'Large Organizations (25+ users)',
    vatInfo: 'Excluding VAT'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'James Harrison',
    role: 'Managing Director',
    company: 'Thames Logistics Ltd',
    content: 'Kanmore House transformed our IT infrastructure. Their proactive approach to security has given us complete peace of mind.'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Operations Manager',
    company: 'Kent Creative Agency',
    content: 'The transition to the cloud was seamless. We haven\'t had a single hour of downtime since switching to their managed services.'
  },
  {
    name: 'Robert Miller',
    role: 'Finance Director',
    company: 'Surrey Legal Partners',
    content: 'Expert consultancy that actually understands the UK legal sector. Their ROI-focused strategy has been a game-changer for us.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Retail Chain Digital Overhaul',
    industry: 'Retail',
    result: '£45,000 annual savings',
    description: 'Consolidated legacy servers into a hybrid cloud model, reducing energy costs and maintenance overheads.'
  },
  {
    title: 'Cybersecurity Fortification',
    industry: 'Financial Services',
    result: '100% threat mitigation',
    description: 'Implemented multi-layered security protocols for a London-based firm, preventing multiple high-level phishing attempts.'
  }
];
