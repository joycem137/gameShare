/**
 * This shows the board and renders children.
 */
const React = require('react');

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

            const width = image.width * xScale;
            const height = image.height * yScale;

            const top = (myLocation.y * yScale) - height / 2;
            const left = (myLocation.x * xScale) - width / 2;
            
            const pieceStyle = {
                width,
                height,
                backgroundImage: 'url(' + image.url + ')',
                top,
                left,
            };

            return (
                <div key={piece.id} style={pieceStyle} className="piece"></div>
            );
        });

        return (
            <div key='pieces' className='piecesContainer'>
                {pieceMarkup}
            </div>
        );
    }
}

module.exports = Pieces;