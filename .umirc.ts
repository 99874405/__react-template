import { defineConfig } from 'umi'
export default defineConfig({
  tailwindcss: {},
  clientLoader: {},
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  extraPostCSSPlugins: [require('tailwindcss'), require('autoprefixer')],
  hash: true,
})
