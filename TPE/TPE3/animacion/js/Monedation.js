class Monedation extends Obstaculo {

    constructor() {
        super();
        this.element = document.createElement("div");
        this.element.classList.add("monedation");
        this.active = true;
        document.getElementById("contenedor").appendChild(this.element);
        this.element.addEventListener("animationend", () => this.pop());
    }

    esEnemigo() {
        if (this.element.classList.contains('monedation')) {
            return "monedation"
        }
    }
}