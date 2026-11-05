import type { MetadataRoute } from 'next'
import { SITE, INDEXABLE } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: INDEXABLE ? { userAgent: '*', allow: '/' } : { userAgent: '*', disallow: '/' },
    sitemap: `${SITE.url}/sitemap.xml`,
  }
}
