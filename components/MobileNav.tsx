'use client'

import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { SITE } from '@/lib/site'

const ENLACES = [
  { href: '/', label: 'Inicio' },
  { href: '/carta', label: 'Nuestra carta' },
  { href: '/contacto', label: 'Ubicación y horario' },
]

export default function MobileNav() {
  const [abierto, setAbierto] = useState(false)

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setAbierto(!abierto)}
        aria-expanded={abierto}
        aria-controls="menu-movil"
        aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
        className="p-2 -mr-2 text-zinc-900"
      >
        {abierto ? <X size={26} /> : <Menu size={26} />}
      </button>

      {abierto && (
        <div
          id="menu-movil"
          className="absolute left-0 right-0 top-20 bg-white border-b border-gray-200 shadow-lg z-50"
        >
          <nav className="flex flex-col px-4 py-2">
            {ENLACES.map((e) => (
              <a
                key={e.href}
                href={e.href}
                onClick={() => setAbierto(false)}
                className="py-3 border-b border-gray-100 text-sm uppercase tracking-wider font-medium text-zinc-800"
              >
                {e.label}
              </a>
            ))}
            <a
              href={SITE.telefonoHref}
              className="py-3 flex items-center gap-2 text-sm font-semibold text-amber-800"
            >
              <Phone size={16} /> Llamar · {SITE.telefono}
            </a>
          </nav>
        </div>
      )}
    </div>
  )
}
