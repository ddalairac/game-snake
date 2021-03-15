export class SnakeLink {
    constructor(y, x) {
        this._x = 0;
        this._y = 0;
        this._prevX = 0;
        this._prevY = 0;
        this.x = x;
        this.y = y;
        this._prevX = x;
        this._prevY = y;
    }
    set x(value) {
        this._prevX = this._x;
        this._x = value;
    }
    get x() {
        return this._x;
    }
    get lastX() {
        return this._prevX;
    }
    set y(value) {
        this._prevY = this._y;
        this._y = value;
    }
    get y() {
        return this._y;
    }
    get lastY() {
        return this._prevY;
    }
}
//# sourceMappingURL=snake-link.js.map