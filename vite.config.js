import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import expressServer from './server/server'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    modules: {
      generateScopedName: isProduction.call(process.env.NODE_ENV)
        ? '[hash:base64:5]'
        : '[local]__[hash:base64:5]',
    }
  },
  plugins: [
    vue(),
    expressServer()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

function isProduction() {
  return this.toString() === 'production';
}
