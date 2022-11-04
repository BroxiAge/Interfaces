"use strict"
/* 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 */
/* Jugar 1500 x 700 */
let gameOver = false;
let runner = new Runner();

document.addEventListener('keydown', () => {
    runner.saltar();
});

let obstaculos = Array();

const GAME_LOOP = setInterval(gameLoop, 500);

const GAME_INTERVAL = setInterval(generarObstaculo, 3000);

function gameLoop() {
    
    for (let i = 0; i < obstaculos.length; i++) {
        if (obstaculos[i].isActive() === false) {
            obstaculos.splice(i, 0);
        } else {
            if (runner.collition(obstaculos[i].status())) {
                runner.accion(obstaculos[i]);
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
        obstaculos.push(enemigo);
    }, (Math.floor(Math.random() * 3) + 1) * 1000).toString 

    setTimeout(() => {
        let bonus = new Bonus();
        obstaculos.push(bonus);
    }, (Math.floor(Math.random() * 6) + 1) * 12000).toString 

    setTimeout(() => {
        let moneda = new Moneda();
        obstaculos.push(moneda);
    }, (Math.floor(Math.random() * 6) + 1) * 1000).toString 
}

function endGame() {
    document.getElementById("cielo").style.webkitAnimationPlayState = "paused";
    document.getElementById("piso").style.webkitAnimationPlayState = "paused";
    //  let contenedor = document.getElementById("contenedor");
    // obstaculos.forEach(element => {
    //     contenedor.removeChild(element.elemento());
    // });
    setTimeout(() => {
        document.getElementById("gameOver").classList.remove("ocultar");
        document.getElementById("personaje").classList.remove("zombie");
    }, "1800")
    
}

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/* preguntas:
- ¿Como hago para que el al morir el personaje quede en el ultimo frame, no el primero?
*/