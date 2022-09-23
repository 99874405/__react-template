import conf from './.umirc.~dev'
export default {
  tailwindcss: {},
  npmClient: "yarn",
  plugins: ["@umijs/plugins/dist/tailwindcss"],
  ...conf,
};
