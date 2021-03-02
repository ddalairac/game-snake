

export class Render {
    constructor(ctx: CanvasRenderingContext2D) {
        if (Render._instance) {
            throw "Ya existe una instancia de Render";
        }
        this.ctx = ctx
        Render._instance = this 
    }
    
    private ctx: CanvasRenderingContext2D
    
    private static _instance: Render
    public static get instance() {
        return this._instance;
    }
    public snakeLink(x: number, y: number) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, 10, 0, 2 * Math.PI);
        this.ctx.fillStyle = "green";
        this.ctx.fill()
        this.ctx.closePath();
    }
    public apple(x: number, y: number) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, 10, 0, 2 * Math.PI);
        this.ctx.fillStyle = "green";
        this.ctx.fill()
        this.ctx.closePath();
    }
}