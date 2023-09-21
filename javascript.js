let botonCalcular = document.getElementById("boton-calcular");
let botonBorrar = document.getElementById("boton-borrar")
let formNombre = document.getElementById("form-name")
let formCorreo = document.getElementById("form-correo")
let formServicio1 = document.getElementById("select")
let formServicio2 = document.getElementById("select2")
botonCalcular.onclick= popCalcular;
botonBorrar.onclick = borrarCampos;

function popCalcular(){
    if(formNombre.value != ""){
        if(formCorreo.value != ""){
            formNombre.setAttribute("disabled", "true")
            formCorreo.setAttribute("disabled", "true")
            formServicio1.setAttribute("disabled", "true")
            formServicio2.setAttribute("disabled", "true")
            alert("Calculando cotizacion")
            
        }
        else{
            alert("INGRESE CORREO")
        }
        
    }
    else{
        alert("INGRESE NOMBRE")
    }
}

function borrarCampos(){
    formCorreo.value = "";
    formNombre.value = "";
    formCorreo.removeAttribute("disabled")
    formNombre.removeAttribute("disabled")
    formServicio1.removeAttribute("disabled")
    formServicio2.removeAttribute("disabled")
}
