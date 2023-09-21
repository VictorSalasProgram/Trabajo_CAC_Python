let botonCalcular = document.getElementById("boton-calcular");
let formNombre = document.getElementById("form-name")
let formCorreo = document.getElementById("form-correo")
botonCalcular.onclick= popCalcular;

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
