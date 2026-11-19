import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Lightbulb,
  ShieldAlert,
  TriangleAlert,
  Wallet,
} from 'lucide-react'
import ImageSlot from '../components/ImageSlot.jsx'
import NotFound from './NotFound.jsx'
import { guias } from '../data/guias.js'

// Guía completa con materiales marcables y pasos detallados.
export default function GuiaDetalle() {
  const { id } = useParams()
  const [listos, setListos] = useState([])
  const g = guias.find((guia) => guia.id === id)
  if (!g) return <NotFound />
  const listosAqui = g.materiales.filter((m) => listos.includes(`${g.id}:${m}`))
  const marcar = (m) => {
    const clave = `${g.id}:${m}`
    setListos((prev) => (prev.includes(clave) ? prev.filter((x) => x !== clave) : [...prev, clave]))
  }
  const otras = guias.filter((guia) => guia.id !== g.id).slice(0, 3)

  return (
    <section className="section-space">
      <div className="container-nexo">
        <Link to="/recursos" className="mb-7 inline-flex items-center gap-2 text-sm font-extrabold">
          <ArrowLeft size={16} /> Volver a las guías
        </Link>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <ImageSlot
            tipo="proyecto"
            src={g.imagen}
            alt={`Foto de la guía ${g.titulo}`}
            loading="eager"
            className="card-paper aspect-[4/3] overflow-hidden"
          />
          <div>
            <span className="chip bg-sun">
              <BookOpen size={15} /> {g.categoria}
            </span>
            <h1 className="font-display mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              {g.titulo}
            </h1>
            <p className="mt-5 text-base leading-8">{g.intro}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="card-soft p-3">
                <p className="text-xs font-bold text-subtle">Dificultad</p>
                <p className="mt-1 text-sm font-extrabold">{g.dificultad}</p>
              </div>
              <div className="card-soft p-3">
                <p className="flex items-center gap-1 text-xs font-bold text-subtle">
                  <Clock3 size={12} /> Tiempo
                </p>
                <p className="mt-1 text-sm font-extrabold">{g.duracion}</p>
              </div>
              <div className="card-soft p-3">
                <p className="flex items-center gap-1 text-xs font-bold text-subtle">
                  <Wallet size={12} /> Presupuesto
                </p>
                <p className="mt-1 text-sm font-extrabold">{g.presupuesto}</p>
              </div>
              <div className="card-soft p-3">
                <p className="text-xs font-bold text-subtle">Lectura</p>
                <p className="mt-1 text-sm font-extrabold">{g.lectura}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold">Paso a paso</h2>
            <ol className="mt-6 grid gap-4">
              {g.pasos.map((paso, i) => (
                <li key={paso.titulo} className="card-soft flex gap-5 p-5">
                  <span className="font-display text-3xl font-extrabold text-coral">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-extrabold">{paso.titulo}</h3>
                    <p className="mt-2 text-sm leading-7 text-subtle">{paso.detalle}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 rounded-2xl border-2 border-ink bg-rose/40 p-6">
              <h2 className="font-display flex items-center gap-2 text-xl font-extrabold">
                <TriangleAlert size={20} /> Errores comunes
              </h2>
              <ul className="mt-3 grid gap-2 text-sm leading-7">
                {g.errores.map((e) => (
                  <li key={e}>• {e}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="grid content-start gap-6">
            <div className="card-paper p-6">
              <h2 className="font-display text-xl font-extrabold">Materiales</h2>
              <p className="mt-1 text-xs font-bold text-subtle">
                {listosAqui.length} de {g.materiales.length} listos · marca lo que ya tienes
              </p>
              <ul className="mt-4 grid gap-2">
                {g.materiales.map((m) => (
                  <li key={m}>
                    <label className="flex cursor-pointer items-start gap-3 text-sm leading-6">
                      <input
                        type="checkbox"
                        checked={listosAqui.includes(m)}
                        onChange={() => marcar(m)}
                        className="mt-1 h-4 w-4 accent-coral"
                      />
                      <span className={listosAqui.includes(m) ? 'text-subtle line-through' : ''}>
                        {m}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border-2 border-ink bg-mint/40 p-6">
              <h2 className="font-display flex items-center gap-2 text-xl font-extrabold">
                <Lightbulb size={20} /> Consejos
              </h2>
              <ul className="mt-3 grid gap-3 text-sm leading-6">
                {g.consejos.map((c) => (
                  <li key={c} className="flex gap-2">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-coral" /> {c}
                  </li>
                ))}
              </ul>
            </div>

            {g.seguridad && (
              <div className="rounded-2xl border-2 border-ink bg-sun/50 p-6 text-sm leading-7">
                <h2 className="font-display mb-2 flex items-center gap-2 text-xl font-extrabold">
                  <ShieldAlert size={20} /> Seguridad
                </h2>
                {g.seguridad}
              </div>
            )}
          </aside>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-3xl font-extrabold">Otras guías</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {otras.map((o) => (
              <Link
                key={o.id}
                to={`/recursos/${o.id}`}
                className="card-paper card-lift overflow-hidden"
              >
                <ImageSlot
                  tipo="proyecto"
                  src={o.imagen}
                  alt={`Foto de la guía ${o.titulo}`}
                  className="aspect-[16/9] border-b-2 border-ink"
                />
                <span className="flex items-center justify-between gap-3 p-5">
                  <span className="font-display text-lg font-extrabold leading-tight">
                    {o.titulo}
                  </span>
                  <ArrowUpRight size={18} className="shrink-0 text-coral" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
