const btnMensaje = document.getElementById('btnMensaje');
const MensajeClase = document.getElementById('MensajeClase');

let contadorDeClicks = 0;
btnMensaje.addEventListener('click', () => {
    MensajeClase.textContent = 'Hola, esta es una alerta de prueba';
    
    // MensajeClase.textContent = 'Eltexto que quisimos mostrar';
    contadorDeClicks++;
    MensajeClase.textContent = `Has hecho clic ${contadorDeClicks} veces`;
});
