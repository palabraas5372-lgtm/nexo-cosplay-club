# CosVibe — Comunidad cosplay

Prototipo universitario para **PC3, Avance N.º 1** de JavaScript Avanzado (UTP).

**Idea:** comunidad cosplay para aprender técnicas, buscar colaboradores, mostrar procesos y descubrir actividades. No es un e-commerce.

## Tecnologías

React 19 · Vite 7 · Tailwind CSS 4 · React Router DOM · Lucide React.

## Ejecutar

```bash
npm install
npm run dev
```

Con la API simulada (JSON Server), en dos terminales:

```bash
npm run api   # terminal 1: JSON Server en http://localhost:3001
npm run dev   # terminal 2: la web en http://localhost:5173
```

Si `npm run api` no está encendido, la web usa la copia estática `public/api/*.json` (es la que se usa en Vercel).

Verificar el build:

```bash
npm run build
```

## Páginas

- `/` Inicio
- `/comunidad` Creadores y buscador
- `/comunidad/:id` Ficha de creador
- `/colaboraciones` Tablón y publicación local
- `/eventos` Agenda y guardados
- `/proyectos` Procesos creativos
- `/proyectos/:id` Detalle de proceso
- `/recursos` Guías
- `/nosotros` Propósito del proyecto
- `/contacto` Formulario simulado
- `*` 404

## Imágenes

Las fotos se colocan en `public/assets/images/` con los nombres listados en `public/assets/images/README.md`.
El componente `src/components/ImageSlot.jsx` muestra la foto si existe; si falta, muestra el marcador de `public/assets/placeholders/` con la etiqueta "FOTO POR DEFINIR".

## API

- `db.json`: base de datos de JSON Server con `creadores` (12) y `eventos` (3).
- `src/services/api.js`: funciones `obtenerTodos` y `obtenerUno` con `fetch`.
- `src/hooks/useApi.js`: hook con `useState` y `useEffect` que maneja carga, error y reintento.
- `src/components/EstadoCarga.jsx`: mensaje de carga y de error con botón «Reintentar».
- `scripts/generar-api.mjs`: copia `db.json` a `public/api/` antes de `dev` y `build`.

## Datos de demostración

Los perfiles, eventos, proyectos y propuestas iniciales son ficticios. Las funciones de tarjeta, guardados y nuevas propuestas utilizan **LocalStorage únicamente**. No existe autenticación ni mensajería real.

## Diseño

Identidad editorial y vivaz basada en fanzines: crema `#FFF8ED`, tinta `#223348`, coral `#FF644D`, amarillo `#FFD34E` y menta `#70D9C4`. Titulares Bricolage Grotesque; cuerpo DM Sans. Implementado con Tailwind CSS y estilos base en `src/index.css`.

## Entregables académicos

- `docs/FIGMA_INSTRUCCIONES.md`: cómo importar los wireframes y la guía de estilos a Figma.
- `design/figma/`: wireframes del Home y guía de estilos (desktop y mobile) en SVG.
- `docs/FIGMA_INSTRUCCIONES.md`: importación a Figma.
- `design/figma/`: guía de estilos y wireframes desktop/mobile, en SVG.

**Pendiente del equipo:** importar los SVG en Figma, compartir un enlace real y completar los nombres de integrantes.

## Usarlo en una rama del repositorio actual

Antes de sobrescribir archivos del proyecto anterior, crea una rama desde un árbol de Git limpio:

```bash
git switch -c feature/nexo-cosplay-vivo
```

Copia el contenido de este ZIP en la raíz de esa rama, eliminando los componentes antiguos que ya no sean usados. Luego instala, prueba y realiza un commit. No copies `node_modules` ni `dist`.
