import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // This makes Vite accessible on all network interfaces, including 127.0.0.1
  },
  plugins: [react()],
})
