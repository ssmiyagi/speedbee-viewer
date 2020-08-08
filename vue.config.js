module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './srv'
    }
  },
  configureWebpack: {
    devtool: 'source-map',
    devServer: {
      watchOptions: {
        poll: true
      }
    }
  }
}

