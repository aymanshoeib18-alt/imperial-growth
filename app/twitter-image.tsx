import { ImageResponse } from "next/og";
import { publicPng } from "@/lib/brandImage";

export const alt = "Imperial Growth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Black card with the square mark (/public/icon.png) above the wordmark
// (/public/logo.png). Replacing either file updates this on the next deploy.
export default async function Image() {
  const [icon, logo] = await Promise.all([publicPng("icon.png"), publicPng("logo.png")]);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0A0A0A",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
        }}
      >
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={icon} width={260} height={260} />
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={logo} width={600} height={120} style={{ objectFit: "contain" }} />
      </div>
    ),
    size,
  );
}
