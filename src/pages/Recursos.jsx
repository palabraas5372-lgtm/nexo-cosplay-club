import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, BookOpen, Clock3, ListChecks } from 'lucide-react'
import PageIntro from '../components/PageIntro.jsx'
import ImageSlot from '../components/ImageSlot.jsx'
import { guias } from '../data/guias.js'

export default function Recursos() {
  const [category, setCategory] = useState('Todos')
  const items = guias.filter((g) => category === 'Todos' || g.categoria === category)
  return (
    <>
      <PageIntro
        eyebrow="Aprender juntos"
        title="Nadie nace sabiendo hacer props."
        description="Guías paso a paso para armar tu cosplay: materiales, técnicas, consejos y los errores que conviene evitar."
        bg="bg-mint"
      />
      <section className="section-space">
        <div className="container-nexo">
          <div className="mb-7 flex flex-wrap gap-2">
            {['Todos', ...new Set(guias.map((g) => g.categoria))].map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
                className="filter-chip"
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map((g) => (
              <article key={g.id} className="card-paper card-lift flex flex-col overflow-hidden">
                <ImageSlot
                  tipo="proyecto"
                  src={g.imagen}
                  alt={`Foto de la guía ${g.titulo}`}
                  className="aspect-[16/10] border-b-2 border-ink"
                />
                <div className="flex flex-1 flex-col p-6">
                  <span className="chip w-fit bg-sun">
                    <BookOpen size={15} />
                    {g.categoria}
                  </span>
                  <h2 className="font-display mt-4 text-2xl font-extrabold leading-tight">
                    {g.titulo}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-7 text-subtle">{g.descripcion}</p>
                  <div className="mt-4 flex flex-wrap gap-4 text-xs font-bold">
                    <span className="flex items-center gap-1">
                      <ListChecks size={14} /> {g.pasos.length} pasos
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock3 size={14} /> {g.duracion}
                    </span>
                    <span className="text-coral">{g.dificultad}</span>
                  </div>
                  <Link to={`/recursos/${g.id}`} className="btn-primary mt-5">
                    Leer guía completa <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
