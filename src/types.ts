export interface Service {
  id: string;
  title: string;
  overview: string;
  targetAudience: string;
  process: string[];
  benefits: string[];
  startingPrice: string;
  icon: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  supportLevel: string;
  idealClient: string;
  vatInfo: string;
  cta: string;
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
  challenge: string;
  solution: string;
  result: string;
}
