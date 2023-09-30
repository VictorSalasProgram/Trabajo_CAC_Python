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


botonCalcular.onclick= popCalcular;
botonBorrar.onclick = borrarCampos;
botonPagar.onclick =pagar;

function popCalcular(){
    if(formNombre.value != ""){
        if(formCorreo.value != ""){
            if(formCheck.checked === true){
                alert("Calculando cotizacion a nombre de " + formNombre.value)
                seccionPagar.style.display = "block";
                formNombre.setAttribute("disabled", "true")
                formCorreo.setAttribute("disabled", "true")
                formServicio1.setAttribute("disabled", "true")
                formServicio2.setAttribute("disabled", "true")
                formCheck.setAttribute("disabled", "true")
                inputMonto.value = "Aca va el monto"
                
                
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
    formCorreo.value = "";
    formNombre.value = "";
    formCorreo.removeAttribute("disabled")
    formNombre.removeAttribute("disabled")
    formServicio1.removeAttribute("disabled")
    formServicio2.removeAttribute("disabled")
    formCheck.removeAttribute("disabled")
    inputMonto.value= ""
    seccionPagar.style.display = "none";
}

function pagar(){
    alert("¡ "+formNombre.value + " Gracias por comprar nuestros servicios.!")
}
