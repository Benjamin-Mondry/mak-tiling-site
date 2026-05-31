import type { MetadataRoute } from 'next'

import { siteMeta } from '@/src/data'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteMeta.siteUrl}/sitemap.xml`,
    host: siteMeta.siteUrl,
  }
}
