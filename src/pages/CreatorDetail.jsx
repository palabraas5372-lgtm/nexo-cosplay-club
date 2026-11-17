import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Bookmark, MapPin, Lightbulb, Handshake, PencilLine, AtSign } from 'lucide-react'
import { obtenerUno } from '../services/api.js'
import { useApi } from '../hooks/useApi.js'
import EstadoCarga from '../components/EstadoCarga.jsx'
import ImageSlot from '../components/ImageSlot.jsx'
import NotFound from './NotFound.jsx'
export default function CreatorDetail({ savedCreators, toggleCreator, member, onJoin }) {
  const {id} = useParams()
  const { datos: c, cargando, error, reintentar } = useApi(() => id === 'mi-tarjeta' ? Promise.resolve(member) : obtenerUno('creadores', id), [id, member])
  if(cargando || error) return <section className="section-space"><div className="container-nexo"><EstadoCarga cargando={cargando} error={error} onReintentar={reintentar} texto="Cargando ficha..."/></div></section>
  if(!c) return <NotFound/>
  const saved = savedCreators.includes(c.id)
  return <section className="section-space"><div className="container-nexo"><Link to="/comunidad" className="mb-7 inline-flex items-center gap-2 text-sm font-extrabold"><ArrowLeft size={17}/> Volver a creadores</Link><div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]"><ImageSlot tipo="persona" src={c.imagen} alt={`Foto de cosplay de ${c.nombre}`} className="card-paper aspect-[4/4.4] overflow-hidden"/><div className="self-center"><span className="chip bg-mint">{c.rol}</span><h1 className="font-display mt-5 text-5xl font-extrabold tracking-tight sm:text-6xl">{c.nombre}<span className="text-coral">.</span></h1><p className="mt-2 text-lg font-bold text-subtle">{c.alias}</p><p className="mt-5 text-base leading-8">{c.bio}</p><div className="mt-6 flex flex-wrap gap-3"><span className="chip bg-sun"><MapPin size={14}/>{c.ciudad}</span><span className="chip bg-rose">{c.nivel}</span>{c.instagram && <span className="chip bg-white"><AtSign size={14}/>{c.instagram.replace(/^@/, '')}</span>}</div><div className="mt-7"><h2 className="font-display mb-3 text-lg font-extrabold">Lo que me gusta hacer</h2><div className="flex flex-wrap gap-2">{c.habilidades.map(h=><span key={h} className="rounded-lg bg-cream px-3 py-2 text-sm font-bold">{h}</span>)}</div></div><div className="card-soft mt-7 p-5"><h2 className="flex items-center gap-2 font-display text-xl font-extrabold"><Handshake size={20} className="text-coral"/> Quiero conectar para...</h2><p className="mt-2 text-sm leading-7 text-subtle">{c.busca}</p></div><div className="mt-6 flex flex-wrap gap-3">{c.propio ? <button onClick={onJoin} className="btn-primary"><PencilLine size={16}/> Editar mi tarjeta</button> : <button onClick={()=>toggleCreator(c.id)} aria-pressed={saved} className={saved?'btn-dark':'btn-primary'}><Bookmark size={16} fill={saved?'currentColor':'none'}/>{saved?'Guardado en mi lista':'Guardar creador'}</button>}<Link to="/colaboraciones" className="btn-outline"><Lightbulb size={16}/> Ver colaboraciones</Link></div></div></div></div></section>
}
