let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let colour = "black"
let shapes = [];
let objetoActual = null;


const CANT_FIG = 30;

function dibujar() {
    
    for (let i = 0; i < CANT_FIG; i++) {
        addFigura((i < (CANT_FIG / 2)));
    }

    for (let x = 0; x < CANT_FIG; x++) {
        shapes[x].draw();
    }

    for (let z = 0; z < CANT_FIG; z++) {
        shapes[z].draw();
    }
}

function actualizar() {
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, 900, 600);

    dibujar();
  }

function addFigura(estilo) {
    let posX = Math.round(Math.random()*canvasWidth);
    let posY = Math.round(Math.random()*canvasHeight);
    let width = Math.round(Math.random()*50+4)
    let height = Math.round(Math.random()*50+4)
    let color = getRandomRGBA();
    // ctx.fillStyle = color;
    // ctx.beginPath();
    if (estilo == true) {
        let rect = new Rect(posX, posY, width, height, color, ctx);
        shapes.push(rect);
    }
    else {
        let oval = new Ovalo(posX, posY, width, height, color, ctx);   
        shapes.push(oval);
    }
}

function getRandomRGBA () {
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let a = 255;
    
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

canvas.onmousedown = function(event) {
    let obj;
    for (var i = 0; i < shapes.length; i++) {
        obj = shapes[i];
      if (obj.posX < event.clientX
        && (obj.width + obj.posX > event.clientX)
        
      ) {
        objetoActual = obj;
        break;
      }
    }
  }

  canvas.onmousemove = function(event) {
    
    if (objetoActual != null) {
    const x = event.clientX;
    const y = event.clientY;

    objetoActual.moveTo(x,y);
    objetoActual.draw();
    actualizar();
    }
  }