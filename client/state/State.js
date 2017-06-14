/**
 * Anything that generically tracks state.
 */
class State {
    constructor() {
    }

    getState() {
        return {};
    }

    setState() {
        this.notify();
    }

    notify() {
        if(this.updateCallback) this.updateCallback(this.getState());
    }

    onUpdate(callback) {
        this.updateCallback = callback;
    }
}

module.exports = State;