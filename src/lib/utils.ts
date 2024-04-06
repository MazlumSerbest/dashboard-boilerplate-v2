import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function DateFormat(date?: string) {
  let formattedDate;

  date
      ? (formattedDate = new Date(date).toLocaleDateString("tr-TR"))
      : (formattedDate = "-");

  return formattedDate;
}

export function DateTimeFormat(date?: string) {
  let formattedDate;
  date
      ? (formattedDate = new Date(date).toLocaleString("tr-TR", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        }))
      : (formattedDate = "-");

  return formattedDate;
}
