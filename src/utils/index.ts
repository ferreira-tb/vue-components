import { twMerge } from 'tailwind-merge';
import { type ClassValue, clsx } from 'clsx';

export type { ClassValue };

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
