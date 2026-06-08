const btnMensaje = document.getElementById('btnMensaje');
const MensajeClase = document.getElementById('MensajeClase');
const botonesPerfil = document.querySelectorAll('.btnPerfil'); 
const detallePerfil = document.getElementById('detallePerfil');
let contadorDeClicks = 0;

        btnMensaje.addEventListener('click', () => {
    contadorDeClicks++;
    MensajeClase.textContent = `Hola, esta es una alerta de prueba. Has hecho clic ${contadorDeClicks} veces`;
});


botonesPerfil.forEach((boton) => {
    boton.addEventListener('click', () => {
        const perfil = boton.getAttribute('data-perfil');
        detallePerfil.textContent = `Información detallada del perfil: ${perfil}`;
    });
});