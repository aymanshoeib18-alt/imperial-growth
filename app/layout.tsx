import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";
import AttributionCapture from "@/components/AttributionCapture";
import { SITE_URL } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const description =
  "We run your Meta ads and reply to every new lead within 60 seconds, so you're the first company they talk to. For window & door, outdoor living and ceramic coating companies.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Imperial Growth | Booked appointments, not shared leads",
    template: "%s | Imperial Growth",
  },
  description,
  applicationName: "Imperial Growth",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Imperial Growth",
    title: "Imperial Growth | Booked appointments, not shared leads",
    description,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imperial Growth | Booked appointments, not shared leads",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="flex min-h-dvh flex-col antialiased">
        <MetaPixel />
        <AttributionCapture />
        {children}
      </body>
    </html>
  );
}
