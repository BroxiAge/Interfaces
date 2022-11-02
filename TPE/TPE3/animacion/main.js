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
const GAME_INTERVAL = setInterval(generarEnemigo, 3000);

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
        runner.morir();
    }
}

function generarEnemigo() {
    let enemigo = new Enemigo();
    enemies.push(enemigo);
}

function collition(rect1, rect2) {
    const isInHoriztonalBounds = rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x;
    const isInVerticalBounds = rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y;
    const isOverlapping = isInHoriztonalBounds && isInVerticalBounds;
    return isOverlapping;
}