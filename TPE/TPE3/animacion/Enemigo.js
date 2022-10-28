class Enemigo extends Personaje {

    constructor() {
        super();
        this.element = document.createElement("div");
        this.element.classList.add("enemigo");
        this.active = true;
        document.getElementById("contenedor").appendChild(this.element);
        this.element.addEventListener("animationend", () => this.pop());
    }

    status() {
          return super.status();
    }

    pop() {
        document.getElementById("contenedor").removeChild(this.element);
        this.active = false;
    }
    isActive() {
        return this.active;
    }
}