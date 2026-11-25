import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";
import AttributionCapture from "@/components/AttributionCapture";
import RevealObserver from "@/components/RevealObserver";
import { SITE_URL } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const description =
  "Stop paying for leads your competitors already called. We script and run Meta ads that bring in leads only you get, plus the system that alerts you, tracks every lead and sends the reminders.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Imperial Growth | Leads only you get",
    template: "%s | Imperial Growth",
  },
  description,
  applicationName: "Imperial Growth",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Imperial Growth",
    title: "Imperial Growth | Leads only you get",
    description,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imperial Growth | Leads only you get",
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
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Scroll-reveal styles only apply once JS runs, so content is never hidden without it. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body className="flex min-h-dvh flex-col antialiased">
        <MetaPixel />
        <AttributionCapture />
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
