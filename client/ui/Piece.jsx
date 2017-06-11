/**
 * This shows the board and renders children.
 */
const React = require('react');

class Piece extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {xScale, yScale, image, location, className} = this.props;

        const width = image.width * xScale;
        const height = image.height * yScale;

        const top = Math.round((location.y * yScale) - height / 2);
        const left = Math.round((location.x * xScale) - width / 2);

        const pieceStyle = {
            width,
            height,
            backgroundImage: 'url(' + image.url + ')',
            top,
            left
        };

        const classNames = className ? className + ' piece' : 'piece';

        return (
            <div key='piece' style={pieceStyle} className={classNames}></div>
        );
    }
}

module.exports = Piece;