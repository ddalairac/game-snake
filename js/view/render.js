import { Board } from '../model/board.js';
export class Render {
    constructor() {
        if (Render._instance) {
            throw "Ya existe una instancia de Render";
        }
        Render._instance = this;
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.setCanvasSize();
    }
    static get instance() {
        return this._instance;
    }
    setCanvasSize() {
        this.ctx.canvas.width = window.innerWidth;
        this.ctx.canvas.height = window.innerHeight;
    }
    snakeLink(x, y) {
        let halfMod = Board.module / 2;
        this.ctx.beginPath();
        this.ctx.arc(x - halfMod, y + halfMod, Board.module / 2.5, 0, 2 * Math.PI);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        this.ctx.closePath();
    }
    apple(x, y) {
        let halfMod = Board.module / 2;
        this.ctx.beginPath();
        this.ctx.arc(x - halfMod, y + halfMod, Board.module / 2.5, 0, 2 * Math.PI);
        this.ctx.fillStyle = "red";
        this.ctx.fill();
        this.ctx.closePath();
    }
    board() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let y = 0;
        Board.stageSlots.forEach((row) => {
            let x = 0;
            row.forEach((slot) => {
                this.ctx.beginPath();
                this.ctx.rect(x, y, Board.module, Board.module);
                this.ctx.strokeStyle = "#ccc";
                this.ctx.stroke();
                this.ctx.closePath();
                x += Board.module;
                if (slot == 1) {
                    Render.instance.snakeLink(x, y);
                }
                if (slot == 2) {
                    Render.instance.apple(x, y);
                }
            });
            y += Board.module;
        });
    }
}
//# sourceMappingURL=render.js.map