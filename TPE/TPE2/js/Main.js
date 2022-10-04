    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext("2d");
    var rect = canvas.getBoundingClientRect(); 

    let lapiz = new Lapiz(ctx, 0, 0);

    document.getElementById('lapiz').addEventListener('click', (e) =>{
        lapiz.setEstaSeleccionado (true);
    })

    function defColor(c) { 
        if(borrando){
            grosor = 1;
            borrando= false
        }
        color = c;
    }

    document.getElementById("grosor").addEventListener('input', (e) => { 
        lapiz.setGrosor(e.target.value);
    });

    document.getElementById("color").addEventListener('input', (e) => {
        console.log(e.target.value); 
        lapiz.setColor(e.target.value);
    });

    canvas.addEventListener('mousedown', function(e){
        x=e.clientX - rect.left;
        y=e.clientY - rect.top;
        lapiz.setPos(x, y);
        lapiz.setEstado(true);
    });

    canvas.addEventListener('mousemove', function(e){
        
        let xFin = e.clientX - rect.left;
        let yFin = e.clientY - rect.top;

        if (lapiz.estaDibujando()) {
            lapiz.dibujar(xFin, yFin);
            lapiz.setPos(xFin, yFin);
        }
    });

    canvas.addEventListener('mouseup', function(e){
        lapiz.setEstado(false);
    }); 

   /*  function borrar() {
        borrando = true;
        grosor = 30;
        color='white';
    }
 */