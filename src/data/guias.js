// Guías paso a paso de la página Guías.
export const guias = [
  {
    id: 'primer-cosplay',
    categoria: 'Para empezar',
    dificultad: 'Inicial',
    lectura: '8 min',
    duracion: '2 a 6 semanas',
    presupuesto: 'Bajo a medio',
    imagen: '/assets/images/guias/primer-cosplay.jpg',
    titulo: 'Tu primer cosplay paso a paso',
    descripcion: 'Cómo elegir personaje, organizar el traje por piezas y llegar listo al evento.',
    intro:
      'Tu primer cosplay no tiene que ser perfecto ni caro. La clave es elegir bien, dividir el trabajo en partes pequeñas y darte tiempo para probar. Esta guía te lleva desde la idea hasta el día del evento.',
    materiales: [
      'Imágenes de referencia del personaje (frente, perfil y espalda)',
      'Cinta métrica',
      'Cuaderno o app de notas para tu lista',
      'Ropa base que ya tengas o de segunda mano',
      'Peluca y accesorios principales',
      'Maquillaje básico',
    ],
    pasos: [
      {
        titulo: 'Elige un personaje que te motive',
        detalle:
          'Escoge a alguien que te guste de verdad: la motivación te sostiene cuando algo sale mal. Para empezar, busca diseños con ropa sencilla, como uniformes o ropa casual, y pocos accesorios grandes.',
      },
      {
        titulo: 'Reúne buenas referencias',
        detalle:
          'Guarda imágenes del personaje de frente, de perfil y de espalda. Fíjate en los colores, las texturas y los detalles pequeños. Un tablero en Pinterest o una carpeta en tu celular te ayuda a tener todo a mano.',
      },
      {
        titulo: 'Divide el traje en piezas',
        detalle:
          'Haz una lista: ropa, peluca, maquillaje, calzado, accesorios y props. Marca al lado de cada pieza si la vas a comprar, adaptar de algo que ya tienes o fabricar tú.',
      },
      {
        titulo: 'Define presupuesto y fecha',
        detalle:
          'Elige el evento al que quieres ir y cuenta hacia atrás. Reparte el trabajo por semanas y deja al menos una semana libre al final para imprevistos. Anota cuánto puedes gastar en cada pieza.',
      },
      {
        titulo: 'Consigue la ropa base',
        detalle:
          'Revisa primero tu clóset y las tiendas de segunda mano. Muchas prendas se adaptan con pequeños cambios: teñir, cortar, coser parches o agregar botones. A esto se le llama closet cosplay y es perfecto para empezar.',
      },
      {
        titulo: 'Prepara peluca y maquillaje',
        detalle:
          'Compra una peluca resistente al calor para poder darle forma. Practica el maquillaje al menos una vez antes del evento y toma fotos para ver cómo se ve con luz natural.',
      },
      {
        titulo: 'Haz una prueba completa',
        detalle:
          'Ponte todo el traje durante una o dos horas: camina, siéntate, sube escaleras. Así descubres qué aprieta, qué se cae o qué incomoda, y tienes tiempo de corregirlo.',
      },
      {
        titulo: 'Alista el día del evento',
        detalle:
          'Prepara un kit de emergencia, guarda tus referencias en el celular para posar y revisa cómo llegarás. Lo más importante: disfruta, nadie espera que tu primer cosplay sea perfecto.',
      },
    ],
    consejos: [
      'Empieza por lo que más identifica al personaje: su silueta, sus colores o su peinado.',
      'Fotografía tu avance; ver el proceso te motiva y sirve para compartir en la comunidad.',
      'Pregunta en el tablón de colaboraciones: alguien ya resolvió lo que te preocupa.',
    ],
    errores: [
      'Elegir un traje demasiado complejo para el primer intento.',
      'Dejar todo para la última semana.',
      'Llegar al evento sin haberte probado el traje completo.',
    ],
  },
  {
    id: 'foam',
    categoria: 'Props',
    dificultad: 'Intermedio',
    lectura: '10 min',
    duracion: '1 a 3 semanas',
    presupuesto: 'Medio',
    imagen: '/assets/images/guias/foam.jpg',
    titulo: 'Props y armaduras con foam EVA',
    descripcion:
      'Del patrón de papel a la pieza pintada: cortes, calor, pegado, sellado y pintura.',
    intro:
      'El foam EVA es el material favorito para armaduras y props: es liviano, barato y fácil de cortar. Con un buen patrón, un cúter afilado y paciencia puedes hacer piezas que parecen de metal.',
    seguridad:
      'Trabaja en un lugar ventilado y usa mascarilla al pegar, lijar o calentar el foam. Usa lentes de protección con herramientas rotativas y mantén el cúter siempre apuntando lejos de tu cuerpo.',
    materiales: [
      'Planchas de foam EVA de 2, 5 y 10 mm',
      'Cúter con hojas de repuesto y regla metálica',
      'Pegamento de contacto',
      'Pistola de calor',
      'Lija o herramienta rotativa',
      'Sellador flexible (o cola blanca diluida)',
      'Pinturas acrílicas y pinceles',
      'Mascarilla y lentes de protección',
      'Elástico, velcro o hebillas para ajustar',
    ],
    pasos: [
      {
        titulo: 'Haz el patrón',
        detalle:
          'Envuelve la zona del cuerpo (o un maniquí) en film plástico y cúbrela con cinta de pintor. Dibuja encima las piezas, córtalas y pásalas a papel. Prueba primero el patrón en cartulina para ver si encaja.',
      },
      {
        titulo: 'Traslada y corta',
        detalle:
          'Marca el patrón sobre el foam con lapicero. Corta con el cúter bien afilado, en un solo movimiento y sin presionar de más. Cambia la hoja seguido: una hoja sin filo rasga el foam. Para uniones curvas, corta el borde en bisel, a 45 grados.',
      },
      {
        titulo: 'Dale forma con calor',
        detalle:
          'Calienta el foam con la pistola de calor a unos 15 cm, moviéndola sin parar. Cuando esté tibio, cúrvalo con las manos o sobre un objeto redondo y sostenlo hasta que enfríe. Si se brilla o burbujea, está demasiado caliente.',
      },
      {
        titulo: 'Pega las piezas',
        detalle:
          'Aplica pegamento de contacto en los dos bordes y espera a que esté seco al tacto, unos 10 minutos. Une las piezas con cuidado: el pegado es inmediato y no se puede corregir después.',
      },
      {
        titulo: 'Agrega detalles',
        detalle:
          'Usa foam fino de 2 mm para relieves y bordes. Graba líneas con la punta del cúter o con calor, y lija los bordes para que se vean suaves y no se noten los cortes.',
      },
      {
        titulo: 'Sella la pieza',
        detalle:
          'El foam es poroso y absorbe la pintura. Aplica 3 o 4 capas finas de sellador flexible, dejando secar entre capas. Sin este paso, la pintura se agrieta cuando la pieza se dobla.',
      },
      {
        titulo: 'Pinta y envejece',
        detalle:
          'Pinta una base oscura y luego el color principal. Para que parezca metal gastado, pasa pintura negra diluida y retírala con un trapo, y luego pasa un pincel casi seco con plateado por los bordes. Termina con barniz.',
      },
      {
        titulo: 'Coloca ajustes',
        detalle:
          'Agrega elástico, velcro o hebillas para ponerte y quitarte la pieza fácilmente. Pruébatela y mueve los brazos y piernas para comprobar que no limita tus movimientos.',
      },
    ],
    consejos: [
      'Guarda tus patrones en papel: te servirán para el próximo traje.',
      'Haz una pieza de prueba pequeña para practicar sellado y pintura.',
      'Numera las piezas del patrón para no confundirte al armar.',
    ],
    errores: [
      'Cortar con una hoja sin filo.',
      'Pintar sin sellar antes.',
      'Unir las piezas antes de que el pegamento esté seco al tacto.',
    ],
  },
  {
    id: 'pelucas',
    categoria: 'Pelucas',
    dificultad: 'Intermedio',
    lectura: '8 min',
    duracion: '2 a 5 horas',
    presupuesto: 'Bajo a medio',
    imagen: '/assets/images/proyectos/primer-wig.jpg',
    titulo: 'Peinar y estilizar una peluca',
    descripcion:
      'Cómo cortar, dar forma con calor y fijar puntas para que la peluca parezca del personaje.',
    intro:
      'La peluca es lo primero que la gente reconoce de un personaje. Con una buena base y algo de paciencia puedes cortarla y darle forma en casa, aunque nunca hayas cortado pelo.',
    seguridad:
      'Antes de usar plancha o secadora, prueba la temperatura en un mechón escondido: la fibra sintética se derrite con facilidad. Ventila el lugar al usar laca en cantidad.',
    materiales: [
      'Peluca de fibra resistente al calor',
      'Cabeza de maniquí con soporte',
      'Alfileres en T',
      'Peine de dientes anchos y cepillo',
      'Tijeras de peluquería',
      'Laca o spray fijador fuerte',
      'Plancha o secadora con temperatura regulable',
      'Gorro para peluca y horquillas',
    ],
    pasos: [
      {
        titulo: 'Elige la peluca correcta',
        detalle:
          'Busca el color y el estilo más cercanos al personaje, siempre un poco más larga de lo que necesitas: cortar es fácil, alargar no. Revisa que sea resistente al calor y que tenga suficiente cantidad de pelo.',
      },
      {
        titulo: 'Fíjala en la cabeza de maniquí',
        detalle:
          'Sujeta la peluca con alfileres en T en la frente, los lados y la nuca. Así no se mueve mientras trabajas y puedes verla desde todos los ángulos.',
      },
      {
        titulo: 'Desenrédala',
        detalle:
          'Peina de las puntas hacia arriba, por secciones y con un peine de dientes anchos. No tires con fuerza: la fibra se rompe y se encrespa.',
      },
      {
        titulo: 'Corta por etapas',
        detalle:
          'Primero define el largo general y después las capas. Corta con la punta de las tijeras en vertical para que el corte se vea natural y no recto. Deja el flequillo para el final y córtalo con la peluca puesta.',
      },
      {
        titulo: 'Dale forma con calor',
        detalle:
          'Usa la plancha o la secadora a baja temperatura para alisar, ondular o dar dirección al pelo. Cuando tenga la forma que quieres, déjala enfriar sin tocarla para que se fije.',
      },
      {
        titulo: 'Crea volumen y puntas',
        detalle:
          'Para peinados con picos o mucho volumen, carda la base del mechón con el peine, aplica laca fuerte y dale forma con los dedos. Fija con aire frío de la secadora.',
      },
      {
        titulo: 'Pruébatela',
        detalle:
          'Recoge tu pelo, ponte el gorro y luego la peluca. Ajusta con horquillas y revisa en el espejo que no se vea tu pelo ni el borde del gorro.',
      },
      {
        titulo: 'Guárdala bien',
        detalle:
          'Déjala en la cabeza de maniquí o en una redecilla, lejos del sol y del polvo. Así mantiene la forma para el próximo evento.',
      },
    ],
    consejos: [
      'Ten la referencia del personaje abierta mientras cortas.',
      'Corta menos de lo que crees: siempre puedes quitar más.',
      'Para pelucas de colores fuertes, una peluca con raíz más oscura se ve más natural.',
    ],
    errores: [
      'Cortar el largo final al inicio.',
      'Usar la plancha muy caliente y derretir la fibra.',
      'Cepillar en seco las pelucas rizadas, que quedan esponjadas.',
    ],
  },
  {
    id: 'costura',
    categoria: 'Costura',
    dificultad: 'Inicial',
    lectura: '9 min',
    duracion: '1 a 4 semanas',
    presupuesto: 'Medio',
    imagen: '/assets/images/proyectos/chaqueta-bordada.jpg',
    titulo: 'Costura básica para tu traje',
    descripcion: 'Medidas, patrones, prueba en tela barata y cómo coser las piezas en orden.',
    intro:
      'Coser tu propio traje te permite elegir la tela, el color y el ajuste exacto. No necesitas experiencia: con un patrón base, una prueba en tela barata y paciencia puedes hacer prendas que se ven profesionales.',
    materiales: [
      'Tela adecuada al personaje (algodón, gabardina, satén…)',
      'Tela barata para la prueba (tocuyo o lienzo)',
      'Patrón comercial o hecho a tu medida',
      'Cinta métrica, alfileres y tiza de sastre',
      'Tijeras para tela',
      'Hilo del mismo color que la tela',
      'Máquina de coser o aguja e hilo',
      'Plancha',
    ],
    pasos: [
      {
        titulo: 'Toma tus medidas',
        detalle:
          'Mide pecho, cintura, cadera, largo de espalda, hombros y largo de brazo. Anótalas en tu cuaderno: las usarás en cada paso.',
      },
      {
        titulo: 'Busca un patrón base',
        detalle:
          'No hace falta empezar de cero. Busca un patrón parecido a la prenda (una camisa, un vestido o un abrigo) y modifícalo: cambia el largo, el cuello o las mangas para que se parezca al personaje.',
      },
      {
        titulo: 'Haz una prueba en tela barata',
        detalle:
          'Corta y cose una primera versión en tela económica. Pruébatela, marca con alfileres lo que hay que ajustar y corrige el patrón. Este paso evita arruinar la tela buena.',
      },
      {
        titulo: 'Prepara y corta la tela final',
        detalle:
          'Lava y plancha la tela antes de cortar, porque algunas encogen. Coloca el patrón siguiendo la dirección del hilo de la tela, marca con tiza y deja 1,5 cm de margen de costura.',
      },
      {
        titulo: 'Cose en orden',
        detalle:
          'Une primero hombros y costados, después las mangas y por último el cuello. Plancha cada costura abierta antes de pasar a la siguiente: así la prenda queda más prolija.',
      },
      {
        titulo: 'Agrega cierres y terminaciones',
        detalle:
          'Coloca cierres, botones o velcro según el diseño. Haz los dobladillos y remata los hilos sueltos para que la prenda no se deshaga.',
      },
      {
        titulo: 'Suma los detalles',
        detalle:
          'Deja para el final los bordados, ribetes, parches o aplicaciones. Son los que hacen que la prenda se vea igual a la del personaje.',
      },
      {
        titulo: 'Prueba y ajusta',
        detalle:
          'Ponte la prenda con el resto del traje, muévete y revisa cómo cae. Ajusta largos y anchos antes del evento.',
      },
    ],
    consejos: [
      'Prueba la puntada de la máquina en un retazo de la misma tela.',
      'Plancha mientras coses, no solo al final.',
      'Para telas que se deshilachan, remata los bordes con zigzag.',
    ],
    errores: [
      'Saltarse la prueba en tela barata.',
      'Cortar sin dejar margen de costura.',
      'No lavar la tela antes y que encoja después.',
    ],
  },
  {
    id: 'foto',
    categoria: 'Fotografía',
    dificultad: 'Inicial',
    lectura: '7 min',
    duracion: 'Una sesión de 1 a 2 horas',
    presupuesto: 'Bajo',
    imagen: '/assets/images/guias/foto.jpg',
    titulo: 'Fotografía cosplay con celular',
    descripcion: 'Luz, fondo, encuadres, poses y edición para lograr buenas fotos sin equipo caro.',
    intro:
      'No necesitas una cámara profesional para lograr buenas fotos de cosplay. Con un celular, buena luz y algo de planificación puedes conseguir retratos que luzcan el trabajo detrás de cada traje.',
    materiales: [
      'Celular con el lente limpio',
      'Trípode o un soporte para apoyarlo',
      'Cartulina blanca o papel aluminio como reflector',
      'Batería externa',
      'Lista de poses e imágenes de referencia',
    ],
    pasos: [
      {
        titulo: 'Planifica la sesión',
        detalle:
          'Elige un lugar que combine con el personaje: un parque para un personaje de fantasía, una calle o azotea para uno urbano. Prepara una lista de poses y acuerda con el cosplayer qué fotos quiere.',
      },
      {
        titulo: 'Elige la hora correcta',
        detalle:
          'La mejor luz está en la primera hora de la mañana y la última de la tarde, o en un día nublado. Evita el sol del mediodía, que crea sombras duras en la cara.',
      },
      {
        titulo: 'Prepara el celular',
        detalle:
          'Limpia el lente. Toca la pantalla sobre los ojos del cosplayer para enfocar y baja un poco la exposición si la imagen se ve muy clara. No uses el zoom digital: es mejor acercarte.',
      },
      {
        titulo: 'Controla la luz',
        detalle:
          'Coloca al cosplayer con la luz de lado o detrás. Si hay sombras fuertes en la cara, usa la cartulina blanca para rebotar luz y suavizarlas.',
      },
      {
        titulo: 'Cuida el fondo',
        detalle:
          'Busca fondos limpios, sin personas, cables ni basura. Separa al cosplayer del fondo unos metros para que se vea más profundo.',
      },
      {
        titulo: 'Varía encuadres y ángulos',
        detalle:
          'Toma al menos tres tipos de foto: cuerpo entero, medio cuerpo y detalles del traje. Pon la cámara a la altura del pecho para no deformar, o más baja para que el personaje se vea poderoso.',
      },
      {
        titulo: 'Dirige las poses',
        detalle:
          'Muestra al cosplayer cómo van quedando las fotos y ajusten juntos. Usa el modo ráfaga en poses con movimiento, como saltos o capas al viento.',
      },
      {
        titulo: 'Edita y comparte con respeto',
        detalle:
          'Edita con apps gratuitas ajustando luz, contraste y recorte, sin exagerar los filtros. Antes de publicar, pide permiso y da créditos al cosplayer y al fotógrafo.',
      },
    ],
    consejos: [
      'Toma muchas fotos: entre 50 tomas siempre hay pocas buenas.',
      'Fíjate en las manos: una mano relajada cambia toda la pose.',
      'Lleva paños para limpiar el lente durante la sesión.',
    ],
    errores: [
      'Fotografiar con el sol del mediodía.',
      'Usar el zoom digital en lugar de acercarse.',
      'Publicar fotos sin permiso de la persona.',
    ],
  },
  {
    id: 'convencion',
    categoria: 'Eventos',
    dificultad: 'Inicial',
    lectura: '6 min',
    duracion: '1 día',
    presupuesto: 'Bajo',
    imagen: '/assets/images/guias/convencion.jpg',
    titulo: 'Tu primera convención en cosplay',
    descripcion: 'Qué revisar antes, qué llevar en tu kit y cómo cuidarte durante el día.',
    intro:
      'Ir en cosplay a una convención es una de las mejores experiencias del hobby. Un poco de preparación evita la mayoría de los problemas y te deja disfrutar, conocer gente y tomarte fotos.',
    materiales: [
      'Agua y snacks',
      'Kit de reparación: aguja, hilo, imperdibles, cinta doble faz y pegamento instantáneo',
      'Tijeras pequeñas',
      'Batería externa para el celular',
      'Maquillaje para retoques',
      'Bolsa para guardar partes del traje',
      'Zapatos cómodos o plantillas',
      'Entrada y documento de identidad',
    ],
    pasos: [
      {
        titulo: 'Revisa las reglas del evento',
        detalle:
          'Lee horarios, mapa y normas de cosplay. Muchas convenciones tienen reglas sobre props, como el tamaño o los materiales permitidos para armas de utilería.',
      },
      {
        titulo: 'Prueba el traje antes',
        detalle:
          'Póntelo completo al menos una vez y camina un rato. Si algo aprieta o se cae, aún tienes tiempo de arreglarlo.',
      },
      {
        titulo: 'Arma tu kit',
        detalle:
          'Prepara la lista de materiales de esta guía en una mochila pequeña. Un imperdible a tiempo puede salvar tu día.',
      },
      {
        titulo: 'Planifica el transporte',
        detalle:
          'Piensa cómo llegarás con el traje puesto o si te cambiarás allá. Revisa si el evento tiene vestidores o guardarropa para tus cosas.',
      },
      {
        titulo: 'Organiza tu agenda',
        detalle:
          'Anota los horarios de concursos, encuentros de cosplayers y sesiones de fotos grupales que te interesen. Deja tiempo libre para recorrer.',
      },
      {
        titulo: 'Toma fotos con respeto',
        detalle:
          'Pide permiso antes de fotografiar a alguien y acepta un no. Lo mismo para ti: puedes negarte a una foto. Un traje nunca es una invitación a tocar.',
      },
      {
        titulo: 'Cuida tu cuerpo',
        detalle:
          'Toma agua seguido, come y busca momentos para sentarte. Si una pieza del traje molesta, quítatela un rato: la salud va primero.',
      },
      {
        titulo: 'Comparte después',
        detalle:
          'Sube tus fotos, agradece y etiqueta a fotógrafos y amigos. Es el momento perfecto para conectar con la gente que conociste.',
      },
    ],
    consejos: [
      'Lleva una foto de tu personaje para los fotógrafos.',
      'Ve con amigos o encuentra un grupo en el tablón de colaboraciones.',
      'Ten una muda de ropa cómoda para el regreso.',
    ],
    errores: [
      'Estrenar zapatos el día del evento.',
      'Olvidar tomar agua por estar con el traje.',
      'No llevar nada para reparar el traje.',
    ],
  },
]
