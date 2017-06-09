/**
 * This shows the board and renders children.
 */
const React = require('react');

class Board extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {rect, boardImage, children} = this.props;

        const boardStyle = {
            width: rect.width,
            height: rect.height,
            backgroundImage: 'url(' + boardImage + ')'
        };

        return (
            <div key='board' className='board' style={boardStyle}>
                {children}
            </div>
        );
    }
}

module.exports = Board;