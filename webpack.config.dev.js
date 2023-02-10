const ESLintPlugin = require('eslint-webpack-plugin');
const { merge } = require('webpack-merge');
const defaultConfig = require('./webpack.config.default');

module.exports = merge(defaultConfig, {
    mode: 'development',
    plugins: [new ESLintPlugin()],
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        hot: true,
        open: true
    }
})