'use client'

import { useEffect, useState } from 'react'
import { HORARIO, NOMBRES_DIA, Turno } from '@/lib/site'

// Calcula el estado en hora de Madrid, sea cual sea la zona horaria del visitante.
function ahoraEnMadrid() {
  const partes = new Intl.DateTimeFormat('es-ES', {
    timeZone: 'Europe/Madrid',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(new Date())
  const get = (t: string) => partes.find((p) => p.type === t)?.value || ''
  const mapaDias: Record<string, number> = { dom: 0, lun: 1, mar: 2, mié: 3, jue: 4, vie: 5, sáb: 6 }
  const dia = mapaDias[get('weekday').replace('.', '').toLowerCase()] ?? new Date().getDay()
  const minutos = parseInt(get('hour'), 10) * 60 + parseInt(get('minute'), 10)
  return { dia, minutos }
}

const aMinutos = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

const textoTurnos = (turnos: Turno[]) => turnos.map((t) => `${t.abre}–${t.cierra}`).join(' y ')

export function estadoHorario(dia: number, minutos: number): string {
  const turnos = HORARIO[dia] || []
  if (turnos.length === 0) return `Hoy ${NOMBRES_DIA[dia].toLowerCase()} cerrado por descanso`
  const abierto = turnos.find((t) => minutos >= aMinutos(t.abre) && minutos < aMinutos(t.cierra))
  if (abierto) return `Abierto ahora · hasta las ${abierto.cierra}`
  const siguiente = turnos.find((t) => minutos < aMinutos(t.abre))
  if (siguiente) return `Hoy abrimos a las ${siguiente.abre} · ${textoTurnos(turnos)}`
  return `Hoy: ${textoTurnos(turnos)} · ahora cerrado`
}

export default function OpenStatus() {
  // Se calcula en el navegador para evitar desajustes entre servidor y cliente.
  const [texto, setTexto] = useState<string>('Consulta nuestro horario')

  useEffect(() => {
    const actualizar = () => {
      const { dia, minutos } = ahoraEnMadrid()
      setTexto(estadoHorario(dia, minutos))
    }
    actualizar()
    const id = setInterval(actualizar, 60_000)
    return () => clearInterval(id)
  }, [])

  return <span>{texto}</span>
}
