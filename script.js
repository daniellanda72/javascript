// script.js

// Función que se ejecuta cuando se hace clic en el botón
function mostrarMensaje() {
    const resultado = document.getElementById('resultado');
    resultado.textContent = "¡Has hecho clic en el botón!";
}

// Agregar un evento al botón
const boton = document.getElementById('miBoton');
boton.addEventListener('click', mostrarMensaje);
