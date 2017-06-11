/**
 * This shows the board and renders children.
 */
const React = require('react');
const Piece = require('./Piece.jsx');

function determinePieceImageName({color, height}) {
    return color + height;
}

class Pieces extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {boardRect, pieces, gameModel} = this.props;
        const {board, pieceImages} = gameModel;

        const pieceMarkup = pieces.map((piece) => {

            const imageName = determinePieceImageName(piece);
            const image = pieceImages[imageName];

            const myLocation = gameModel.locations[piece.location];

            const xScale = boardRect.width / board.width;
            const yScale = boardRect.height / board.height;

            return (
                <Piece key={piece.id} xScale={xScale} yScale={yScale} image={image} location={myLocation}/>
            );
        });

        return (
            <div key="pieces" className='piecesContainer'>
                {pieceMarkup}
            </div>
        );
    }
}

module.exports = Pieces;