let botonCalcular = document.getElementById("boton-calcular");
let botonBorrar = document.getElementById("boton-borrar")
let formNombre = document.getElementById("form-name")
let formCorreo = document.getElementById("form-correo")
botonCalcular.onclick= popCalcular;
botonBorrar.onclick = borrarCampos;

function popCalcular(){
    if(formNombre.value != ""){
        if(formCorreo.value != ""){
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
}
