// Datos ficticios fijos; creadores y eventos vienen de la API.
export const roles = ['Todos', 'Costura', 'Props', 'Maquillaje', 'Fotografía', 'Principiante']
export const ciudades = ['Todas', 'Lima', 'Arequipa', 'Cusco', 'Trujillo', 'Online']


export const convocatorias = [
  { id: 'c1', titulo: 'Busco fotógrafo/a para sesión de armadura', categoria: 'Fotografía', ciudad: 'Lima', modalidad: 'Presencial', autor: 'Mika', detalle: 'Quiero documentar el proceso completo de una armadura hecha con foam. Podemos coordinar una sesión sencilla al aire libre.', etiquetas: ['Sesión', 'Colaboración', 'Principiantes bienvenidos'] },
  { id: 'c2', titulo: 'Club de costura: aprendamos patrones', categoria: 'Costura', ciudad: 'Online', modalidad: 'Virtual', autor: 'Rin', detalle: 'Una reunión online para compartir cómo sacar patrones de prendas sencillas y resolver dudas entre todos.', etiquetas: ['Aprendizaje', 'Costura'] },
  { id: 'c3', titulo: 'Armemos un grupo para una convención', categoria: 'Grupo', ciudad: 'Arequipa', modalidad: 'Presencial', autor: 'Ari', detalle: 'La idea es organizar un grupo pequeño de personajes originales, sin presión por el nivel de experiencia.', etiquetas: ['Grupo', 'Evento', 'Ideas'] },
  { id: 'c4', titulo: 'Consejos para mis primeros props', categoria: 'Props', ciudad: 'Online', modalidad: 'Virtual', autor: 'Sol', detalle: 'Estoy probando materiales económicos para un accesorio y me vendrían bien ideas de otras personas.', etiquetas: ['Foam', 'Primera vez'] },
]


export const proyectos = [
  { id: 'armadura-foam', titulo: 'Mi primera armadura ligera', autor: 'Mika', estado: 'En proceso', categoria: 'Props', resumen: 'Aprender a construir una pieza grande sin gastar demasiado.', imagen: '/assets/images/proyectos/armadura-foam.jpg', pasos: [{titulo:'Boceto',detalle:'Separar la idea en piezas pequeñas y medibles.'},{titulo:'Prueba de materiales',detalle:'Elegir foam según peso y flexibilidad.'},{titulo:'Montaje',detalle:'Unir, ajustar y preparar la pieza para pintura.'}] },
  { id: 'chaqueta-bordada', titulo: 'De un dibujo a un traje tradicional', autor: 'Rin', estado: 'Terminado', categoria: 'Costura', resumen: 'Un proyecto para practicar patronaje, capas de tela y detalles bordados.', imagen: '/assets/images/proyectos/chaqueta-bordada.jpg', pasos: [{titulo:'Referencias',detalle:'Definir cortes y colores que sí se pueden conseguir.'},{titulo:'Patrones',detalle:'Probar primero con tela de descarte.'},{titulo:'Detalles finales',detalle:'Bordar, planchar y corregir medidas.'}] },
  { id: 'retrato-cosplay', titulo: 'Retratos con luz natural', autor: 'Kai', estado: 'Terminado', categoria: 'Fotografía', resumen: 'Una sesión al atardecer aprovechando la luz dorada, sin equipo caro.', imagen: '/assets/images/proyectos/retrato-cosplay.jpg', pasos: [{titulo:'Plan',detalle:'Escoger un personaje, lugar y hora de luz suave.'},{titulo:'Sesión',detalle:'Probar encuadres y poses en colaboración.'},{titulo:'Edición',detalle:'Ajustar luz y color sin perder detalles del vestuario.'}] },
  { id: 'primer-wig', titulo: 'Darle vida a una peluca', autor: 'Ari', estado: 'En proceso', categoria: 'Maquillaje', resumen: 'Pruebas de peinado y color para una caracterización.', imagen: '/assets/images/proyectos/primer-wig.jpg', pasos: [{titulo:'Ideas',detalle:'Reunir referencias desde varios ángulos.'},{titulo:'Pruebas',detalle:'Practicar mechones y fijación con cuidado.'},{titulo:'Look completo',detalle:'Integrar maquillaje y accesorios.'}] },
]

export const recursos = [
  { id: 'primer-cosplay', categoria: 'Para empezar', dificultad: 'Inicial', tiempo: '5 min', titulo: 'Tu primer cosplay sin complicarte', descripcion: 'Una ruta sencilla para elegir personaje, planificar materiales y terminar a tiempo.', pasos: ['Elige un diseño que te entusiasme y puedas adaptar.', 'Haz una lista de 3 elementos esenciales.', 'Pon primero una fecha realista, no una fecha perfecta.', 'Pide opinión y muestra avances.'] },
  { id: 'foam', categoria: 'Props', dificultad: 'Inicial', tiempo: '7 min', titulo: 'Props básicos con foam', descripcion: 'Ideas de materiales, pruebas pequeñas y seguridad al trabajar.', pasos: ['Haz un patrón de papel.', 'Prueba pegamentos y pintura en un recorte.', 'Ventila el espacio si usas productos con vapores.', 'Haz fotos del proceso para aprender después.'] },
  { id: 'foto', categoria: 'Fotografía', dificultad: 'Inicial', tiempo: '4 min', titulo: 'Fotografía cosplay con celular', descripcion: 'Consejos accesibles para retratar personajes sin equipo profesional.', pasos: ['Busca luz natural suave.', 'Revisa el fondo y evita elementos distractores.', 'Prueba tres encuadres antes de elegir.', 'Pide permiso antes de publicar fotos de otras personas.'] },
  { id: 'convencion', categoria: 'Eventos', dificultad: 'Inicial', tiempo: '5 min', titulo: 'Tu primera convención', descripcion: 'Qué preparar para disfrutar, cuidar tu traje y conocer gente.', pasos: ['Lleva agua y un pequeño kit de reparación.', 'Planifica descansos y transporte.', 'Respeta los límites personales al pedir fotos.', 'No necesitas competir: disfruta la experiencia.'] },
]
