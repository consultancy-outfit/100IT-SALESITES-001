export interface Service {
  id: string;
  title: string;
  overview: string;
  target: string;
  process: string[];
  benefits: string[];
  startingPrice: number;
}

export interface PricingPlan {
  name: string;
  price: number | string;
  unit: string;
  features: string[];
  supportLevel: string;
  idealFor: string;
  vatInfo: string;
  popular?: boolean;
}
