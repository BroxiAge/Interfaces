class Linea extends Figura {
    constructor(posX, posY, width, height, fill, context) {
        super (posX, posY, width, height, fill, context);
    }

    draw() { 
        ctx.beginPath();
        ctx.moveTo(this.posX, this.posY);   // Begin first sub-path
        ctx.lineTo(this.width, this.height);

        ctx.stroke();
    }

}
