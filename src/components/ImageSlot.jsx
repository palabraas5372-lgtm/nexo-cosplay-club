import { useState } from 'react'

const defaults = {
  hero: '/assets/placeholders/hero.svg',
  persona: '/assets/placeholders/persona.svg',
  proyecto: '/assets/placeholders/proyecto.svg',
  evento: '/assets/placeholders/evento.svg',
}

// Muestra la foto real si existe; si falta o no carga, muestra el marcador con su etiqueta.
export default function ImageSlot({ tipo = 'proyecto', src, alt = '', className = '', label = 'FOTO POR DEFINIR', loading = 'lazy' }) {
  const [failed, setFailed] = useState(false)
  const usePlaceholder = !src || failed
  return (
    <div className={`image-frame ${className}`}>
      <img src={usePlaceholder ? defaults[tipo] : src} alt={alt} loading={loading} onError={() => setFailed(true)} />
      {usePlaceholder && <span className="image-label">{label}</span>}
    </div>
  )
}
