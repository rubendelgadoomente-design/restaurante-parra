// Datos del restaurante en un solo sitio.
// IMPORTANTE: deben coincidir EXACTAMENTE con la ficha de Google (nombre, dirección y teléfono).
// Los marcados con "VERIFICAR" hay que confirmarlos con Parra antes de publicar.

export const SITE = {
  nombre: 'Restaurante Parra',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://restauranteparra.es',
  // VERIFICAR: la web antigua dice "C. de los Panaderos, 13" y GastroRanking "Calle Panaderos, 15".
  // Usar la dirección exacta de la ficha de Google.
  calle: 'Calle de los Panaderos, 13',
  codigoPostal: '28410',
  localidad: 'Manzanares el Real',
  provincia: 'Madrid',
  telefono: '918 53 95 77',
  telefonoHref: 'tel:+34918539577',
  movil: '658 504 300',
  movilHref: 'tel:+34658504300',
  email: 'restparra.manzanares@gmail.com',
  desde: 1973,
  // VERIFICAR con la ficha de Google antes de publicar.
  valoracion: { nota: 4.5, resenas: 1900 },
  googleMapsUrl: 'https://maps.google.com/?q=Restaurante+Parra+Manzanares+el+Real',
  // Coordenadas aproximadas (las del mapa embebido). VERIFICAR.
  geo: { lat: 40.728, lng: -3.8654 },
}

export type Turno = { abre: string; cierra: string }

// Horario semanal. Índices de JavaScript: 0 = domingo, 1 = lunes … 6 = sábado.
// VERIFICAR con Parra: comidas todos los días salvo martes y cenas solo viernes y sábado
// (es lo que ponía el pie de la web; también hay que revisar festivos y vacaciones).
export const HORARIO: Record<number, Turno[]> = {
  0: [{ abre: '13:00', cierra: '16:30' }],
  1: [{ abre: '13:00', cierra: '16:30' }],
  2: [], // martes: cerrado por descanso
  3: [{ abre: '13:00', cierra: '16:30' }],
  4: [{ abre: '13:00', cierra: '16:30' }],
  5: [{ abre: '13:00', cierra: '16:30' }, { abre: '20:30', cierra: '23:30' }],
  6: [{ abre: '13:00', cierra: '16:30' }, { abre: '20:30', cierra: '23:30' }],
}

export const NOMBRES_DIA = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

// Resumen legible para el pie y la página de contacto.
export const HORARIO_RESUMEN = [
  'Comidas: todos los días salvo martes, de 13:00 a 16:30',
  'Cenas: viernes y sábados, de 20:30 a 23:30',
  'Martes: cerrado por descanso',
]

export const direccionCompleta = `${SITE.calle}, ${SITE.codigoPostal} ${SITE.localidad} (${SITE.provincia})`
