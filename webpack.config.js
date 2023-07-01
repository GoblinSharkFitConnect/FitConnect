const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './client/src/index.html',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.s?css/,
                exclude: /(node_modules)/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.html$/,
                exclude: /(node_modules)/,
                use: ['file-loader', 'html-loader'],
            },
        ],
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        static: {
            directory: path.resolve(__dirname, 'build'),
            publicPath: '/client',
        },
        // enable HMR on the devServer
        hot: true,
        // fallback to root for other urls
        historyApiFallback: true,
        // for eliminating CORS error
        // headers: { 'Access-Control-Allow-Origin': '*' },
        proxy: {
            '/api/**': {
                target: 'http://localhost:3000/',
                secure: false,
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './client/src/index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
};