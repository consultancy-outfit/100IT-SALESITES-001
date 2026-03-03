export interface Service {
  id: string;
  title: string;
  description: string;
  overview: string;
  targetAudience: string;
  process: string[];
  benefits: string[];
  startingPrice: string;
  icon: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  supportLevel: string;
  idealFor: string;
  isPopular?: boolean;
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
  challenge: string;
  solution: string;
  result: string;
}
