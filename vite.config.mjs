import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//t https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 👈 this fixes the blank page on deployment
})
