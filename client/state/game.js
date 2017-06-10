/**
 * Tracks the state for the game.
 */
const State = require('./State');
class GameState extends State{
    constructor() {
        super();
        this.pieces = [];
        this.whiteReserve = 0;
        this.blackReserve = 0;
        this.currentPlayer = '';
        this.validMoves = [];
    }
    getState() {
        return {
            pieces: this.pieces,
            whiteReserve: this.whiteReserve,
            blackReserve: this.blackReserve,
            currentPlayer: this.currentPlayer,
            validMoves: this.validMoves
        };
    }

    setState(state) {
        this.pieces = state.pieces;
        this.whiteReserve = state.whiteReserve;
        this.blackReserve = state.blackReserve;
        this.currentPlayer = state.currentPlayer;
        this.validMoves = state.validMoves;
        super.setState(state);
    }
}

module.exports = GameState;