import { Service, Testimonial, PricingPlan, CaseStudy } from './types';

export const SERVICES: Service[] = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    description: 'Comprehensive 24/7 proactive monitoring and support for your entire IT infrastructure.',
    overview: 'Our Managed IT Support provides a complete outsourcing solution for your business technology. We act as your internal IT department, ensuring your systems are always running at peak performance.',
    targetAudience: 'SMEs in the UK looking for reliable, fixed-cost IT management.',
    process: [
      'Initial Infrastructure Audit',
      'Strategic Roadmap Development',
      'Implementation of Monitoring Tools',
      'Ongoing 24/7 Support & Maintenance'
    ],
    benefits: [
      'Reduced downtime by up to 45%',
      'Predictable monthly costs',
      'Access to expert UK-based engineers',
      'Enhanced system security'
    ],
    startingPrice: 450,
    icon: 'ShieldCheck'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    description: 'Advanced threat protection, vulnerability assessments, and employee security training.',
    overview: 'Protect your business from evolving digital threats with our multi-layered security approach, including firewall management, endpoint protection, and regular audits.',
    targetAudience: 'Businesses handling sensitive data or requiring GDPR compliance assurance.',
    process: [
      'Vulnerability Assessment',
      'Security Strategy Design',
      'Deployment of Security Layers',
      'Continuous Threat Monitoring'
    ],
    benefits: [
      'Protection against ransomware and phishing',
      'Full GDPR compliance support',
      'Peace of mind for stakeholders',
      'Rapid incident response'
    ],
    startingPrice: 750,
    icon: 'Lock'
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Migration & Strategy',
    description: 'Seamless transition to Microsoft Azure or AWS with minimal business disruption.',
    overview: 'Modernise your business by moving to the cloud. We handle the entire lifecycle from strategy and planning to execution and post-migration support.',
    targetAudience: 'Companies looking to increase flexibility and reduce hardware overhead.',
    process: [
      'Cloud Readiness Assessment',
      'Migration Planning',
      'Data & Application Transfer',
      'Cloud Optimisation'
    ],
    benefits: [
      'Scalable infrastructure',
      'Remote work enablement',
      'Improved disaster recovery',
      'Lower long-term capital expenditure'
    ],
    startingPrice: 1200,
    icon: 'Cloud'
  },
  {
    id: 'it-consultancy',
    title: 'IT Consultancy & Strategy',
    description: 'Expert guidance to align your technology investments with your business goals.',
    overview: 'Get strategic advice from experienced IT directors without the full-time cost. We help you plan for growth and digital transformation.',
    targetAudience: 'Growing businesses needing high-level technical leadership.',
    process: [
      'Business Goal Alignment',
      'Technology Gap Analysis',
      'Strategic IT Roadmap',
      'Budget Planning'
    ],
    benefits: [
      'Better ROI on tech spend',
      'Future-proofed infrastructure',
      'Competitive advantage through tech',
      'Clear digital transformation path'
    ],
    startingPrice: 950,
    icon: 'BarChart3'
  },
  {
    id: 'disaster-recovery',
    title: 'Backup & Disaster Recovery',
    description: 'Robust data protection strategies to ensure business continuity in any scenario.',
    overview: 'Ensure your business can survive any data loss event. We provide automated backups and rapid recovery solutions tailored to your RTO and RPO needs.',
    targetAudience: 'Any UK business that cannot afford more than 1 hour of downtime.',
    process: [
      'Data Criticality Assessment',
      'Backup Solution Design',
      'Regular Testing & Drills',
      '24/7 Recovery Support'
    ],
    benefits: [
      'Guaranteed data integrity',
      'Minimal downtime during disasters',
      'Compliance with industry standards',
      'Automated, worry-free backups'
    ],
    startingPrice: 300,
    icon: 'Database'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alistair Graham',
    role: 'Managing Director',
    company: 'Yorkshire Textiles Ltd',
    content: "St Anne's Leeds IT has transformed how we operate. Their managed support is proactive and their response times are exceptional. Highly recommended for any UK business."
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    role: 'Operations Manager',
    company: 'Leeds Legal Associates',
    content: 'The cybersecurity audit they performed was eye-opening. We now feel much more secure and our clients appreciate our commitment to data protection.'
  },
  {
    id: '3',
    name: 'David Thompson',
    role: 'Founder',
    company: 'Northern Tech Hub',
    content: 'Moving to the cloud seemed daunting, but the team made it seamless. Our team can now work from anywhere with zero friction.'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Essential Support',
    price: 450,
    features: [
      'Remote IT Support',
      'Antivirus Management',
      'Patch Management',
      'Monthly Health Reports',
      '9am - 5pm Helpdesk'
    ],
    support: 'Business Hours',
    idealFor: 'Small teams up to 10 people'
  },
  {
    id: 'pro',
    name: 'Business Pro',
    price: 850,
    features: [
      'Everything in Essential',
      'On-site Support Included',
      'Advanced Security Suite',
      'Cloud Backup (500GB)',
      'Priority 1-hour Response',
      'vCIO Strategic Reviews'
    ],
    support: '24/7 Critical Support',
    idealFor: 'Growing SMEs (10-50 employees)',
    isPopular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise Managed',
    price: 1500,
    features: [
      'Everything in Pro',
      'Dedicated Account Manager',
      'Full Infrastructure Management',
      'Unlimited Cloud Backup',
      'Compliance & Audit Support',
      'Custom IT Roadmap'
    ],
    support: 'Full 24/7 Support',
    idealFor: 'Large organisations (50+ employees)'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'Infrastructure Modernisation',
    client: 'Midlands Manufacturing',
    challenge: 'Legacy servers causing frequent downtime and lost productivity.',
    solution: 'Full cloud migration to Azure and network hardware refresh.',
    result: 'Zero unplanned downtime over 12 months.',
    roi: '£25,000 annual savings in maintenance costs.'
  },
  {
    id: 'cs2',
    title: 'Cybersecurity Overhaul',
    client: 'South Coast Logistics',
    challenge: 'Increased phishing attacks and lack of security awareness.',
    solution: 'Implemented multi-factor authentication and staff training program.',
    result: '90% reduction in successful security incidents.',
    roi: 'Estimated £100,000 risk mitigation value.'
  }
];

export const COMPANY_DETAILS = {
  name: "St Anne's Leeds Domiciliary Care 3",
  address: "Not Available",
  crn: "Not Available",
  phone: "Not Available",
  email: "Not Available",
  hours: "Monday - Friday: 09:00 - 17:30",
  governingLaw: "England and Wales"
};
