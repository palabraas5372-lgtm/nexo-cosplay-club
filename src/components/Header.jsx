import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import Navbar from './Navbar.jsx'

// Barra superior con mensajes que cambian cada 4 segundos.
const mensajes = [
  'Cosplay para crear, aprender y conocer a tu gente',
  'Próximo evento: Desfile cosplay por el centro · 20 de febrero',
  '¿Tu primera vez? Revisa nuestras guías para empezar',
  'Publica tu idea en el tablón y encuentra tu crew',
]

const INTERVALO = 4000
const FUNDIDO = 300

export default function Header({ onJoin, member }) {
  const [indice, setIndice] = useState(0)
  const [visible, setVisible] = useState(true)
  const [pausado, setPausado] = useState(false)

  useEffect(() => {
    if (pausado) return
    let cambio
    const temporizador = setInterval(() => {
      setVisible(false)
      cambio = setTimeout(() => {
        setIndice(actual => (actual + 1) % mensajes.length)
        setVisible(true)
      }, FUNDIDO)
    }, INTERVALO)
    return () => {
      clearInterval(temporizador)
      clearTimeout(cambio)
    }
  }, [pausado])

  return <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/95 backdrop-blur-lg">
    <div
      className="border-b border-ink bg-mint py-1.5 text-center text-[10px] font-extrabold uppercase tracking-[.15em] sm:text-[11px]"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
    >
      <p aria-live="polite" className={`transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <Star size={11} className="mr-2 inline fill-current" aria-hidden="true"/>
        {mensajes[indice]}
        <Star size={11} className="ml-2 inline fill-current" aria-hidden="true"/>
      </p>
    </div>
    <Navbar onJoin={onJoin} member={member}/>
  </header>
}
