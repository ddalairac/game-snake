export class Render {
    constructor(ctx) {
        if (Render._instance) {
            throw "Ya existe una instancia de Render";
        }
        this.ctx = ctx;
        Render._instance = this;
    }
    static get instance() {
        return this._instance;
    }
    snakeLink(x, y) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, 10, 0, 2 * Math.PI);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        this.ctx.closePath();
    }
    apple(x, y) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, 10, 0, 2 * Math.PI);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        this.ctx.closePath();
    }
}
//# sourceMappingURL=render.js.map