class Obstaculo extends Personaje {

    constructor() {
        super();
    }

    pop() {
        document.getElementById("contenedor").removeChild(this.element);
        this.active = false;
    }
    isActive() {
        return this.active;
    }
}