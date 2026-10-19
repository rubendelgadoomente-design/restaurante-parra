// Plantilla para las páginas legales. El texto definitivo debe revisarlo Parra
// (o su gestoría): faltan la razón social y el NIF del titular.
export default function LegalPage({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#fdfbf7] pt-16 pb-24 px-4">
      <article className="max-w-3xl mx-auto space-y-4 text-sm leading-relaxed text-zinc-700 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:text-zinc-900 [&_h2]:pt-4">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900">{titulo}</h1>
        {children}
      </article>
    </main>
  )
}
