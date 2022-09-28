import { defineConfig } from 'umi'
export default defineConfig({
  tailwindcss: {},
  clientLoader: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
  hash: true,
  extraPostCSSPlugins: [require("tailwindcss"), require("autoprefixer")],
})
