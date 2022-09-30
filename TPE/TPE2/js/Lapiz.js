class Lapiz extends Herramienta {

    constructor (ctx, posX, posY) {
        super(ctx, posX, posY)

        this.puedeDibujar = false;
        this.ctx.lineCap = "round";
        this.estaSeleccionado = false;
        this.color = "black";
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

    setColor(color) {
        this.ctx.strokeStyle = color;
    }

    dibujar(x, y) {
      super.dibujar(x, y);
    }
}