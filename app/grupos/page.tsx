import { Users, Utensils, Phone, CalendarCheck, MapPin, Mail } from 'lucide-react'
import ReservationButton from '@/components/ReservationButton'
import { SITE, direccionCompleta } from '@/lib/site'

export const metadata = {
  title: 'Grupos, Eventos y Celebraciones',
  alternates: { canonical: '/grupos' },
  description: 'Comidas de grupos, celebraciones familiares y reuniones de empresa en Manzanares el Real. Menús a medida en Restaurante Parra con carnes de Guadarrama y arroces.',
}

export default function GruposPage() {
  const asuntoEmail = encodeURIComponent('Consulta de grupo · Restaurante Parra')
  const cuerpoEmail = encodeURIComponent(
    'Hola,\n\nMe pongo en contacto para consultar disponibilidad para una comida de grupo:\n\n' +
    '• Fecha y hora preferida:\n' +
    '• Número de personas:\n' +
    '• Tipo de celebración o motivo:\n' +
    '• Alergias o necesidades especiales:\n' +
    '• Teléfono de contacto:\n\n' +
    'Muchas gracias.'
  )
  const mailtoHref = `mailto:${SITE.email}?subject=${asuntoEmail}&body=${cuerpoEmail}`

  // Si SITE.whatsapp está configurado (por defecto null hasta confirmar con Parra), se prepara el enlace
  const whatsappHref = SITE.whatsapp
    ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hola, me gustaría consultar disponibilidad para una comida de grupo en Restaurante Parra.')}`
    : null

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
            Reuniones familiares, comidas de empresa y excursiones en Manzanares el Real. Cocina tradicional castellana desde {SITE.desde}.
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
                Grupos: consúltanos capacidad y disponibilidad.
              </p>
              <p className="text-xs text-zinc-500">
                Comedor tradicional en el casco histórico de Manzanares el Real.
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
                Propuestas cerradas con entrantes al centro, plato principal a elegir (carnes de Guadarrama, arroces por encargo o guisos) y postres caseros.
              </p>
              <p className="text-xs text-amber-800 bg-amber-50 p-2 rounded">
                Cuéntanos al reservar si hay alergias, intolerancias o dietas especiales y te indicaremos qué opciones hay.
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
                <span className="font-semibold text-zinc-900">Móvil:</span> <a href={SITE.movilHref} className="hover:text-amber-800 transition">{SITE.movil}</a>
              </p>
              <p className="text-xs text-zinc-500 pt-1">
                <a href={mailtoHref} className="hover:underline">{SITE.email}</a>
              </p>
            </div>
            <p className="text-xs text-zinc-500">
              Para coordinar menú y fecha, llámanos o envíanos un correo con antelación.
            </p>
          </div>
        </div>

        {/* Sección: Propuestas para cada ocasión */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-zinc-900">
              Celebraciones habituales en nuestra casa
            </h2>
            <p className="text-sm text-zinc-500">Cocina tradicional castellana desde {SITE.desde}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200/70 shadow-sm space-y-2">
              <div className="text-amber-700 font-serif font-bold text-lg">Reuniones Familiares</div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Cumpleaños, aniversarios y encuentros familiares con comida casera y platos tradicionales para compartir.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200/70 shadow-sm space-y-2">
              <div className="text-amber-700 font-serif font-bold text-lg">Comidas de Empresa</div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Almuerzos de trabajo, celebraciones y encuentros de equipo en un entorno tranquilo en la sierra.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200/70 shadow-sm space-y-2">
              <div className="text-amber-700 font-serif font-bold text-lg">Clubes y Excursiones</div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                El punto de encuentro para reponer fuerzas tras una ruta por La Pedriza o una visita a Manzanares el Real.
              </p>
            </div>
          </div>
        </div>

        {/* Llamada a la acción / Contacto para grupos */}
        <div className="bg-amber-950/5 border border-amber-900/10 rounded-lg p-8 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-serif font-bold text-lg">
                <CalendarCheck size={20} />
                <span>¿Tienes una fecha en mente para tu grupo?</span>
              </div>
              <p className="text-sm text-zinc-600 max-w-2xl leading-relaxed">
                Consúltanos disponibilidad y elaboraremos una propuesta con los platos que mejor se adapten a vuestro grupo.
              </p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <a
                href={SITE.telefonoHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-6 py-3 rounded-sm font-bold text-xs uppercase tracking-wider transition text-center shadow-md"
              >
                <Phone size={14} /> Llamar {SITE.telefono}
              </a>
              <a
                href={mailtoHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3 rounded-sm font-bold text-xs uppercase tracking-wider transition text-center"
              >
                <Mail size={14} /> Escribir un email
              </a>
              {whatsappHref && (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-sm font-bold text-xs uppercase tracking-wider transition text-center"
                >
                  WhatsApp
                </a>
              )}
            </div>
          </div>

          {/* Enlace secundario discreto para reservas ordinarias */}
          <div className="pt-2 border-t border-amber-900/10 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-2">
            <span>Para mesas habituales de comensales individuales o familias:</span>
            <ReservationButton
              label="Reserva online aquí (mesas hasta 8 personas) →"
              className="font-semibold text-amber-900 hover:text-amber-700 underline bg-transparent p-0 border-0 cursor-pointer text-xs"
            />
          </div>
        </div>

        {/* Dirección y ubicación */}
        <div className="text-center text-xs text-zinc-500 space-y-1">
          <p className="flex items-center justify-center gap-1.5 font-medium text-zinc-700">
            <MapPin size={14} className="text-amber-700" /> {direccionCompleta}
          </p>
          <p>A escasos metros del Castillo de los Mendoza.</p>
        </div>

      </div>
    </main>
  )
}
