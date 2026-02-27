export interface Service {
  id: string;
  title: string;
  description: string;
  audience: string;
  process: string[];
  benefits: string[];
  startingPrice: string;
  icon: string;
  image: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  support: string;
  idealFor: string;
  vatInfo: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
}

export interface CaseStudy {
  title: string;
  industry: string;
  result: string;
  description: string;
}
