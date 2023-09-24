import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ fastRefresh: false })],
  worker: {
    plugins: [react()],
  },
  base: '/little-lemon/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  },
  resolve: {
    alias: {
      '@': `${__dirname}/src`,
      '@components': `${__dirname}/src/components`,
      '@hooks': `${__dirname}/src/hooks`,
      '@pages': `${__dirname}/src/pages`,
      '@styles': `${__dirname}/src/styles`,
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
});
