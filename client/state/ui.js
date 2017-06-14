/**
 * Tracks the state for the UI.
 */
const State = require('./State');
const MouseState = require('./ui/mouse');


class UiState extends State{
    constructor(gameModel) {
        super();
        this.maxBoardSize = Math.min(gameModel.board.width, gameModel.board.height);
        this._handleResize();
        window.onresize = this._handleResize.bind(this);

        this.mouseState = new MouseState(this);
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
            mouseState: this.mouseState.getState()
        };
    }

    setState(state) {
        super.setState(state);
    }
}

module.exports = UiState;