import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': `${__dirname}/src`,
      '@assets': `${__dirname}/src/assets`,
      '@components': `${__dirname}/src/components`,
      '@pages': `${__dirname}/src/pages`,
      '@styles': `${__dirname}/src/styles`,
      '@typography': `${__dirname}/src/components/typography`,
      '@utils': `${__dirname}/src/utils`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/main.scss";`,
      },
    },
  },
})
