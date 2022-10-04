class Herramienta {
    constructor (ctx, posX, posY){
        this.posX = posX;
        this.posY = posY;
        this.ctx = ctx;
        this.puedeDibujar = false;
        this.ctx.lineCap = "round";
        this.color = "blue";
        this.setGrosor(5);
    }

    dibujar(x, y) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.posX, this.posY);
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
        this.ctx.closePath();

        this.setPos(x, y); //avanzo
    }

    setGrosor(ancho) {
        this.ctx.lineWidth = ancho;
    }

    setPos(x, y) {
        this.posX = x;
        this.posY = y;
    }

    estaDibujando() {
        return this.puedeDibujar;
    }

    setEstado (estado) {
        this.puedeDibujar = estado; 
    }

    setColor(color) {
        this.ctx.strokeStyle = color;
    }

    iniciarDibujo(x,y){
        this.setPos(x,y);
        this.puedeDibujar = true;
    }

    finalizarDibujo(){
        this.puedeDibujar = false;
    }
}