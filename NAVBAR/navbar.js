document.addEventListener("DOMContentLoaded", function() {
    fetch('/NAVBAR/navbar.html') // Asegúrate de que esta ruta sea correcta
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Error al cargar el navbar:', error);
        });
});
