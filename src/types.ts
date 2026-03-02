export interface Service {
  id: string;
  title: string;
  description: string;
  targetAudience: string;
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
  supportLevel: string;
  idealFor: string;
  cta: string;
  highlight?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
}

export interface CaseStudy {
  title: string;
  challenge: string;
  solution: string;
  result: string;
  value: string;
}
