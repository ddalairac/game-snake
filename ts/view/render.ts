import { Board } from '../model/board.js';
import { Game } from '../model/game.js';


export class Render {
    constructor() {
        if (Render._instance) {
            throw "Ya existe una instancia de Render";
        }
        Render._instance = this
        this.canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;

        // set Canvas Size
        // this.ctx.canvas.width = window.innerWidth;
        // this.ctx.canvas.height = window.innerHeight;
        this.ctx.canvas.width = Board.stageWidth;
        this.ctx.canvas.height = Board.stageHeight
    }

    private ctx: CanvasRenderingContext2D
    private canvas: HTMLCanvasElement

    private static _instance: Render
    public static get instance() {
        return this._instance;
    }


    private drawSlot(x: number, y: number) {
        this.ctx.beginPath();
        this.ctx.rect(x, y, Board.module, Board.module);
        this.ctx.strokeStyle = "#ccc";
        this.ctx.stroke();
        this.ctx.closePath();
    }

    private drawScuare(x: number, y: number, color: string = "black") {
        this.ctx.beginPath();
        this.ctx.rect(x, y, Board.module, Board.module);
        this.ctx.fillStyle = color;
        this.ctx.fill()
        this.ctx.closePath();
    }

    public drawBoard() {
        // borrar canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Dibujar canvas
        for (let y = 0; y < Board.slotsVertical; y++) {
            for (let x = 0; x < Board.slotsHorizontal; x++) {

                Render.instance.drawSlot(x * Board.module, y * Board.module)

                if (Game.instance.apple.y == y && Game.instance.apple.x == x) {
                    // Render.instance.drawApple(x * Board.module, y * Board.module)
                    Render.instance.drawScuare(x * Board.module, y * Board.module, "red")
                }

                Game.instance.snake.snakeLinks.forEach((link) => {
                    if (link.x == x && link.y == y) {
                        // Render.instance.drawSnakeLink(x * Board.module, y * Board.module)
                        Render.instance.drawScuare(x * Board.module, y * Board.module, "green")
                    }
                })
            }
        }
    }


    /* 
        private drawSnakeLink(x: number, y: number) {
            let halfMod = Board.module / 2
            this.ctx.beginPath();
            this.ctx.arc(
                x + halfMod,
                y + halfMod,
                Board.module / 2.5, // diametro
                0,
                2 * Math.PI
            );
            this.ctx.fillStyle = "green";
            this.ctx.fill()
            this.ctx.closePath();
        }

        private drawApple(x: number, y: number) {
            let halfMod = Board.module / 2
            this.ctx.beginPath();
            this.ctx.arc(x + halfMod, y + halfMod, Board.module / 2.5, 0, 2 * Math.PI);
            this.ctx.fillStyle = "red";
            this.ctx.fill()
            this.ctx.closePath();
        } 
    */
}