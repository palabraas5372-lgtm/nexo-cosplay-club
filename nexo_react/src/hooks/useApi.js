import { useCallback, useEffect, useState } from 'react'

// Pide datos y maneja carga, error y reintento.
export function useApi(pedirDatos, dependencias = []) {
  const [datos, setDatos] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [intento, setIntento] = useState(0)

  const pedir = useCallback(pedirDatos, dependencias)

  useEffect(() => {
    let activo = true
    setCargando(true)
    setError(null)
    pedir()
      .then(resultado => { if (activo) setDatos(resultado) })
      .catch(err => { if (activo) setError(err.message) })
      .finally(() => { if (activo) setCargando(false) })
    return () => { activo = false }
  }, [pedir, intento])

  const reintentar = () => setIntento(n => n + 1)
  return { datos, cargando, error, reintentar }
}
