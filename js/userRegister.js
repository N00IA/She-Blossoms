const users = JSON.parse(localStorage.getItem('users')) || []; // Carga los usuarios desde localStorage o inicializa con un array vacío

console.log(users);

// Función para agregar un usuario al array
function addUser(user) {
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users)); // Guarda el array actualizado en localStorage
}

// Función para limpiar localStorage
function clearLocalStorage() {
    localStorage.clear(); // O usa localStorage.removeItem('users') si solo quieres eliminar el ítem específico
    console.log('LocalStorage limpiado.');
}

// Función para mostrar alertas
function showAlert(message, type) {
    const alertBox = document.createElement('div');
    alertBox.className = `alert alert-${type}`;
    alertBox.textContent = message;
    document.body.appendChild(alertBox);
    setTimeout(() => alertBox.remove(), 3000); // Elimina la alerta después de 3 segundos
}

// Espera a que el contenido del DOM se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    const userForm = document.getElementById('userForm');
    const clearStorageButton = document.getElementById('clearStorage');

    // Escucha cuando se envíe el formulario
    userForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario y la recarga de la página

        const name = document.getElementById('userName').value;
        const phone = document.getElementById('phoneNumber').value;
        const email = document.getElementById('emailUser').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        let valid = true;

        // Genera un nuevo ID para el usuario
        const newId = users.length ? Math.max(users.map(u => u.id)) + 1 : 1;

        const newUser = {
            id: newId,
            name: name,
            phone: phone,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        };

        // Validación de campos vacíos
        if (!name || !email || !password || !confirmPassword) {
            showAlert('Todos los campos son obligatorios', 'danger');
            return;
        }

        // Validación del email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showAlert('Email no válido.', 'danger');
            valid = false;
        }

        // Validación del número telefónico
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            showAlert('Número de teléfono no válido. Debe tener 10 dígitos.', 'danger');
            valid = false;
        }

        // Validación de contraseñas que coincidan
        if (password !== confirmPassword) {
            showAlert('Las contraseñas no coinciden.', 'danger');
            valid = false;
        }

        // Si todo es válido, se agrega el usuario al array y muestra un mensaje de éxito
        if (valid) {
            console.log('Usuario registrado:', JSON.stringify(newUser));
            showAlert('Registro exitoso.', 'success');
            // Agregamos el usuario al array
            addUser(newUser);
            // Opcional: Mostrar una alerta
            alert('Usuario agregado exitosamente!');
            // Reiniciar el formulario
            userForm.reset();
            // Mostrar el array actualizado en la consola
            console.log(users);
        }
    });

    // Escucha cuando se haga clic en el botón para limpiar localStorage
    clearStorageButton.addEventListener('click', function() {
        clearLocalStorage();
        // También podrías recargar la página o actualizar la interfaz aquí si es necesario
        location.reload(); // Opcional: Recargar la página para reflejar los cambios
    });
});
