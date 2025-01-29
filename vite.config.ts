import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve:{
    alias: {
      '@': '/src',
      components: '/src/components',
      hooks: '/src/hooks',
      pages: '/src/pages',
      services: '/src/services',
      store: '/src/store',
      types: '/src/types',
    },
  }
});
