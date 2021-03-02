import { Render } from './render.js';

var canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
var ctx = canvas.getContext("2d") as CanvasRenderingContext2D ;

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

new Render(ctx)
 
// Dibujar cartas
var x = 0
var y = 100
function draw() {
    Render.instance.snakeLink(x,y)
}

// Dibujar frame
function frameLoop() {
    // borrar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Dibujar canvas
    draw()
    x++
}

var interval = setInterval(frameLoop, 10);

