var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;


// Dibujar cartas
x = 0
function draw() {
    ctx.beginPath();
    ctx.rect(x, 20, 130, 200);
    ctx.stroke();
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

