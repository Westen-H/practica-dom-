/*
    Primero declarar la IIFE (para guardar los datos).

    Después crear las variables que la usan.

    Luego capturar el DOM.

    Finalmente:, declarar funciones y llamar a todo.
*/



/*==========================*/
    // #region: IIFE (Datos: imagenes y lista)
/*========================== */
    // Para evitar llenar el ambito global con las variable; esconderlas / encampsular / guardar... las variables dentro de una función IIFE;
const datosProyecto = (function() {
    const imgBanners = [
        {
        id: 1,
        src: 'assets/banner/1.jpg',
        alt: 'Banner uno'
    }, {
        id: 2,
        src: 'assets/banner/2.jpg',
        alt: 'Banner dos'
    }, {
        id: 3,
        src: 'assets/banner/3.jpg',
        alt: 'Banner tres'
    }, {
        id: 4,
        src: 'assets/banner/4.jpg',
        alt: 'Banner cuatro'
    }, {
        id: 5,
        src: 'assets/banner/5.jpg',
        alt: 'Banner cinco'
    }, {
        id: 6,
        src: 'assets/banner/6.jpg',
        alt: 'Banner seis'
    }, {
        id: 7,
        src: 'assets/banner/7.jpg',
        alt: 'Banner siete'
    }, {
        id: 8,
        src: 'assets/banner/8.jpg',
        alt: 'Banner ocho'
    },
    ]
const imgViajes = [
    // Tus 7 imágenes locales
    { id: 1, src: 'assets/viajes/viajes-1.jpg', alt: 'Roma (Italia)' },
    { id: 2, src: 'assets/viajes/viajes-2.jpg', alt: 'París (Francia)' },
    { id: 3, src: 'assets/viajes/viajes-3.jpg', alt: 'Tokyo (Japón)' },
    { id: 4, src: 'assets/viajes/viajes-4.jpg', alt: 'Lima (Perú)' },
    { id: 5, src: 'assets/viajes/viajes-5.jpg', alt: 'Nueva York (EE.UU.)' },
    { id: 6, src: 'assets/viajes/viajes-6.jpg', alt: 'Barcelona (España)' },
    { id: 7, src: 'assets/viajes/viajes-7.jpg', alt: 'Londres (Reino Unido)' },

    // Nuevas imágenes desde Pixabay para completar destinos

    { id: 8, src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60', alt: 'París (Francia)' },
    { id: 9, src: 'https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=800&q=60', alt: 'Tokio (Japón)' },
    { id: 10, src: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=60', alt: 'Nueva York (EE. UU.)' },
    { id: 11, src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60', alt: 'Londres (Reino Unido)' }
];


    const selectDestinosList = [
        { value: '', label: '- Elige un destino -', disabled: true, selected: true },
        { value: 'roma', label: 'Roma (Italia)' },
        { value: 'paris', label: 'París (Francia)' },
        { value: 'tokyo', label: 'Tokyo (Japón)' },
        { value: 'lima', label: 'Lima (Perú)' },
        { value: 'nyc', label: 'Nueva York (EE.UU.)' },
        { value: 'bcn', label: 'Barcelona (España)' },
        { value: 'londres', label: 'Londres (Reino Unido)' },
        { value: 'sydney', label: 'Sídney (Australia)' },
        { value: 'berlin', label: 'Berlín (Alemania)' },
        { value: 'cairo', label: 'El Cairo (Egipto)' },
        { value: 'moscu', label: 'Moscú (Rusia)' },
        { value: 'dubai', label: 'Dubái (EAU)' },
        { value: 'riodejaneiro', label: 'Río de Janeiro (Brasil)' },
        { value: 'beijing', label: 'Beijing (China)' }
    ];

    return {
        getImgRandon1: () => imgBanners,
        getImgRandon2: () => imgViajes, 
        getSelect: () => selectDestinosList
    };
})() //llamarse asi misma;
// #endregion de function IIFE 



            /* VARIABLE */
/* ==========================*/
    //#region:  Acceder a las imagenes y lista y guardar llamada
/* ==========================*/
const arrBanners = datosProyecto.getImgRandon1();
const arrViajes = datosProyecto.getImgRandon2();
const arraySelectList = datosProyecto.getSelect();

//#endregion de variables elementos



            /* CAPTURAR ELEMENTOS DOM */
/* ==========================*/
    //#region:  Capturar nodos/ramas/(etiquetas del HTML)
/* ==========================*/
    // Header / Footer
const elHeader = document.getElementById('main-header');
const elFooter = document.getElementById('main-footer');

    // 1) Banners (capturar la sección completa del banner.).
const elBannerSection = document.getElementById('section-banner');
const elBannerImg = elBannerSection 
    ? elBannerSection.querySelector('.banner-img-container img') : null; // guardar imagen o null si no existe, por siacaso, asi no mper el codigo

    // 2) Recomendados (todos los <article> existentes)
const elRecomendadosSection = document.getElementById('recomendados');
const elRecomendadosContainer = document.getElementById('lista-recomendados');
const elRecomendadosArticles = elRecomendadosContainer
    ? elRecomendadosContainer.querySelectorAll('article') : [] // si no existe creamos [] para luego poder recorrer sin problema;

    // 3) Destinos (sección y el <select> )
const elDestinosSection = document.getElementById('section-destinos')
const elSelectDestinos = document.getElementById('select-destinos')

    // Comprovaciones para comprobar que se ha hecho bien:
console.log({
    elHeader, elFooter, elBannerSection, elBannerImg, elRecomendadosSection,elRecomendadosContainer, elRecomendadosArticles, elDestinosSection, elSelectDestinos
})
//#endregion


            /* FUNCTION */
/*==========================*/
    //#region:  4. FUNCIONES
/*==========================*/

// Función: numero aleatorio
const aleatorio = (max) => Math.floor(Math.random() * max);

    // Función: Pintar banner: de manera aleatorea;
const pintarBanner = () => {
    if (!elBannerImg) {
        return;// por si no exitiera
    }
    if (!arrBanners || !arrBanners.length) {
        return; // si no existe o esta vacio
    }

const idRandom = aleatorio(arrBanners.length);//aleatoreo del array banner
const {src, alt } = arrBanners[idRandom];

// Pinta: añadir src y alt 
elBannerImg.setAttribute('src', src);
elBannerImg.setAttribute('alt', alt)
}

    // Función para: crear los elementos para recomendados y agruparlos en fragment;
const crearContenidoCard = (viaje) => {

        // usar un DocumentFragment para construir la estructura en memoria
    const viajeContenFrag = document.createDocumentFragment();

//(solo imagen + overlay + hover)
    // Crear el contenedor principal de la tarjeta, que será el primer hijo del fragmento
    const card = document.createElement('div');
    card.classList.add('card');

    // elementos de imagen y el overlay
    const divOverlay = document.createElement('div');
    divOverlay.classList.add('card-overlay');

    const viajeImg = document.createElement('img');
    viajeImg.src = viaje.src;
    viajeImg.alt = viaje.alt;
    viajeImg.classList.add('card-image');

    // elementos de los detalle
    const detailsCard = document.createElement('div');
    detailsCard.classList.add('card-details'); 

    const viajeH3 = document.createElement('h3')
    viajeH3.textContent = viaje.titulo ?? `Viaje ${viaje.id}`; // usamos el operador cualescencia nulas
    viajeH3.classList.add('card-title');

    const viajeP = document.createElement('p');
    viajeP.textContent = viaje.texto ?? 'Descripción.';
    viajeP.classList.add('card-text');
    
    
    // Construcción del árbol de nodos dentro del fragmento ; el orden de los 'appendChild' es fundamental.
    detailsCard.appendChild(viajeH3);
    detailsCard.appendChild(viajeP);

    card.appendChild(viajeImg);
    card.appendChild(divOverlay)
    card.appendChild(detailsCard)

// --- NUEVO: texto visible debajo de la card ---
const textoVisible =document.createElement('p');
textoVisible.textContent = viaje.descripcionCorta?? `Explora ${viaje.alt} y descubre nuevas experiencias.`;
textoVisible.classList.add('card-text-visible')


//Crear un párrafo con el mensaje
    const mensajeVisible = document.createElement('p');
    mensajeVisible.textContent = `¡Estos son nuestro viajes más para ti!`; 
    mensajeVisible.classList.add('mensaje-recomendado'); 


    // Añadir el contenedor completo (card) al DocumentFragment
    viajeContenFrag.appendChild(card)
    viajeContenFrag.appendChild(textoVisible);
    viajeContenFrag.appendChild(mensajeVisible);

    // Devolvemos el fragmento con todos los elementos anidados.
    return viajeContenFrag;
}

// Pintar recomendados:
const pintarCards = () => {
    if (!elRecomendadosContainer) {
        return; // por si no existiera
    }
    if (!arrViajes || !arrViajes.length) return; // si no existe o está vacío

    // Limpiar contenedor de recomendados
    elRecomendadosContainer.innerHTML = '';

    // Crear un <article> para cada viaje
    arrViajes.forEach(viaje => {
        // Si no tiene título o texto, poner valores por defecto
        if (!('titulo' in viaje)) {
            viaje.titulo = `Viaje ${viaje.id}`;
        }
        if (!('texto' in viaje)) {
            viaje.texto = 'Descripción:';
        }

        const article = document.createElement('article'); // nuevo artículo
        article.appendChild(crearContenidoCard(viaje)); // añadimos img, h3 y p (manteniendo la estructura del original)
        elRecomendadosContainer.appendChild(article);
    });
};


       // Pintar select:
const pintarDestinos = () => {
    if (!elSelectDestinos) return;
    if (!arraySelectList || !arraySelectList.length) return;
    
    const destinosContenFrag = document.createDocumentFragment();

    arraySelectList.forEach(opcion => {
        const opcionDestino = document.createElement('option');
        opcionDestino.value = opcion.value ?? ''; // si no, pintar ''
        opcionDestino.textContent = opcion.label ?? '';
        if (opcion.disabled) {
            opcionDestino.disabled = true; // placeholder
        }
        if (opcion.selected) {
            opcionDestino.selected = true; // por defecto 
        }
        destinosContenFrag.appendChild(opcionDestino);
    });
      // Limpiar y montar
  elSelectDestinos.innerHTML = '';
  elSelectDestinos.appendChild(destinosContenFrag);

  // Habilitar el <select> cuando ya tiene opciones
  elSelectDestinos.disabled = false;
}


        // footer:
const footer = document.getElementById('main-footer');
const p = document.createElement('p');
p.innerHTML = `&copy; 2025 Mi Empresa, S.L. Todos los derechos reservados.`;




//#endregion de funciones


/* ==========================*/
/* EVENTOS / INVOCACIÓN      */
/* ==========================*/
// garantizar la existencia del html antes de usarlo
document.addEventListener(`DOMContentLoaded`, () => {
    pintarBanner(); // para el banner
    setInterval(pintarBanner, 60000); // para que cambien cada minuto

    pintarCards(); // para las tarjetas de viajes

    pintarDestinos(); // para el select destinos

    footer.appendChild(p);
});





