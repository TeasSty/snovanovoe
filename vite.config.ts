import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages project site: https://teassty.github.io/snovanovoe/
export default defineConfig({
  plugins: [react()],
  base: '/snovanovoe/',
})
