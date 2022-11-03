class Bonus extends Obstaculo {

    constructor() {
        super();
        this.element = document.createElement("div");
        this.element.classList.add("bonus");
        this.active = true;
        document.getElementById("contenedor").appendChild(this.element);
        this.element.addEventListener("animationend", () => this.pop());
    }
}