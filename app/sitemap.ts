import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = ['', '/carta', '/grupos', '/contacto', '/aviso-legal', '/privacidad', '/cookies']
  return rutas.map((r) => ({
    url: `${SITE.url}${r}`,
    lastModified: new Date(),
    changeFrequency: r === '/carta' ? 'weekly' : 'monthly',
    priority: r === '' ? 1 : r === '/carta' ? 0.9 : r === '/grupos' ? 0.8 : 0.5,
  }))
}
