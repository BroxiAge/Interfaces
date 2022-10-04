window.onload = function () { 
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;

    var grd = ctx.createLinearGradient(0, 0, 600, 400);
    
    grd.addColorStop(0.3, "red");
    grd.addColorStop(.6, "green");
    grd.addColorStop(.9, "blue")
    
    

    ctx.fillStyle = grd;
   
    ctx.beginPath();
    ctx.rect(100, 100, canvasWidth, canvasHeight);
    ctx.fill();
    ctx.stroke();

    var grd2 = ctx.createLinearGradient(400, 50, 400, 350);
    grd2.addColorStop(0, "green");
    grd2.addColorStop(.5, "yellow");
    grd2.addColorStop(1, "red");

    ctx.fillStyle = grd2;
    
}