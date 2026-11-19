import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, X, PencilLine, ImagePlus, AtSign, MapPin, ArrowUpRight } from 'lucide-react'

// Formulario para crear la tarjeta de miembro que aparece en el directorio.
const ciudades = [
  'Tokio',
  'Seúl',
  'Los Ángeles',
  'Ciudad de México',
  'São Paulo',
  'Madrid',
  'Londres',
  'Lima',
  'Online',
]
const roles = ['Costura', 'Props', 'Maquillaje', 'Fotografía', 'Principiante']
const niveles = ['Mi primer cosplay', 'Aprendiendo', 'En proceso', 'Compartiendo', 'Colaborando']
const habilidadesDisponibles = [
  'Foam',
  'Armaduras',
  'Pintura',
  'Impresión 3D',
  'Patronaje',
  'Telas',
  'Bordado',
  'Pelucas',
  'Maquillaje',
  'Retratos',
  'Edición',
  'Poses',
  'Bocetos',
  'Accesorios',
]
const vacio = {
  nombre: '',
  alias: '',
  ciudad: '',
  rol: '',
  nivel: '',
  habilidades: [],
  bio: '',
  busca: '',
  instagram: '',
  imagen: '',
  acepto: false,
}

const reducirFoto = (archivo) =>
  new Promise((resolve, reject) => {
    const lector = new FileReader()
    lector.onload = () => {
      const img = new Image()
      img.onload = () => {
        const escala = Math.min(1, 600 / img.width)
        const lienzo = document.createElement('canvas')
        lienzo.width = img.width * escala
        lienzo.height = img.height * escala
        lienzo.getContext('2d').drawImage(img, 0, 0, lienzo.width, lienzo.height)
        resolve(lienzo.toDataURL('image/jpeg', 0.8))
      }
      img.onerror = reject
      img.src = lector.result
    }
    lector.onerror = reject
    lector.readAsDataURL(archivo)
  })

function validar(f) {
  const e = {}
  if (f.nombre.trim().length < 2) e.nombre = 'Escribe tu nombre (mínimo 2 caracteres).'
  if (!/^@?[a-zA-Z0-9._]{3,20}$/.test(f.alias.trim()))
    e.alias = 'Usa de 3 a 20 letras, números, punto o guion bajo.'
  if (!f.ciudad) e.ciudad = 'Elige tu ciudad.'
  if (!f.rol) e.rol = 'Elige lo que más te gusta hacer.'
  if (!f.nivel) e.nivel = 'Elige tu nivel.'
  if (f.habilidades.length < 1) e.habilidades = 'Marca al menos una habilidad.'
  if (f.habilidades.length > 5) e.habilidades = 'Puedes marcar hasta 5 habilidades.'
  if (f.bio.trim().length < 20) e.bio = 'Cuéntanos un poco más (mínimo 20 caracteres).'
  if (f.busca.trim().length < 10) e.busca = 'Escribe qué buscas (mínimo 10 caracteres).'
  if (f.instagram && !/^@?[a-zA-Z0-9._]{2,30}$/.test(f.instagram.trim()))
    e.instagram = 'Escribe solo tu usuario, por ejemplo @mi.cosplay.'
  if (!f.acepto) e.acepto = 'Debes aceptar los acuerdos de la comunidad.'
  return e
}

const Campo = ({ label, error, children, className = '' }) => (
  <label className={`block text-sm font-extrabold ${className}`}>
    {label}
    {children}
    {error && <span className="mt-1 block text-xs font-bold text-coral">{error}</span>}
  </label>
)

