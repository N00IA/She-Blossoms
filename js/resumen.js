document.addEventListener("DOMContentLoaded", function() {
    // Función para mostrar la fecha actual
    function mostrarFechaActual() {
        const fechaActual = new Date();
        const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
        const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opciones);

        const elementosFecha = document.querySelectorAll('.gracias-por-comprar');
        elementosFecha.forEach(elemento => {
            if (elemento.textContent.includes('(fecha)')) {
                elemento.textContent = fechaFormateada;
            }
        });
    }

    // Función para manejar el clic en "Ver seguimiento"
    function manejarVerSeguimiento() {
        const seguimientoButton = document.querySelector('.ver-seguimiento');
        if (seguimientoButton) {
            seguimientoButton.addEventListener('click', function() {

                // Simula la actualización del estado del pedido
                const estadoPedido = document.querySelector('.tu-pedido-est');
                if (estadoPedido) {
                    estadoPedido.textContent = "Tu pedido ha sido entregado";
                    // se pueden agregar más funcionalidades aquí según sea necesario
                }
            });
        }
    }

    // Llama a las funciones al cargar la página
    mostrarFechaActual();
    manejarVerSeguimiento();
});
