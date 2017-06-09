/**
 * The root of the app
 */
const React = require('react');
const Board = require('./Board.jsx');
const Reserve = require('./Reserve.jsx');
const Pieces = require('./Pieces.jsx');

function makeGameApp({gameState, gameModel}) {

    class GameApp extends React.Component {
        constructor(props) {
            super(props);
            this.state = gameState.getState();
            gameState.onUpdate(this.setState.bind(this));
        }

        render() {
            const {board: {image: boardImage}, locations} = gameModel;
            const {pieces, whiteReserve, blackReserve} = this.state;

            const boardRect = {
                width: 720,
                height: 720
            };

            return (
                <Board rect={boardRect} boardImage={boardImage}>
                    <Pieces boardRect={boardRect}
                            pieces={pieces}
                            gameModel={gameModel}/>
                    <Reserve reserve={whiteReserve}
                            gameModel={gameModel}
                            boardRect={boardRect}
                            color='white'/>
                    <Reserve reserve={blackReserve}
                            gameModel={gameModel}
                            boardRect={boardRect}
                            color='black'/>
                </Board>
            );
        }
    }

    return GameApp;
}

module.exports = makeGameApp;