/**
 * Shows a place of valid moves.
 */

const React = require('react');

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
            const width = pieceImage.width * xScale;
            const height = pieceImage.height * yScale;

            const myLocation = locations[nearestLocation];
            const top = (myLocation.y * yScale) - height / 2;
            const left = (myLocation.x * xScale) - width / 2;

            const pieceStyle = {
                backgroundImage: 'url(' + pieceImage.url + ')',
                width,
                height,
                top,
                left
            };
            return (
                <div key="ghostPiece" style={pieceStyle} className='ghostPiece'/>
            );
        } else {
            return null;
        }
    }
}

module.exports = GhostPiece;
