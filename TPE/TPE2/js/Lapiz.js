class Lapiz extends Herramienta {

    constructor (ctx, posX, posY) {
        super(ctx, posX, posY)

        this.puedeDibujar = false;
        this.ctx.lineCap = "round";
        this.estaSeleccionado = false;
        this.color = "black";
    }
    
    setEstaSeleccionado(seleccionado) {
        super.setEstaSeleccionado(seleccionado);
        console.log("Lapiz selected");
    }

    estaDibujando() {
        return this.puedeDibujar;
    }

    setEstado (estado) {
        this.puedeDibujar = estado; 
    }
    
    setPos(x, y) {
        super.setPos(x,y);
    }

    setGrosor(ancho) {
        super.setGrosor(ancho);
    }

    setColor(color) {
        super.setColor(color);
    }

    dibujar(x, y) {
      super.dibujar(x, y);
    }
}