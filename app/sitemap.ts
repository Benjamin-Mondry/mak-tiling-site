import type { MetadataRoute } from 'next'

import { navLinks, siteMeta } from '@/src/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return navLinks.map((link) => ({
    url: `${siteMeta.siteUrl}${link.href}`,
    lastModified,
    changeFrequency: link.href === '/' ? 'weekly' : 'monthly',
    priority: link.href === '/' ? 1 : 0.8,
  }))
}
