import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/binance.api": {
        target: "https://api.binance.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/binance.api/, ""),
      }
    }
  },
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
