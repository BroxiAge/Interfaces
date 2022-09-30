class Lapiz {

    constructor (ctx, posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.ctx = ctx;
        this.puedeDibujar = false;
        this.ctx.lineCap = "round";
        this.estaSeleccionado = false;
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
    
    setPos(x, y) {
        this.posX = x;
        this.posY = y;
    }

    setGrosor(ancho) {
        this.ctx.lineWidth = ancho;
    }

    dibujar(x, y) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'black'; //add setter
        this.ctx.moveTo(this.posX, this.posY);
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
        this.ctx.closePath();
    }
}