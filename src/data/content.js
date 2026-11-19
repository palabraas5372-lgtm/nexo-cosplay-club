// Datos ficticios fijos; creadores y eventos vienen de la API.
export const roles = ['Todos', 'Costura', 'Props', 'Maquillaje', 'Fotografía', 'Principiante']
export const ciudades = [
  'Todas',
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

export const convocatorias = [
  {
    id: 'c1',
    titulo: 'Busco fotógrafo/a para sesión de armadura',
    categoria: 'Fotografía',
    ciudad: 'Tokio',
    modalidad: 'Presencial',
    autor: 'Mika',
    detalle:
      'Quiero documentar el proceso completo de una armadura hecha con foam. Podemos coordinar una sesión sencilla al aire libre.',
    etiquetas: ['Sesión', 'Colaboración', 'Principiantes bienvenidos'],
  },
  {
    id: 'c2',
    titulo: 'Club de costura: aprendamos patrones',
    categoria: 'Costura',
    ciudad: 'Online',
    modalidad: 'Virtual',
    autor: 'Rin',
    detalle:
      'Una reunión online para compartir cómo sacar patrones de prendas sencillas y resolver dudas entre todos.',
    etiquetas: ['Aprendizaje', 'Costura'],
  },
  {
    id: 'c3',
    titulo: 'Armemos un grupo para una convención',
    categoria: 'Grupo',
    ciudad: 'Seúl',
    modalidad: 'Presencial',
    autor: 'Ari',
    detalle:
      'La idea es organizar un grupo pequeño de personajes originales, sin presión por el nivel de experiencia.',
    etiquetas: ['Grupo', 'Evento', 'Ideas'],
  },
  {
    id: 'c4',
    titulo: 'Consejos para mis primeros props',
    categoria: 'Props',
    ciudad: 'Online',
    modalidad: 'Virtual',
    autor: 'Sol',
    detalle:
      'Estoy probando materiales económicos para un accesorio y me vendrían bien ideas de otras personas.',
    etiquetas: ['Foam', 'Primera vez'],
  },
]

export const proyectos = [
  {
    id: 'armadura-foam',
    titulo: 'Mi primera armadura ligera',
    autor: 'Mika',
    estado: 'En proceso',
    categoria: 'Props',
    resumen: 'Aprender a construir una pieza grande sin gastar demasiado.',
    imagen: '/assets/images/proyectos/armadura-foam.jpg',
    pasos: [
      { titulo: 'Boceto', detalle: 'Separar la idea en piezas pequeñas y medibles.' },
      { titulo: 'Prueba de materiales', detalle: 'Elegir foam según peso y flexibilidad.' },
      { titulo: 'Montaje', detalle: 'Unir, ajustar y preparar la pieza para pintura.' },
    ],
  },
  {
    id: 'chaqueta-bordada',
    titulo: 'De un dibujo a un traje tradicional',
    autor: 'Rin',
    estado: 'Terminado',
    categoria: 'Costura',
    resumen: 'Un proyecto para practicar patronaje, capas de tela y detalles bordados.',
    imagen: '/assets/images/proyectos/chaqueta-bordada.jpg',
    pasos: [
      { titulo: 'Referencias', detalle: 'Definir cortes y colores que sí se pueden conseguir.' },
      { titulo: 'Patrones', detalle: 'Probar primero con tela de descarte.' },
      { titulo: 'Detalles finales', detalle: 'Bordar, planchar y corregir medidas.' },
    ],
  },
  {
    id: 'retrato-cosplay',
    titulo: 'Retratos con luz natural',
    autor: 'Kai',
    estado: 'Terminado',
    categoria: 'Fotografía',
    resumen: 'Una sesión al atardecer aprovechando la luz dorada, sin equipo caro.',
    imagen: '/assets/images/proyectos/retrato-cosplay.jpg',
    pasos: [
      { titulo: 'Plan', detalle: 'Escoger un personaje, lugar y hora de luz suave.' },
      { titulo: 'Sesión', detalle: 'Probar encuadres y poses en colaboración.' },
      { titulo: 'Edición', detalle: 'Ajustar luz y color sin perder detalles del vestuario.' },
    ],
  },
  {
    id: 'primer-wig',
    titulo: 'Darle vida a una peluca',
    autor: 'Ari',
    estado: 'En proceso',
    categoria: 'Maquillaje',
    resumen: 'Pruebas de peinado y color para una caracterización.',
    imagen: '/assets/images/proyectos/primer-wig.jpg',
    pasos: [
      { titulo: 'Ideas', detalle: 'Reunir referencias desde varios ángulos.' },
      { titulo: 'Pruebas', detalle: 'Practicar mechones y fijación con cuidado.' },
      { titulo: 'Look completo', detalle: 'Integrar maquillaje y accesorios.' },
    ],
  },
]
