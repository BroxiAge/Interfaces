class Figura {
    
    constructor (posX, posY, fill, context){
        this.posX = posX;
        this.posY = posY;
        //this.width = width;
        //this.height = height;
        this.fill = fill;
        this.context = context;
        //console.log(this.posX)
    }

    draw(){
        // Nothing to do
    }

    moveTo (posX, posY){
        this.posX = posX;
        this.posY = posY;
    }

    isClicked(x, y) {
        console.log(this.posX)
    }
    isSelected(bool) {
        this.context.stroke();
    }

}