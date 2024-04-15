import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // generate .vite/manifest.json in dist
    manifest: true,
  },
  server: {
    proxy: {
      // proxy /api requests to another server
      // '/accounts/logout': {target: 'http://localhost:8000', changeOrigin: true},
    },
  },
});
