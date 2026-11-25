import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/window-door", "/outdoor-living", "/ppf", "/privacy-policy", "/sms-terms"].map(
    (p) => ({ url: `${SITE_URL}${p}` }),
  );
}
