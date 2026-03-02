export interface CompanyDetails {
  name: string;
  address: string;
  crn: string;
  phone: string;
  email: string;
  hours: string;
}

export interface NavItem {
  label: string;
  id: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  target: string;
  process: string[];
  benefits: string[];
  startingPrice: string;
  icon: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  support: string;
  idealFor: string;
  cta: string;
  popular?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
}

export interface CaseStudy {
  title: string;
  client: string;
  result: string;
  description: string;
}
