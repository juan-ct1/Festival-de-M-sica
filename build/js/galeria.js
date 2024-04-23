document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    navegacionFija();
    crearGaleria();
    scrollnav();
};

function navegacionFija(){
    const barra = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');
    const body = document.querySelector('body');

    window.addEventListener('scroll', function(){

        if(sobreFestival.getBoundingClientRect().bottom < 0){
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        }else{
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
    });
}

function scrollnav(){
    const enlaces = document.querySelectorAll('.nav-p a');

    enlaces.forEach( enlaces=>{
        enlaces.addEventListener('click', function(e){
            e.preventDefault();
            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({behavior: "smooth"});
        });

    });
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
    for(let i =1; i<= 12; i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML= `
                <source srcset="build/img/thumb/${i}.avif" type="imagen/avif">
                <source srcset="build/img/thumb/${i}.webp" type="imagen/webp">
                <img loading="lazy" width="200" heigth="300" src="./build/img/thumb/${i}.webp" alt="vocalista del festival">
           `;

           imagen.onclick =  function(){
               mostrarImagen(i);
           }

           galeria.appendChild(imagen);
        }

        
};

function mostrarImagen(id){
    const imagen = document.createElement('picture');
    imagen.innerHTML= `
            <source srcset="build/img/grande/${id}.avif" type="imagen/avif">
            <source srcset="build/img/grande/${id}.webp" type="imagen/webp">
            <img loading="lazy" width="800" heigth="1000" src="./build/img/grande/${id}.webp" alt="vocalista del festival">
       `;

       //CREAR el overley
       const overley = document.createElement('div');
       overley.appendChild(imagen);
       overley.classList.add('overley');
       overley.onclick = function(){
           const body = document.querySelector('body');
           body.classList.remove('fijar-body');
           overley.remove();   
       }

       //boton de cierre
       const cerrarFotos = document.createElement('p');
       cerrarFotos.textContent = 'X';
       cerrarFotos.classList.add('btn-cerrar');
       cerrarFotos.onclick = function(){
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
 
           overley.remove();
       };

       overley.appendChild(cerrarFotos);

       //anadirlo al overley
       const body = document.querySelector('body');
       body.appendChild(overley);
       body.classList.add('fijar-body');

}