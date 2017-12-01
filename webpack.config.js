const webpack = require('webpack');

const config = {
    entry: './underwater.js',
    output: {
        path: __dirname,
        filename: 'underwater.min.js',
        library: '_'
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
