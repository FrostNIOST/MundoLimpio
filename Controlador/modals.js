//-----VENTANAS MODALES-----
// Obtener el modal
var modal = document.getElementById("miModal");

// Obtener el botón que abre el modal
var ExitBtn = document.getElementById("ExitBtn");

// Obtener los botones dentro del modal
var botonAceptar = document.getElementById("botonAceptar");
var botonCancelar = document.getElementById("botonCancelar");

// Cuando se hace clic en el botón, abrir el modal 
ExitBtn.onclick = function () {
    modal.style.display = "block";
}

// Cuando se hace clic en el botón de aceptar, realizar alguna acción (aquí puedes agregar tu lógica)
botonAceptar.onclick = function () {
    // Por ejemplo, podrías mostrar un mensaje de confirmación
    alert("Acción aceptada");
    modal.style.display = "none"; // Cerrar el modal después de la acción
}

// Cuando se hace clic en el botón de cancelar, cerrar el modal
botonCancelar.onclick = function () {
    modal.style.display = "none";
}

// Cuando se hace clic en cualquier parte fuera del modal, cerrarlo
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/*---------------------------------------------------------------------Modificarcontraseña*/
var modalCambiarContrasena = document.getElementById("modalCambiarContrasena");
var btnCambiarContrasena = document.getElementById("btnCambiarContrasena");
var botonConfirmar = document.getElementById ("botonConfirmar");

btnCambiarContrasena.onclick = function () {
    modalCambiarContrasena.style.display = "block";
}

botonConfirmar.onclick = function () {
    alert("Contraseña cambiada");
    modalCambiarContrasena.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalCambiarContrasena) {
        modalCambiarContrasena.style.display = "none";
    }
}

/*-----------------------------------------------------------------------MpdifiCorreo*/

var modalCambiarTelefono = document.getElementById("modalCambiarTelefono");
var btnCambiarTelefono = document.getElementById("btnCambiarTelefono");
var botonConfirmarTelefono = document.getElementById ("botonConfirmarTelefono");

btnCambiarTelefono.onclick = function () {
    modalCambiarTelefono.style.display = "block";
}

botonConfirmarTelefono.onclick = function () {
    alert("Teléfono cambiado, validando datos sobre la existencia del mismo");
    modalCambiarTelefono.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modalCambiarTelefono) {
        modalCambiarTelefono.style.display = "none";
    }
}


/*------------------------------------------------------------------------CambiarNombre*/

var modalCambiarNombre = document.getElementById("modalCambiarNombre");
var btnCambiarNombre = document.getElementById("btnCambiarNombre");
var botonConfirmarNombre = document.getElementById ("botonConfirmarNombre");

btnCambiarNombre.onclick = function () {
    modalCambiarNombre.style.display = "block";
}

botonConfirmarNombre.onclick = function () {
    alert("Teléfono cambiado, validando datos sobre la existencia del mismo");
    modalCambiarNombre.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modalCambiarNombre) {
        modalCambiarNombre.style.display = "none";
    }
}