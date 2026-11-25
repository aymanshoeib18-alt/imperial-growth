import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Reads a PNG from /public as a data URL, for next/og image routes. */
export async function publicPng(file: string) {
  const buf = await readFile(join(process.cwd(), "public", file));
  return `data:image/png;base64,${buf.toString("base64")}`;
}
