class Rect extends Figura {
    constructor(posX, posY, width, height, fill, context) {
        super (posX, posY, width, height, fill, context);
    }

    draw() { 
        ctx.fillStyle = this.fill;
        ctx.beginPath();
        ctx.rect(this.posX, this.posY, this.width, this.height);
        ctx.fill();
        ctx.stroke();
    }

}
