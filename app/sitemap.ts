import type { MetadataRoute } from "next";
import { posts } from "@/lib/blogs";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/about-us/", "/contact-us/", "/blogs/", ...posts.map((p) => `/blogs/${p.slug}/`), "/services/", ...services.map((s) => s.path), "/product/soothex-pain-relief-oil/"];
  return paths.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.8 }));
}
