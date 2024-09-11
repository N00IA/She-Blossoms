// Array para guardar artículos en el carrito
let cartItems = [];

// Funcion para agregar productos al carrito
function addToCart(product) {
  // Revisar si el producto ya existe en el carrito
  const existingItem = cartItems.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity++; // Aumentar cantidad de producto seleccionado
  } else {
    cartItems.push(product); // Agregar nuevo producto
  }

  // Actualizar vista del carrito (implementation depende de estructura HTML)
  updateCartDisplay();
}

// Funcion para actualizar vista  del carrito  Reemplazar con lógica actual
function updateCartDisplay() {
  // Accede a elementos del HTML que muestran contenido del carrito (cantidad, precio
  const cartQuantityElement = document.getElementById("cartQuantity"); // Reemplazar con ID
  const cartTotalElement = document.getElementById("cartTotal");  // Reemplazar con ID

  // Calcular cantidad total y precio basado en productos del carrito
  let totalQuantity = 0;
  let totalPrice = 0;
  cartItems.forEach(item => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity; 

  });

  // Actualizar elementos en HTML con valores calculados
  cartQuantityElement.textContent = totalQuantity;
  cartTotalElement.textContent = `$${totalPrice.toFixed(2)}`; // Formato de precio con 2 decimales
}

// Funcion para remover productos del carrito (opcional)
function removeFromCart(productId) {
  // Encontrar producto a remover basado en ID
  const itemIndex = cartItems.findIndex(item => item.id === productId);

  if (itemIndex !== -1) {
    cartItems.splice(itemIndex, 1); // Remover producto del array del carrito 
    updateCartDisplay();
  }
}

// Agregar event listeners a "Agregar a botón carrito (si aplica)
const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
addToCartButtons.forEach(button => {
  button.addEventListener("click",   
 () => {
    // Obtener informacion de producto con boton data o elementos cercanos
    const productId = button.dataset.productId; // Assumiendo atributo data-productId 
    const price = parseFloat(button.dataset.price); // Assumiendo atributo data-price
    const product = { id: productId, price: price };
    addToCart(product);
  });
});

// Llamar a updateCartDisplay() en la página para manejar cualquier producto pre-seleccionado
updateCartDisplay();
