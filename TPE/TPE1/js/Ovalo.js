class Ovalo extends Figura {
    constructor(posX, posY, radius, fill, context) {
        super(posX, posY, fill, context);
        this.radius = radius;
    }

    draw() { 
        ctx.fillStyle = this.fill;
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2 );
        ctx.fill();
    }
    isClicked(x, y) {
        let _x = this.posX - x;
        let _y = this.posY - y;
        // console.log(Math.sqrt(_x * _x + _y * _y) < this.radius)
        return Math.sqrt(_x * _x + _y * _y) < this.radius;
    }
    isSelected(bool){
        if (bool){
            ctx.strokeStyle = "white";
        } else {
            ctx.strokeStyle = "black";
        }
        // ctx.stroke();
    }
}
