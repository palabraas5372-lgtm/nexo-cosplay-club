import { LoaderCircle, TriangleAlert, RotateCcw } from 'lucide-react'

// Mensaje de carga o de error con botón para reintentar.
export default function EstadoCarga({ cargando, error, onReintentar, texto = 'Cargando...' }) {
  if (cargando) {
    return <div role="status" className="card-soft flex items-center justify-center gap-3 py-14 text-sm font-extrabold text-subtle">
      <LoaderCircle size={22} className="animate-spin text-coral" aria-hidden="true"/> {texto}
    </div>
  }
  if (error) {
    return <div role="alert" className="card-soft py-12 text-center">
      <TriangleAlert size={36} className="mx-auto text-coral" aria-hidden="true"/>
      <p className="font-display mt-3 text-2xl font-extrabold">Algo salió mal</p>
      <p className="mt-2 text-sm text-subtle">{error}</p>
      <button type="button" onClick={onReintentar} className="btn-outline mt-5"><RotateCcw size={16}/> Reintentar</button>
    </div>
  }
  return null
}
