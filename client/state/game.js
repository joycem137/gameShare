/**
 *
 */
class State {
    constructor() {
        this.pieces = [];
        this.whiteReserve = 0;
        this.blackReserve = 0;
    }
    getState() {
        return {
            pieces: this.pieces,
            whiteReserve: this.whiteReserve,
            blackReserve: this.blackReserve
        };
    }

    setState(state) {
        this.pieces = state.pieces;
        this.whiteReserve = state.whiteReserve;
        this.blackReserve = state.blackReserve;
        if(this.updateCallback) this.updateCallback(this.getState());
    }

    onUpdate(callback) {
        this.updateCallback = callback;
    }
}

module.exports = State;