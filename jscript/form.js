document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".visit_form");
    const mensaje = document.getElementById("mensaje");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que se recargue
        mensaje.textContent = "¡Enviado!";
    });
});
