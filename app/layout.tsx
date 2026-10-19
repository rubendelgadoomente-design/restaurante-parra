import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { MapPin, Phone, CalendarClock } from 'lucide-react'
import ReservationButton from '@/components/ReservationButton'
import { ReservationProvider } from '@/components/ReservationContext'
import ReservationModal from '@/components/ReservationModal'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'Restaurante Parra | Manzanares el Real',
  description: 'Cocina castellana, carnes de Guadarrama y arroces desde 1973.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} scroll-smooth overflow-x-hidden`}>
      <body className="font-sans text-gray-800 antialiased bg-[#fdfbf7] overflow-x-hidden w-full">
        <ReservationProvider>
          {/* Top bar */}
          <div className="hidden md:block bg-zinc-900 text-zinc-300 text-sm py-2">
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1"><MapPin size={14}/> C. de los Panaderos, 13</span>
                <span className="flex items-center gap-1"><Phone size={14}/> 918 539 577</span>
              </div>
              <span className="flex items-center gap-1"><CalendarClock size={14}/> Abierto hoy de 13:00 a 16:30</span>
            </div>
          </div>

          {/* Main Navbar */}
          <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-40 border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
              <div className="flex-shrink-0">
                <a href="/" className="font-serif font-bold text-2xl tracking-tight text-zinc-900">
                  PARRA <span className="text-sm font-sans font-normal text-gray-500 block -mt-1 tracking-widest">DESDE 1973</span>
                </a>
              </div>
              <div className="space-x-8 hidden md:flex items-center">
                <a href="/" className="text-sm uppercase tracking-wider font-medium text-gray-600 hover:text-black transition">Inicio</a>
                <a href="/carta" className="text-sm uppercase tracking-wider font-medium text-gray-600 hover:text-black transition">Nuestra Carta</a>
                <a href="/contacto" className="text-sm uppercase tracking-wider font-medium text-gray-600 hover:text-black transition">Ubicación</a>
                <ReservationButton 
                  label="Reservar Mesa" 
                  className="bg-zinc-900 text-white px-6 py-2.5 rounded-sm font-medium hover:bg-zinc-800 transition shadow-md text-xs tracking-wider uppercase" 
                />
              </div>
            </div>
          </nav>

          {children}
          
          {/* Footer */}
          <footer className="bg-zinc-900 text-zinc-400 py-12 text-center md:text-left mb-16 md:mb-0">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-serif text-2xl text-white mb-4">Restaurante Parra</h3>
                <p className="text-sm leading-relaxed">Cocina castellana tradicional en el corazón de Manzanares el Real. Especialistas en carnes de la Sierra de Guadarrama.</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">Contacto</h4>
                <ul className="space-y-2 text-sm">
                  <li>C. de los Panaderos, 13</li>
                  <li>28410 Manzanares el Real, Madrid</li>
                  <li>Tel: 918 539 577</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">Horario</h4>
                <ul className="space-y-2 text-sm">
                  <li>Lunes a Domingo: 13:00 - 16:30</li>
                  <li>Cenas: Viernes y Sábados 20:30 - 23:30</li>
                  <li>Martes cerrado por descanso</li>
                </ul>
              </div>
            </div>
          </footer>

          {/* Barra inferior móvil */}
          <div className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 p-3 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <ReservationButton 
              label="RESERVAR MESA" 
              className="w-full bg-zinc-900 text-white py-3.5 rounded-sm font-bold text-sm tracking-wider shadow-lg flex items-center justify-center gap-2" 
            />
          </div>

          {/* Modal / Drawer Embebido estilo Cal.com */}
          <ReservationModal />
        </ReservationProvider>
      </body>
    </html>
  )
}
