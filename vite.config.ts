import { defineConfig, Plugin } from 'vite'

function fileProtocolCompatibility(): Plugin {
  return {
    name: 'file-protocol-compatibility',
    transformIndexHtml(html) {
      return html
        .replace(/ crossorigin/g, '')
        .replace(/ type="module"/g, ' defer')
    },
  }
}

export default defineConfig({
  base: './',
  build: {
    modulePreload: false,
    rollupOptions: {
      output: {
        format: 'iife',
      },
    },
  },
  plugins: [fileProtocolCompatibility()],
})
