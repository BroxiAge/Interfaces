class Runner extends Personaje {
    constructor() {
        super();
        this.element = document.getElementById("personaje");
        this.vidas = 3;
        this.correr();
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
        this.element.classList.add("muere");
    }

    removeVida() {
        if (this.vidas <= 3){
            document.getElementById("vida" + this.vidas).style.visibility = "hidden";
            this.vidas --;
        }
    }

    addVida() {
        console.log("entre")
        if(this.vidas > 0 && this.vidas < 4){
            this.vidas++;
            document.getElementById("vida" + this.vidas).style.visibility = "visible";
        }
    }

    sinVida(){
        if (this.vidas === 0)
        return true;
    }
}