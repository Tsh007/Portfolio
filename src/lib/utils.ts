import { type ClassValue, clsx } from "clsx";

/** Merge conditional class names. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** True once a URL string is present and non-empty (placeholders still count). */
export function hasUrl(url?: string | null): url is string {
  return typeof url === "string" && url.trim().length > 0;
}
