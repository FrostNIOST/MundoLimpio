class Vista {
    constructor(){

    }
    mostrarPlantilla (plantilla, destino) {
        let dest = document.getElementById(destino);
        dest.innerHTML='';
        let template = document.getElementById(plantilla);
        let clon = template.content.cloneNode(true);        
        dest.appendChild(clon); 
    }
}