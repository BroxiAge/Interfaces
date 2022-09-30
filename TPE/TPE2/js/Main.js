    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext("2d");

    //returns left and top.
    var rect = canvas.getBoundingClientRect(); 
    var x=0, y=0, dibujando=false, borrando=false, color='black', grosor=1;

    function defColor(c) { 
        if(borrando){
            grosor = 1;
            borrando= false
        }
        color = c;
        // console.log(color);
    }

    function defGrosor(g) { 
        grosor = g;
        // console.log(grosor);
    }

    canvas.addEventListener('mousedown', function(e){
        // console.log('mdown')
        x=e.clientX - rect.left;
        y=e.clientY - rect.top;
        dibujando = true;
    });

    canvas.addEventListener('mousemove', function(e){
        // console.log('mmove')
        let xFin = e.clientX - rect.left;
        let yFin = e.clientY - rect.top;
        
        if (dibujando === true) {
            dibujar(x, y, xFin, yFin);
            x = xFin;
            y = yFin;
        }
    });

    canvas.addEventListener('mouseup', function(e){
        // console.log('mup')
        if (dibujando === true) {
            dibujar(x, y, e.clientX - rect.left, e.clientY - rect.top);
            x=0;
            y=0;
            dibujando = false;
        }
    });

    function dibujar(x1, y1, x2, y2) {
        // console.log("asd");
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = grosor;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineCap = "round";
        ctx.stroke();
        ctx.closePath();
    }

    function borrar() {
        borrando = true;
        grosor = 30;
        color='white';
    }
