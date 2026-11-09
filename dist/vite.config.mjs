import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//this tha small change for that
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 👈 this fixes the blank page on deployment
})


