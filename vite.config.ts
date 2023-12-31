import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/AmuPortfolio/' : '/',
  plugins: [
    vue(),
    vueJsx(),
    pages({
      dirs: 'src/views',
    }),
  ],
  resolve: {
    alias: {
      '@': `${__dirname}/src`,
    }
  },
  server: {
    host: '0.0.0.0',
    watch: {
      usePolling: true
    }
  },
})
