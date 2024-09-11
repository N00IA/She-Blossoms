// Este es el contenido de pagos.js
document.addEventListener("DOMContentLoaded", function() {
    const pagarButton = document.querySelector('.pagar');
    
    pagarButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        const campos = document.querySelectorAll('.pagos-inner input');
        let todosLlenos = true;
        
        campos.forEach(campo => {
            if (campo.value.trim() === '') {
                todosLlenos = false;
                campo.classList.add('error');
            } else {
                campo.classList.remove('error');
            }
        });
        
        if (todosLlenos) {
            alert('Formulario enviado correctamente!');
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });
});
