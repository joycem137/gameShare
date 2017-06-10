/**
 * The root of the app
 */
const React = require('react');
const Board = require('./Board.jsx');
const Reserve = require('./Reserve.jsx');
const Pieces = require('./Pieces.jsx');
const GhostPiece = require('./GhostPiece.jsx');

class GameApp extends React.Component {
    constructor(props) {
        super(props);
        const {gameState, uiState} = this.props;
        this.state = {
            game: gameState.getState(),
            ui: uiState.getState()
        };
        gameState.onUpdate(game => this.setState({game}));
        uiState.onUpdate(ui => this.setState({ui}));
    }

    render() {
        const {gameModel} = this.props;
        const {board: {image: boardImage}} = gameModel;

        const {game: gameState, ui: uiState} = this.state;

        const {pieces, whiteReserve, blackReserve, currentPlayer, validMoves} = gameState;
        const {boardRect, mousePosition} = uiState;

        return (
            <Board rect={boardRect} boardImage={boardImage}>
                <GhostPiece
                        boardRect={boardRect}
                        color={currentPlayer}
                        validMoves={validMoves}
                        gameModel={gameModel}
                        mousePosition={mousePosition}/>
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

module.exports = GameApp;