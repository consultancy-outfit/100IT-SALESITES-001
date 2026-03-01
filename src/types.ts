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

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  support: string;
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
  description: string;
  result: string;
}

export const COMPANY_DETAILS = {
  name: "Cera Castleham Lodge",
  address: "15 Queens Road, Donnington, Telford, England, TF2 8DB",
  crn: "17048491",
  phone: "0183 733 2050",
  email: "info@ceracastlehamlodge.co.uk",
  hours: "Mon - Fri: 09:00 - 17:30",
};
