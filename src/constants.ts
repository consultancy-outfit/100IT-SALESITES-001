import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const COMPANY_DETAILS = {
  name: "House of St Martin",
  address: "124 City Road, London, EC1V 2NX, United Kingdom",
  crn: "08123456",
  phone: "+44 20 7946 0000",
  email: "info@houseofstmartin.co.uk",
  hours: "Mon - Fri: 09:00 - 18:00",
};
