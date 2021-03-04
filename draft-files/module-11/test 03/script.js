let display = document.getElementById("display");
let ctx = display.getContext("2d");

display.style.backgroundColor = "#F2F2F2";

ctx.beginPath();
ctx.moveTo(10, 30);
ctx.lineTo(1260, 30);
ctx.lineWidth = "2";
ctx.strokeStyle = "blue";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(10, 50);
ctx.lineTo(1260, 50);
ctx.lineWidth = "5";
ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "gray";
ctx.fillRect(10, 70, 1250, 100);

ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(10, 190, 1250, 100);

let circle = {
    x: 630,
    y: 500,
    radius: 100,
    startPoint: 0,
    endPoint: 0,
    color: "rgba(235, 0, 250, 0.8)"
}

function drawCircle(c) {

    ctx.beginPath();
    ctx.fillStyle = "#F2F2F2";
    ctx.rect((c.x - c.radius) - (c.radius * 0.2), (c.y - c.radius) - (c.radius * 0.2), (c.radius * 2) + (c.radius * 0.3), (c.radius * 2) + (c.radius * 0.3));
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "purple";
    ctx.lineWidth = "1";
    ctx.fillStyle = c.color;
    ctx.arc(c.x, c.y, c.radius, c.startPoint, c.endPoint);
    ctx.fill();
    ctx.stroke();
}
setInterval(function () {

    if (circle.endPoint < 2 * Math.PI) {
        circle.endPoint += 0.2;
        circle.x += 10;
    }
    drawCircle(circle);
}, 16.67);

let img = new Image();
img.src = "image.webp";

img.onload = draw;

function draw() {

    ctx.drawImage(this, 10, 300, this.naturalWidth / 3, this.naturalHeight / 3);
}