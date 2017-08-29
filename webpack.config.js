const path = require('path');
const CleaWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),

    },
    target: 'node',
    module: {
        rules: [{
            test: /\.js$/,
            use: [
                'babel-loader'
            ],
            exclude: [
                path.resolve(__dirname, "/node_modules"),
                path.resolve(__dirname, "/dist")
            ]

        }]
    },
    plugins: [
        new CleaWebpackPlugin(['dist'])
    ]
}