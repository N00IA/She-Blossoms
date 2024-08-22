const products = [

    { id: 1, name: 'Peluche Capybara', description: 'Capybara almohada termica', img: 'https://m.media-amazon.com/images/I/81sjyvkKStL.__AC_SX300_SY300_QL70_ML2_.jpg', price: '$350', shop: 'Moon' },
    { id: 2, name: 'Cupcakes', description: 'Cupcakes sabor vainilla', img: 'https://via.placeholder.com/200', price: '$250' },
    { id: 3, name: 'Peluche Langosta', description: 'Peluche térmico para colicos', img: 'https://m.media-amazon.com/images/I/81HfxBV64lL.__AC_SX300_SY300_QL70_ML2_.jpg', price: '$650', shop: 'Moon' },
    { id: 4, name: 'Stickers holográficos', description: 'Stickers - Docena', img: 'https://via.placeholder.com/200', price: '$150', shop: 'Moon' },
    { id: 5, name: 'Chocolates finos', description: 'Caja de 20 piezas', img: 'https://via.placeholder.com/200', price: '$320', shop: 'Moon' },
    { id: 6, name: 'Libretas con foto personalizadas', description: 'Por pieza', img: 'https://via.placeholder.com/200', price: '$245', shop: 'Moon' },
    { id: 7, name: 'Stickers personalizados', description: 'Por pieza', img: 'https://via.placeholder.com/200', price: '$20', shop: 'Moon' },
    { id: 8, name: 'Fresas con chocolate', description: '¡Deliciosas!', img: 'https://via.placeholder.com/200', price: '$150' , shop: 'Moon'},
    { id: 9, name: 'Set de accesorios', description: 'Set de 2 collares y 2 pares de aretes', img: 'https://via.placeholder.com/200', price: '$650', shop: 'Moon' },
    { id: 10, name: 'Corset cuerina', description: 'Corset cinturón de cuero Gótico', img: 'https://via.placeholder.com/200', price: '$950', shop: 'Moon' },
    { id: 11, name: 'choco-corazones', description: 'Por docena', img: 'https://scontent.fmex1-6.fna.fbcdn.net/v/t1.6435-9/81755074_791639387979401_6162130265519947776_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=06a7ca&_nc_eui2=AeEQH567q8NCvNcLTYh8n1YCZvgc6OPVGvBm-Bzo49Ua8P3x5l-DW50stoSVr_vXv94HRyd_mUPumkBKyKlMRVn3&_nc_ohc=O32_DI5C1TMQ7kNvgHqz89T&_nc_ht=scontent.fmex1-6.fna&oh=00_AYD4ttIjPVTwlUD5BybVy9ZVEyMdAZyebCgREOYMjuBZ-w&oe=66EDDD0C', price: '$220', shop: 'Moon' },
    { id: 12, name: 'Orquideas en maceta', description: 'Símbolo de amor y belleza', img: 'https://verdecora.es/blog/wp-content/uploads/2021/04/orquidea-flor.jpg.webp', price: '$290', shop: 'Moon' },
];





class ItemsController { //Segun el ejemplo :V Oigansss! busqué en gemini esto de ItemsController y me sale esto:
  /*Inicialización innecesaria: La clase ItemsController no es necesaria en este contexto. Puedes eliminar la clase y trabajar directamente con el arreglo products. pero noc*/ 
  /*Janice : :0 no manches.... pues podriamos preguntar a Mar o Zab, si si es muy necesario
  Hasta el momento, de hecho, nos marca error si lo inetentamos implementar :v */
    constructor() {
      this.items = [];
    }
    // Metodos
  }

  
  
  //Funciones
  //Agregar producto
  function agregarProducto(id, nombre, imagen, descripcion) {
    if (!id || !nombre || !imagen || !descripcion) {
      console.error ('Error: faltan parámetros para agregar producto');
      return;
    }
    const nuevoProducto = {
        id,
        name: nombre,
        description: descripcion,  
        img: imagen
    };
    products.push(nuevoProducto);
    console.log('Producto agregado', nuevoProducto);
    displayProducts();
    mostrarProductosEnJSON();
  }
  

