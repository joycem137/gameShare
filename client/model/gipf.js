/**
 * Data needed to render the GIPF game.
 */

const colA = 207;
const colB = 330;
const colC = 460;
const colD = 590;
const colE = 724;
const colF = 849;
const colG = 976;
const colH = 1105;
const colI = 1234;

const oddRow1 = 1317;
const oddRow2 = 1165;
const oddRow3 = 1015;
const oddRow4 = 863;
const oddRow5 = 716;
const oddRow6 = 557;
const oddRow7 = 410;
const oddRow8 = 255;
const oddRow9 = 132;

const evenRow1 = 1237;
const evenRow2 = 1085;
const evenRow3 = 935;
const evenRow4 = 783;
const evenRow5 = 631;
const evenRow6 = 479;
const evenRow7 = 327;
const evenRow8 = 200;



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
            height: colA
        },
        white: {
            top: 1190,
            left: 35,
            width: 335,
            height: colA
        }
    },
    board: {
        width: 1400,
        height: 1400,
        image: 'assets/board.png'
    },
    locations: {
        A1: {
            x: colA,
            y: oddRow3
        },
        A2: {
            x: colA,
            y: oddRow4
        },
        A3: {
            x: colA,
            y: oddRow5
        },
        A4: {
            x: colA,
            y: oddRow6
        },
        A5: {
            x: colA,
            y: oddRow7
        },
        B1: {
            x: colB,
            y: evenRow2
        },
        B2: {
            x: colB,
            y: evenRow3
        },
        B3: {
            x: colB,
            y: evenRow4
        },
        B4: {
            x: colB,
            y: evenRow5
        },
        B5: {
            x: colB,
            y: evenRow6
        },
        B6: {
            x: colB,
            y: evenRow7
        },
        C1: {
            x: colC,
            y: oddRow2
        },
        C2: {
            x: colC,
            y: oddRow3
        },
        C3: {
            x: colC,
            y: oddRow4
        },
        C4: {
            x: colC,
            y: oddRow5
        },
        C5: {
            x: colC,
            y: oddRow6
        },
        C6: {
            x: colC,
            y: oddRow7
        },
        C7: {
            x: colC,
            y: oddRow8
        },
        D1: {
            x: colD,
            y: evenRow1
        },
        D2: {
            x: colD,
            y: evenRow2
        },
        D3: {
            x: colD,
            y: evenRow3
        },
        D4: {
            x: colD,
            y: evenRow4
        },
        D5: {
            x: colD,
            y: evenRow5
        },
        D6: {
            x: colD,
            y: evenRow6
        },
        D7: {
            x: colD,
            y: evenRow7
        },
        D8: {
            x: colD,
            y: evenRow8
        },
        E1: {
            x: colE,
            y: oddRow1
        },
        E2: {
            x: colE,
            y: oddRow2
        },
        E3: {
            x: 720,
            y: oddRow3
        },
        E4: {
            x: colE,
            y: oddRow4
        },
        E5: {
            x: colE,
            y: oddRow5
        },
        E6: {
            x: colE,
            y: oddRow6
        },
        E7: {
            x: colE,
            y: oddRow7
        },
        E8: {
            x: colE,
            y: oddRow8
        },
        E9: {
            x: colE,
            y: oddRow9
        },
        F1: {
            x: colF,
            y: evenRow1
        },
        F2: {
            x: colF,
            y: evenRow2
        },
        F3: {
            x: colF,
            y: evenRow3
        },
        F4: {
            x: colF,
            y: evenRow4
        },
        F5: {
            x: colF,
            y: evenRow5
        },
        F6: {
            x: colF,
            y: evenRow6
        },
        F7: {
            x: colF,
            y: evenRow7
        },
        F8: {
            x: colF,
            y: evenRow8
        },
        G1: {
            x: colG,
            y: oddRow2
        },
        G2: {
            x: colG,
            y: oddRow3
        },
        G3: {
            x: colG,
            y: oddRow4
        },
        G4: {
            x: colG,
            y: oddRow5
        },
        G5: {
            x: colG,
            y: oddRow6
        },
        G6: {
            x: colG,
            y: oddRow7
        },
        G7: {
            x: colG,
            y: oddRow8
        },
        H1: {
            x: colH,
            y: evenRow2
        },
        H2: {
            x: colH,
            y: evenRow3
        },
        H3: {
            x: colH,
            y: evenRow4
        },
        H4: {
            x: colH,
            y: evenRow5
        },
        H5: {
            x: colH,
            y: evenRow6
        },
        H6: {
            x: colH,
            y: evenRow7
        },
        I1: {
            x: colI,
            y: oddRow3
        },
        I2: {
            x: colI,
            y: oddRow4
        },
        I3: {
            x: colI,
            y: oddRow5
        },
        I4: {
            x: colI,
            y: oddRow6
        },
        I5: {
            x: colI,
            y: oddRow7
        },
    }
};