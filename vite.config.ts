import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@/assets': '/src/assets',
      '@/components': '/src/components',
      '@/layouts': '/src/layouts',
      '@/model': '/src/model',
      '@/pages': '/src/pages',
      '@/store': '/src/store',
      '@/styles': '/src/styles',
      '@/utils': '/src/utils',
    },
  },
});
