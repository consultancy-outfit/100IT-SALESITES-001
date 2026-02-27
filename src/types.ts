export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  targetAudience: string;
  process: string[];
  benefits: string[];
  startingPrice: number;
  icon: string;
}

export interface PricingTier {
  name: string;
  price: number;
  features: string[];
  supportLevel: string;
  idealClient: string;
  cta: string;
  highlighted?: boolean;
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
  savings: string;
}
