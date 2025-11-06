import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Keep favicon files at root level
          if (assetInfo.name?.includes('favicon') || 
              assetInfo.name?.includes('apple-touch-icon') ||
              assetInfo.name?.includes('android-chrome') ||
              assetInfo.name?.includes('logo') ||
              assetInfo.name === 'icon.svg' ||
              assetInfo.name === 'site.webmanifest') {
            return '[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
});
