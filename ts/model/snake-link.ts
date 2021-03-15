export class SnakeLink {
    constructor(y: number, x: number) {
        // console.log("new snake link", x, y);
        this.x = x;
        this.y = y;
        this._prevX = x;
        this._prevY = y;
    }

    private _x: number = 0;
    private _y: number = 0;
    private _prevX: number = 0;
    private _prevY: number = 0;

    set x(value: number) {
        this._prevX = this._x;
        this._x = value;
    }
    get x(): number {
        return this._x;
    }
    get lastX(): number {
        return this._prevX;
    }

    set y(value: number) {
        this._prevY = this._y;
        this._y = value;
    }
    get y(): number {
        return this._y;
    }
    get lastY(): number {
        return this._prevY;
    }
}