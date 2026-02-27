import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const COMPANY_DETAILS = {
  name: "West Lancs Domiciliary Service",
  address: "124 Burscough Street, Ormskirk, Lancashire, L39 2EY, United Kingdom",
  crn: "08421567",
  phone: "+44 1695 570000",
  email: "info@westlancs-it.co.uk",
  hours: "Mon - Fri: 09:00 - 17:30",
};
