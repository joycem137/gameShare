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
    }
    getState() {
        return {
            pieces: this.pieces,
            whiteReserve: this.whiteReserve,
            blackReserve: this.blackReserve,
            currentPlayer: this.currentPlayer
        };
    }

    setState(state) {
        this.pieces = state.pieces;
        this.whiteReserve = state.whiteReserve;
        this.blackReserve = state.blackReserve;
        this.currentPlayer = state.currentPlayer;
        super.setState(state);
    }
}

module.exports = GameState;