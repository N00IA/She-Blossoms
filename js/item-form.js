$(document).ready(function() {
    $('#productForm').on('submit', function(event) {
        event.preventDefault();
        let isValid = true;
        let alertPlaceholder = $('#alertPlaceholder');
        alertPlaceholder.empty(); 

        
        let image = $('#image').val();
        let title = $('#title').val().trim();
        let price = $('#price').val().trim();
        let description = $('#description').val().trim();

       
        if (!image) {
            showAlert('Debe agregar una imagen.', 'danger');
            isValid = false;
        }
        if (title === '') {
            showAlert('El título es obligatorio.', 'danger');
            isValid = false;
        }
        if (price === '' || isNaN(price) || parseFloat(price) <= 0) {
            showAlert('El precio debe ser un número positivo.', 'danger');
            isValid = false;
        }
        if (description === '') {
            showAlert('La descripción es obligatoria.', 'danger');
            isValid = false;
        }

       // objeto JSON
        if (isValid) {
            let productData = {
                image: image,
                title: title,
                price: parseFloat(price),
                description: description
            };

            console.log(JSON.stringify(productData));
            showAlert('Producto publicado con éxito.', 'success');
        }
    });

    function showAlert(message, type) {
        let alert = `<div class="alert alert-${type} alert-dismissible" role="alert">
                        ${message}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
        $('#alertPlaceholder').append(alert);
    }
});