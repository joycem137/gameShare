/**
 *
 */
class State {
    constructor() {
        this.pieces = [
            {id: 0, color: 'white', height: 1, location: 'A1'},
            {id: 1, color: 'black', height: 1, location: 'A2'},
            {id: 2, color: 'white', height: 2, location: 'B3'},
            {id: 3, color: 'black', height: 2, location: 'A5'},
            {id: 4, color: 'black', height: 2, location: 'B1'},
            {id: 5, color: 'black', height: 1, location: 'B2'},
        ];
    }
    getState() {
        return {
            pieces: this.pieces
        };
    }

    onUpdate(callback) {
        this.updateCallback = callback;
    }
}

module.exports = State;