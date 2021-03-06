var fs = require('fs-extra');
var webpack = require('webpack');
var path = require('path');

var React = require('react');
// Fix node modules for using through webpack.
var nodeModules = {};

const OUTPUT_DIR = path.join(__dirname, 'build');

fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
});

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CopyWebpackPluginConfig = new CopyWebpackPlugin([
    {
        from: './client/assets',
        to: OUTPUT_DIR + '/assets'
    }
]);
module.exports = [
    {
        entry: ['./client/index.jsx'],

        output: {
            path: OUTPUT_DIR,
            filename: 'game.js'
        },

        module: {
            loaders: [
                { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
                { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
                { test: /\.css$/, loader: "style-loader!css-loader" }
            ]
        },

        resolve: {
            modules: [
                "node_modules"
            ]
        },

        plugins: [
            HtmlWebpackPluginConfig,
            CopyWebpackPluginConfig]
    }
];