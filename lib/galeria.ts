export type Foto = {
  src: string
  alt: string
}

export type PasoRecorrido = Foto & {
  titulo: string
  texto: string
}

// Fotos reales del local que pasó el dueño (31/10 y 02/11/2026), convertidas a WebP sin datos EXIF/GPS.
// Fotos sin clientes reconocibles. No usar aquí imágenes generadas o retocadas con IA.

// Recorrido en orden, de la calle a la barra: el dueño quiere que se vea el negocio entero.
export const RECORRIDO: PasoRecorrido[] = [
  {
    titulo: 'La calle',
    texto: 'En la calle de los Panaderos, con la sierra al fondo.',
    src: '/img/local/terraza-calle.webp',
    alt: 'Calle de los Panaderos con la terraza de Restaurante Parra y la sierra al fondo',
  },
  {
    titulo: 'La terraza',
    texto: 'Mesas al aire libre bajo el toldo. La terraza no se reserva.',
    src: '/img/local/terraza.webp',
    alt: 'Terraza junto a la entrada con el toldo de Restaurante Parra',
  },
  {
    titulo: 'La entrada',
    texto: 'La puerta de siempre, con el letrero de la casa.',
    src: '/img/local/entrada.webp',
    alt: 'Entrada de Restaurante Parra con el letrero iluminado y puertas de madera',
  },
  {
    titulo: 'La barra',
    texto: 'Para el café, el aperitivo o tomar algo. La barra no se reserva.',
    src: '/img/local/barra.webp',
    alt: 'Barra de madera del bar de Restaurante Parra con taburetes',
  },
  {
    titulo: 'Subida a los comedores',
    texto: 'Al fondo del bar, la escalera sube hacia los comedores.',
    src: '/img/local/barra-escalera.webp',
    alt: 'Escalera iluminada al fondo del bar que sube a los comedores',
  },
]

// Los dos comedores (mucha gente no sabe que hay dos).
// Los comedores no tienen nombre propio (confirmado por el dueño, 04/11/2026).
export const COMEDORES: (Foto & { nombre: string; texto: string })[] = [
  {
    nombre: 'Primer comedor',
    texto: 'Junto a la bodega, con vigas de madera y ladrillo visto.',
    src: '/img/local/comedor-bodega.webp',
    alt: 'Comedor con mesas vestidas y botellero de vinos de pared a pared',
  },
  {
    nombre: 'Segundo comedor',
    texto: 'Con su propio ambiente, para comer con calma o celebrar en grupo.',
    src: '/img/local/comedor-2.webp',
    alt: 'Segundo comedor con lámpara de forja, cuadros y mesas vestidas',
  },
]
