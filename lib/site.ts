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
  // VERIFICAR con la ficha de Google antes de publicar.
  valoracion: { nota: 4.5, resenas: 1900 },
  instagram: 'https://www.instagram.com/parra_restaurante_manzanares/',
  // Número de WhatsApp para reservas o consultas de grupo (por defecto null hasta confirmar con Parra).
  whatsapp: null as string | null,
  // Máximo de personas permitidas por CoverManager en reservas online directas
  maxReservaOnline: 10,
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
// Fuente: página de contacto de la web actual (restauranteparra.es/index.php/contactanos/),
// consultada el 19/10/2026. Coincide con que la ficha de Google aparecía "Cerrado" un lunes.
// VERIFICAR con Parra y con la ficha de Google (y añadir festivos o vacaciones si los hay).
export const HORARIO: Record<number, Turno[]> = {
  0: [{ abre: '08:00', cierra: '19:30' }],
  1: [], // lunes: cerrado
  2: [{ abre: '07:45', cierra: '17:00' }],
  3: [{ abre: '07:45', cierra: '17:00' }],
  4: [{ abre: '07:45', cierra: '22:30' }],
  5: [{ abre: '07:45', cierra: '23:30' }],
  6: [{ abre: '08:00', cierra: '23:30' }],
}

export const NOMBRES_DIA = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

// Resumen legible para el pie y la página de contacto.
export const HORARIO_RESUMEN = [
  'Lunes: cerrado',
  'Martes y miércoles: 7:45 – 17:00',
  'Jueves: 7:45 – 22:30',
  'Viernes: 7:45 – 23:30',
  'Sábado: 8:00 – 23:30',
  'Domingo: 8:00 – 19:30',
]

export const direccionCompleta = `${SITE.calle}, ${SITE.codigoPostal} ${SITE.localidad} (${SITE.provincia})`
