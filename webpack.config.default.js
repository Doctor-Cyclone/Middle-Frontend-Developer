const CopyPlugin = require("copy-webpack-plugin"); // Для копирования файлов в папку с билдом.
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Для создания отдельного файла со стилями.
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Для генерации HTML с новым билдом js.
const path = require('path'); // Для сокращения абсолютных путей.

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.ts',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    // Расширения, которые не надо указывать при импорте файлов.
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    plugins:
        [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src/index.html')
            }),
            new CopyPlugin({
                patterns: [
                    { from: path.resolve(__dirname, 'src/assets'), to: path.resolve(__dirname, 'dist/assets') }
                ],
            }),
            new MiniCssExtractPlugin()
        ],
    module: {
        rules: [
            // Подключение css и scss файлов.
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use:
                    [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: [require('postcss-preset-env')],
                                },
                            },
                        },
                        "sass-loader"
                    ],
            },
            // Подключение шрифтов.
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            // Подключение .ts & .tsx файлов.
            {
                test: /\.[tj]sx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            // Подключение картинок.
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            // Подключение медиа файлов.
            {
                test: /\.mp3$/i,
                type: 'asset/resource',
            },
        ],
    },
}