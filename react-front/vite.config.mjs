import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [react(), Unocss()],
  server: {
    host: '0.0.0.0',
    port: 5173,
  }
})
