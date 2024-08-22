const products = [
    { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', img: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', img: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Producto 3', description: 'Descripción del producto 3', img: 'https://via.placeholder.com/300' },
    { id: 4, name: 'Producto 4', description: 'Descripción del producto 4', img: 'https://via.placeholder.com/300' },
    { id: 5, name: 'Producto 5', description: 'Descripción del producto 5', img: 'https://via.placeholder.com/300' },
    { id: 6, name: 'Producto 6', description: 'Descripción del producto 6', img: 'https://via.placeholder.com/300' },
    { id: 7, name: 'Producto 7', description: 'Descripción del producto 7', img: 'https://via.placeholder.com/300' },
    { id: 8, name: 'Producto 8', description: 'Descripción del producto 8', img: 'https://via.placeholder.com/300' },
    { id: 9, name: 'Producto 9', description: 'Descripción del producto 9', img: 'https://via.placeholder.com/300' },
    { id: 10, name: 'Producto 10', description: 'Descripción del producto 10', img: 'https://via.placeholder.com/300' }
];

function displayProducts(products) {
    const container = document.getElementById('card-container');
    container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos productos

    products.forEach(product => {
        // Crear el elemento de la tarjeta
        const card = document.createElement('div');
        card.className = 'card';

        // Crear el contenido de la tarjeta
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div class="card-content">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
            </div>
        `;

        // Agregar la tarjeta al contenedor
        container.appendChild(card);
    });
}

// Llamar a la función para mostrar los productos al cargar la página
displayProducts(products);


//Otras funciones

class ItemsController { //Segun el ejemplo :V 
    constructor() {
      this.items = [];
    }
    // Metodos
  }


  //Agregar objeto
  function agregarProducto(id, nombre, imagen, descripcion) {
    const nuevoProducto = {
        id: id,
        name: nombre,
        description: descripcion,  
        img: imagen
    };
    products.push(nuevoProducto);
    console.log('Producto agregado', nuevoProducto);
  }



  //Modificar objeto 
function modificarProducto (id, nuevoNombre, nuevaImagen, nuevaDescripcion) { 
    const index = products.findIndex (product => product.id === id);
     if (index !== -1) {  
     products [index] = { 
     id, 
     name: nuevoNombre, 
     img: nuevaImagen, 
     description: nuevaDescripcion
     }; console.log("Producto modificado exitosamente"); 
     } else { console.log("Producto no encontrado"); } } 



     //Borrar toda la lista
  function borrarTodosLosProductos (){
    products.length = 0;
    console.log("Todos los productos han sido eliminados");
    //mostrarProductos();
  }

  //Funcion para borrar un producto en especifico
function borrarProducto(index) { 
    if (index >= 0 && index < products.length) { products.splice(index, 1); 
      console.log("Producto eliminado"); 
    } else { 
      console.log("Índice no válido");
   }
  }


  export default ItemsController;
  





