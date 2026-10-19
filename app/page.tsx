import { ArrowRight, Flame, Beef, UtensilsCrossed, Star, Mountain, Castle, Clock, CalendarCheck, ShieldCheck } from 'lucide-react'
import ReservationButton from '@/components/ReservationButton'
import { SITE } from '@/lib/site'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] text-zinc-900">
      {/* 1. HERO INMERSIVO */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-zinc-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-black/40 z-10" />
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center scale-105 animate-pulse duration-[10000ms] opacity-60" 
        />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto space-y-6 pt-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full text-amber-300 text-xs tracking-widest uppercase font-medium">
            <Flame size={14} className="text-amber-400" />
            Desde 1973 · Tradición Castellana
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight leading-tight drop-shadow-md break-words">
            El sabor auténtico <br className="hidden sm:inline" /> de la Sierra
            <span className="block mt-3 text-base sm:text-xl md:text-2xl font-sans font-medium tracking-wide text-amber-300">
              Restaurante en Manzanares el Real
            </span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
            Carnes de la Sierra de Guadarrama, arroces por encargo y cocina castellana en el corazón de Manzanares el Real.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <ReservationButton
              label="Reservar Mesa"
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-zinc-950 px-8 py-4 rounded-sm font-bold text-sm tracking-widest uppercase transition-all shadow-xl hover:shadow-amber-500/20 text-center"
            />
            <a 
              href="/carta" 
              className="w-full sm:w-auto border border-white/30 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-sm font-bold text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-2"
            >
              Ver Nuestra Carta <ArrowRight size={16} />
            </a>
          </div>

          {/* Social Proof integrado */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs text-zinc-400">
            <div className="flex items-center gap-1.5 flex-wrap justify-center">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="font-semibold text-white">4.5/5</span>
              <span>(Más de 1.800 reseñas en Google)</span>
            </div>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <span className="text-zinc-400">{SITE.calle}</span>
          </div>
        </div>
      </section>

      {/* 2. CINTA DE CONFIANZA */}
      <section className="bg-amber-950/10 border-y border-amber-900/10 py-5 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="space-y-0.5">
            <p className="text-2xl md:text-3xl font-serif font-bold text-amber-900">50+</p>
            <p className="text-xs text-zinc-600 uppercase tracking-wider">Años de historia</p>
          </div>
          <div className="space-y-0.5">
            <p className="text-2xl md:text-3xl font-serif font-bold text-amber-900">IGP</p>
            <p className="text-xs text-zinc-600 uppercase tracking-wider">Ternera Sierra de Guadarrama</p>
          </div>
          <div className="space-y-0.5">
            <p className="text-2xl md:text-3xl font-serif font-bold text-amber-900">1.800+</p>
            <p className="text-xs text-zinc-600 uppercase tracking-wider">Opiniones en Google</p>
          </div>
          <div className="space-y-0.5">
            <p className="text-2xl md:text-3xl font-serif font-bold text-amber-900">7:45</p>
            <p className="text-xs text-zinc-600 uppercase tracking-wider">Abrimos para desayunar</p>
          </div>
        </div>
      </section>

      {/* 3. HISTORIA / LA CASA */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800">Nuestra Casa</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              Una historia de fuego, producto y familia desde 1973
            </h2>
            <div className="w-16 h-1 bg-amber-600"></div>
            <p className="text-zinc-600 text-lg leading-relaxed">
              En Restaurante Parra llevamos más de cinco décadas abriendo nuestras puertas a los vecinos de Manzanares y a quienes buscan en la sierra un refugio gastronómico honesto.
            </p>
            <p className="text-zinc-600 text-lg leading-relaxed">
              Sin disfraces ni artificios: chuletones con el punto exacto de maduración, lechazo asado que se deshace, guisos de cuchara cocinados sin prisa y el trato cercano de quien te recibe en su propia casa.
            </p>
            <div className="pt-2">
              <a 
                href="/carta" 
                className="inline-flex items-center gap-2 font-bold text-sm tracking-wider uppercase text-amber-900 hover:text-amber-700 transition"
              >
                Conocer la propuesta gastronómica <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <div className="relative h-[480px] rounded-lg overflow-hidden shadow-2xl">
            <div 
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-sm shadow-md border border-gray-100 flex items-center justify-between">
              <div>
                <p className="font-serif font-bold text-zinc-900">Comedor Tradicional</p>
                <p className="text-xs text-zinc-500">Ambiente cálido y acogedor en Manzanares</p>
              </div>
              <span className="text-xs font-semibold bg-amber-100 text-amber-900 px-3 py-1 rounded-full">
                Climatizado
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ESPECIALIDADES CLAVE */}
      <section className="bg-zinc-900 py-24 px-4 text-white">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Gastronomía Serrana</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Nuestras Especialidades</h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Platos que han construido nuestra reputación a lo largo de tres generaciones.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-800/60 p-8 rounded-sm border border-zinc-700/60 hover:border-amber-500/50 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-amber-500/10 text-amber-400 rounded-sm flex items-center justify-center">
                  <Beef size={28} />
                </div>
                <h3 className="text-2xl font-serif font-bold group-hover:text-amber-300 transition">Carnes de Guadarrama</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Chuletón de vaca madurada, solomillo y entrecot IGP Sierra de Guadarrama y paletilla de lechazo asada al estilo tradicional.
                </p>
              </div>
              <div className="pt-6 border-t border-zinc-700/60 mt-6 flex justify-between items-center text-xs text-zinc-400">
                <span>Corte y brasa diaria</span>
                <span className="font-semibold text-amber-400">Especialidad</span>
              </div>
            </div>

            <div className="bg-zinc-800/60 p-8 rounded-sm border border-zinc-700/60 hover:border-amber-500/50 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-amber-500/10 text-amber-400 rounded-sm flex items-center justify-center">
                  <Flame size={28} />
                </div>
                <h3 className="text-2xl font-serif font-bold group-hover:text-amber-300 transition">Arroces Especiales</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Arroz caldoso con bogavante, paella de mariscos o paella mixta. Elaborados en su punto exclusivamente por encargo.
                </p>
              </div>
              <div className="pt-6 border-t border-zinc-700/60 mt-6 flex justify-between items-center text-xs text-zinc-400">
                <span>Mínimo 2 personas</span>
                <span className="font-semibold text-amber-400">Por encargo</span>
              </div>
            </div>

            <div className="bg-zinc-800/60 p-8 rounded-sm border border-zinc-700/60 hover:border-amber-500/50 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-amber-500/10 text-amber-400 rounded-sm flex items-center justify-center">
                  <UtensilsCrossed size={28} />
                </div>
                <h3 className="text-2xl font-serif font-bold group-hover:text-amber-300 transition">Cocina de Cuchara</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Judiones con matanza de pueblo, callos con morros y sopa castellana al estilo del marqués.
                </p>
              </div>
              <div className="pt-6 border-t border-zinc-700/60 mt-6 flex justify-between items-center text-xs text-zinc-400">
                <span>Cocina de siempre</span>
                <span className="font-semibold text-amber-400">Tradición</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MÓDULO ALTO VALOR: ARROCES POR ENCARGO (AUMENTO DE TICKET Y ORGANIZACIÓN) */}
      <section className="py-24 px-4 bg-[#f6f2ea] border-y border-amber-900/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-700 text-white px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider">
              <Clock size={14} /> Recomendación de la Casa
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 leading-tight">
              ¿Vienes por nuestros arroces? Encárgalo al reservar
            </h2>
            <p className="text-zinc-700 text-lg leading-relaxed">
              Un arroz impecable requiere su tiempo de fondo, sofrito y reposo. Para garantizar que tu mesa disfrute del arroz recién sacado del fuego sin esperas innecesarias en sala, los preparamos <strong>exclusivamente bajo encargo previo</strong>.
            </p>
            <ul className="space-y-3 text-sm text-zinc-700">
              <li className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-amber-700 flex-shrink-0" />
                <span>Arroz caldoso con Bogavante (Mínimo 2 personas)</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-amber-700 flex-shrink-0" />
                <span>Paella de mariscos (mínimo 2 personas)</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-amber-700 flex-shrink-0" />
                <span>Paella mixta (mínimo 2 personas)</span>
              </li>
            </ul>
            <div className="pt-2">
              <ReservationButton
                label="Reservar mesa e indicar el encargo"
                className="inline-block bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3.5 rounded-sm font-bold text-xs uppercase tracking-widest transition"
              />
            </div>
          </div>
          <div className="relative h-[420px] rounded-lg overflow-hidden shadow-xl border border-amber-900/10">
            <div 
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" 
            />
          </div>
        </div>
      </section>

      {/* 6. MÓDULO TURÍSTICO: PLAN LA PEDRIZA & CASTILLO DE MANZANARES */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800">Turismo y Escapada</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            El plan perfecto para tu día en Manzanares
          </h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
            Combina la naturaleza del Parque Nacional con el descanso gastronómico que merece tu escapada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tarjeta La Pedriza */}
          <div className="bg-white border border-gray-200/80 rounded-lg p-8 shadow-sm hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-800 rounded-sm flex items-center justify-center">
              <Mountain size={26} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-zinc-900">Ruta por La Pedriza</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Tras una mañana recorriendo las sendas graníticas de La Pedriza y respirando aire puro de la Sierra de Guadarrama, recupera fuerzas con nuestros judiones calientes y un chuletón a la brasa.
            </p>
            <p className="text-xs font-semibold text-emerald-900 bg-emerald-50 inline-block px-3 py-1 rounded-full">
              A 8 minutos del acceso a La Pedriza
            </p>
          </div>

          {/* Tarjeta Castillo */}
          <div className="bg-white border border-gray-200/80 rounded-lg p-8 shadow-sm hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 bg-amber-50 text-amber-800 rounded-sm flex items-center justify-center">
              <Castle size={26} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-zinc-900">Castillo de los Mendoza</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Visita el castillo medieval mejor conservado de la Comunidad de Madrid y culmina el paseo histórico con una comida castellana tradicional a escasos metros a pie de la fortaleza.
            </p>
            <p className="text-xs font-semibold text-amber-900 bg-amber-50 inline-block px-3 py-1 rounded-full">
              A 5 minutos a pie del Castillo
            </p>
          </div>
        </div>
      </section>

      {/* 7. BLOQUE RESERVA FINAL / CONVERSIÓN DIRECTA */}
      <section id="reserva" className="bg-zinc-950 py-24 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="w-16 h-16 bg-amber-500/10 text-amber-400 mx-auto rounded-full flex items-center justify-center">
            <CalendarCheck size={32} />
          </div>

          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Reserva tu mesa en Parra
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Asegura tu sitio con confirmación inmediata para comidas, cenas o celebraciones familiares en Manzanares el Real.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 space-y-6 max-w-lg mx-auto">
            <div className="space-y-1 text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-400">Motor de Reservas Oficial</p>
              <p className="text-sm text-zinc-300">Gestión directa de disponibilidad en sala.</p>
            </div>

            <ReservationButton />

            <div className="text-xs text-zinc-500 space-y-1">
              <p>¿Sois un grupo grande? Llámanos al <a href={SITE.telefonoHref} className="underline">{SITE.telefono}</a></p>
              <p>Recomendamos reservar con antelación para fines de semana.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
