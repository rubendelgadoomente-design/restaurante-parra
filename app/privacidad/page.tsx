import LegalPage from '@/components/LegalPage'
import { SITE } from '@/lib/site'

export const metadata = { title: 'Política de privacidad', alternates: { canonical: '/privacidad' } }

export default function Privacidad() {
  return (
    <LegalPage titulo="Política de privacidad">
      <p>Responsable del tratamiento: [PENDIENTE: razón social y NIF], {SITE.calle}, {SITE.codigoPostal} {SITE.localidad}. Contacto: {SITE.email}.</p>
      <h2>Qué datos tratamos y para qué</h2>
      <p>Los datos que facilitas al reservar mesa (nombre, teléfono, email, número de comensales y observaciones) se usan únicamente para gestionar tu reserva. La base legal es la ejecución de la reserva que solicitas.</p>
      <p>Las reservas se gestionan con CoverManager, que trata los datos por cuenta del restaurante.</p>
      <h2>Cuánto tiempo los conservamos</h2>
      <p>Durante el tiempo necesario para gestionar la reserva y atender posibles reclamaciones, y después durante los plazos legales.</p>
      <h2>Comunicaciones comerciales</h2>
      <p>Solo te enviaremos comunicaciones comerciales si nos das tu consentimiento expreso, que puedes retirar en cualquier momento.</p>
      <h2>Tus derechos</h2>
      <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a {SITE.email}. También puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).</p>
    </LegalPage>
  )
}
