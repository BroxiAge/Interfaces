    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext("2d");
    var rect = canvas.getBoundingClientRect(); 

    /* Herramientas */

    herramienta = new Lapiz(ctx,0,0); //Creo la primera instancia como lapiz para que inicie dibujando.

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

    /* Movimientos del mouse */

    canvas.addEventListener('mousedown', function(e){
        const x=e.clientX - rect.left;
        const y=e.clientY - rect.top;
        
        herramienta.iniciarDibujo(x, y);
    });

    canvas.addEventListener('mousemove', function(e){
        
        let xFin = e.clientX - rect.left;
        let yFin = e.clientY - rect.top;

        if (herramienta.estaDibujando()) {
            herramienta.dibujar(xFin, yFin);
        }
    });

    canvas.addEventListener('mouseup', function(e){
        
        herramienta.finalizarDibujo();
    });

    /* Eventos de imagen */

    let imagen = new Imagen(ctx, canvas.width, canvas.height);

    document.getElementById('inp').addEventListener('change', (e) =>{
        imagen.cargarImagen(e.target); //hace referencia al elemento en html que disparo el evento
    })

    document.getElementById("blur").addEventListener('click', (e) => {
        imagen.setBlur();
    });
 