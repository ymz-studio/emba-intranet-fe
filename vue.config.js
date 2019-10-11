module.exports = {
  lintOnSave: false,
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: "page-"
    }
  },
  devServer: {
    proxy: "https://yapi.ymzstudio.com/mock/11"
  },
  publicPath: "./"
};
