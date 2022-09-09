class Rect extends Figura {
    constructor(posX, posY, width, height, fill, context) {
        super(posX, posY, fill, context);
        this.width = width;
        this.height = height;
    }

    draw() { 
        ctx.fillStyle = this.fill;
        ctx.beginPath();
        ctx.rect(this.posX, this.posY, this.width, this.height);
        ctx.fill();
        // ctx.stroke();
    }

    isClicked (x,y) {
        // console.log(!(x < this.posX || x > this.posX + this.width || y < this.posY || y > this.posY + this.height))
       return !(x < this.posX || x > this.posX + this.width || y < this.posY || y > this.posY + this.height);
    }

    isSelected(bool){
        if (bool){
            ctx.strokeStyle = "white";
        } else {
            ctx.strokeStyle = "black";
        }
        //ctx.stroke();
        //this.context.stroke();
    }
}
