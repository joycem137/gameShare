/**
 * Tracks the state for the UI.
 */
const State = require('./State');
class UiState extends State{
    constructor(gameModel) {
        super();
        this.maxBoardSize = Math.min(gameModel.board.width, gameModel.board.height);
        this._handleResize();
        window.onresize = this._handleResize.bind(this);

        this.mousePosition = {};
        window.onmousemove = this._handleMouseMove.bind(this);
    }

    _handleMouseMove(event) {
        this.mousePosition = {
            x: event.clientX,
            y: event.clientY
        };
        super.notify();
    }

    _handleResize() {
        const boardSize = Math.min(
            this.maxBoardSize,
            window.innerWidth - 20,
            window.innerHeight - 25
        );

        this.boardRect = {
            width: boardSize,
            height: boardSize
        };

        super.notify();
    }

    getState() {
        return {
            boardRect: this.boardRect,
            mousePosition: this.mousePosition
        };
    }

    setState(state) {
        super.setState(state);
    }
}

module.exports = UiState;