export interface Service {
  id: string;
  title: string;
  description: string;
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
  content: string;
}

export interface CaseStudy {
  title: string;
  client: string;
  result: string;
  description: string;
}
