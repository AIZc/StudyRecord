// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    devServer: {
        proxy: {
            // 处理以/api开头路径的请求
            // '/api': 'http://localhost:4000'   // http://localhost:4000/api/search/users
            '/api': {
                target: 'http://localhost:4000', // 转发的目标地址
                pathRewrite: {
                    '^/api': ''  // 转发请求时去除路径前面的/api
                },
            },

            '/gh': {
                target: 'https://api.github.com', // 转发的目标地址
                pathRewrite: {
                    '^/gh': ''  // 转发请求时去除路径前面的/api
                },
                changeOrigin: true, // 支持跨域, 如果协议/主机也不相同, 必须加上
            }
        }
    }
}