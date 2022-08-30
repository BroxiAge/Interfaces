let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let colour = "black"
let shapes = [];


const CANT_FIG = 30;

function dibujar() {
    
    let l = new Linea(0, 0, canvasWidth, canvasHeight, colour, ctx);
    l.draw();
    
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

