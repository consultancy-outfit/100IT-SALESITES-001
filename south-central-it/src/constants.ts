import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const COMPANY_DETAILS = {
  name: "South Central Supported Living",
  address: "#####",
  crn: "#####",
  phone: "#####",
  email: "#####",
  hours: "Mon - Fri: 08:30 - 18:00",
};
