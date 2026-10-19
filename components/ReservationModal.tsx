'use client'

import React, { useState } from 'react'
import { useReservation } from './ReservationContext'
import { X, Calendar, Clock, Users, Utensils, CheckCircle2, Phone, AlertCircle, Sparkles } from 'lucide-react'

export default function ReservationModal() {
  const { isOpen, closeReservation } = useReservation()

  const [zone, setZone] = useState<'comedor' | 'barra'>('comedor')
  const [guests, setGuests] = useState<number>(2)
  const [selectedTime, setSelectedTime] = useState<string>('14:00')
  const [wantRice, setWantRice] = useState<boolean>(false)
  const [riceType, setRiceType] = useState<string>('Arroz con Bogavante')
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  if (!isOpen) return null

  const coverUrl = process.env.NEXT_PUBLIC_COVERMANAGER_URL

  const handleConfirm = () => {
    if (coverUrl) {
      window.open(coverUrl, '_blank')
      closeReservation()
    } else {
      setIsSuccess(true)
    }
  }

  const resetAndClose = () => {
    setIsSuccess(false)
    closeReservation()
  }

  const timeSlots = [
    '13:30', '14:00', '14:30', '15:00', '15:30',
    '20:30', '21:00', '21:30', '22:00'
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Fondo clicable para cerrar */}
      <div className="absolute inset-0" onClick={resetAndClose} />

      {/* Modal / Drawer card */}
      <div className="relative z-10 w-full max-w-lg bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col border border-gray-100">
        
        {/* Cabecera */}
        <div className="bg-zinc-900 text-white p-5 flex items-center justify-between border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-xl tracking-wide">RESTAURANTE PARRA</span>
              <span className="text-[10px] bg-amber-500 text-zinc-950 font-bold px-1.5 py-0.5 rounded uppercase">
                Oficial
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">Gestión de disponibilidad y turnos en sala</p>
          </div>
          <button 
            onClick={resetAndClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-full hover:bg-zinc-800 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Contenido scrolleable */}
        <div className="p-5 overflow-y-auto space-y-6 text-zinc-800">

          {isSuccess ? (
            /* Pantalla de Confirmación de Éxito */
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="font-serif font-bold text-2xl text-zinc-900">
                ¡Solicitud de Reserva Registrada!
              </h3>
              <p className="text-sm text-zinc-600 max-w-sm mx-auto leading-relaxed">
                Mesa para <strong>{guests} comensales</strong> en el <strong>{zone === 'comedor' ? 'Comedor Principal' : 'Zona de Barra/Tapeo'}</strong> a las <strong>{selectedTime}h</strong>.
                {wantRice && (
                  <span className="block mt-2 text-xs font-semibold text-amber-900 bg-amber-50 p-2 rounded">
                    🌾 Encargo solicitado: {riceType} (Mínimo 2 pax).
                  </span>
                )}
              </p>
              <div className="pt-2 text-xs text-zinc-500">
                *En la versión final, esta pantalla se sincroniza al segundo con CoverManager.
              </div>
              <button
                onClick={resetAndClose}
                className="w-full bg-zinc-900 text-white py-3 rounded-sm font-bold text-xs uppercase tracking-wider hover:bg-zinc-800 transition"
              >
                Cerrar
              </button>
            </div>
          ) : (
            /* Formulario Interactivo */
            <>
              {/* 1. Selector de Ambiente / Zona (Patrón TastyIgniter) */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                  <Utensils size={14} className="text-amber-700" />
                  1. Selección de Ambiente
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setZone('comedor')}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      zone === 'comedor'
                        ? 'border-amber-600 bg-amber-50/50 shadow-sm'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <p className="font-bold text-sm text-zinc-900">Comedor Principal</p>
                    <p className="text-[11px] text-zinc-500 leading-tight mt-0.5">Carnes a la brasa, arroces y comida formal</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setZone('barra')}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      zone === 'barra'
                        ? 'border-amber-600 bg-amber-50/50 shadow-sm'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <p className="font-bold text-sm text-zinc-900">Barra / Tapeo</p>
                    <p className="text-[11px] text-zinc-500 leading-tight mt-0.5">Raciones informales, torreznos y cañas</p>
                  </button>
                </div>
              </div>

              {/* 2. Selector de Comensales */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                  <Users size={14} className="text-amber-700" />
                  2. Número de Comensales
                </label>
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuests(num)}
                      className={`w-10 h-10 flex-shrink-0 rounded-lg text-sm font-bold transition-all ${
                        guests === num
                          ? 'bg-zinc-900 text-white shadow-sm'
                          : 'bg-gray-100 text-zinc-700 hover:bg-gray-200'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => alert('Para grupos de más de 10 comensales, llama directamente al restaurante: 918 539 577')}
                    className="px-3 h-10 flex-shrink-0 rounded-lg text-xs font-semibold bg-gray-100 text-zinc-600 hover:bg-gray-200 whitespace-nowrap"
                  >
                    +10 pax
                  </button>
                </div>
              </div>

              {/* 3. Selección de Hora / Turno */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                  <Clock size={14} className="text-amber-700" />
                  3. Hora de Reserva
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2 rounded-md text-xs font-semibold transition-all ${
                        selectedTime === slot
                          ? 'bg-amber-600 text-white shadow-sm font-bold'
                          : 'bg-gray-50 border border-gray-200 text-zinc-700 hover:bg-gray-100'
                      }`}
                    >
                      {slot} h
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Encargo de Arroces (Opcional - Alto valor para Parra) */}
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-lg p-3.5 space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={wantRice}
                    onChange={(e) => setWantRice(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-xs font-bold text-amber-950 flex items-center gap-1">
                    <Sparkles size={13} className="text-amber-700" />
                    ¿Deseas encargar Arroz para tenerlo listo al llegar?
                  </span>
                </label>

                {wantRice && (
                  <div className="space-y-1.5 pt-1 pl-6">
                    <select
                      value={riceType}
                      onChange={(e) => setRiceType(e.target.value)}
                      className="w-full text-xs p-2 bg-white border border-amber-300 rounded font-medium focus:ring-1 focus:ring-amber-500"
                    >
                      <option value="Arroz Caldoso con Bogavante">Arroz Caldoso con Bogavante (24€/pax)</option>
                      <option value="Paella Marinera de Pescado y Marisco">Paella Marinera de Pescado y Marisco (19.50€/pax)</option>
                      <option value="Arroz de Montaña con Boletus y Secreto">Arroz de Montaña con Boletus y Secreto (21€/pax)</option>
                    </select>
                    <p className="text-[11px] text-amber-800">
                      *Mínimo 2 personas. Se empezará a cocinar para servirlo recién hecho en tu turno.
                    </p>
                  </div>
                )}
              </div>

              {/* Botón de Confirmación Directa */}
              <button
                type="button"
                onClick={handleConfirm}
                className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 py-3.5 rounded-sm font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-amber-500/20"
              >
                Confirmar Reserva ({guests} pax · {selectedTime}h)
              </button>

              <div className="flex items-center justify-center gap-1.5 text-xs text-zinc-500">
                <Phone size={13} />
                <span>¿Dudas o grupos? Llámanos al 918 539 577</span>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  )
}
