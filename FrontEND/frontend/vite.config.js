import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: true, // This makes Vite accessible on all network interfaces, not just localhost
        proxy: {
          '/api': {
            target: 'http://bytebazaar-backend',
            secure: false,
          },
        },
      },
      

    plugins: [react()],
});