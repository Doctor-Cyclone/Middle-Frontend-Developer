const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // Для минификации файла со стилями.
const TerserPlugin = require("terser-webpack-plugin"); // Для минификации JS файла.

const { merge } = require('webpack-merge');
const defaultConfig = require('./webpack.config.default');

module.exports = merge(defaultConfig, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: 'report.html'
    })],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                vendor: {
                    chunks: 'all',
                    name: 'vendor',
                    test: /node_modules/
                }
            },
        }
    }
})