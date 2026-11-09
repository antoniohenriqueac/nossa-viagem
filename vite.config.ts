import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// GitHub Pages: BASE_PATH=/opala-wiki/  |  local preview root: BASE_PATH=/
const base = process.env.BASE_PATH ?? '/opala-wiki/'
const normalizedBase = base.endsWith('/') ? base : `${base}/`

export default defineConfig({
  plugins: [preact()],
  base: normalizedBase,
})
