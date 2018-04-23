const webpack = require('webpack');
const { resolve } = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'underwater.js',
        library: '_',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map',
            exclude: /(node_modules|bower_components)/
        })
    ]
};

module.exports = config;
