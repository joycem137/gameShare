/**
 * Starting point for all of our client side code.
 */

// My personal polyfill functions.
require('jsPolyfills');

// Our main stylesheet defining how to design our objects
require('./stylesheets/main.css');

// The react component.
const React = require('react');
const ReactDOM = require('react-dom');

const gameState = require('./state');
const gameModel = require('./gameModel');
const GameApp = require('./ui/GameApp.jsx')({gameState, gameModel});

ReactDOM.render(<GameApp/>, document.getElementById('app'));