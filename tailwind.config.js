module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    colors: {
      header: "#ee7335",
    },
    extend: {},
  },
  variants: {},
  plugins: [require("tailwindcss"), require("autoprefixer")],
}
