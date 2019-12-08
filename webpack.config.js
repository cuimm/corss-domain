const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 5600,
        progress: true, // 显示加载进度
        // contentBase: './dist', // 指定访问的静态资源目录
        proxy: {
            '/': {
                target: 'http://127.0.0.1:3001',
                changeOrigin: true,
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}