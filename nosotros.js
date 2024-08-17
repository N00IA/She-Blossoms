const parrafo = document.querySelector('.parrafo').textContent= 'She - blossom es  un e-commerce dirigido a mujeres emprendedoras que busquen vender sus productos nuevos de cualquier tipo. Las vendedoras pueden crear su propio perfil y mostrar su trabajo; por otro lado, los compradores pueden registrarse  y revisar el contenido mediante las distintas categorías.';
document.querySelector('.mision').textContent='Nuestra misión es crear un espacio inclusivo y accesible donde puedas exhibir y vender tus productos con facilidad, generando así un impacto positivo en tu hogar y comunidad.'
document.querySelector('.vision').textContent='Ser la plataforma de e-commerce más utilizada por mujeres emprendedoras en la CDMX, Edo. Mex, Guadalajara y Puebla; la cual busca posicionarse en el mercado en 5 años. Crear una comunidad y espacio seguro para desenvolver negocios y personalidades con el fin de florecer.'


let team = [
    { //1
        name: 'Dania Lopez',
        position:'Backend developer',
        img: '/She-Blossoms/img/dania.jpeg', 
        description: 'Ingeniera física con experiencia en análisis de datos y manejo de bases de datos, actualmente participando como backend developer en el proyecto She Blossoms. Combina su sólida formación técnica con habilidades en desarrollo backend para crear soluciones eficientes y escalables.',  

    }, 
    { //2
        name: 'Pao Flores',
        position:'DevOps',
        img: '/She-Blossoms/img/pao.jpeg', 
        description: 'Soy ingeniera petrolera recién egresada de ESIA IPN con una sólida formación en análisis técnico y resolución de problemas. Mi experiencia en el campo de la ingeniería petrolera me ha dotado de habilidades analíticas y una comprensión profunda de sistemas complejos.',

    },
    { //4
        name: 'Anayelli Zayas',
        position:'QA engineer',
        img: '/She-Blossoms/img/anayelli.jpeg', 
        description: 'Licenciada en Relaciones Comerciales, con interés en el desarrollo del ecommerce y en dar soluciones funcionales. Apasionada por alentar a las emprendedoras y al  proyecto impulsando nuestra marca y compromiso con el cliente.',

    },
    { //5
        name: 'Mafer Trujillo',
        position:'Project Manager',
        img: '/She-Blossoms/img/mafer.jpeg', 
        description: 'Soy una desarrolladora web de 29 años radicada en la Ciudad de México. Estudié Pedagogía en la UNAM,  además de  3 años de la licenciatura en la Gerencia de Servicios de Salud. Actualmente, colaboro en el proyecto de She Blossoms, donde combino mi experiencia y pasión por la tecnología para crear soluciones digitales innovadoras.',

    },
    { //6
        name: 'Janice García',
        position:'Front end developer',
        img: '/She-Blossoms/img/janice.jpeg', 
        description: 'Pasante de ingeniería en sistemas computacionales de ESCOM IPN. En su poca experiencia ha tenido acercamientos en maquetación de interfaces con Figma y a través de frameworks como Angular y Bootstrap. Enfocada en el diseño y desarrollo web.',

    },
    { //7
        name: 'Selene Matínez',
        position:'UX-UI',
        img: '/She-Blossoms/img/Selene Domestika.jpg', 
        description: 'Apasionada en crear proyectos que visualmente atraigan y transmitan emociones al usuario, soy la encargada del área del diseño por mis conocimientos en el área creativa.Me gusta ayudar a mis compañeras en  comprender sus puntos débiles y desarrollar soluciones para una mejor experiencia de uso de plataformas y comunicación.',

    },
    { //8
        name: 'Valeria Barbet',
        position:'Front end developer',
        img: '/She-Blossoms/img/valeria.jpeg', 
        description: 'Es una mujer con experiencia de 4 años y medio  en atención al cliente bilingüe. Teniendo como segundo idioma el inglés.Estudió la mitad de la carrera de comunicación en la U.N.A.M y es parte del equipo de desarrollo en front-end en She blossoms.',

    },
    { //9
        name: 'Monse',
        position:'Front end developer',
        img: '/She-Blossoms/img/monse.jpg', 
        description: 'Soy apasionada por el desarrollo  web y Licenciada en Derecho, radicó en la Ciudad de México. Activamente colaboró con el equipo de desarrollo en el proyecto “She Blossoms”. Me gusta aprender y compartir mis conocimientos con la finalidad de cumplir la meta deseada.',

    },
    
];

//contenedor donde se muestran las card
const cardJS = document.getElementById('card2');

//Funcion para crear un card de usuario
function crearCard(user) {
    const card = document.createElement('div');
    card.classList.add( 'col-6', 'mb-4');
    
    card.innerHTML = `
        <div class="card row ">
            <div class="cont-imagen">
                <img src="${user.img}" alt="${user.name}" class="card-img-top">
            </div>
            <div class="card-body">
                <h5 class="card-title">${user.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted"><strong>${user.position}</strong></h6>
                <p class="card-text">${user.description}</p>
            </div>
        </div>
    `;

    return card;
};

team.forEach((usuario) => {
    const card = crearCard(usuario);
    cardJS.appendChild(card);
});