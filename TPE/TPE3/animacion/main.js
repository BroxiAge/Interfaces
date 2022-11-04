"use strict"

/* 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 */
/* Jugar 1500 x 700 */
let gameOver = false;
let runner = new Runner();

// Seteo los puntos iniciales, la primera vez.
let score = 0;
document.getElementById('score').innerHTML = "Score: " + score;

document.addEventListener('keydown', () => {
    runner.saltar();
});

let enemies = Array();

/* cada 16 milisegundos verifica estado del juego */
const GAME_LOOP = setInterval(gameLoop, 500);

const GAME_INTERVAL = setInterval(generarObstaculo, 3000);

function gameLoop() {
    
    for (let i = 0; i < enemies.length; i++) {
        if (enemies[i].isActive() === false) {
            enemies.splice(i, 0);
        } else {
            if (runner.collition(enemies[i].status())) {
                runner.accion(enemies[i]);
            }
            if (runner.sinVida()) {
                gameOver = true;
            } 
        }
    }
    if (gameOver) {
        clearInterval(GAME_LOOP);
        clearInterval(GAME_INTERVAL);
        runner.morir();
        endGame();
    }
}

function generarObstaculo() {

    setTimeout(() => {
        let enemigo = new Enemigo();
        enemies.push(enemigo);
    }, (Math.floor(Math.random() * 3) + 1) * 1000).toString 

    setTimeout(() => {
        let bonus = new Bonus();
        enemies.push(bonus);
    }, (Math.floor(Math.random() * 6) + 1) * 12000).toString 

    setTimeout(() => {
        let moneda = new Moneda();
        enemies.push(moneda);
    }, (Math.floor(Math.random() * 6) + 1) * 1000).toString 
}

function endGame() {
    document.getElementById("cielo").style.webkitAnimationPlayState = "paused";
    document.getElementById("piso").style.webkitAnimationPlayState = "paused";
    setTimeout(() => {
        document.getElementById("gameOver").classList.remove("ocultar");
        document.getElementById("personaje").classList.remove("zombie");
    }, "1800")
}

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ganarPuntos() {
    score++;
    document.getElementById('score').innerHTML = "Score: " + score;
}
/* preguntas:
- ¿Como hago para que el al morir el personaje quede en el ultimo frame, no el primero?
*/