import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [
    tailwindcss(),
    // TypeScript validation plugin
    checker({
      typescript: {
        tsconfigPath: './tsconfig.json',
        root: './',
        buildMode: true  // Block dev server on errors
      },
      overlay: {
        initialIsOpen: 'error', // Show errors immediately
        position: 'tl' // top-left
      }
    })
  ],
  
  build: {
    // Block production build on TS errors
    minify: 'terser',
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignore warnings, but not errors
        if (warning.code === 'TS_ERROR') {
          throw new Error(warning.message)
        }
        warn(warning)
      }
    }
  },
  
  server: {
    // Automatically open browser
    open: true
  }
})