//Modificar producto
function modificarProducto (id, nuevoNombre, nuevaImagen, nuevaDescripcion) { 
  const index = products.findIndex (product => product.id === id);
   if (index !== -1) {  
   products [index] = { 
   id, 
   name: nuevoNombre, 
   img: nuevaImagen, 
   description: nuevaDescripcion
   }; console.log("Producto modificado exitosamente"); 
   displayProducts();
   mostrarProductosEnJSON();
   } else { console.log("Producto no encontrado"); } } 

/*Modificar objeto
function modificarProducto (id, name, img, description) {
    if (index >= 0 && id < productos.lenght){
        productos [index] = {name, img, description};
        mostrarProductos();
    }else{
        console.log("Índice no válido");
    }
    }*/
    


//Borrar todos los productos
  function borrarTodosLosProductos (){
    products.length = 0;
    console.log("Todos los productos han sido eliminados");
    displayProducts();
    mostrarProductosEnJSON();
    //mostrarProductos();
  }


  
//Funcion para borrar un producto en especifico
function borrarProducto(id) { 
  const index =  products.findIndex (product => product.id === id); 
  if (index !== -1){
    products.splice(index,1);
    console.log("Producto eliminado");
    displayProducts();
    mostrarProductosEnJSON();
  }else{
    console.log("Producto no encontrado");
  }
}

/*function borrarProducto(index) {
    productos.splice(index, 1);
    renderProductos();
}*/

//otra funcion, a ver si funciona :'T v
function displayProducts(products) {
  const container = document.getElementById('card-container');
  container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos productos

  products.forEach(product => {
      // Crear el elemento de la tarjeta
      const card = document.createElement('div');
      card.className = 'col-md-3 col-sm-6 mb-4'; // Ajuste para 4 tarjetas por fila
      //col-md-3 -> hace que la card tome el tamaño 3/12 del grid cuando md sea un tamaño desde tableta a pc
      //col-sm-6 -> hace que la card tome el tamaño 6/12 del grid cuando sm sea un tamaño tipo telefono

      // Crear el contenido de la tarjeta
      card.innerHTML = `
          <div class="card">
              <img src="${product.img}" class="card-img-top" alt="${product.name}">
              <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text"><strong>$${product.price}</strong></p>
                  <p class="card-text">${product.description}</p>
              </div>
          </div>
      `;

      // Agregar la tarjeta al contenedor
      container.appendChild(card);
  });
}

// Llamar a la función para mostrar los productos al cargar la página
displayProducts(products);


/*
// Función para mostrar las tarjetas
function displayCards(products) {
    const container = document.getElementById('cards-container');
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const img = document.createElement('img');
        img.src = product.img;
        card.appendChild(img);
        
        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';
        
        const title = document.createElement('h3');
        title.textContent = product.name;
        cardContent.appendChild(title);
        
        const description = document.createElement('p');
        description.textContent = product.description;
        cardContent.appendChild(description);
        
        card.appendChild(cardContent);
        container.appendChild(card);
    });
}

// Llamar a la función para mostrar las tarjetas
displayCards(products);



  //Por alguna razon, si se activa, no muestra las cards, IDK :'v
  //export default ItemsController; //Este es el culpable XD

*/


// Mostrar productos en formato JSON
function mostrarProductosEnJSON() {
  const jsonContainer = document.getElementById("json-container");
  jsonContainer.textContent = JSON.stringify(products, null, 2);
}

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
                  <p class="card-text">${product.description}</p>
              </div>
          </div>
      `;

      container.appendChild(card);
  });
}

// Función de inicio
function init() {
  displayProducts();
  mostrarProductosEnJSON();
}

// Llamar a la función de inicialización al cargar la página
init();