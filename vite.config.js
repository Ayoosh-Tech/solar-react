import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'SolarLink',
        short_name: 'Solarlink',
        description: 'A solar energy company CRM and communication platform',
        theme_color: '#0b3d2e',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: '/solarlink-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/solarlink-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
