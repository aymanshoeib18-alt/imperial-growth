import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Static pages kept as their own HTML files in /public:
  //   /confirmed  -> public/precall.html     (after someone books: pre-call steps)
  //   /onboarding -> public/onboarding.html  (new-client onboarding)
  async rewrites() {
    return [
      { source: "/confirmed", destination: "/precall.html" },
      { source: "/onboarding", destination: "/onboarding.html" },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
