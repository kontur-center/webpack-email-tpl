const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackInlineStylePlugin = require('html-webpack-inline-style-plugin');
module.exports = {
    watch: true,
    mode: process.env.NODE_ENV === 'production ' ? 'production' : 'development',
    target: 'browserslist',
    entry: "/src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(jpe?g|png)$/u,
                use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
            },
            {
                test: /\.html$/u,
                include: path.resolve(__dirname, 'src/components/'),
                use: 'raw-loader'
            }
        ]
    },
    plugins: [
        new CssMinimizerPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: false
        })
    ],
    devServer: {
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
}