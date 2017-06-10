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

const gameModel = require('./model/gipf');

const GameState = require('./state/game');
const gameState = new GameState();

const UiState = require('./state/ui');
const uiState = new UiState(gameModel);

gameState.setState(gameModel.initState);

const GameApp = require('./ui/GameApp.jsx');

ReactDOM.render(<GameApp uiState={uiState} gameState={gameState} gameModel={gameModel}/>, document.getElementById('app'));