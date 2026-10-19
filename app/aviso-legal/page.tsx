import LegalPage from '@/components/LegalPage'
import { SITE, direccionCompleta } from '@/lib/site'

export const metadata = { title: 'Aviso legal', alternates: { canonical: '/aviso-legal' } }

export default function AvisoLegal() {
  return (
    <LegalPage titulo="Aviso legal">
      <p>En cumplimiento del artículo 10 de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa de los datos del titular de este sitio web:</p>
      <ul className="list-disc pl-5 space-y-1">
        {/* PENDIENTE: completar con los datos reales que facilite Parra */}
        <li>Titular: [PENDIENTE: razón social o nombre del titular]</li>
        <li>NIF/CIF: [PENDIENTE]</li>
        <li>Domicilio: {direccionCompleta}</li>
        <li>Teléfono: {SITE.telefono}</li>
        <li>Email: {SITE.email}</li>
        <li>[Si es sociedad: datos de inscripción en el Registro Mercantil]</li>
      </ul>
      <h2>Uso del sitio web</h2>
      <p>El acceso a este sitio web es gratuito y atribuye la condición de usuario, que se compromete a hacer un uso adecuado de sus contenidos.</p>
      <h2>Reservas</h2>
      <p>Las reservas de mesa se gestionan a través de la plataforma CoverManager, que actúa como encargada del tratamiento de los datos que facilites al reservar.</p>
      <h2>Propiedad intelectual</h2>
      <p>Los textos, fotografías y marcas de este sitio pertenecen a su titular o se usan con autorización. No se permite su reproducción sin consentimiento.</p>
    </LegalPage>
  )
}
