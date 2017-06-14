/**
 *
 */
const State = require('./State');
class MouseState extends State {
    constructor() {
        this.mousePosition = {};
        this.mouseDown = false;
        window.onmousemove = this._handleMouseMove.bind(this);
        window.onmousedown = this._handleMouseDown.bind(this);
        window.onmouseup = this._handleMouseUp.bind(this);
    }

    _handleMouseDown(event) {
        this.mouseDown = true;
        super.notify();
    }

    _handleMouseUp(event) {
        this.mouseDown = false;
        super.notify();
    }

    _handleMouseMove(event) {
        this.mousePosition = {
            x: event.clientX,
            y: event.clientY
        };
        super.notify();
    }

    getState() {
        return {
            
        };
    }
}

module.exports = MouseState;