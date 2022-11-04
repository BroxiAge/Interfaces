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

    quienSoy() {
        if (this.element.classList.contains('enemigo')) {
            return "enemigo"
        }
        if (this.element.classList.contains('bonus')) {
            return "bonus"
        }
        if (this.element.classList.contains('moneda')) {
            return "moneda"
        }
    }

    accion() {
        this.quienSoy()
    }
}