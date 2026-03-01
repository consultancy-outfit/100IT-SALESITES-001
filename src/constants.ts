import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const COMPANY_DETAILS = {
  name: "House of St Martin",
  address: "15 Queens Road, Donnington, Telford, England, TF2 8DB",
  crn: "17048365",
  phone: "0182 329 7150",
  email: "info@houseofstmartin.co.uk",
  hours: "Mon - Fri: 09:00 - 18:00",
};
