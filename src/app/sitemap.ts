import type { MetadataRoute } from "next";
import { ZONE_IDS, VEG_SLUGS } from "@/lib/planting";
import { posts } from "@/app/blog/posts";
import { competitors } from "@/app/vs/_data";

const BASE = "https://plantingcalendar.net";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const urls: MetadataRoute.Sitemap = [];

  const staticPages = ["", "/zones", "/vegetables", "/frost-dates", "/blog", "/vs", "/about", "/contact", "/privacy-policy", "/terms"];
  for (const p of staticPages) {
    urls.push({ url: `${BASE}${p}/`, lastModified: now, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 });
  }

  for (const post of posts) {
    urls.push({ url: `${BASE}/blog/${post.slug}/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  }

  const staticBlogs = ["/blog/beginner-garden-guide", "/blog/composting-101", "/blog/soil-preparation"];
  for (const p of staticBlogs) {
    urls.push({ url: `${BASE}${p}/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  }

  for (const competitor of competitors) {
    urls.push({ url: `${BASE}/vs/${competitor.slug}/`, lastModified: now, changeFrequency: "monthly", priority: 0.55 });
  }

  for (const z of ZONE_IDS) {
    urls.push({ url: `${BASE}/zones/${z}/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  }

  for (const v of VEG_SLUGS) {
    urls.push({ url: `${BASE}/vegetables/${v}/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  }

  for (const z of ZONE_IDS) {
    for (const v of VEG_SLUGS) {
      urls.push({ url: `${BASE}/${z}/${v}/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
    }
  }

  return urls;
}
