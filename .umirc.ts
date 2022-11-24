import { defineConfig } from 'umi'
export default defineConfig({
  /* enable plugin */
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
  tailwindcss: {},
  plugins: [
    '@umijs/plugins/dist/tailwindcss',
  ],
  extraPostCSSPlugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-preset-env')(),
  ],
})
