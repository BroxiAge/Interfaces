"use strict"
let gameOver = false;
let runner = new Runner();

document.addEventListener('keydown', () => {
    runner.saltar();
});

let enemies = Array();

/* cada 16 milisegundos verifica estado del juego */
const GAME_LOOP = setInterval(gameLoop, 16);



/* cada 1 segundo genera un enemigo */
const GAME_INTERVAL = setInterval(generarEnemigo, 1000);


/**
 * Chequear estado del runner y de los enemigos
 */
function gameLoop() {
    
    for (let i = 0; i < enemies.length; i++) {
        if (enemies[i].isActive() === false) {
            enemies.splice(i,0);
       } else {

            let r = runner.status();
            let e = enemies[i].status();


            if(collition(r, e)) gameOver = true;
        }
    }
    
    if (gameOver) {
        clearInterval(GAME_LOOP);
        clearInterval(GAME_INTERVAL);
    }
}


function generarEnemigo() {
    let enemigo = new Enemigo();
    enemies.push(enemigo);
}

function collition(r, e) {
    console.log(r);
    console.log(e);
} 