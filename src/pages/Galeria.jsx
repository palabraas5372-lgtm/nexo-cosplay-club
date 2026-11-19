import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X, Camera } from 'lucide-react'
import PageIntro from '../components/PageIntro.jsx'
import { galeria } from '../data/galeria.js'

// Galería con filtro por categoría y visor de fotos.
export default function Galeria() {
  const [categoria, setCategoria] = useState('Todas')
  const [abierta, setAbierta] = useState(null)
  const fotos = galeria.filter((f) => categoria === 'Todas' || f.categoria === categoria)
  const categorias = ['Todas', ...new Set(galeria.map((f) => f.categoria))]
  const mover = (paso) => setAbierta((i) => (i + paso + fotos.length) % fotos.length)

  useEffect(() => {
    if (abierta === null) return
    const teclas = (e) => {
      if (e.key === 'Escape') setAbierta(null)
      if (e.key === 'ArrowRight') mover(1)
      if (e.key === 'ArrowLeft') mover(-1)
    }
    window.addEventListener('keydown', teclas)
    return () => window.removeEventListener('keydown', teclas)
  })

  const foto = abierta !== null ? fotos[abierta] : null

  return (
    <>
      <PageIntro
        eyebrow="Galería de la comunidad"
        title="Personajes que cobran vida."
        description="Cosplays de la comunidad CosVibe: anime, videojuegos, cine, fantasía y más. Haz clic en una foto para verla en grande."
        bg="bg-rose"
      />
      <section className="section-space">
        <div className="container-nexo">
          <div className="mb-7 flex flex-wrap items-center gap-2">
            {categorias.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={categoria === c}
                onClick={() => setCategoria(c)}
                className="filter-chip"
              >
                {c}
              </button>
            ))}
            <span className="ml-auto flex items-center gap-2 text-sm font-bold text-subtle">
              <Camera size={16} /> {fotos.length} fotos
            </span>
          </div>
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {fotos.map((f, i) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setAbierta(i)}
                className="card-paper card-lift group mb-5 block w-full overflow-hidden text-left"
              >
                <img src={f.src} alt={f.alt} loading="lazy" className="w-full" />
                <span className="flex items-center justify-between gap-3 border-t-2 border-ink p-4">
                  <span className="text-sm font-extrabold">{f.autor}</span>
                  <span className="chip bg-mint">{f.categoria}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {foto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={foto.alt}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setAbierta(null)
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4"
        >
          <button
            type="button"
            onClick={() => setAbierta(null)}
            aria-label="Cerrar"
            className="absolute right-4 top-4 rounded-full border-2 border-white bg-ink p-2 text-white"
          >
            <X size={22} />
          </button>
          <button
            type="button"
            onClick={() => mover(-1)}
            aria-label="Foto anterior"
            className="absolute left-3 rounded-full border-2 border-white bg-ink p-2 text-white sm:left-6"
          >
            <ChevronLeft size={26} />
          </button>
          <figure className="max-w-3xl text-center">
            <img
              src={foto.src}
              alt={foto.alt}
              className="mx-auto max-h-[78vh] rounded-2xl border-[3px] border-white object-contain"
            />
            <figcaption className="mt-4 text-sm text-white">
              <strong>{foto.autor}</strong> · {foto.categoria} · {abierta + 1} de {fotos.length}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={() => mover(1)}
            aria-label="Foto siguiente"
            className="absolute right-3 rounded-full border-2 border-white bg-ink p-2 text-white sm:right-6"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </>
  )
}
