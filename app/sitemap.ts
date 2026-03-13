import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://builtwrightconstructioninc.ca'

  // Main Pages
  const routes = [
    '',
    '/about',
    '/contact',
    '/journey',
    '/projects',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  }))

  // Process Pages
  const processRoutes = [
    '/process/discovery',
    '/process/design',
    '/process/fabrication',
    '/process/installation',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Service Divisions (The Hardcore SEO targets)
  const serviceRoutes = [
    '/services/commercial-office',
    '/services/custom-cabinetry',
    '/services/custom-luxury-homes',
    '/services/designer-kitchen-bath',
    '/services/high-end-renovations',
    '/services/outdoor-living',
    '/services/project-management',
    '/services/smart-home-mechanical',
    '/services/structural-engineering',
    '/services/sustainable-building',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [...routes, ...processRoutes, ...serviceRoutes]
}