export type FotoGaleria = {
  src: string
  alt: string
  zona: 'Comedor' | 'Barra' | 'Terraza'
}

// Fotos reales del local que pasó el dueño (31/10 y 02/11/2026), convertidas a WebP sin datos EXIF/GPS.
// Fotos sin clientes reconocibles. No usar aquí imágenes generadas o retocadas con IA.
export const GALERIA: FotoGaleria[] = [
  { src: '/img/local/comedor-bodega.webp', alt: 'Comedor de Restaurante Parra con mesas vestidas y botellero de vinos', zona: 'Comedor' },
  { src: '/img/local/comedor-salon.webp', alt: 'Segundo comedor con paredes claras, apliques de forja y mesas vestidas', zona: 'Comedor' },
  { src: '/img/local/barra.webp', alt: 'Barra de madera del bar de Restaurante Parra con taburetes', zona: 'Barra' },
  { src: '/img/local/barra-cafetera.webp', alt: 'Barra con cafetera y copas colgadas sobre la barra', zona: 'Barra' },
  { src: '/img/local/terraza-calle.webp', alt: 'Terraza en la calle de los Panaderos con la sierra al fondo', zona: 'Terraza' },
  { src: '/img/local/terraza.webp', alt: 'Terraza junto a la entrada con el toldo de Restaurante Parra', zona: 'Terraza' },
]
