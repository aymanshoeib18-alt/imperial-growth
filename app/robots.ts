import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/book", "/confirmed", "/not-a-fit"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
