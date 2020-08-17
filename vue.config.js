module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './srv'
    },
    electronBuilder: {
      nodeIntegration: true,
      externals: ['speedbee_ts_js'],
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

