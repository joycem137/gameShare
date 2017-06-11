/**
 * Shows a place of valid moves.
 */

const React = require('react');
const Piece = require('./Piece.jsx');

const findNearestLocation = require('../model/findNearestLocation');

class GhostPiece extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {gameModel, boardRect, color, validMoves, mousePosition} = this.props;
        const {locations, pieceImages, board} = gameModel;

        const pieceImage = pieceImages[color + '1'];

        const xScale = boardRect.width / board.width;
        const yScale = boardRect.height / board.height;

        const nearestLocation = findNearestLocation({
            xScale, yScale, locations, x: mousePosition.x, y: mousePosition.y
        });

        if (validMoves.indexOf(nearestLocation) >= 0) {
            const myLocation = locations[nearestLocation];

            return (
                <Piece key="ghostPiece" xScale={xScale} yScale={yScale} image={pieceImage} location={myLocation} className="ghostPiece"/>
            );
        } else {
            return null;
        }
    }
}

module.exports = GhostPiece;
