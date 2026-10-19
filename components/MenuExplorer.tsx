'use client'

import { useState, useMemo } from 'react'
import { MenuItem } from '@/lib/menu'
import { Search, Sparkles, AlertCircle, Clock, Wheat, History, Flame } from 'lucide-react'
import ReservationButton from './ReservationButton'

interface MenuExplorerProps {
  initialItems: MenuItem[]
}

export default function MenuExplorer({ initialItems }: MenuExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas')
  const [onlyFeatured, setOnlyFeatured] = useState<boolean>(false)
  const [onlyGlutenFree, setOnlyGlutenFree] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>('')

  // Extraer categorías únicas y calcular conteos
  const categoriesWithCounts = useMemo(() => {
    const counts: Record<string, number> = {
      Todas: initialItems.length
    }
    initialItems.forEach(item => {
      counts[item.categoria] = (counts[item.categoria] || 0) + 1
    })
    const uniqueCats = Array.from(new Set(initialItems.map(item => item.categoria)))
    return [
      { name: 'Todas', count: initialItems.length },
      ...uniqueCats.map(cat => ({ name: cat, count: counts[cat] || 0 }))
    ]
  }, [initialItems])

  // Filtrado reactivo combinado
  const filteredItems = useMemo(() => {
    return initialItems.filter(item => {
      const matchesCategory = selectedCategory === 'Todas' || item.categoria === selectedCategory
      const matchesFeatured = !onlyFeatured || item.destacado
      const matchesGlutenFree = !onlyGlutenFree || item.sinGluten
      const matchesSearch = 
        item.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.descripcion.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesFeatured && matchesGlutenFree && matchesSearch
    })
  }, [initialItems, selectedCategory, onlyFeatured, onlyGlutenFree, searchQuery])

  // Agrupado por categoría para la visualización
  const groupedByCategory = useMemo(() => {
    return filteredItems.reduce((acc, item) => {
      if (!acc[item.categoria]) {
        acc[item.categoria] = []
      }
      acc[item.categoria].push(item)
      return acc
    }, {} as Record<string, MenuItem[]>)
  }, [filteredItems])

  return (
    <div className="space-y-10">
      {/* 1. BARRA DE CONTROL Y BÚSQUEDA */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200/80 space-y-4">
        <div className="flex flex-col lg:flex-row gap-3 justify-between items-stretch lg:items-center">
          {/* Buscador en tiempo real */}
          <div className="relative w-full lg:w-72">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Buscar plato o ingrediente..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:bg-white transition"
            />
          </div>

          {/* Filtros Rápidos (Estrellas + Sin Gluten) */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setOnlyFeatured(!onlyFeatured)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold tracking-wider transition ${
                onlyFeatured 
                  ? 'bg-amber-600 text-white shadow-sm' 
                  : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/60'
              }`}
            >
              <Sparkles size={13} />
              Especialidades
            </button>

            <button
              onClick={() => setOnlyGlutenFree(!onlyGlutenFree)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold tracking-wider transition ${
                onlyGlutenFree 
                  ? 'bg-emerald-700 text-white shadow-sm' 
                  : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200/60'
              }`}
            >
              <Wheat size={13} />
              Apto Celíacos (Sin Gluten)
            </button>
          </div>
        </div>

        {/* Categorías con Contador de Platos (Patrón Shadcn UI) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-none">
          {categoriesWithCounts.map(({ name, count }) => (
            <button
              key={name}
              onClick={() => setSelectedCategory(name)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedCategory === name
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'bg-gray-100 text-zinc-600 hover:bg-gray-200 hover:text-zinc-900'
              }`}
            >
              <span>{name}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === name ? 'bg-zinc-700 text-zinc-200' : 'bg-gray-200 text-zinc-500'
              }`}>
                {count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 2. AVISO DE ARROCES POR ENCARGO */}
      {(selectedCategory === 'Todas' || selectedCategory === 'Arroces (Por Encargo)') && (
        <div className="bg-amber-50 border border-amber-200 rounded-sm p-4 flex items-start gap-3 text-amber-950 text-xs md:text-sm">
          <Clock size={18} className="text-amber-700 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold">Política de Arroces:</strong> Se elaboran por encargo con antelación mínima de 2 horas (mínimo 2 raciones). Indícalo en tu reserva online para tenerlo listo al llegar.
          </div>
        </div>
      )}

      {/* 3. LISTADO DE PLATOS */}
      {Object.keys(groupedByCategory).length === 0 ? (
        <div className="text-center py-16 bg-white rounded-lg border border-dashed border-gray-300 space-y-3">
          <p className="text-zinc-500 text-base">No se han encontrado platos con los filtros seleccionados.</p>
          <button 
            onClick={() => { setSelectedCategory('Todas'); setSearchQuery(''); setOnlyFeatured(false); setOnlyGlutenFree(false); }}
            className="text-xs font-bold uppercase tracking-wider text-amber-700 hover:underline"
          >
            Restablecer todos los filtros
          </button>
        </div>
      ) : (
        <div className="space-y-12">
          {Object.entries(groupedByCategory).map(([cat, items]) => (
            <div key={cat} className="space-y-6">
              <div className="flex items-center gap-4">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-zinc-900">
                  {cat}
                </h2>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between items-start gap-4">
                        <div className="space-y-1.5">
                          <h3 className="font-serif font-bold text-lg text-zinc-900 leading-snug">
                            {item.nombre}
                          </h3>

                          {/* Badges Visuales Modernos (Patrón TastyIgniter) */}
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {item.destacado && (
                              <span className="inline-flex items-center gap-1 text-[10px] bg-amber-100 text-amber-900 font-sans font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                <Flame size={10} className="text-amber-600" />
                                Especialidad
                              </span>
                            )}
                            {item.sinGluten && (
                              <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200 font-sans font-semibold px-2 py-0.5 rounded-full">
                                <Wheat size={10} className="text-emerald-600" />
                                Sin Gluten
                              </span>
                            )}
                            {item.receta1973 && (
                              <span className="inline-flex items-center gap-1 text-[10px] bg-zinc-100 text-zinc-700 font-sans font-medium px-2 py-0.5 rounded-full">
                                <History size={10} className="text-zinc-500" />
                                Desde 1973
                              </span>
                            )}
                          </div>
                        </div>

                        <span className="font-serif font-bold text-lg text-amber-950 whitespace-nowrap">
                          {item.precio}
                        </span>
                      </div>

                      <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
                        {item.descripcion}
                      </p>
                    </div>

                    {item.alergenos && item.alergenos.length > 0 && (
                      <div className="pt-2 border-t border-gray-50 flex items-center gap-1.5 flex-wrap">
                        <AlertCircle size={12} className="text-gray-400" />
                        <span className="text-[11px] text-gray-400">Alérgenos:</span>
                        {item.alergenos.map((al, aIdx) => (
                          <span key={aIdx} className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                            {al}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 4. CTA A RESERVAR DESDE LA CARTA */}
      <div className="bg-zinc-900 text-white p-8 md:p-12 rounded-lg text-center space-y-6">
        <h3 className="text-3xl font-serif font-bold">¿Listo para saborearlo?</h3>
        <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto">
          Reserva mesa con confirmación inmediata en sala. Si deseas arroz, indícalo al reservar y lo tendremos en su punto exacto.
        </p>
        <div className="max-w-xs mx-auto">
          <ReservationButton label="Reservar Mesa Ahora" />
        </div>
      </div>
    </div>
  )
}
