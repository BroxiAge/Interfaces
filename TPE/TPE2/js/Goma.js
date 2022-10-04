class Goma extends Herramienta {

    constructor (ctx, posX, posY) {
        super(ctx, posX, posY)

        this.puedeDibujar = false;
        this.ctx.lineCap = "round";
        super.setColor("white");
        super.setGrosor(30)
    }
    
    estaDibujando() {
        return this.puedeDibujar;
    }

    setEstado (estado) {
        this.puedeDibujar = estado; 
        console.log("Goma selected");
    }
    
    setPos(x, y) {
        super.setPos(x,y);
    }

    setGrosor(ancho) {
        super.setGrosor(ancho);
    }

    dibujar(x, y) {
        super.dibujar(x, y);
    }
}