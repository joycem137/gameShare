/**
 * The root of the app
 */
const React = require('react');

function makeGameApp({gameState, gameModel}) {
    const Board = require('./Board.jsx');

    class GameApp extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            const {boardImage} = gameModel;
            const boardRect = {
                width: 720,
                height: 720
            };

            return (
                <Board rect={boardRect} boardImage={boardImage}></Board>
            );
        }
    }

    return GameApp;
}

module.exports = makeGameApp;