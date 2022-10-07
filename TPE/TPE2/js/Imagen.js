class Imagen {
  
  constructor(ctx, canvasWidth, canvasHeight){
    this.ctx = ctx;
    this.img = new Image();
    this.img.height = canvasWidth;
    this.img.width = canvasHeight;
  }

  draw() {
    // ctx.filter = "blur(5px)";
    this.ctx.drawImage(this.img, 0,0, this.img.width, this.img.height);
  }

  cargarImagen(elemento){
    this.img.src = URL.createObjectURL(elemento.files[0]);
    this.img.onload = ()=>{this.draw()}
  }

  adaptarEscala(){
    canvas.width = this.width;
    canvas.height = this.height;
  }

  setBlur(){
    console.log("setblur")
    this.ctx.filter = "blur(5px)";
  }


}

