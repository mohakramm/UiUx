import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/about", "/resume", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const studies = caseStudies.map((c) => ({
    url: `${site.url}/work/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...pages, ...studies];
}
