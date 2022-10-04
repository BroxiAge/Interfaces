class Lapiz extends Herramienta {

    constructor (ctx, posX, posY) {
        super(ctx, posX, posY)
        super.setColor("black");
    }

    estaDibujando() {
        return this.puedeDibujar;
    }

    setEstado (estado) {
        super.setEstado(estado);
        console.log("Lapiz selected"); 
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