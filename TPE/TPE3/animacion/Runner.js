class Runner extends Personaje {

    constructor() {
        super();
        this.element = document.getElementById("personaje");
    }

    status() {
        return super.status();
    }

    correr() {
        this.clean();
        this.element.classList.add("correr"); 
    }

    saltar() {
        if(this.element.classList.contains("correr")) {       
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
        this.element.removeEventListener("animationend", () => {}); 
    }
}