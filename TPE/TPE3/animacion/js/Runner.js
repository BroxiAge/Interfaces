class Runner extends Personaje {
    constructor() {
        super();
        this.element = document.getElementById("personaje");
        this.vidas = 3;
        this.correr();
        this.sonidoMoneda = new Audio("./sonidos/mario-bros-coin.mp3");
        this.sonidoCorazon = new Audio("./sonidos/mario-bros-vida.mp3");
        this.sonidoTropiezo = new Audio("./sonidos/pacman-dies.mp3");
        this.sonidoGameOver = new Audio("./sonidos/sad-lose.mp3");
    }

    status() {
        return super.status();
    }

    correr() {
        this.clean();
        this.element.classList.add("correr");
    }

    saltar() {
        if (this.element.classList.contains("correr")) {
            this.clean();

            this.element.classList.add("saltar");



            this.element.addEventListener("animationend", () => {
                this.caer();
            });
        }
    }

    caer() {
        this.clean();
        this.element.classList.add("caer");

        this.element.addEventListener("animationend", () => {
            this.correr();
        });
    }

    clean() {
        this.element.classList.remove("correr");
        this.element.classList.remove("saltar");
        this.element.classList.remove("caer");
        this.element.removeEventListener("animationend", () => { });
    }

    morir() {
        this.clean();
        this.sonidoGameOver.play();
        this.element.classList.add("muere");
    }

    removeVida() {
        console.log("entre removeVida")
        if (this.vidas <= 3) {
            document.getElementById("vida" + this.vidas).style.visibility = "hidden";
            this.vidas--;
        }
    }

    addVida() {
        if (this.vidas > 0 && this.vidas < 4) {
            this.vidas++;
            document.getElementById("vida" + this.vidas).style.visibility = "visible";
        }
    }

    sinVida() {
        if (this.vidas === 0)
            return true;
    }

    accion(obstaculo) {
        if (obstaculo.quienSoy() === 'enemigo') {
            this.sonidoTropiezo.play();
            obstaculo.pop();
            runner.removeVida();
        }
        if (obstaculo.quienSoy() === 'bonus') {
            this.sonidoCorazon.play();
            obstaculo.pop();
            runner.addVida();
        }
        if (obstaculo.quienSoy() === 'moneda') {
            this.sonidoMoneda.play();
            obstaculo.pop();
            ganarPuntos();
        }
    }

    collition(obstaculo) {
        let runner = this.status();
        const isInHoriztonalBounds = runner.x < obstaculo.x + obstaculo.width && runner.x + runner.width > obstaculo.x;
        const isInVerticalBounds = runner.y < obstaculo.y + obstaculo.height && runner.y + runner.height > obstaculo.y;
        const isOverlapping = isInHoriztonalBounds && isInVerticalBounds;
        return isOverlapping;
    }
}