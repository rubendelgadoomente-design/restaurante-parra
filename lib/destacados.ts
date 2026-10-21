export type PlatoDestacado = {
  nombre: string
  descripcion?: string
  precio: string
  imagen: string // Ruta en /public, p. ej. '/img/platos/chuleton.jpg'
}

// Platos destacados para la franja "Nuestros imprescindibles" de /carta.
// Se mantiene vacío hasta disponer de fotos reales de los platos de Parra.
export const PLATOS_DESTACADOS: PlatoDestacado[] = []
