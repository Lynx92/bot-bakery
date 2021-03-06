module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/bot-bakery/" : "/",
  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false
    }
  },
  transpileDependencies: ["quasar"]
};
