import { Users, Utensils, Phone, CalendarCheck, MapPin } from 'lucide-react'
import ReservationButton from '@/components/ReservationButton'
import { SITE, direccionCompleta } from '@/lib/site'

export const metadata = {
  title: 'Grupos, Eventos y Celebraciones',
  alternates: { canonical: '/grupos' },
  description: 'Comidas de grupos, celebraciones familiares y reuniones de empresa en Manzanares el Real. Menús a medida en Restaurante Parra con carnes de Guadarrama y arroces.',
}

export default function GruposPage() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] pt-24 pb-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Cabecera */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-block bg-amber-500/10 text-amber-800 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Celebraciones y Eventos
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-zinc-900 tracking-tight">
            Grupos en Parra
          </h1>
          <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
            Reuniones familiares, comuniones, comidas de empresa y excursiones en Manzanares el Real. Cocina tradicional castellana con producto de la sierra.
          </p>
          <div className="w-16 h-0.5 bg-amber-600 mx-auto" />
        </div>

        {/* Tarjetas de Información */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Espacio y Capacidad */}
          <div className="bg-white p-8 rounded-lg border border-gray-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-amber-500/10 text-amber-700 rounded-sm flex items-center justify-center">
              <Users size={24} />
            </div>
            <h2 className="font-serif font-bold text-xl text-zinc-900">Espacio y Capacidad</h2>
            <div className="text-sm text-zinc-600 space-y-2 leading-relaxed">
              <p>
                Comedor tradicional climatizado con distribución flexible de mesas para grupos de entre 10 y 50 comensales.
              </p>
              <p className="text-xs text-zinc-500">
                Ambiente cálido y acogedor en el casco histórico de Manzanares el Real.
              </p>
            </div>
          </div>

          {/* Menús a Medida */}
          <div className="bg-white p-8 rounded-lg border border-gray-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-amber-500/10 text-amber-700 rounded-sm flex items-center justify-center">
              <Utensils size={24} />
            </div>
            <h2 className="font-serif font-bold text-xl text-zinc-900">Menús a Medida</h2>
            <div className="text-sm text-zinc-600 space-y-2 leading-relaxed">
              <p>
                Diseñamos propuestas cerradas con entrantes al centro, plato principal a elegir (carnes de Guadarrama, arroces o guisos) y postres caseros.
              </p>
              <p className="text-xs text-amber-800 bg-amber-50 p-2 rounded">
                Opciones adaptadas para celíacos, vegetarianos e intolerancias bajo aviso previo.
              </p>
            </div>
          </div>

          {/* Contacto Directo */}
          <div className="bg-white p-8 rounded-lg border border-gray-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-amber-500/10 text-amber-700 rounded-sm flex items-center justify-center">
              <Phone size={24} />
            </div>
            <h2 className="font-serif font-bold text-xl text-zinc-900">Reserva de Grupos</h2>
            <div className="text-sm text-zinc-600 space-y-2 leading-relaxed">
              <p className="flex items-center gap-2">
                <span className="font-semibold text-zinc-900">Fijo:</span> <a href={SITE.telefonoHref} className="hover:text-amber-800 transition">{SITE.telefono}</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-zinc-900">Móvil / WhatsApp:</span> <a href={SITE.movilHref} className="hover:text-amber-800 transition">{SITE.movil}</a>
              </p>
              <p className="text-xs text-zinc-500 pt-1">
                <a href={`mailto:${SITE.email}`} className="hover:underline">{SITE.email}</a>
              </p>
            </div>
            <p className="text-xs text-zinc-500">
              Para coordinar menú y fecha, llámanos o envíanos un mensaje con antelación.
            </p>
          </div>
        </div>

        {/* Sección: Propuestas para cada ocasión */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-zinc-900">
              Celebraciones habituales en nuestra casa
            </h2>
            <p className="text-sm text-zinc-500">Más de 50 años acogiendo momentos especiales</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200/70 shadow-sm space-y-2">
              <div className="text-amber-700 font-serif font-bold text-lg">Reuniones Familiares</div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Cumpleaños, aniversarios, bautizos y comuniones con el trato cercano de un restaurante de siempre y comida casera abundante.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200/70 shadow-sm space-y-2">
              <div className="text-amber-700 font-serif font-bold text-lg">Comidas de Empresa</div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Almuerzos de trabajo, celebraciones navideñas y cierres de año en un entorno tranquilo a 40 minutos de Madrid.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200/70 shadow-sm space-y-2">
              <div className="text-amber-700 font-serif font-bold text-lg">Clubes y Excursiones</div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                El punto de encuentro perfecto para reponer fuerzas tras una ruta senderista por La Pedriza o una visita al Castillo.
              </p>
            </div>
          </div>
        </div>

        {/* Llamada a la acción / Reserva */}
        <div className="bg-amber-950/5 border border-amber-900/10 rounded-lg p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-amber-900 font-serif font-bold text-lg">
              <CalendarCheck size={20} />
              <span>¿Tienes una fecha en mente para tu grupo?</span>
            </div>
            <p className="text-sm text-zinc-600 max-w-2xl leading-relaxed">
              Consúltanos disponibilidad y elaboraremos un presupuesto sin compromiso con los platos que mejor se adapten a vuestro grupo.
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <ReservationButton
              label="Consultar Reserva"
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-zinc-950 px-6 py-3 rounded-sm font-bold text-xs uppercase tracking-wider transition"
            />
            <a
              href={SITE.telefonoHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3 rounded-sm font-bold text-xs uppercase tracking-wider transition text-center"
            >
              <Phone size={14} /> Llamar {SITE.telefono}
            </a>
          </div>
        </div>

        {/* Dirección y ubicación rápida */}
        <div className="text-center text-xs text-zinc-500 space-y-1">
          <p className="flex items-center justify-center gap-1.5 font-medium text-zinc-700">
            <MapPin size={14} className="text-amber-700" /> {direccionCompleta}
          </p>
          <p>A escasos metros del Castillo de los Mendoza y fácil acceso desde el aparcamiento público.</p>
        </div>

      </div>
    </main>
  )
}
