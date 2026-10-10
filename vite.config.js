import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'oxc',
    sourcemap: false,
    cssMinify: true,
    assetsInlineLimit: 4096, // inline assets < 4kb as base64
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          if (id.includes('@emailjs/browser')) {
            return 'emailjs';
          }
          if (id.includes('lucide-react')) {
            return 'icons';
          }
        },
        // Cache-busting: content hash in filenames
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
  // Optimize deps pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
})
