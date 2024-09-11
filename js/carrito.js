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

  // Actualizar vista del carrito (implementation depends on your HTML structure)
  //updateCartDisplay();
//}

// Funcion para actualizar vista  del carrito  (replace with your actual logic)
/*function updateCartDisplay() {
  // Accede a elementos del HTML que muestran contenido del carrito (cantidad, precio
  const cartQuantityElement = document.getElementById("cartQuantity"); // Replace with actual ID
  const cartTotalElement = document.getElementById("cartTotal");  // Replace with actual ID*/

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
    cartItems.splice(itemIndex, 1); // Remover producto 
 cart array
    updateCartDisplay();
  }
}

// Agregar event listeners a "Agregar a botón carrito (si aplica)
const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
addToCartButtons.forEach(button => {
  button.addEventListener("click",   
 () => {
    // Get product information from button data or nearby elements
    const productId = button.dataset.productId; // Assuming data-productId attribute
    const price = parseFloat(button.dataset.price); // Assuming data-price attribute
    const product = { id: productId, price: price };
    addToCart(product);
  });
});

// Call updateCartDisplay() on page load to handle any pre-filled cart items
updateCartDisplay();