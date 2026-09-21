import type { MetadataRoute } from 'next'

const siteUrl = 'https://www.shefoundation.or.tz'

const routes = ['', '/about', '/what-we-do', '/volunteer', '/partner', '/news-and-insights', '/contact', '/donate']

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/donate' ? 0.9 : 0.7,
  }))
}
