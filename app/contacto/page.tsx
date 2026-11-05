import { MapPin, Phone, Clock, Car, Navigation, Footprints } from 'lucide-react'
import ReservationButton from '@/components/ReservationButton'
import { SITE, HORARIO_RESUMEN, APARCAMIENTOS, rutaAlAparcamiento, rutaAPieAlRestaurante } from '@/lib/site'

export const metadata = {
  title: 'Ubicación, horario y contacto',
  alternates: { canonical: '/contacto' },
  description: 'Cómo llegar a Restaurante Parra en Calle de los Panaderos 13, Manzanares el Real. Horario, teléfonos de reservas y aparcamientos públicos cercanos.',
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] pt-24 pb-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Cabecera */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-block bg-amber-500/10 text-amber-800 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Visítanos
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-zinc-900 tracking-tight">
            Ubicación y Contacto
          </h1>
          <p className="text-zinc-600 text-base md:text-lg">
            Estamos situados en el casco histórico de Manzanares el Real, a escasos minutos a pie del Castillo de los Mendoza y a un paso de La Pedriza.
          </p>
          <div className="w-16 h-0.5 bg-amber-600 mx-auto" />
        </div>

        {/* Tarjetas de Información */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Ubicación */}
          <div className="bg-white p-8 rounded-lg border border-gray-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-amber-500/10 text-amber-700 rounded-sm flex items-center justify-center">
              <MapPin size={24} />
            </div>
            <h2 className="font-serif font-bold text-xl text-zinc-900">Dirección</h2>
            <div className="text-sm text-zinc-600 space-y-1 leading-relaxed">
              <p className="font-medium text-zinc-900">Restaurante Parra</p>
              <p>{SITE.calle}</p>
              <p>{SITE.codigoPostal} {SITE.localidad} ({SITE.provincia})</p>
            </div>
            <div className="pt-2">
              <a 
                href="https://maps.google.com/?q=Restaurante+Parra+Manzanares+el+Real" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-600 uppercase tracking-wider"
              >
                <Navigation size={14} /> Abrir en Google Maps
              </a>
            </div>
          </div>

          {/* Teléfonos y Reservas */}
          <div className="bg-white p-8 rounded-lg border border-gray-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-amber-500/10 text-amber-700 rounded-sm flex items-center justify-center">
              <Phone size={24} />
            </div>
            <h2 className="font-serif font-bold text-xl text-zinc-900">Teléfono & Email</h2>
            <div className="text-sm text-zinc-600 space-y-2 leading-relaxed">
              <p className="flex items-center gap-2">
                <span className="font-semibold text-zinc-900">Fijo:</span> <a href={SITE.telefonoHref}>{SITE.telefono}</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-zinc-900">Móvil:</span> <a href={SITE.movilHref}>{SITE.movil}</a>
              </p>
              <p className="text-xs text-zinc-500 pt-1">
                restparra.manzanares@gmail.com
              </p>
            </div>
            <p className="text-xs text-amber-800 bg-amber-50 p-2 rounded">
              Para reservar mesa, usa el botón Reservar mesa: verás la disponibilidad real.
            </p>
          </div>

          {/* Horarios */}
          <div className="bg-white p-8 rounded-lg border border-gray-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-amber-500/10 text-amber-700 rounded-sm flex items-center justify-center">
              <Clock size={24} />
            </div>
            <h2 className="font-serif font-bold text-xl text-zinc-900">Horario</h2>
            <div className="text-xs text-zinc-600 space-y-2 leading-relaxed">
              {HORARIO_RESUMEN.map((linea) => <p key={linea}>{linea}</p>)}
            </div>
          </div>
        </div>

        {/* Sección: Dónde aparcar. Aparcamientos que recomienda el dueño (lib/site.ts) */}
        <section id="aparcar" className="bg-amber-950/5 border border-amber-900/10 rounded-lg p-6 md:p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="flex items-center gap-2 text-amber-900 font-serif font-bold text-xl">
              <Car size={20} /> Dónde aparcar
            </h2>
            <p className="text-sm text-zinc-600 max-w-2xl leading-relaxed">
              Junto al restaurante no hay aparcamiento y los fines de semana el centro se llena. Te recomendamos dejar el coche
              en uno de estos dos aparcamientos públicos gratuitos y venir dando un paseo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {APARCAMIENTOS.map((a) => (
              <div key={a.nombre} className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-sm">
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-lg text-zinc-900">{a.nombre}</h3>
                  <p className="text-sm text-zinc-600">{a.direccion}</p>
                  <p className="text-xs text-zinc-500">{a.nota}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={rutaAlAparcamiento(a)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-umami-event="Ruta aparcamiento"
                    data-umami-event-aparcamiento={a.nombre}
                    className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2.5 rounded-sm font-bold text-xs uppercase tracking-wider transition"
                  >
                    <Navigation size={14} /> Ir al parking
                  </a>
                  <a
                    href={rutaAPieAlRestaurante(a)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-umami-event="Ruta a pie al restaurante"
                    data-umami-event-aparcamiento={a.nombre}
                    className="inline-flex items-center justify-center gap-2 border border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white px-4 py-2.5 rounded-sm font-bold text-xs uppercase tracking-wider transition"
                  >
                    <Footprints size={14} /> Ruta a pie hasta Parra
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div>
            <ReservationButton label="Asegurar mi mesa" className="w-full md:w-auto bg-amber-500 hover:bg-amber-400 text-zinc-950 px-6 py-3 rounded-sm font-bold text-xs uppercase tracking-wider transition" />
          </div>
        </section>

        {/* Mapa embebido */}
        <div className="rounded-lg overflow-hidden border border-gray-200 shadow-md h-[400px] w-full bg-gray-100">
          <iframe
            title="Ubicación Restaurante Parra"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.238692790938!2d-3.8654!3d40.728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41775a2cbdb27b%3A0xc39fdf71b86e885c!2sRestaurante%20Parra!5e0!3m2!1ses!2ses!4v1700000000000"
          />
        </div>

      </div>
    </main>
  )
}
