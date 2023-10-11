let botonCalcular = document.getElementById("boton-calcular");
let botonBorrar = document.getElementById("boton-borrar")
let formNombre = document.getElementById("form-name")
let formCorreo = document.getElementById("form-correo")
let formServicio1 = document.getElementById("select")
let formServicio2 = document.getElementById("select2")
let formCheck = document.getElementById("flexCheckDefault")
let inputMonto = document.getElementById("monto")
let seccionPagar = document.getElementById("seccion-pagar")
let botonPagar = document.getElementById("boton-pagar")
let nombrePagar =document.getElementById("nombre-pagar")
let correoPagar = document.getElementById("correo-pagar")
let servicioPagar = document.getElementById("servicio-pagar")
let servicio;

botonCalcular.onclick= popCalcular;
botonBorrar.onclick = borrarCampos;
botonPagar.onclick =pagar;

function popCalcular(){
    if(formNombre.value != ""){
        if(formCorreo.value != ""){
            if(formCheck.checked === true){

                if(formServicio1.value != "Selecciona un servicio"){


                  calcularCotizacion()

                }
                else{
                    alert("SELECCIONE UN SERVICIO")
                }             
                
            }
            else{
                alert("ACEPTE LOS TERMINOS Y CONDICIONES")
            }
          
            
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
    seccionPagar.style.display = "none"
    formCorreo.value = "";
    formNombre.value = "";
    formServicio1.value = "Selecciona un servicio"
    formCorreo.removeAttribute("disabled")
    formNombre.removeAttribute("disabled")
    formServicio1.removeAttribute("disabled")
    formCheck.removeAttribute("disabled")
    botonCalcular.removeAttribute("disabled")
    formCheck.checked = false;
    formNombre.focus()

    ;
}

function pagar(){
    alert("¡ "+formNombre.value + " Gracias por comprar nuestros servicios.!")
    borrarCampos()
}


function servicios(){
    if (formServicio1.value == 1){
        servicio= "Mensual"
    }
    else if (formServicio1.value ==2){
        servicio = "Semestral"
    }
    else if (formServicio1.value== 3){
        servicio = "Anual"
    }
    return servicio;
}
function calcularCotizacion(){
    alert("Calculando cotizacion a nombre de " + formNombre.value)
    seccionPagar.style.display = "block";
    formNombre.setAttribute("disabled", "true")
    formCorreo.setAttribute("disabled", "true")
    formServicio1.setAttribute("disabled", "true")
    formCheck.setAttribute("disabled", "true")
    inputMonto.value = "Aca va el monto"
    nombrePagar.value = formNombre.value
    correoPagar.value = formCorreo.value
    servicioPagar.value = servicios()
    botonCalcular.setAttribute("disabled","true")

}

