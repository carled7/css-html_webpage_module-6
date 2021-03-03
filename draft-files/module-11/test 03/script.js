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
