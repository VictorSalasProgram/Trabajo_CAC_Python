// let botonCalcular = document.getElementById("boton-calcular");
// let botonBorrar = document.getElementById("boton-borrar")
// let formNombre = document.getElementById("form-name")
// let formCorreo = document.getElementById("form-correo")
// let formServicio1 = document.getElementById("select")
// let formServicio2 = document.getElementById("select2")
// let formCheck = document.getElementById("flexCheckDefault")
// let inputMonto = document.getElementById("input-monto")

// //SE VA 
// botonCalcular.onclick = popCalcular;
// botonBorrar.onclick = borrarCampos;

// function popCalcular() {
//     if (formNombre.value != "") {
//         if (formCorreo.value != "") {
//             if (formCheck.checked === true) {
//                 formNombre.setAttribute("disabled", "true")
//                 formCorreo.setAttribute("disabled", "true")
//                 formServicio1.setAttribute("disabled", "true")
//                 formServicio2.setAttribute("disabled", "true")
//                 formCheck.setAttribute("disabled", "true")
//                 inputMonto.value = "Aca va el monto"
//                 alert("Calculando cotizacion")
//             }
//             else {
//                 alert("ACEPTE LOS TERMINOS Y CONDICIONES")
//             }


//         }
//         else {
//             alert("INGRESE CORREO")
//         }

//     }
//     else {
//         alert("INGRESE NOMBRE")
//     }
// }

// function borrarCampos() {
//     formCorreo.value = "";
//     formNombre.value = "";
//     formCorreo.removeAttribute("disabled")
//     formNombre.removeAttribute("disabled")
//     formServicio1.removeAttribute("disabled")
//     formServicio2.removeAttribute("disabled")
//     formCheck.removeAttribute("disabled")
//     inputMonto.value = ""
// }

document.getElementById('miFormulario').addEventListener('submit', function (event) {
    event.preventDefault();

    var empleados = document.getElementById('empleados').value;
    var servicio = document.getElementById('servicio').value;
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var empresa = document.getElementById('empresa').value;

    if (servicio !== "") {
        var cotizacion = empleados * 5000;
        document.getElementById('resultado').innerHTML =
            "Nombre: " + nombre + "<br>" +
            "Correo: " + correo + "<br>" +
            "Empresa: " + empresa + "<br>" +
            "Cantidad de empleados: " + empleados + "<br>" +
            "Servicio seleccionado: " + servicio + "<br>" +
            "Cotización: $" + cotizacion;
    } else {
        document.getElementById('resultado').innerHTML = "Por favor, selecciona un servicio.";
    }
});