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

// Función para verificar si el email o teléfono ya están registrados
function isUserAlreadyRegistered(email, phone) {
    return users.some(user => user.email === email || user.phone === phone);
}

/*Toralmente robado de chatgpt :'v */
// Función para generar un ID único
function generateUniqueId() {
    // Obtén el timestamp actual en milisegundos
    const timestamp = Date.now();

    // Genera un número aleatorio de 16 caracteres hexadecimales
    const randomPart = Math.random().toString(36).substr(2, 9);

    // Combina ambos para crear un ID único
    const uniqueId = `${timestamp}-${randomPart}`;

    return uniqueId;
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
        // userType = document.querySelector('input[name="userType"]:checked')?.value; // Obtiene el tipo de usuario seleccionado
        const userType = document.getElementById('userType').value; // Obtiene el tipo de usuario seleccionado
        let valid = true;

          // Genera un nuevo ID para el usuario usando generateUniqueId
          const newId = generateUniqueId();

        const newUser = {
            id: newId,
            name: name,
            phone: phone,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            userType: userType // Agrega el tipo de usuario al nuevo objeto
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


        // Validación para verificar si el usuario ya está registrado
        if (isUserAlreadyRegistered(email, phone)) {
            showAlert('Ya existe un usuario con ese email o número de teléfono.', 'danger');
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
