// Datos del restaurante en un solo sitio.
// IMPORTANTE: deben coincidir EXACTAMENTE con la ficha de Google (nombre, dirección y teléfono).
// Los marcados con "VERIFICAR" hay que confirmarlos con Parra antes de publicar.

export const SITE = {
  nombre: 'Restaurante Parra',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://restauranteparra.es',
  // La web actual y su carta dicen "C. de los Panaderos, 13"; GastroRanking dice 15.
  // VERIFICAR con la ficha de Google.
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
  // Ficha de Google consultada el 22/10/2026: 4,5 con 1.886 reseñas.
  valoracion: { nota: 4.5, resenas: 1886 },
  instagram: 'https://www.instagram.com/parra_restaurante_manzanares/',
  // Número de WhatsApp para reservas o consultas de grupo (por defecto null hasta confirmar con Parra).
  whatsapp: null as string | null,
  // Máximo de personas permitidas por CoverManager en reservas online directas
  maxReservaOnline: 10,
  // Grupos (confirmado con el dueño el 24/10/2026).
  grupoMaximo: 30,
  senalGrupos: '5 a 10 € por persona',
  // Menú del día (confirmado con el dueño el 24/10/2026).
  menuDelDia: { dias: 'de martes a viernes', precio: '16,90 €' },
  // Antelación para encargar asados (paletilla de lechazo) en la reserva.
  antelacionAsados: '24 horas',
  // Módulo de reservas real (el que enlaza la web actual). Se puede sobrescribir con la variable de entorno.
  coverManagerUrl:
    process.env.NEXT_PUBLIC_COVERMANAGER_URL ||
    'https://www.covermanager.com/reservation/module_restaurant/restaurante-parra/spanish',
  googleMapsUrl: 'https://maps.google.com/?q=Restaurante+Parra+Manzanares+el+Real',
  // Coordenadas aproximadas (las del mapa embebido). VERIFICAR.
  geo: { lat: 40.728, lng: -3.8654 },
}

export type Turno = { abre: string; cierra: string }

// Horario semanal. Índices de JavaScript: 0 = domingo, 1 = lunes … 6 = sábado.
// Fuente: el dueño de Parra, 24/10/2026. La cocina no tiene horario propio: se sirve todo el día.
// Sin vacaciones ni festivos fijos. IMPORTANTE: poner el mismo horario en la ficha de Google.
export const HORARIO: Record<number, Turno[]> = {
  0: [{ abre: '08:30', cierra: '17:00' }],
  1: [], // lunes: cerrado
  2: [{ abre: '08:00', cierra: '17:00' }],
  3: [{ abre: '08:00', cierra: '17:00' }],
  4: [{ abre: '08:00', cierra: '17:00' }],
  5: [{ abre: '08:00', cierra: '23:30' }],
  6: [{ abre: '08:00', cierra: '23:30' }],
}

export const NOMBRES_DIA = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

// Resumen legible para el pie y la página de contacto.
export const HORARIO_RESUMEN = [
  'Lunes: cerrado',
  'Martes a jueves: 8:00 – 17:00',
  'Viernes y sábado: 8:00 – 23:30',
  'Domingo: 8:30 – 17:00',
  'Menú del día de martes a viernes: 16,90 €',
]

export const direccionCompleta = `${SITE.calle}, ${SITE.codigoPostal} ${SITE.localidad} (${SITE.provincia})`
