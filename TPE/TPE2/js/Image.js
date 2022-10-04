document.getElementById('inp').onchange = function(e) {
    var img = new Image();
    img.onload = draw;
    img.onerror = failed;
    img.src = URL.createObjectURL(this.files[0]);
  };
  function draw() {
    var canvas = document.getElementById('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    var ctx = canvas.getContext('2d');
    // ctx.filter = "saturate(8)";
    ctx.drawImage(this, 0,0);
    
  }
  function failed() {
    console.error("The provided file couldn't be loaded as an Image media");
  }