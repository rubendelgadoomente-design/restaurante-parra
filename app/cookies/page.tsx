import LegalPage from '@/components/LegalPage'

export const metadata = { title: 'Política de cookies', alternates: { canonical: '/cookies' } }

export default function Cookies() {
  return (
    <LegalPage titulo="Política de cookies">
      <p>Este sitio web no instala cookies propias de análisis ni de publicidad.</p>
      <p>Algunos contenidos de terceros sí pueden instalar cookies cuando los usas:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>El mapa de Google Maps de la página de ubicación.</li>
        <li>El sistema de reservas de CoverManager, al abrir la reserva.</li>
      </ul>
      <p>Puedes consultar sus políticas en las webs de Google y CoverManager, y bloquear o borrar las cookies desde la configuración de tu navegador.</p>
      {/* PENDIENTE: si se añade Google Analytics u otra herramienta de medición, hace falta un banner de consentimiento antes de cargarla. */}
    </LegalPage>
  )
}
