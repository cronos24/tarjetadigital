import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/tarjetadigital/',
  plugins: [react()],
  // build: {
  //   outDir: 'tarjetadigital', // Directorio de salida para los archivos de producción
  //   assetsDir: 'assets', // Carpeta donde se almacenarán los assets
  //   rollupOptions: {
  //     output: {
        
  //       chunkFileNames: 'assets/[name]-[hash].js',
  //       entryFileNames: 'assets/[name]-[hash].js'
  //     }

  //   }
  // }
})
