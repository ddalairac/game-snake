import { Render } from './render.js';
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
new Render(ctx);
var x = 0;
var y = 100;
function draw() {
    Render.instance.snakeLink(x, y);
}
function frameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();
    x++;
}
var interval = setInterval(frameLoop, 10);
//# sourceMappingURL=game.js.map