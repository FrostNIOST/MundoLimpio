let vista = new Vista();
let cliente = new Cliente();
//let empresa = new Empresa();

window.addEventListener('load', function () {

    vista.mostrarPlantilla('paginaInicio', 'Container');

});


/**function crearUsuario(){
    vista.mostrarPlantilla('loginUsuario', 'Container');
}*/

function mostrarInicioUsuario() {
    vista.mostrarPlantilla('loginUsuario', 'Container');
}


function crearUsuario() {
    //leer datos del formulario
    let data = vista.getForm("formUsuario");
    if (data.ok) {
        //consultar datos en la bd
        cliente.register(data, function (res) {
            console.log(res)
            if (res.success) {
                //mostrarel template correspondiente
                vista.mostrarPlantilla('loginUsuario', 'Container');
                //mostrar mensaje de exito
                vista.mostrarMensaje('Usuario registrado con exito');
            }
            else {
                //mostrar mensaje de error
                vista.mostrarMensaje(
                    false, "Error al crear usuario"
                );
            }
        });
    }
}

function crearEmpresa() {
    vista.mostrarPlantilla('loginEmpresa', 'Container')
}

function mostrarInicioEmpresa() {
    vista.mostrarPlantilla('loginEmpresa', 'Container')
}


function mostrarFormUsuario() {
    vista.mostrarPlantilla('formRegisUsuario', 'Container')
}

function mostrarFormEmpresa() {
    vista.mostrarPlantilla('formularioEmpresa', 'Container')
}

/*function login() {
    //leer datos del formulario
    let data =
        //consultar datos en la bd
        //si existe desplegar ele menu de usuario
        vista.mostrarPlantilla('menuDeUsuario', 'Container')
    //si no existe mostrar mensaje
}*/


function login() {
    let data = vista.getForm('FormLogin');
    if (data.ok) {
        //Validar datos en la tabla clientes o empresas
        cliente.login(data, function (data) {
            if (data.success) {
                if (data.length == 0) {
                    vista.mostrarMensaje(false, 'Usuario o contraseña incorrectos');
                    return;
                }
                //Redirigir a la pantalla correspondiente
                if (data.user.tipo == 'cliente') {
                    const regUsuario = {
                        id_cliente: data.user.id,
                        name: data.user.name
                    };
                    usuario.setData(regUsuario);
                    vista.mostrarPlantilla('menuDeUsuario', 'Container');
                    mostrarMenuUsuario();
                } else {
                    const regEmpresa = {
                        id_empresa: data.user.id,
                        nombre_empresa: data.user.nombre
                    };
                    empresa.setData(regEmpresa);
                    vista.mostrarPlantilla('menuDeEmpresa', 'Container');
                    mostrarMenuEmpresa();
                }
            } else {
                vista.mostrarMensaje(false, 'Error al realizar la consulta en la base de datos');
            }
        });
    }
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
