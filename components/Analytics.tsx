'use client'

import Script from 'next/script'
import { useEffect } from 'react'

// Analítica sin cookies con Umami Cloud (servidores en la UE). Plan gratuito.
// Solo cuenta visitas en el dominio de producción (data-domains): las pruebas en local o en
// previsualizaciones no ensucian los datos.
// Eventos:
//   "Reservar mesa"  -> clic en cualquier botón de reserva (atributo data-umami-event en ReservationButton).
//   "Llamar"         -> clic en un enlace tel:  (propiedad "numero" y "pagina").
//   "Email"/"WhatsApp" -> clic en enlaces mailto: / wa.me.
const UMAMI_WEBSITE_ID = 'bbbc1fad-b659-4f71-bf2f-3c77ad1c5698'
const DOMINIO = 'restauranteparra.es'

type Umami = { track: (evento: string, datos?: Record<string, string>) => void }

export default function Analytics() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const enlace = (e.target as HTMLElement | null)?.closest?.('a')
      if (!enlace) return
      const href = enlace.getAttribute('href') || ''
      let evento: string | null = null
      if (href.startsWith('tel:')) evento = 'Llamar'
      else if (href.startsWith('mailto:')) evento = 'Email'
      else if (href.includes('wa.me/')) evento = 'WhatsApp'
      if (!evento) return
      const umami = (window as unknown as { umami?: Umami }).umami
      umami?.track(evento, {
        numero: href.startsWith('tel:') ? href.slice(4) : '',
        pagina: window.location.pathname,
      })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <Script
      src="https://cloud.umami.is/script.js"
      data-website-id={UMAMI_WEBSITE_ID}
      data-domains={`${DOMINIO},www.${DOMINIO}`}
      strategy="afterInteractive"
    />
  )
}
