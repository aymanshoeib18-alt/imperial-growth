import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Imperial Growth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Black background with the logo from /public/logo.png. Replacing the logo
// file updates this image on the next deploy.
export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/logo.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0A0A0A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={src} width={800} height={160} style={{ objectFit: "contain" }} />
      </div>
    ),
    size,
  );
}
