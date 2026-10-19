import { getMenu, MENU_ES_EJEMPLO, CARTA_ACTUALIZADA } from '@/lib/menu'
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
