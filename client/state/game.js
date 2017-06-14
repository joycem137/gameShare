/**
 * Tracks the state for the game.
 */
const State = require('./State');

const generateValidMoves = require('../model/generateValidMoves');

class GameState extends State{
    constructor(gameModel) {
        super();
        this._gameModel = gameModel;
        const {initState} = gameModel;

        const {pieces, whiteReserve, blackReserve, currentPlayer} = initState;

        this.pieces = pieces;
        this.whiteReserve = whiteReserve;
        this.blackReserve = blackReserve;
        this.currentPlayer = currentPlayer;
        this._updateState();
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

    _updateState() {
        const {locations} = this._gameModel;
        const pieces = this.pieces;
        this.validMoves = generateValidMoves({locations, pieces});
        super.notify();
    }
}

module.exports = GameState;