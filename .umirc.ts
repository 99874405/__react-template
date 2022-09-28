export default {
  clientLoader: {},
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
  extraPostCSSPlugins: [require("tailwindcss")],
  npmClient: "yarn",
  hash: true,
};
