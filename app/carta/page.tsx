import { getMenu } from '@/lib/menu'
import MenuExplorer from '@/components/MenuExplorer'

export const metadata = {
  title: 'Carta Digital | Restaurante Parra · Manzanares el Real',
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

        {/* Explorador de carta interactivo */}
        <MenuExplorer initialItems={menuItems} />
      </div>
    </main>
  )
}
