export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  targetAudience: string;
  process: string[];
  benefits: string[];
  startingPrice: string;
  icon: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
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
  challenge: string;
  solution: string;
  result: string;
  value: string;
}
