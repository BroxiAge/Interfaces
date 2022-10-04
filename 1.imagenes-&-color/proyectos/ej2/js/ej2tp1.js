window.onload = function () {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    
    ctx.beginPath();
    ctx.fillStyle = "rgb(200,0,0)";
    // void ctx.fillRect(x, y, width, height);
    ctx.fillRect(150, 150, 200, 100);
   
    // First path
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.moveTo(20,20);
    ctx.lineTo(200,20);
    ctx.stroke();

    // Second path
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(20,20);
    ctx.lineTo(120, 120);
    ctx.stroke();
    
    ctx.arc(450, 110, 100, Math.Pi * 1/2, Math.Pi *3/2);
    ctx.lineWidth = 15;
    ctx.lineCap = 'roud';
    ctx.strokeStyle = 'rgba(255, 127, 0, 0.5)';
    ctx.stroke();
}