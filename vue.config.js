module.exports = {
  lintOnSave: false,

  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: "page-"
    }
  },
  devServer: {
    https: true,
    proxy: "https://yapi.ymzstudio.com/mock/11"
  },
  publicPath: "./"
};
