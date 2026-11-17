// Lee de JSON Server; si no responde, usa /api/<recurso>.json.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'
const USAR_JSON_SERVER = import.meta.env.DEV || Boolean(import.meta.env.VITE_API_URL)

async function pedir(url) {
  const respuesta = await fetch(url)
  if (!respuesta.ok) throw new Error(`Error ${respuesta.status} al consultar ${url}`)
  return respuesta.json()
}

export async function obtenerTodos(recurso) {
  if (USAR_JSON_SERVER) {
    try {
      return await pedir(`${API_URL}/${recurso}`)
    } catch {
      console.info('JSON Server no responde; usando /api estática.')
    }
  }
  try {
    return await pedir(`/api/${recurso}.json`)
  } catch {
    throw new Error('No pudimos cargar la información. Revisa tu conexión e inténtalo otra vez.')
  }
}

export async function obtenerUno(recurso, id) {
  const registros = await obtenerTodos(recurso)
  return registros.find(registro => registro.id === id) ?? null
}
