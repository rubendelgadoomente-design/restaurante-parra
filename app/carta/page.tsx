import Image from 'next/image'
import { getMenu, MENU_ES_EJEMPLO, CARTA_ACTUALIZADA } from '@/lib/menu'
import { PLATOS_DESTACADOS } from '@/lib/destacados'
import MenuExplorer from '@/components/MenuExplorer'

export const metadata = {
  title: 'Carta: carnes de Guadarrama, arroces y cocina castellana',
  alternates: { canonical: '/carta' },
  description: 'Descubre nuestra propuesta gastronómica. Carnes de la Sierra de Guadarrama, arroces por encargo, raciones y postres caseros desde 1973.',
}

export default async function CartaPage() {
  const menuItems = await getMenu()

  return (
    <main className="min-h-screen bg-[#fdfbf7] pt-24 pb-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Cabecera Editorial */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-block bg-amber-500/10 text-amber-800 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Gastronomía Serrana
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-zinc-900 tracking-tight">
            Nuestra Carta
          </h1>
          <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
            Platos elaborados al momento con ingredientes seleccionados de la Sierra de Guadarrama y de productores de confianza.
          </p>
          <div className="w-16 h-0.5 bg-amber-600 mx-auto" />
        </div>

        {MENU_ES_EJEMPLO && (
          <div className="border-2 border-red-500 bg-red-50 text-red-800 p-4 rounded text-sm font-semibold text-center">
            CARTA DE EJEMPLO: platos, precios y alérgenos inventados. No publicar hasta cargar la carta real de Parra
            (variable NEXT_PUBLIC_GOOGLE_SHEET_CSV_URL).
          </div>
        )}

        {/* Nuestros imprescindibles (solo se muestra cuando haya fotos en lib/destacados.ts) */}
        {PLATOS_DESTACADOS.length > 0 && (
          <section className="space-y-6">
            <div className="text-center space-y-1">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-zinc-900">
                Nuestros imprescindibles
              </h2>
              <p className="text-sm text-zinc-500">
                Los platos que definen nuestra cocina en Manzanares el Real
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {PLATOS_DESTACADOS.map((plato, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
                >
                  <div className="relative h-44 w-full bg-zinc-100">
                    <Image
                      src={plato.imagen}
                      alt={plato.nombre}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <h3 className="font-serif font-bold text-base text-zinc-900">{plato.nombre}</h3>
                      {plato.descripcion && (
                        <p className="text-xs text-zinc-500 mt-1 line-clamp-2">{plato.descripcion}</p>
                      )}
                    </div>
                    <div className="font-serif font-bold text-amber-950 text-sm">
                      {plato.precio}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Explorador de carta interactivo */}
        <MenuExplorer initialItems={menuItems} />

        <div className="text-xs text-zinc-500 space-y-1 text-center max-w-2xl mx-auto">
          <p>
            <strong>Alérgenos:</strong> si tienes alguna alergia o intolerancia, infórmanos antes de pedir.
            Elaboramos los platos en una cocina común, por lo que no podemos garantizar la ausencia total de trazas.
          </p>
          <p>IVA incluido. Carta actualizada el {CARTA_ACTUALIZADA}. Los precios pueden variar.</p>
        </div>
      </div>
    </main>
  )
}
