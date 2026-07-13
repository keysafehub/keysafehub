import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://keysafehub.eu'

  const routes = [
    { path: '', priority: 1.0, freq: 'daily' },
    { path: '/windows', priority: 0.9, freq: 'weekly' },
    { path: '/office', priority: 0.9, freq: 'weekly' },
    { path: '/antivirus', priority: 0.9, freq: 'weekly' },
    { path: '/bundle', priority: 0.9, freq: 'weekly' },
    { path: '/guide', priority: 0.7, freq: 'weekly' },
    { path: '/faq', priority: 0.7, freq: 'weekly' },
    { path: '/contatti', priority: 0.6, freq: 'monthly' },
    { path: '/recensioni', priority: 0.6, freq: 'weekly' },
    { path: '/privacy-policy', priority: 0.3, freq: 'monthly' },
    { path: '/termini-condizioni', priority: 0.3, freq: 'monthly' },
    { path: '/garanzia-resi', priority: 0.4, freq: 'monthly' },
    { path: '/informazioni-licenze', priority: 0.5, freq: 'monthly' },
  ]

  return routes.map(({ path, priority, freq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: freq as any,
    priority,
  }))
}
