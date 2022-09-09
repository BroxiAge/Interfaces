let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let colour = "black"
let shapes = [];
let objetoActual = null;
let mosueDown = false;
let mouseUp = false;

const CANT_FIG = 30;

function crearFiguras() {
  addFigura((shapes.length < (CANT_FIG / 2)));
  shapes[shapes.length - 1].draw();
  if (shapes.length < CANT_FIG) {
    crearFiguras();
  }
}

function actualizar() {
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, 900, 600);
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].draw();
  }
}

function addFigura(estilo) {
  let posX = Math.round(Math.random() * canvasWidth);
  let posY = Math.round(Math.random() * canvasHeight);
  let width = Math.round(Math.random() * 50 + 4)
  let height = Math.round(Math.random() * 50 + 4)
  let color = getRandomRGBA();
  let radius =  Math.round(Math.random() * 50 + 4)

  if (estilo == true) {
    let rect = new Rect(posX, posY, width, height, color, ctx); 
    shapes.push(rect);
  }
  else {
    let oval = new Ovalo(posX, posY, radius, color, ctx);
    shapes.push(oval);
  }
}

function getRandomRGBA() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  let a = 255;

  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

canvas.onmousedown = function (event) {
  for (let i = 0; i < shapes.length; i++) {
    if (shapes[i].isClicked(event.clientX, event.clientY)) {
      mosueDown = true;
      mouseUp = false;
      objetoActual = shapes[i];
      objetoActual.isSelected(true);
    } else {
      shapes[i].isSelected(false);
    }
  }
}

canvas.onmouseup = function (event) {
  if (objetoActual != null) {
    objetoActual.isSelected(false);
    objetoActual = null;
    mosueDown = false;
    mouseUp = true;
  }
}

canvas.onmousemove = function (event) {

  if (objetoActual != null && mosueDown) {
    const x = event.clientX;
    const y = event.clientY;

    objetoActual.moveTo(x, y);
    objetoActual.draw();
    actualizar();
  }
}