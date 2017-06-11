/**
 * Data needed to render the GIPF game.
 */

const generateLocations = require('./generateLocations');

module.exports = {
    initState: {
        pieces: [
            {id: 0, color: 'white', height: 2, location: 'B2'},
            {id: 1, color: 'white', height: 2, location: 'E8'},
            {id: 2, color: 'white', height: 2, location: 'H2'},
            {id: 3, color: 'black', height: 2, location: 'B5'},
            {id: 4, color: 'black', height: 2, location: 'E2'},
            {id: 5, color: 'black', height: 2, location: 'H5'}
        ],
        blackReserve: 12,
        whiteReserve: 12,
        currentPlayer: 'white',
        validMoves: [
            'A1', 'A2', 'A3', 'A4', 'A5',
            'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1',
            'B6', 'C7', 'D8', 'E9', 'F8', 'G7', 'H6',
            'I1', 'I2', 'I3', 'I4', 'I5']
    },
    pieceImages: {
        white1: {
            url: 'assets/whiteSingle.png',
            width: 150,
            height: 150
        },
        white2: {
            url: 'assets/whiteDouble.png',
            width: 150,
            height: 160
        },
        black1: {
            url: 'assets/blackSingle.png',
            width: 150,
            height: 150
        },
        black2: {
            url: 'assets/blackDouble.png',
            width: 150,
            height: 160
        }
    },
    reserve: {
        black: {
            top: 40,
            left: 1060,
            width: 335,
            height: 200
        },
        white: {
            top: 1190,
            left: 35,
            width: 335,
            height: 200
        }
    },
    board: {
        width: 1404,
        height: 1418,
        image: 'assets/board.png'
    },
    locations: generateLocations()
};