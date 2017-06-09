var fs = require('fs-extra');
var webpack = require('webpack');
var path = require('path');

var React = require('react');

var ASSET_DIR = 'assets';
var OUTPUT_JS = 'game.js';
var OUTPUT_HTML = 'index.html';
const OUTPUT_DIR = path.join(__dirname, 'build');

// Fix node modules for using through webpack.
var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = [
    {
        entry: ['./client/index.jsx'],

        output: {
            path: OUTPUT_DIR,
            publicPath: ASSET_DIR,
            filename: OUTPUT_JS
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
        }
    }
];

function makeIndex() {
    var outputDOM = React.DOM.html({},
        React.DOM.body({},
            React.DOM.div({ id: 'app' }),
            <!-- It is important that you point to the full url -->
            React.DOM.script({src: "http://localhost:8080/webpack-dev-server.js"}),
            React.DOM.script({src: '/' + ASSET_DIR + '/' + OUTPUT_JS})
        )
    );

    fs.writeFileSync(OUTPUT_DIR + '/' + OUTPUT_HTML, React.renderToStaticMarkup(outputDOM));
}