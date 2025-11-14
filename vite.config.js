import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import compression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Brotli compression for production
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240, // Only compress files > 10KB
    }),
    // Gzip compression for fallback
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
    }),
    // Bundle analyzer (generates stats.html)
    visualizer({
      open: false,
      gzipSize: true,
      brotliSize: true,
      filename: 'dist/stats.html',
    })
  ],
  // Path aliases for cleaner imports
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@utils': '/src/utils',
      '@assets': '/src/assets',
    }
  },
  build: {
    // Target modern browsers
    target: 'es2020',
    // Minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
      }
    },
    // Rollup options
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'animation': ['framer-motion'],
          'icons': ['lucide-react', 'react-icons']
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Disable CSS code splitting for better initial load
    cssCodeSplit: false,
    // Don't report compressed size (faster builds)
    reportCompressedSize: false,
  }
})
