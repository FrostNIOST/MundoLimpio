let vista = new Vista();
let cliente = new Cliente();
let empresa = new Empresa();
let listaEmpresas = [];

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
    //leer datos del formulario
    let data = vista.getForm("formEmpresa");
    if (data.ok) {
        //consultar datos en la bd
        empresa.register(data, function (res) {
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
                if (data.data.length == 0) {
                    vista.mostrarMensaje(false, 'Usuario o contraseña incorrectos');
                    return;
                }
                //Redirigir a la pantalla correspondiente
                if (data.data[0].tipo == 'cliente') {

                    cliente.setData(data.data[0]);
                    vista.mostrarPlantilla('menuDeUsuario', 'Container');
                    //mostrarMenuUsuario();
                } else {
                    empresa.setData(data.data[0]);
                    vista.mostrarPlantilla('menuDeEmpresa', 'Container');
                    //mostrarMenuEmpresa();
                }
            } else {
                vista.mostrarMensaje(false, 'Error al realizar la consulta en la base de datos');
            }
        });
    }
}

/*function mostrarMenuEmpresa() {
    vista.mostrarPlantilla('menuDeEmpresa', 'Container')
}*/

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
    vista.mostrarPlantilla('solicitarEnvios', 'Container');
    //consultar empresas en la db
    empresa.empresas({}, function (data) {
        if (data.success) {
            listaEmpresas = data.data;
            vista.llenarSelect(listaEmpresas, "id_empresa", "id_empresa", "nombre_empresa");
            //vista.llenarSelectMaterial(listaMaterial, "id_material", "")
        }
    });
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
    vista.mostrarPlantilla('solicitarEnvios', 'Container');
    //consultar empresas en la db
    empresa.empresas({}, function (data) {
        if (data.success) {
            listaEmpresas = data.data;
            vista.llenarSelect(listaEmpresas, "id_empresa", "id_empresa", "nombre_empresa");
            //vista.llenarSelectMaterial(listaMaterial, "id_material", "")
        }
    });
}

function recolectar (){
//leer datos del formulario por parte del usuario tipo cliente
    let data = vista.getForm("formSolicitarEnvio");
    if (data.ok) {
        //consultar datos en la bd
        data.id_cliente = cliente.id_cliente
        cliente.recolectar(data, function (res) {
            //console.log(res)
            if (res.success) {
                /*cliente.recolectarMaterial(data, function (res) {
                    console.log(res)
                    if (res.success) {
                        //mostrarel template correspondiente
                        //vista.mostrarPlantilla('solicitarEnvios', 'Container');
                        //mostrar mensaje de exito
                        vista.mostrarMensaje('Primera parte de la recoleccion hecha');
                    }
                    else {
                        //mostrar mensaje de error
                        vista.mostrarMensaje(
                            false, "Error al crear usuario"
                        );
                    }
                });*/
                vista.mostrarPlantilla('solicitarEnvios', 'Container');
            }
            else {
                //mostrar mensaje de error
                vista.mostrarMensaje(
                    false, "Error al crear solicitar recolección"
                );
            }
        });
    }    

}

/**function recolectarMaterial (){
    //leer datos del formulario por parte del usuario tipo cliente
        let data = vista.getForm("formSolicitarEnvio");
        if (data.ok) {
            //consultar datos en la bd
            cliente.recolectarMaterial(data, function (res) {
                console.log(res)
                if (res.success) {
                    //mostrarel template correspondiente
                    vista.mostrarPlantilla('solicitarEnvios', 'Container');
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
    }*/


function mostrarSolicitudRecolecciones() {
    vista.mostrarPlantilla('RecolecionesSolicitudEmpresa', 'Container')
}

function mostrarHistorialRecoleccion() {
    vista.mostrarPlantilla('RecoleccionDetallesEmpresa', 'Container')
}
