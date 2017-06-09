/**
 *
 */
class State {
    constructor() {
        this.pieces = [
            {id: 0, color: 'white', height: 1, location: 'A1'},
            {id: 1, color: 'black', height: 1, location: 'I2'},
            {id: 2, color: 'white', height: 2, location: 'B3'},
            {id: 3, color: 'black', height: 2, location: 'G5'},
            {id: 4, color: 'black', height: 2, location: 'H3'},
            {id: 5, color: 'black', height: 1, location: 'B2'},
            {id: 6, color: 'white', height: 2, location: 'C5'},
            {id: 7, color: 'black', height: 2, location: 'E1'},
            {id: 8, color: 'white', height: 1, location: 'F2'},
            {id: 9, color: 'white', height: 1, location: 'D5'},
            {id: 10, color: 'black', height: 1, location: 'D3'},
            {id: 11, color: 'white', height: 1, location: 'D2'},
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