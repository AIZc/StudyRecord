const package = require('./package.json')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const ENV = process.env.NODE_ENV || 'development'
// const HOST = 'http://localhost'

process.env.VUE_APP_NAME = process.env.VUE_APP_NAME || package.name

module.exports = {
  configureWebpack: config => {
		// 如果是生产环境的话，开启压缩
    if (ENV === 'production') {
      config.plugins.push(new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: /\.(js|css|html)$/,
        threshold: 10240,
        minRatio: 0.8
			})) 
			// 配置externals就是当使用CDN进入的js文件在当前项目中可以引用
			// 比如在开发环境引入的vue是import Vue from 'vue', 这个大写的Vue就是对应的下面的大写的Vue
      config.externals = {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'axios': 'axios'
      }
    }
  },
  // 设置输出静态资源
  assetsDir: 'static',
  // 关闭eslint错误
  lintOnSave: false,
	// 关闭sourceMap
  productionSourceMap: false,
  devServer: {
    // 设置https
    https: true,
    // open 自动启动浏览器
		open: false,
		// hotOnly 是否在构建失败时不需要刷新页面作为回退
		hotOnly: false,
		// 设置代理
    // proxy: {
    //   '/': {
    //     target: HOST,
    //     changeOrigin: true
    //   }
    // }
  }
}