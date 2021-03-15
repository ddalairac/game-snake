import { Board } from '../model/board.js';
import { Game } from '../model/game.js';
export class Render {
    constructor() {
        if (Render._instance) {
            throw "Ya existe una instancia de Render";
        }
        Render._instance = this;
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.ctx.canvas.width = Board.stageWidth;
        this.ctx.canvas.height = Board.stageHeight;
    }
    static get instance() {
        return this._instance;
    }
    drawSlot(x, y) {
        this.ctx.beginPath();
        this.ctx.rect(x, y, Board.module, Board.module);
        this.ctx.strokeStyle = "#ccc";
        this.ctx.stroke();
        this.ctx.closePath();
    }
    drawScuare(x, y, color = "grey") {
        this.ctx.beginPath();
        this.ctx.rect(x, y, Board.module, Board.module);
        this.ctx.fillStyle = color;
        this.ctx.fill();
        this.ctx.closePath();
    }
    drawBoard() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let y = 0; y < Board.slotsVertical; y++) {
            for (let x = 0; x < Board.slotsHorizontal; x++) {
                Render.instance.drawSlot(x * Board.module, y * Board.module);
                if (Game.instance.apple.y == y && Game.instance.apple.x == x) {
                    Render.instance.drawScuare(x * Board.module, y * Board.module, "red");
                }
                Game.instance.snake.snakeLinks.forEach((link) => {
                    if (link.x == x && link.y == y) {
                        Render.instance.drawScuare(x * Board.module, y * Board.module, "green");
                    }
                });
            }
        }
    }
}
//# sourceMappingURL=render.js.map