/**
 * Shows how many pieces remain
 */

const React = require('react');

class Reserve extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {reserve, gameModel, boardRect, color} = this.props;
        const {pieceImages, reserve: reserveLocation, board} = gameModel;

        const unscaledRect = reserveLocation[color];
        const pieceImage = pieceImages[color + '1'];

        const xScale = boardRect.width / board.width;
        const yScale = boardRect.height / board.height;


        const piecesMarkup = [];

        for(let i = 0; i < reserve; i++) {
            const pieceStyle = {
                backgroundImage: 'url(' + pieceImage.url + ')',
                backgroundSize: '100%',
                width: (unscaledRect.width / 5) * xScale,
                height: (unscaledRect.height / 3) * yScale
            };
            const pieceMarkup = (<div key={i} style={pieceStyle} className='reservePiece'/>);
            piecesMarkup.push(pieceMarkup);
        }

        const containerStyle = {
            top: unscaledRect.top * yScale,
            left: unscaledRect.left * xScale,
            width: unscaledRect.width * xScale
        };

        return (
            <div key='reserveContainer' style={containerStyle} className='reserveContainer'>
                {piecesMarkup}
            </div>
        );
    }
}

module.exports = Reserve;