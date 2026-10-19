'use client'

import { useReservation } from './ReservationContext'

interface ReservationButtonProps {
  className?: string
  label?: string
}

export default function ReservationButton({
  className = "w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 py-4 rounded-sm font-bold text-base uppercase tracking-wider transition-all shadow-lg hover:shadow-amber-500/20",
  label = "Abrir Motor de Reserva"
}: ReservationButtonProps) {
  const { openReservation } = useReservation()

  return (
    <button 
      onClick={openReservation}
      type="button"
      className={className}
    >
      {label}
    </button>
  )
}
