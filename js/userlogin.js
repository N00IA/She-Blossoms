document.addEventListener("DOMContentLoaded", function() {
    // Simulamos un usuario almacenado previamente en Local Storage
    const storedUser = {
        username: "usuario_prueba",
        password: "contraseña_segura"
    };
    localStorage.setItem("user", JSON.stringify(storedUser));

    const loginForm = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorMsg");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const usernameInput = document.getElementById("username").value;
        const passwordInput = document.getElementById("password").value;

        // Validación de campos vacíos
        if (usernameInput === "" || passwordInput === "") {
            if (usernameInput === "") {
                document.getElementById("username").classList.add("is-invalid");
            }
            if (passwordInput === "") {
                document.getElementById("password").classList.add("is-invalid");
            }
            return;
        } else {
            document.getElementById("username").classList.remove("is-invalid");
            document.getElementById("password").classList.remove("is-invalid");
        }

        // Validación de credenciales
        const userData = JSON.parse(localStorage.getItem("user"));
        if (userData.username === usernameInput && userData.password === passwordInput) {
            // Redirigir a la página de inicio si las credenciales son correctas
            window.location.href = "inicio.html";
        } else {
            // Mostrar mensaje de error si las credenciales son incorrectas
            errorMsg.style.display = "block";
        }
    });
});