var fs = require('fs-extra');
var webpack = require('webpack');
var path = require('path');

var React = require('react');

// Fix node modules for using through webpack.
var nodeModules = {};
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


module.exports = [
    {
        entry: ['./client/index.jsx'],

        output: {
            path: path.join(__dirname, 'build'),
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

        plugins: [HtmlWebpackPluginConfig]
    }
];