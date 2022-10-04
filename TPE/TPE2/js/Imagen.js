class Imagen {
  
  constructor(ctx){
    this.ctx = ctx;
    this.img = new Image();
  }

  draw() {
    // canvas.width = this.width;
    // canvas.height = this.height;
    // ctx.filter = "blur(5px)";
    this.ctx.drawImage(this.img, 0,0);
  }

  cargarImagen(elemento){
    this.img.src = URL.createObjectURL(elemento.files[0]);
    this.img.onload = ()=>{this.draw()}
  }
}

