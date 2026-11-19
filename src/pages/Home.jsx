import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  CalendarDays,
  Camera,
  Lightbulb,
  Scissors,
  Users,
  MessageCircle,
  Sparkles,
} from 'lucide-react'
import Hero from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CreatorCard from '../components/CreatorCard.jsx'
import EventCard from '../components/EventCard.jsx'
import CollabCard from '../components/CollabCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import EstadoCarga from '../components/EstadoCarga.jsx'
import { convocatorias, proyectos } from '../data/content.js'
import { galeria } from '../data/galeria.js'
import { obtenerTodos } from '../services/api.js'
import { useApi } from '../hooks/useApi.js'

const pilares = [
  {
    icon: Lightbulb,
    title: 'Aprende sin miedo',
    text: 'Guías para empezar, probar materiales y compartir el proceso; no solo el resultado final.',
    color: 'bg-sun',
    num: '01',
  },
  {
    icon: Users,
    title: 'Encuentra tu equipo',
    text: 'Busca cosplayers, fotógrafos, makers o gente que recién está comenzando.',
    color: 'bg-mint',
    num: '02',
  },
  {
    icon: Camera,
    title: 'Crea recuerdos',
    text: 'Descubre actividades y proyectos para disfrutar el cosplay acompañado.',
    color: 'bg-rose',
    num: '03',
  },
]

export default function Home({
  onJoin,
  savedCreators,
  toggleCreator,
  savedEvents,
  toggleEvent,
  savedCollabs,
  toggleCollab,
}) {
  const creadores = useApi(() => obtenerTodos('creadores'))
  const eventos = useApi(() => obtenerTodos('eventos'))
  return (
    <>
      <Hero onJoin={onJoin} />
      <section className="section-space bg-white">
        <div className="container-nexo">
          <SectionHeading
            eyebrow="Así funciona el club"
            title={
              <>
                Un hobby. <span className="text-coral">Muchas formas</span> de vivirlo.
              </>
            }
            description="CosVibe está pensado tanto para quien acaba de elegir su primer personaje como para quien lleva años construyendo trajes."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {pilares.map((p) => (
              <article key={p.num} className="card-paper p-6 sm:p-7">
                <div className="flex items-start justify-between">
                  <span
                    className={`sticker flex h-15 w-15 rotate-[-6deg] items-center justify-center rounded-[18px] ${p.color}`}
                  >
                    <p.icon size={28} />
                  </span>
                  <span className="font-display text-5xl font-extrabold text-ink/15">{p.num}</span>
                </div>
                <h3 className="font-display mt-8 text-2xl font-extrabold">{p.title}</h3>
                <p className="mt-3 text-sm leading-7 text-subtle">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space bg-mint/35">
        <div className="container-nexo">
          <SectionHeading
            eyebrow="Tablón de colaboraciones"
            title={
              <>
                ¿Te falta alguien para <span className="squiggle">tu idea?</span>
              </>
            }
            description="Aquí se encuentran propuestas concretas: sesiones de fotos, grupos para eventos, costura y proyectos compartidos."
            to="/colaboraciones"
            linkText="Ver todas las propuestas"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {convocatorias.slice(0, 2).map((c) => (
              <CollabCard
                key={c.id}
                item={c}
                saved={savedCollabs.includes(c.id)}
                onToggle={toggleCollab}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-nexo">
          <SectionHeading
            eyebrow="Personas con ideas"
            title={
              <>
                Conoce a quienes <span className="text-coral">también crean.</span>
              </>
            }
            description="Explora personas por sus habilidades, no por números de seguidores. Cada ficha cuenta qué hace y qué le gustaría aprender."
            to="/comunidad"
            linkText="Explorar creadores"
          />
          {creadores.datos ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {creadores.datos.slice(0, 3).map((c) => (
                <CreatorCard
                  key={c.id}
                  creator={c}
                  saved={savedCreators.includes(c.id)}
                  onToggle={toggleCreator}
                />
              ))}
            </div>
          ) : (
            <EstadoCarga
              cargando={creadores.cargando}
              error={creadores.error}
              onReintentar={creadores.reintentar}
              texto="Cargando creadores..."
            />
          )}
        </div>
      </section>
      <section className="section-space bg-white">
        <div className="container-nexo">
          <SectionHeading
            eyebrow="Galería de la comunidad"
            title={
              <>
                Personajes que <span className="text-coral">cobran vida.</span>
              </>
            }
            description="Anime, videojuegos, cine y fantasía: así se ven los trajes de la comunidad CosVibe."
            to="/galeria"
            linkText="Ver galería completa"
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {galeria.slice(0, 8).map((f) => (
              <Link
                key={f.id}
                to="/galeria"
                className="card-paper card-lift group relative aspect-[3/4] overflow-hidden"
              >
                <img
                  src={f.src}
                  alt={f.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute inset-x-0 bottom-0 bg-ink/80 px-3 py-2 text-xs font-extrabold text-white">
                  {f.autor}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space border-y-2 border-ink bg-sun">
        <div className="container-nexo grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="kicker">No solo el resultado</span>
            <h2 className="font-display mt-4 text-[clamp(2.8rem,5vw,4.5rem)] font-extrabold leading-[1.03] tracking-[-.06em]">
              Cada cosplay tiene una <span className="text-coral">historia detrás.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8">
              Desde el primer boceto hasta el último detalle. Comparte tus aprendizajes y descubre
              cómo otras personas resuelven sus proyectos.
            </p>
            <Link to="/proyectos" className="btn-dark mt-7">
              Ver procesos creativos <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="max-w-[490px] lg:ml-auto">
            <ProjectCard proyecto={proyectos[0]} />
          </div>
        </div>
      </section>
      <section className="section-space bg-white">
        <div className="container-nexo">
          <SectionHeading
            eyebrow="Planifica tu próxima salida"
            title={
              <>
                ¡Nos vemos <span className="text-coral">afuera!</span>
              </>
            }
            description="Encuentros, talleres y paseos fotográficos. Guarda los que te interesen en tu agenda."
            to="/eventos"
            linkText="Ver la agenda"
          />
          {eventos.datos ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {eventos.datos.map((e) => (
                <EventCard
                  key={e.id}
                  evento={e}
                  saved={savedEvents.includes(e.id)}
                  onToggle={toggleEvent}
                />
              ))}
            </div>
          ) : (
            <EstadoCarga
              cargando={eventos.cargando}
              error={eventos.error}
              onReintentar={eventos.reintentar}
              texto="Cargando eventos..."
            />
          )}
        </div>
      </section>
      <section className="bg-coral py-14 text-white sm:py-20">
        <div className="container-nexo relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-white px-4 py-2 text-xs font-extrabold">
              <Sparkles size={15} /> CREAR ES MÁS DIVERTIDO JUNTOS
            </span>
            <h2 className="font-display mt-5 max-w-2xl text-4xl font-extrabold leading-[1.1] sm:text-5xl">
              ¿Tu primera vez? Aquí también es tu lugar.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/90">
              Empieza con nuestras guías o crea tu tarjeta para que otros creadores te encuentren.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link to="/recursos" className="btn-light">
              <Scissors size={17} /> Ver guías
            </Link>
            <button className="btn-dark" onClick={onJoin}>
              <MessageCircle size={17} /> Crear mi tarjeta
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
