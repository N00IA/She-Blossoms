
document.addEventListener("DOMContentLoaded", function () {
    fetch('/NAVBAR/navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el navbar: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error(error);

        });
});
