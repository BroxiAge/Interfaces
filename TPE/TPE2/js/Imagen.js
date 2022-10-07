class Imagen {
  
  constructor(ctx, canvasWidth, canvasHeight){
    this.ctx = ctx;
    this.img = new Image();
    this.img.height = canvasWidth;
    this.img.width = canvasHeight;
  }

  draw() {
    this.ctx.drawImage(this.img, 0,0, this.img.width, this.img.height);
  }

  cargarImagen(elemento){
    this.img.src = URL.createObjectURL(elemento.files[0]);
    this.img.onload = ()=>{this.draw()}
  }

  sinFiltro(){
    this.ctx.filter = "none";
    this.draw();
  }

  setBrillo(value) {
    this.ctx.filter = "brightness(" + value + ")" ;
    this.draw();
    this.ctx.filter = "none";
  }

  setNegativo(){
    this.ctx.filter = "invert(8)";
    this.draw();
    this.ctx.filter = "none";
  }

  setBinarizacion() {
    this.ctx.filter = "grayscale(50)"
    this.draw();
    this.ctx.filter = "none";
  }

  setSepia(){
    this.ctx.filter = "sepia(8)";
    this.draw();
    this.ctx.filter = "none";
  }
  
  setSaturacion() {
    this.ctx.filter = "saturate(45)"
    this.draw();
    this.ctx.filter = "none";
  }

  setBlur(){
    this.ctx.filter = "blur(5px)";
    this.draw();
    this.ctx.filter = "none";
  }
  
}

