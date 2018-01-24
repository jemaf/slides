const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const OUTPUT_PATH = 'dist';

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        app: './index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.[hash].js'
    },
    externals: {
        'reveal': 'Reveal'
    },
    resolve: {
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            { test:  /\.(eot|svg|ttf|woff|woff2)$/, use: 'file-loader' },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new CopyWebpackPlugin([ 
            { from: 'slides/**/*' }, 
            { from: 'img/**/*' },
            { from: '../node_modules/reveal.js/plugin', to: 'plugin/' },
            { from: '../node_modules/reveal_external/external', to: 'plugin/external' }, 
            { from: '../node_modules/reveal.js/lib/js/head.min.js', to: 'lib/' }, 
            { from: '../node_modules/reveal.js/js/reveal.js', to: 'lib/' },
            { from: '../node_modules/d3/build/d3.js', to: 'lib/' },
        ])
    ],
    devServer: {
        port: 8080
    }
};