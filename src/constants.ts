export const COMPANY_DETAILS = {
  name: "Telegraph House",
  address: "United Kingdom",
  crn: "12345678",
  email: "Info@telegraphhouseltd.co.uk",
};

export const SERVICES = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    description: 'Proactive monitoring and 24/7 helpdesk support for your entire infrastructure.',
    target: 'SMEs looking for reliable day-to-day IT management.',
    process: ['Audit', 'Onboarding', 'Monitoring', 'Support'],
    benefits: ['Reduced downtime', 'Fixed monthly costs', 'Expert advice'],
    price: '£250'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    description: 'Advanced threat protection, vulnerability assessments, and employee training.',
    target: 'Businesses handling sensitive data or requiring compliance.',
    process: ['Assessment', 'Implementation', 'Training', 'Review'],
    benefits: ['Data protection', 'Regulatory compliance', 'Peace of mind'],
    price: '£500'
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Migration & Strategy',
    description: 'Seamless transition to Microsoft 365, Azure, or AWS with minimal disruption.',
    target: 'Companies modernising their legacy systems.',
    process: ['Strategy', 'Migration', 'Optimisation', 'Management'],
    benefits: ['Scalability', 'Remote access', 'Cost efficiency'],
    price: '£1,200'
  },
  {
    id: 'it-consultancy',
    title: 'IT Consultancy',
    description: 'Strategic planning to align your technology with business goals.',
    target: 'Leadership teams planning for growth.',
    process: ['Discovery', 'Analysis', 'Roadmap', 'Execution'],
    benefits: ['Strategic alignment', 'ROI focus', 'Future-proofing'],
    price: '£800'
  },
  {
    id: 'disaster-recovery',
    title: 'Disaster Recovery',
    description: 'Robust backup solutions and business continuity planning.',
    target: 'Any business that cannot afford data loss.',
    process: ['Risk Analysis', 'Backup Setup', 'Testing', 'Maintenance'],
    benefits: ['Business continuity', 'Fast recovery', 'Data integrity'],
    price: '£300'
  }
];

export const PRICING_PLANS = [
  {
    name: 'Essential',
    price: '49',
    period: 'per user/month',
    features: ['Remote Support', 'Antivirus', 'Email Security', '9/5 Helpdesk'],
    support: 'Standard',
    ideal: 'Small teams starting out',
    vat: 'Excluding VAT'
  },
  {
    name: 'Professional',
    price: '89',
    period: 'per user/month',
    features: ['On-site Support', 'Advanced Security', 'Cloud Management', '24/7 Monitoring'],
    support: 'Priority',
    ideal: 'Growing businesses',
    vat: 'Excluding VAT',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '149',
    period: 'per user/month',
    features: ['Dedicated Manager', 'Strategic Roadmap', 'Full Compliance Audit', 'Unlimited Support'],
    support: 'Executive',
    ideal: 'Large organisations',
    vat: 'Excluding VAT'
  }
];
