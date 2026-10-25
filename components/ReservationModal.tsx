'use client'

import { useEffect } from 'react'
import { useReservation } from './ReservationContext'
import { X, Phone, ExternalLink, Info } from 'lucide-react'
import { SITE } from '@/lib/site'

// La reserva SIEMPRE se hace en CoverManager, que es donde Parra gestiona su sala.
// Esta web no guarda ni simula reservas: o muestra el widget real, o manda a llamar.
//
// Configurar en Vercel / .env.local:
//   NEXT_PUBLIC_COVERMANAGER_URL (opcional). Por defecto se usa el módulo real de Parra:
//   https://www.covermanager.com/reservation/module_restaurant/restaurante-parra/spanish

export default function ReservationModal() {
  const { isOpen, closeReservation } = useReservation()
  const coverUrl = SITE.coverManagerUrl

  // Cerrar con Escape y bloquear el scroll del fondo mientras está abierto.
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeReservation()
    document.addEventListener('keydown', onKey)
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
    }
  }, [isOpen, closeReservation])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Reservar mesa en Restaurante Parra"
    >
      <div className="absolute inset-0" onClick={closeReservation} />

      <div className="relative z-10 w-full max-w-lg bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        <div className="bg-zinc-900 text-white p-4 flex items-center justify-between">
          <div>
            <p className="font-serif font-bold text-lg tracking-wide">Reservar mesa</p>
            <p className="text-xs text-zinc-400">Disponibilidad real del restaurante</p>
          </div>
          <button
            onClick={closeReservation}
            aria-label="Cerrar"
            className="p-1.5 text-zinc-400 hover:text-white rounded-full hover:bg-zinc-800 transition"
          >
            <X size={20} />
          </button>
        </div>

        {coverUrl ? (
          <>
            <iframe
              src={coverUrl}
              title="Reserva en Restaurante Parra (CoverManager)"
              className="w-full h-[70vh] sm:h-[600px] border-0"
            />
            <div className="p-3 border-t border-gray-100 text-xs text-zinc-600 space-y-2">
              <p className="flex items-start gap-1.5">
                <Info size={14} className="mt-0.5 flex-shrink-0 text-amber-700" />
                <span>
                  <strong>¿Paletilla de lechazo?</strong> Indícala en las observaciones con {SITE.antelacionAsados} de
                  antelación. <strong>¿Arroz?</strong> Encárgalo llamando al{' '}
                  <a href={SITE.telefonoHref} className="underline">{SITE.telefono}</a>.
                </span>
              </p>
              <div className="flex items-center justify-between gap-2">
                <a href={SITE.telefonoHref} className="flex items-center gap-1 font-semibold text-zinc-900">
                  <Phone size={13} /> Más de {SITE.maxReservaOnline} personas: {SITE.telefono}
                </a>
                <a
                  href={coverUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-amber-800"
                >
                  Abrir en ventana nueva <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </>
        ) : (
          // Sin enlace configurado: nunca simular una reserva. Se ofrece llamar.
          <div className="p-6 text-center space-y-4">
            <p className="text-zinc-700">Reserva tu mesa por teléfono:</p>
            <a
              href={SITE.telefonoHref}
              className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 py-3.5 rounded-sm font-bold text-sm uppercase tracking-wider"
            >
              <Phone size={16} /> Llamar al {SITE.telefono}
            </a>
            <a href={SITE.movilHref} className="block text-sm text-zinc-600">
              o al móvil {SITE.movil}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
