class Moneda extends Obstaculo {

    constructor() {
        super();
        this.element = document.createElement("div");
        this.element.classList.add("moneda");
        this.active = true;
        document.getElementById("contenedor").appendChild(this.element);
        this.element.addEventListener("animationend", () => this.pop());
    }
}