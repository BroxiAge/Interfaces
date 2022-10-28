class Personaje {

    constructor() {
        this.element;
    }

    status() {
        return this.element.getBoundingClientRect();
    }
}