const products = JSON.parse(localStorage.getItem('product')) || [

  { id: 1, name: 'Peluche Capybara', description: 'Capybara almohada térmica', img: 'https://m.media-amazon.com/images/I/81sjyvkKStL.__AC_SX300_SY300_QL70_ML2_.jpg', price: '350', shop: 'Moon' },
  { id: 2, name: 'Cupcakes', description: 'Cupcakes sabor vainilla', img: 'https://scontent.fmex15-1.fna.fbcdn.net/v/t1.18169-9/22853102_355588044868006_1929324473630940193_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ENqV4oaQRcEQ7kNvgEkHPnM&_nc_ht=scontent.fmex15-1.fna&oh=00_AYBYtv0jkiprMfJ-yZUOcq7ifujlzuaeH-2XMlUazIOLrg&oe=66EE1B35', price: '250',shop: 'Moon' },
  { id: 3, name: 'Peluche Langosta', description: 'Peluche térmico para colicos', img: 'https://m.media-amazon.com/images/I/81HfxBV64lL.__AC_SX300_SY300_QL70_ML2_.jpg', price: '650', shop: 'Moon' },
  { id: 4, name: 'Stickers holográficos', description: 'Stickers - Docena', img: 'https://maddysdeco.uy/wp-content/uploads/2023/05/IMG_20230515_113342_861.webp', price: '150', shop: 'Moon' },
  { id: 5, name: 'Chocolates finos', description: 'Caja de 20 piezas', img: 'https://andreacalero.com/wp-content/uploads/2020/02/airbrush_20190712132627.jpg', price: '320', shop: 'Moon' },
  { id: 6, name: 'Libretas con foto personalizadas', description: 'Por pieza', img: 'https://bespokeboxstationery.com/wp-content/uploads/2023/09/custom-made-notebooks.webp', price: '245', shop: 'Moon' },
  { id: 7, name: 'Stickers personalizados', description: 'Por pieza', img: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/d295f675-44a1-4a3d-b3e3-eb6c93c74d19.__CR0,0,300,300_PT0_SX300_V1___.jpg', price: '20', shop: 'Moon' },
  { id: 8, name: 'Fresas con chocolate', description: '¡Deliciosas!', img: 'https://www.floresyapelfloristeria.com.co/186-thickbox_default/fresas-con-chocolate.jpg', price: '150' , shop: 'Moon'},
  { id: 9, name: 'Set de accesorios', description: 'Set de 2 collares y 2 pares de aretes', img: 'https://i.pinimg.com/736x/03/1e/4e/031e4e004d97fa47be03a9cbae97fe57.jpg', price: '650', shop: 'Moon' },
  { id: 10, name: 'Corset cuerina', description: 'Corset cinturón de cuero Gótico', img: 'https://ae-pic-a1.aliexpress-media.com/kf/H9894f864bc764cf0b44127681a89ed97a/Arn-s-de-cuero-Sexy-para-mujer-correa-el-stica-ultraancha-decorativa-con-faldas-y-cierre.jpg_.webp', price: '950', shop: 'Moon' },
  { id: 11, name: 'choco-corazones', description: 'Por docena', img: 'https://scontent.fmex1-6.fna.fbcdn.net/v/t1.6435-9/81755074_791639387979401_6162130265519947776_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=06a7ca&_nc_eui2=AeEQH567q8NCvNcLTYh8n1YCZvgc6OPVGvBm-Bzo49Ua8P3x5l-DW50stoSVr_vXv94HRyd_mUPumkBKyKlMRVn3&_nc_ohc=O32_DI5C1TMQ7kNvgHqz89T&_nc_ht=scontent.fmex1-6.fna&oh=00_AYD4ttIjPVTwlUD5BybVy9ZVEyMdAZyebCgREOYMjuBZ-w&oe=66EDDD0C', price: '220', shop: 'Moon' },
  { id: 12, name: 'Orquideas en maceta', description: 'Símbolo de amor y belleza', img: 'https://cdn03.lolaflora.com/bonnygift/lfp129-1/XL/lfp129-1-8dc1c32ad7b32a2-c224df42.jpg', price: '290', shop: 'Moon' },
];

console.log(products);



//Muestra el formulario para agregar producto

// Función para agregar un producto al array
function addProduct(product) {
products.push(product);
localStorage.setItem('product', JSON.stringify(product));

}

// Función para eliminar un producto del array
function removeProduct(productId) {
const index = products.findIndex(p => p.id === productId);
if (index !== -1) {
    products.splice(index, 1);
    localStorage.removeItem(productId);
    console.log('Se ha eliminado el producto')
}
}

// Función para manejar la eliminación de un producto y la actualización de la vista
function removeProductAndRender(productId) {
removeProduct(productId);
displayProducts();
console.log(products);
}

// Espera a que el contenido del DOM se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
const formContainer = document.getElementById('formContainer');
const showFormButton = document.getElementById('showFormButton');
const productForm = document.getElementById('productForm');
const showDeleteButtons = document.getElementById('showDeleteButtons');

// Muestra los productos inicialmente
displayProducts();

showFormButton.addEventListener('click', function() {
    formContainer.style.display = 'block';
});

showDeleteButtons.addEventListener('click', function() {
    // Alterna la visibilidad de los botones de eliminar
    const deleteButtons = document.querySelectorAll('.deleteButton');
    deleteButtons.forEach(button => {
        button.classList.toggle('show');
    });
});

productForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario y la recarga de la página

    const name = document.getElementById('productName').value;
    const description = document.getElementById('productDescription').value;
    const img = document.getElementById('productImg').value;
    const price = document.getElementById('productPrice').value;
    const shop = document.getElementById('productShop').value;

    const newId = products.length ? Math.max(products.map(p => p.id)) + 1 : 1;

    const newProduct = {
        id: newId,
        name: name,
        description: description,
        img: img,
        price: price,
        shop: shop
    };

    addProduct(newProduct);

    productForm.reset();
    formContainer.style.display = 'none';

    displayProducts();
});
});






// Mostrar productos en la interfaz
function displayProducts() {
const container = document.getElementById("card-container");
container.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevos productos

products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'col-md-3 col-sm-6 mb-4'; // Ajuste para 4 tarjetas por fila

    card.innerHTML = `
        <div class="card">
            <img src="${product.img}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text"><strong>$${product.price}</strong></p>
                <p>Tienda: ${product.shop || 'No disponible'}</p>
          <button class="deleteButton" onclick="removeProductAndRender(${product.id})">Eliminar</button>
            </div>
        </div>
    `;

    container.appendChild(card);
});
}

// Función de inicio
function init() {
displayProducts();

}



// Llamar a la función de inicialización al cargar la página
init();


// Asocia la función al evento click del botón
//document.getElementById('agregar').addEventListener('click', agregarProducto);
//document.getElementById('eliminar').addEventListener('click', agregarProducto);

