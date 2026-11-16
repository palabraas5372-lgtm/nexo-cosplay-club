// Copia db.json a public/api/ para que Vercel tenga los datos.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'

const db = JSON.parse(readFileSync('db.json', 'utf8'))
mkdirSync('public/api', { recursive: true })
for (const [coleccion, registros] of Object.entries(db)) {
  writeFileSync(`public/api/${coleccion}.json`, JSON.stringify(registros))
  console.log(`API estática: /api/${coleccion}.json (${registros.length} registros)`)
}
