class Vista{
    constructor(){
        this.stack[];

    }
    avanzarPantalla(pantalla){
        this.stack.push(pantalla);
        this.mostrarPantalla()
    }

    retrocederPantalla(){
        if (this.stack.length > 1) {
            this.stack.pop();
            let pantalla =  this.stack[this.stack.length - 1];
            this.mostrarPantalla(pantalla);
        }
    }

    mostrarPlantilla(plantilla, destino){
        let dest = document.getElementById(destino);
        dest.innerHTML= '';
        let template = document.getElementById(plantilla);
        if(template){
            let clon = template.content.cloneNode(true);
            dest.appendChild(clon)
        }
    }
}