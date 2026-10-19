import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = ['', '/carta', '/contacto', '/aviso-legal', '/privacidad', '/cookies']
  return rutas.map((r) => ({
    url: `${SITE.url}${r}`,
    lastModified: new Date(),
    changeFrequency: r === '/carta' ? 'weekly' : 'monthly',
    priority: r === '' ? 1 : r === '/carta' ? 0.9 : 0.5,
  }))
}
