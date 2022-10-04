class Herramienta {
    constructor (ctx, posX, posY){
        this.posX = posX;
        this.posY = posY;
        this.ctx = ctx;
        this.puedeDibujar = false;
        this.ctx.lineCap = "round";
        this.estaSeleccionado = false;
        this.color = "black";
    }

    dibujar(x, y) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.posX, this.posY);
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    setGrosor(ancho) {
        this.ctx.lineWidth = ancho;
    }

    setPos(x, y) {
        this.posX = x;
        this.posY = y;
    }

    setEstaSeleccionado(seleccionado) {
        this.estaSeleccionado = seleccionado;
    }

    estaDibujando() {
        return this.puedeDibujar;
    }

    setEstado (estado) {
        this.puedeDibujar = estado; 
    }

    setColor(color) {
        this.ctx.strokeStyle = color;
    }
}