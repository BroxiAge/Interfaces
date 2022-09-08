class Figura {
    constructor (posX, posY, width, height, fill, context){
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.fill = fill;
        this. context = context;
    }

    draw(){
        // Nothing to do
    }

    moveTo (posX, posY){
        this.posX = posX;
        this.posY = posY;
    }
}