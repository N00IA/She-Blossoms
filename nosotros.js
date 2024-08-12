let team = [
    { //1
        name: 'Dania Lopez',
        position:'Backend developer',
        img: '/Assets/Assets/Dania.jpg', 
        description: 'Ingeniera física con experiencia en análisis de datos y manejo de bases de datos, actualmente participando como backend developer en el proyecto She Blossoms. Combina su sólida formación técnica con habilidades en desarrollo backend para crear soluciones eficientes y escalables.',  

    }, 
    { //2
        name: 'Pao Flores',
        position:'DevOps',
        img: 'Assets/Assets/Pao.jpg', 
        description: 'Soy ingeniera petrolera recién egresada de ESIA IPN con una sólida formación en análisis técnico y resolución de problemas. Mi experiencia en el campo de la ingeniería petrolera me ha dotado de habilidades analíticas y una comprensión profunda de sistemas complejos.',

    },
    { //3
        name: 'Liz Estrada',
        position:'Backend developer',
        img: 'Assets/Assets/Liz.jpg', 
        description: 'Soy Lizbet Estrada M, tengo 27 años pasante de Ing Sistemas y Comunicaciones de UAEM Valle de México, radicó en el Estado de México, en entorno laboral tengo experiencia en Soporte Técnico.',

    },
    { //4
        name: 'Anayelli Zayas',
        position:'QA engineer',
        img: 'Assets/Assets/Anayelli.jpg', 
        description: 'Licenciada en Relaciones Comerciales, con interés en el desarrollo del ecommerce y en dar soluciones funcionales. Apasionada por alentar a las emprendedoras y al  proyecto impulsando nuestra marca y compromiso con el cliente.',

    },
    { //5
        name: 'Mafer Trujillo',
        position:'Project Manager',
        img: 'Assets/Assets/Mafer.jpg', 
        description: 'Soy una desarrolladora web de 29 años radicada en la Ciudad de México. Estudié Pedagogía en la UNAM,  además de  3 años de la licenciatura en la Gerencia de Servicios de Salud. Actualmente, colaboro en el proyecto de She Blossoms, donde combino mi experiencia y pasión por la tecnología para crear soluciones digitales innovadoras.',

    },
    { //6
        name: 'Janice García',
        position:'Front end developer',
        img: 'Assets/Assets/Janice.jpg', 
        description: 'Pasante de ingeniería en sistemas computacionales de ESCOM IPN. En su poca experiencia ha tenido acercamientos en maquetación de interfaces con Figma y a través de frameworks como Angular y Bootstrap. Enfocada en el diseño y desarrollo web.',

    },
    { //7
        name: 'Selene Matínez',
        position:'UX-UI',
        img: 'Assets/Assets/Selene.jpg', 
        description: 'Apasionada en crear proyectos que visualmente atraigan y transmitan emociones al usuario, soy la encargada del área del diseño por mis conocimientos en el área creativa.Me gusta ayudar a mis compañeras en  comprender sus puntos débiles y desarrollar soluciones para una mejor experiencia de uso de plataformas y comunicación.',

    },
    { //8
        name: 'Valeria Barbet',
        position:'Front end developer',
        img: 'Assets/Assets/Valeria.jpg', 
        description: 'Es una mujer con experiencia de 4 años y medio  en atención al cliente bilingüe. Teniendo como segundo idioma el inglés.Estudió la mitad de la carrera de comunicación en la U.N.A.M y es parte del equipo de desarrollo en front-end en She blossoms.',

    },
    { //9
        name: 'Monse',
        position:'',
        img: 'Assets/Assets/Monse.jpg', 
        description: '',

    },
    
];

//contenedor donde se muestran las card
const cardJS = document.getElementById('card2');

//Funcion para crear un card de usuario
function crearCard(user) {
    const card = document.createElement('div');
    card.classList.add('card');
    
    card.innerHTML = `
        <img src="${user.img}" alt="${user.name}">
        <h2>${user.name}</h2>
        <p>${user.position}</p>
        <p>${user.description}</p>
    `;

    return card;
};

team.forEach((usuario) => {
    const card = crearCard(usuario);
    cardJS.appendChild(card);
});