import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// GitHub Pages: BASE_PATH=/nossa-viagem/  |  local preview root: BASE_PATH=/
const base = process.env.BASE_PATH ?? '/nossa-viagem/'
const normalizedBase = base.endsWith('/') ? base : `${base}/`

export default defineConfig({
  plugins: [preact()],
  base: normalizedBase,
})
