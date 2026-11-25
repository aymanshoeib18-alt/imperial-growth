import { ImageResponse } from "next/og";
import { publicPng } from "@/lib/brandImage";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Generated from /public/icon.png (the square "I" mark). Replace that file to update.
export default async function Icon() {
  const src = await publicPng("icon.png");
  return new ImageResponse(
    // eslint-disable-next-line jsx-a11y/alt-text
    <img src={src} width={64} height={64} />,
    size,
  );
}
