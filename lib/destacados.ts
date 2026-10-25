export type PlatoDestacado = {
  nombre: string
  descripcion?: string
  precio: string
  // Ruta en /public, p. ej. '/img/platos/paletilla.jpg'. Vacío = la tarjeta se muestra sin foto.
  imagen?: string
}

// Platos estrella elegidos por el dueño (24/10/2026) para la franja "Nuestros imprescindibles" de /carta.
// Precios de la carta copiada el 19/10/2026: si cambian en la carta, cambiarlos también aquí.
// Cuando haya fotos reales, guardarlas en /public/img/platos/ y rellenar "imagen".
export const PLATOS_DESTACADOS: PlatoDestacado[] = [
  {
    nombre: 'Paletilla de lechazo asada',
    descripcion: 'Al estilo tradicional. Encárgala al reservar con 24 h de antelación.',
    precio: '29,90 €',
  },
  {
    nombre: 'Rabo de toro estofado al vino tinto',
    descripcion: 'Guiso lento de la casa.',
    precio: '25,50 €',
  },
  {
    nombre: 'Chuletón de vaca madurada',
    descripcion: 'Trinchado con hueso. Según peso.',
    precio: '69,00 €/kg',
  },
  {
    nombre: 'Solomillo y entrecot IGP Sierra de Guadarrama',
    descripcion: 'Carne de ternera de la sierra.',
    precio: 'Desde 26,00 €',
  },
  {
    nombre: 'Arroz caldoso con bogavante',
    descripcion: 'Por encargo, mínimo dos personas. Precio por persona.',
    precio: '25,90 €',
  },
  {
    nombre: 'Alcachofas confitadas rellenas de rabo de toro',
    descripcion: '3 piezas, para compartir.',
    precio: '24,00 €',
  },
]
