class Goma extends Herramienta {

    constructor (ctx, posX, posY) {
        super(ctx, posX, posY)
        super.setColor("white");
        super.setGrosor(30)
    }

    setColor(color){
        alert("Estan cerradas las importaciones de goma: Solo hay blanca.");
    }
}