import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/e-shopping/',
  build: {
    outDir: 'dist', // Explicitly set the output directory
  },
});
