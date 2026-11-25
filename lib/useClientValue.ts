import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * Reads a browser-only string value (URL, sessionStorage) after hydration.
 * Returns `serverValue` during prerender and the first client render.
 */
export function useClientValue<T extends string | null>(
  read: () => T,
  serverValue: T,
): T {
  return useSyncExternalStore(subscribe, read, () => serverValue);
}
