import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  build: {
    // generate .vite/manifest.json in dist
    manifest: true,
    sourcemap: true,
  },
  server: {
    host: true,
    port: 3000,
    proxy: {
      // proxy /api requests to another server
      // '/accounts/logout': {target: 'http://localhost:8000', changeOrigin: true},
    },
  },
});
