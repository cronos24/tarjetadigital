import { defineConfig, UserConfig, ConfigEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite'

// Definir un tipo para el parámetro de la función de configuración
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  // Cargar todas las variables de entorno
  const env = loadEnv(mode, process.cwd())

  // Determinar el valor base dependiendo del entorno
  const base = env.VITE_APP_ENV === 'Development' ? '/tarjetadigital_prueba/' : '/tarjetadigital/';
  const outDir =  env.VITE_APP_ENV === 'Development' ? 'tarjetadigital_prueba' : 'tarjetadigital';

  return {
    base: base,
    plugins: [react()],
    build: {
      outDir: outDir, // Directorio de salida para los archivos de producción
      assetsDir: 'assets', // Carpeta donde se almacenarán los assets
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js'
        }
      }
    }
  };
});
