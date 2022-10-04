    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext("2d");
    var rect = canvas.getBoundingClientRect(); 

    herramienta = new Lapiz(ctx,0,0);

    document.getElementById('lapiz').addEventListener('click', (e) =>{
        herramienta = new Lapiz(ctx,0,0);
    })

    document.getElementById('goma').addEventListener('click', (e) =>{
        herramienta = new Goma(ctx,0,0);
    })

    document.getElementById('limpiar').addEventListener('click', (e) =>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    })

    document.getElementById("grosor").addEventListener('input', (e) => { 
        herramienta.setGrosor(e.target.value);
    });

    document.getElementById("color").addEventListener('input', (e) => {
        herramienta.setColor(e.target.value);
    });

    canvas.addEventListener('mousedown', function(e){
        x=e.clientX - rect.left;
        y=e.clientY - rect.top;
        herramienta.setPos(x, y);
        herramienta.setEstado(true);
    });

    canvas.addEventListener('mousemove', function(e){
        
        let xFin = e.clientX - rect.left;
        let yFin = e.clientY - rect.top;

        if (herramienta.estaDibujando()) {
            herramienta.dibujar(xFin, yFin);
            herramienta.setPos(xFin, yFin);
        }
    });

    canvas.addEventListener('mouseup', function(e){
        herramienta.setEstado(false);
    });