export default function JoinModal({ open, onClose, member, onSave }) {
  const [form, setForm] = useState(vacio)
  const [editing, setEditing] = useState(false)
  const [errores, setErrores] = useState({})
  if (!open) return null
  const showCard = member && !editing
  const cambiar = (campo) => (e) =>
    setForm((p) => ({
      ...p,
      [campo]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }))
  const alternarHabilidad = (h) =>
    setForm((p) => ({
      ...p,
      habilidades: p.habilidades.includes(h)
        ? p.habilidades.filter((x) => x !== h)
        : [...p.habilidades, h],
    }))
  const elegirFoto = async (e) => {
    const archivo = e.target.files[0]
    if (!archivo) return
    if (!archivo.type.startsWith('image/')) {
      setErrores((p) => ({ ...p, imagen: 'El archivo debe ser una imagen.' }))
      return
    }
    try {
      const imagen = await reducirFoto(archivo)
      setForm((p) => ({ ...p, imagen }))
      setErrores((p) => ({ ...p, imagen: undefined }))
    } catch {
      setErrores((p) => ({ ...p, imagen: 'No pudimos leer esa imagen.' }))
    }
  }
  const guardar = (e) => {
    e.preventDefault()
    const encontrados = validar(form)
    setErrores(encontrados)
    if (Object.keys(encontrados).length) return
    const alias = '@' + form.alias.trim().replace(/^@/, '')
    const instagram = form.instagram.trim() ? '@' + form.instagram.trim().replace(/^@/, '') : ''
    onSave({
      ...form,
      id: 'mi-tarjeta',
      propio: true,
      nombre: form.nombre.trim(),
      alias,
      instagram,
      bio: form.bio.trim(),
      busca: form.busca.trim(),
    })
    setEditing(false)
  }
  const editar = () => {
    setForm({ ...vacio, ...member, acepto: true })
    setErrores({})
    setEditing(true)
  }

  return (
    <div
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/70 px-4 py-8"
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="join-title"
        className="card-paper w-full max-w-2xl bg-paper p-6 sm:p-9"
      >
        <div className="flex items-center justify-between">
          <span className="kicker">Tu lugar en CosVibe</span>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="rounded-full border-2 border-ink bg-white p-2"
          >
            <X size={21} />
          </button>
        </div>
        {showCard ? (
          <div className="pt-8">
            <CheckCircle2 size={45} className="text-coral" />
            <h2 id="join-title" className="font-display mt-4 text-4xl font-extrabold">
              ¡Hola, {member.nombre}!
            </h2>
            <div className="sticker mt-6 flex rotate-[-1deg] flex-col gap-5 rounded-2xl bg-mint p-6 sm:flex-row">
              {member.imagen && (
                <img
                  src={member.imagen}
                  alt={`Foto de ${member.nombre}`}
                  className="h-32 w-32 shrink-0 rounded-xl border-2 border-ink object-cover"
                />
              )}
              <div>
                <p className="text-xs font-extrabold uppercase tracking-widest">Mi tarjeta CosVibe</p>
                <strong className="font-display mt-2 block text-3xl font-extrabold">
                  {member.nombre}
                </strong>
                <p className="font-bold">{member.alias}</p>
                <p className="mt-2 flex items-center gap-1 text-sm font-bold">
                  <MapPin size={14} />
                  {member.ciudad} · {member.rol} · {member.nivel}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {member.habilidades.map((h) => (
                    <span key={h} className="rounded-lg bg-white px-2 py-1 text-xs font-bold">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm leading-7 text-subtle">
              Tu tarjeta ya aparece en el directorio de creadores.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/comunidad/mi-tarjeta" onClick={onClose} className="btn-primary">
                Ver mi ficha <ArrowUpRight size={16} />
              </Link>
              <button onClick={editar} className="btn-outline">
                <PencilLine size={16} /> Editar tarjeta
              </button>
            </div>
          </div>
        ) : (
          <>
            <h2 id="join-title" className="font-display mt-6 text-4xl font-extrabold">
              Preséntate a tu manera.
            </h2>
            <p className="mt-3 text-sm leading-7 text-subtle">
              Crea tu tarjeta para aparecer en el directorio y que otros creadores te encuentren.
            </p>
            <form onSubmit={guardar} className="mt-6 grid gap-4 sm:grid-cols-2" noValidate>
              <Campo label="Nombre" error={errores.nombre}>
                <input
                  className="form-control"
                  value={form.nombre}
                  onChange={cambiar('nombre')}
                  placeholder="¿Cómo te llamas?"
                  maxLength={40}
                />
              </Campo>
              <Campo label="Usuario" error={errores.alias}>
                <div className="relative">
                  <AtSign
                    size={16}
                    className="absolute left-4 top-[58%] -translate-y-1/2 text-subtle"
                  />
                  <input
                    className="form-control !pl-10"
                    value={form.alias.replace(/^@/, '')}
                    onChange={cambiar('alias')}
                    placeholder="mi.cosplay"
                    maxLength={21}
                  />
                </div>
              </Campo>
              <Campo label="Ciudad" error={errores.ciudad}>
                <select className="form-control" value={form.ciudad} onChange={cambiar('ciudad')}>
                  <option value="">Elige una opción</option>
                  {ciudades.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </Campo>
              <Campo label="¿Qué te gusta hacer?" error={errores.rol}>
                <select className="form-control" value={form.rol} onChange={cambiar('rol')}>
                  <option value="">Elige una opción</option>
                  {roles.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </Campo>
              <Campo label="Tu nivel" error={errores.nivel}>
                <select className="form-control" value={form.nivel} onChange={cambiar('nivel')}>
                  <option value="">Elige una opción</option>
                  {niveles.map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </Campo>
              <Campo label="Instagram (opcional)" error={errores.instagram}>
                <input
                  className="form-control"
                  value={form.instagram}
                  onChange={cambiar('instagram')}
                  placeholder="@mi.cosplay"
                  maxLength={31}
                />
              </Campo>
              <fieldset className="sm:col-span-2">
                <legend className="text-sm font-extrabold">
                  Habilidades{' '}
                  <span className="font-semibold text-subtle">({form.habilidades.length}/5)</span>
                </legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {habilidadesDisponibles.map((h) => (
                    <button
                      type="button"
                      key={h}
                      onClick={() => alternarHabilidad(h)}
                      aria-pressed={form.habilidades.includes(h)}
                      className="filter-chip !px-3 !py-1.5 !text-xs"
                    >
                      {h}
                    </button>
                  ))}
                </div>
                {errores.habilidades && (
                  <span className="mt-1 block text-xs font-bold text-coral">
                    {errores.habilidades}
                  </span>
                )}
              </fieldset>
              <Campo label="Sobre ti" error={errores.bio} className="sm:col-span-2">
                <textarea
                  className="form-control min-h-24"
                  value={form.bio}
                  onChange={cambiar('bio')}
                  placeholder="Qué personajes te gustan, qué estás creando, cómo empezaste..."
                  maxLength={200}
                />
                <span className="mt-1 block text-right text-xs font-semibold text-subtle">
                  {form.bio.length}/200
                </span>
              </Campo>
              <Campo label="¿Qué buscas en CosVibe?" error={errores.busca} className="sm:col-span-2">
                <input
                  className="form-control"
                  value={form.busca}
                  onChange={cambiar('busca')}
                  placeholder="Ej. Un fotógrafo para mi próxima sesión"
                  maxLength={120}
                />
              </Campo>
              <div className="sm:col-span-2">
                <span className="text-sm font-extrabold">Foto de tu cosplay (opcional)</span>
                <label className="mt-2 flex cursor-pointer items-center gap-4 rounded-xl border-2 border-dashed border-ink/40 bg-white p-4 hover:bg-cream">
                  {form.imagen ? (
                    <img
                      src={form.imagen}
                      alt="Vista previa"
                      className="h-16 w-16 rounded-lg border-2 border-ink object-cover"
                    />
                  ) : (
                    <ImagePlus size={28} className="text-coral" />
                  )}
                  <span className="text-sm font-bold">
                    {form.imagen ? 'Cambiar foto' : 'Elegir una imagen'}
                  </span>
                  <input type="file" accept="image/*" onChange={elegirFoto} className="sr-only" />
                </label>
                {errores.imagen && (
                  <span className="mt-1 block text-xs font-bold text-coral">{errores.imagen}</span>
                )}
              </div>
              <label className="flex items-start gap-3 text-sm font-semibold sm:col-span-2">
                <input
                  type="checkbox"
                  checked={form.acepto}
                  onChange={cambiar('acepto')}
                  className="mt-1 h-4 w-4 accent-coral"
                />
                <span>
                  Acepto los{' '}
                  <Link
                    to="/nosotros"
                    onClick={onClose}
                    className="font-extrabold text-coral underline"
                  >
                    acuerdos de la comunidad
                  </Link>
                  : respeto, créditos y consentimiento.
                </span>
              </label>
              {errores.acepto && (
                <span className="-mt-3 block text-xs font-bold text-coral sm:col-span-2">
                  {errores.acepto}
                </span>
              )}
              {Object.keys(errores).some((k) => errores[k]) && (
                <p role="alert" className="rounded-xl bg-rose p-3 text-sm font-bold sm:col-span-2">
                  Revisa los campos marcados en rojo.
                </p>
              )}
              <button type="submit" className="btn-primary mt-2 w-full sm:col-span-2">
                {editing ? 'Guardar cambios' : 'Crear mi tarjeta'}
              </button>
            </form>
          </>
        )}
      </section>
    </div>
  )
}
