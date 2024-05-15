let vista = new Vista();
let usuario = new Usuario();
//let empresa = new Empresa();

window.addEventListener('load', function() {

    vista.mostrarPlantilla('paginaInicio', 'Container');
    
});


function mostrarInicioUsuario(){
    vista.mostrarPlantilla('loginUsuario', 'Container');
}

function registrarUsuario(){
    let data=vista.getform("formUsuario")
}

function mostrarInicioEmpresa() {
    vista.mostrarPlantilla('loginEmpresa', 'Container')
}

/**function registrarUsuario() {
    vista.mostrarPlantilla('formRegisUsuario', 'Container')
}*/

function registarEmpresa() {
    vista.mostrarPlantilla('formularioEmpresa', 'Container')
}

function login() {
    //leer datos del formlario
    let data= 
    //consultar datos en la bd
    //si existe desplegar ele menu de usuario
    vista.mostrarPlantilla('menuDeUsuario', 'Container')
    //si no existe mostrar mensaje
}




function mostrarMenuEmpresa() {
    vista.mostrarPlantilla('menuDeEmpresa', 'Container')
}

function mostrarEmpresas() {
    vista.mostrarPlantilla('listaEmpresa', 'Container')
}

function mostrarMapa() {
    vista.mostrarPlantilla('mapaLimpio', 'Container')
}

function mostrarCalendario() {
    vista.mostrarPlantilla('calendario', 'Container')
}

function mostrarAprenderReciclar() {
    vista.mostrarPlantilla('aprendeReciclar', 'Container')
}

function mostrarEnvios() {
    vista.mostrarPlantilla('solicitarEnvios', 'Container')
}

function mostrarPerfilUsuario() {
    vista.mostrarPlantilla('perfilUsuario', 'Container');
}

function mostarSobreNosotros() {
    vista.mostrarPlantilla('mundoLimpio', 'Container')
}

function mostrarSoporte() {
    vista.mostrarPlantilla('preguntas', 'Container')
}

function mostrarConfig() {
    vista.mostrarPlantilla('configuracion', 'Container')
}

function mostrarFuncionamiento() {
    vista.mostrarPlantilla('funcionamiento', 'Container')
}

function mostrarComoHacerPQR() {
    vista.mostrarPlantilla('comoHacerPqr', 'Container')
}

function mostarDiferenciado() {
    vista.mostrarPlantilla('diferenciado', 'Container')
}

function mostrarPrivacidad() {
    vista.mostrarPlantilla('privacidad', 'Container')
}

function mostrarHistorialEnvios() {
    vista.mostrarPlantilla('historialEnvios', 'Container')
}

function mostarSolicitudEnvios() {
    vista.mostrarPlantilla('solicitarEnvios', 'Container')
}

function mostrarSolicitudRecolecciones() {
    vista.mostrarPlantilla('RecolecionesSolicitudEmpresa', 'Container')
}

function mostrarHistorialRecoleccion() {
    vista.mostrarPlantilla('RecoleccionDetallesEmpresa', 'Container')
}
