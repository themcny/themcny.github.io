var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 1000;

function drawCircle(x, y, r) {
	ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.stroke();
    
    if (r > .25) {
        r *= .87;
        x = x - r*Math.exp(Math.PI/(r/4))*Math.cos(Math.PI/(r/4));
        y = y - r*Math.exp(Math.PI/(r/4))*Math.sin(Math.PI/(r/4));
        
        drawCircle(x, y, r);
    }
    ctx.translate(500,500);
}

drawCircle(900, 700, 100);


