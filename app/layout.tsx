import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { MapPin, Phone, CalendarClock } from 'lucide-react'
import ReservationButton from '@/components/ReservationButton'
import { ReservationProvider } from '@/components/ReservationContext'
import ReservationModal from '@/components/ReservationModal'
import MobileNav from '@/components/MobileNav'
import OpenStatus from '@/components/OpenStatus'
import { SITE, HORARIO, HORARIO_RESUMEN } from '@/lib/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Restaurante Parra | Restaurante en Manzanares el Real desde 1973',
    template: '%s | Restaurante Parra · Manzanares el Real',
  },
  description:
    'Restaurante de cocina castellana en Manzanares el Real desde 1973: carnes de la Sierra de Guadarrama, arroces por encargo y cocina de cuchara. Reserva online.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: SITE.nombre,
    title: 'Restaurante Parra · Manzanares el Real',
    description: 'Cocina castellana, carnes de Guadarrama y arroces por encargo desde 1973.',
  },
}

// Datos estructurados para Google (tipo Restaurant).
const DIAS_SCHEMA = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: SITE.nombre,
  url: SITE.url,
  telephone: '+34918539577',
  servesCuisine: ['Castellana', 'Española'],
  sameAs: [SITE.instagram],
  priceRange: '€€',
  foundingDate: String(SITE.desde),
  menu: `${SITE.url}/carta`,
  acceptsReservations: true,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.calle,
    postalCode: SITE.codigoPostal,
    addressLocality: SITE.localidad,
    addressRegion: SITE.provincia,
    addressCountry: 'ES',
  },
  geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
  openingHoursSpecification: Object.entries(HORARIO).flatMap(([dia, turnos]) =>
    turnos.map((t) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: DIAS_SCHEMA[Number(dia)],
      opens: t.abre,
      closes: t.cierra,
    })),
  ),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} scroll-smooth overflow-x-hidden`}>
      <body className="font-sans text-gray-800 antialiased bg-[#fdfbf7] overflow-x-hidden w-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ReservationProvider>
          {/* Top bar */}
          <div className="hidden md:block bg-zinc-900 text-zinc-300 text-sm py-2">
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1"><MapPin size={14} /> {SITE.calle}</span>
                <a href={SITE.telefonoHref} className="flex items-center gap-1 hover:text-white">
                  <Phone size={14} /> {SITE.telefono}
                </a>
              </div>
              <span className="flex items-center gap-1"><CalendarClock size={14} /> <OpenStatus /></span>
            </div>
          </div>

          {/* Main Navbar */}
          <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-40 border-b border-gray-100">
            <div className="relative max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
              <div className="flex-shrink-0">
                <a href="/" className="font-serif font-bold text-2xl tracking-tight text-zinc-900">
                  PARRA <span className="text-sm font-sans font-normal text-gray-500 block -mt-1 tracking-widest">DESDE 1973</span>
                </a>
              </div>
              <div className="space-x-8 hidden md:flex items-center">
                <a href="/" className="text-sm uppercase tracking-wider font-medium text-gray-600 hover:text-black transition">Inicio</a>
                <a href="/carta" className="text-sm uppercase tracking-wider font-medium text-gray-600 hover:text-black transition">Nuestra Carta</a>
                <a href="/grupos" className="text-sm uppercase tracking-wider font-medium text-gray-600 hover:text-black transition">Grupos</a>
                <a href="/contacto" className="text-sm uppercase tracking-wider font-medium text-gray-600 hover:text-black transition">Ubicación</a>
                <ReservationButton
                  label="Reservar Mesa"
                  className="bg-amber-500 hover:bg-amber-400 text-zinc-950 px-6 py-2.5 rounded-sm font-bold transition shadow-md text-xs tracking-wider uppercase"
                />
              </div>
              <MobileNav />
            </div>
          </nav>

          {children}

          {/* Footer */}
          <footer className="bg-zinc-900 text-zinc-400 py-12 text-center md:text-left mb-16 md:mb-0">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-serif text-2xl text-white mb-4">Restaurante Parra</h3>
                <p className="text-sm leading-relaxed">Cocina castellana tradicional en el corazón de Manzanares el Real desde 1973.</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">Contacto</h4>
                <ul className="space-y-2 text-sm">
                  <li>{SITE.calle}</li>
                  <li>{SITE.codigoPostal} {SITE.localidad}, {SITE.provincia}</li>
                  <li><a href={SITE.telefonoHref} className="hover:text-white">Tel: {SITE.telefono}</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">Horario</h4>
                <ul className="space-y-2 text-sm">
                  {HORARIO_RESUMEN.map((linea) => <li key={linea}>{linea}</li>)}
                </ul>
              </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 mt-10 pt-6 border-t border-zinc-800 flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start text-xs">
              <a href="/aviso-legal" className="hover:text-white">Aviso legal</a>
              <a href="/privacidad" className="hover:text-white">Política de privacidad</a>
              <a href="/cookies" className="hover:text-white">Política de cookies</a>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
            </div>
          </footer>

          {/* Barra inferior móvil */}
          <div className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 p-3 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <ReservationButton
              label="RESERVAR MESA"
              className="w-full bg-amber-500 text-zinc-950 py-3.5 rounded-sm font-bold text-sm tracking-wider shadow-lg flex items-center justify-center gap-2"
            />
          </div>

          <ReservationModal />
        </ReservationProvider>
      </body>
    </html>
  )
}
