import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { allServicesCatalog } from "@/data/services";
import { portfolioProjects } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Base static routes
  const staticRoutes = [
    "",
    "/about",
    "/about/process",
    "/services",
    "/portfolio",
    "/films",
    "/testimonials",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic service detail routes
  const serviceRoutes = allServicesCatalog.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Dynamic portfolio project detail routes
  const projectRoutes = portfolioProjects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
