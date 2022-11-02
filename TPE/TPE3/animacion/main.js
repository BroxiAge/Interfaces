"use strict"
let gameOver = false;
let runner = new Runner();

document.addEventListener('keydown', () => {
    runner.saltar();
});

let enemies = Array();

/* cada 16 milisegundos verifica estado del juego */
const GAME_LOOP = setInterval(gameLoop, 16);
let intervaloGeneracionEnemigos = 2000; 
let GAME_INTERVAL = setInterval(generarEnemigo, 3000);

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
        endGame();
    }
}

function generarEnemigo() {

    setTimeout(() => {
        let enemigo = new Enemigo();
        enemies.push(enemigo);
      }, (Math.floor(Math.random()*3)+1)*1000).toString //Esto es porque el GAME_INTERVAL me llama cada 3 segundos, luego YO decido cada cuanto generar un enemigo. 
    }

function collition(rect1, rect2) {
    const isInHoriztonalBounds = rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x;
    const isInVerticalBounds = rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y;
    const isOverlapping = isInHoriztonalBounds && isInVerticalBounds;
    return isOverlapping;
}

function endGame(){
    document.getElementById("cielo").style.webkitAnimationPlayState = "paused";
    document.getElementById("piso").style.webkitAnimationPlayState = "paused";
    setTimeout(() => {
        document.getElementById("gameOver").classList.remove("ocultar");
        document.getElementById("personaje").classList.remove("zombie");
      }, "1800")
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
/* preguntas:
- ¿Como hago para que el al morir el personaje quede en el ultimo frame, no el primero?
*/